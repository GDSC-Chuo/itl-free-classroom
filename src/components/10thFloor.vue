<!-- スタイルは全て3thFloor.vueで設定 -->
<template>
  <div class="floor-container">
    <div class="floor-wrap">
      <div class="floor-title">
        <p>10F</p>
      </div>
      <div class="floor-info">
        <div v-if="currentClass && currentClass.length > 0">
          <h2>現在の授業</h2>
          <div v-for="classes in currentClass" :key="classes.id">
            <p class="current-class">
              {{ classes.classroom }}:
              <router-link
                :to="{ name: 'ClassInfo', params: { subject: classes.subject }, query: { classData: JSON.stringify(classes) } }">
                {{ classes.subject }}
              </router-link>
              ({{ classes.teacher }})
            </p>
          </div>
        </div>
        <div v-else>
          <p>現在10Fで実施されている授業はありません。</p>
        </div>
      </div>
    </div>
    <div class="img-and-button">
      <img src="@/assets/10F.png" alt="10F">
      <router-link to="/floor-select" class="floor-back">フロア選択へ戻る</router-link>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase'
import { onSnapshot, collection } from 'firebase/firestore';

export default {
  name: '10thFloor',
  data() {
    return {
      // 授業の情報を保持する配列
      classes: [],
      // 各授業時間の情報を保持する配列。startとendはそれぞれ授業開始時間と終了時間
      periods: [
        { start: '09:00', end: '10:40' },
        { start: '10:50', end: '12:30' },
        { start: '13:20', end: '15:00' },
        { start: '15:10', end: '16:50' },
        { start: '17:00', end: '18:40' },
        { start: '18:50', end: '20:30' },
      ],
    }
  },

  // Firebase から授業情報を取得し、classes 配列に格納する
  created() {
    const classesRef = collection(db, 'class information');
    onSnapshot(classesRef, (snapshot) => {
      this.classes = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });

      if (this.classData) {
        this.classData = this.classes.find(x => x.subject === this.classData.subject) || this.classData;
      }
    });
  },

  computed: {
    currentDay() {
      // 現在の曜日を取得（0（日曜日）から6（土曜日）までの数値）
      const now = new Date();
      const dayIndex = now.getDay();

      // 曜日の数値を日本語の曜日名に変換
      const daysInJapanese = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
      const currentDay = daysInJapanese[dayIndex];
      return currentDay;
    },
    //現在の学期を取得
    currentSemester(){
      const month = new Date().getMonth() + 1;
      return month >= 4 && month <= 8 ? '前期' : '後期';
    },
    currentClass() {
      const now = new Date();
      // 現在の時間がどの授業時間（period）に該当するかを見つける
      const currentPeriod = this.periods.find((period) => {
        const startTime = new Date(`${now.toISOString().split('T')[0]}T${period.start}`);
        const endTime = new Date(`${now.toISOString().split('T')[0]}T${period.end}`);
        return now >= startTime && now <= endTime;
      });
      if (!currentPeriod) return null;
      const periodIndex = this.periods.indexOf(currentPeriod);
      const currentSemester = this.currentSemester;

      // 時間割、曜日、階数、前期後期で授業情報を絞り込み
      return this.classes.filter((c) => {
        const classroomStr = String(c.classroom);
        return c.period === periodIndex + 1 && c.day === this.currentDay && classroomStr.startsWith('10') && c.semester === currentSemester;
      });
    },
  }
}
</script>