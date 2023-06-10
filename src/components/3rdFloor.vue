<template>
  <div>
    <div class="title">
      <p>3F</p>
    </div>
    <div v-if="currentClass">
      <h2>現在の授業</h2>
      <p>{{ currentClass.name }}</p>
    </div>
    <div v-else>
      <p>該当授業なし</p>
    </div>
    <img src="@/assets/3F.png" alt="3F" >
    <router-link to="/floor-select" class="back">フロア選択へ戻る</router-link>
  </div>
</template>

<script>
import { db } from '../firebase'
import { onSnapshot, collection } from 'firebase/firestore';

export default {
  name: '3rdFloor',
  data() {
    return {
      classes: [],
      periods: [
        { start: '09:00', end: '10:40' },
        { start: '10:50', end: '12:30' },
        { start: '13:20', end: '15:00' },
        { start: '15:10', end: '16:50' },
        { start: '23:00', end: '23:50' },
        { start: '18:50', end: '20:30' },
      ],
    }
  },
  created() {
    const classesRef = collection(db, 'class information');
    onSnapshot(classesRef, (snapshot) => {
      this.classes = snapshot.docs.map((doc) => doc.data());
      console.log(this.classes);
    });
  },
  computed: {
    currentClass() {
      const now = new Date();
      const currentPeriod = this.periods.find((period) => {
        const startTime = new Date(`${now.toISOString().split('T')[0]}T${period.start}`);
        const endTime = new Date(`${now.toISOString().split('T')[0]}T${period.end}`);
        return now >= startTime && now <= endTime;
      });

      if (!currentPeriod) return null;

      const periodIndex = this.periods.indexOf(currentPeriod);
      return this.classes.find((c) => c.period === periodIndex + 1);
    },
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  left: 20px;
  top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border: 2px solid #747578;
  border-radius: 80px;
}
/* titleというdivの中にあるpの設定  */
.title > p {
  color: #ff0000;
  font-weight: 700;
  font-size: 32px;
  margin: 0s;
}
img {
  max-width: calc(90vw - 32px);
  max-height: calc(90vh - 32px);
}
.back {
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border: 2px solid #747578;
  border-radius: 80px;
  color: #ff0000;
  font-weight: 700;
  font-size: 16px;
  background-color: #fff;
  text-decoration: none;
}
/* hoverとは、マウスカーソルを対象物に重ねた時の挙動のこと  */
.back:hover {
  background-color: #f5f5f5;
}
</style>