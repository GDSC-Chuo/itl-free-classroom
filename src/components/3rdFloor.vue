<template>
  <div class="floor-container">
    <div class="floor-wrap">
      <div class="floor-title">
        <p>3F</p>
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
          <p>現在3Fで実施されている授業はありません。</p>
        </div>
      </div>
    </div>
    <div class="img-and-button">
      <img src="@/assets/3F.png" alt="3F">
      <router-link to="/floor-select" class="floor-back">フロア選択へ戻る</router-link>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase'
import { onSnapshot, collection } from 'firebase/firestore';

export default {
  name: '3rdFloor',
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

      // 時間割、曜日、階数、前期後期で授業情報を絞り込み
      return this.classes.filter((c) => {
        const classroomStr = String(c.classroom);
        return c.period === periodIndex + 1 && c.day === this.currentDay && classroomStr.startsWith('3') && c.semester === '前期';
      });
    },
  }
}
</script>

<style>

.floor-container {
  height: 100%;
}

.container {
  display: flex;
  flex-direction: column;
}

.floor-wrap {
  padding-top: 20px
}

.floor-title {
  padding: 10px 40px;
  border: 2px solid #747578;
  border-radius: 80px;
  width: fit-content;
  background-color: white;
}

/* titleの中にあるpタグの設定  */
.floor-title>p {
  color: #ff0000;
  font-weight: 700;
  font-size: 32px;
  margin: 0s;
}

.floor-info {
  margin-top: 30px;
}

.current-class {
  font-weight: 400;
  font-size: 20px;
  margin: 15px 0;
}

.img-and-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
  position: relative;
}

img {
  max-width: 70%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 100px;
}

.floor-back {
  position: fixed;
  right: 20px;
  bottom: 20px;
  padding: 10px 40px;
  border: 2px solid #747578;
  border-radius: 80px;
  color: #ff0000;
  font-weight: 700;
  font-size: 16px;
  background-color: #fff;
  text-decoration: none;
  z-index: 10;
}

/* hoverとは、マウスカーソルを対象物に重ねた時の挙動のこと  */
.floor-back:hover {
  background-color: #f5f5f5;
}

@media (max-width: 1300px) {
  .floor-info {
    text-align: center;
  }

  .img-and-button {
    margin-top: 30px;

    img {
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 600px) {

  .floor-title {
    padding: 8px 30px;
  }

  .floor-title>p {
    font-size: 24px;
    font-weight: 500;
  }

  .floor-back {
    font-size: 14px;
    font-weight: 500;
  }

  .img-and-button img {
    max-width: 70%;
    margin-bottom: 50px;
  }
}
</style>