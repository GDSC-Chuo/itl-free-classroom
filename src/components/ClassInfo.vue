<template>
  <div class=“all”>
    <h1 class="class-info1">授業情報</h1>
    <div class=“class-name”>
      <h2 class=“class-info”>科目名：{{ classDataCopy.subject }}</h2>
      <div class=“recommend”>
        <div class="heart-icon" @click="toggleHeartColor" :style="{ backgroundColor: isHeartRed ? '#FF0000' : '#FFFFFF' }">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" stroke="#FF0000" viewBox="0 0 24 24" width="25" height="25">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <p>{{ classDataCopy.recommendedCount }}</p>
      </div>
    </div>
    <h2 class=“class-info”>担当教員：{{ classDataCopy.teacher }}</h2>
    <h3 class=“class-info”>学期 ：{{ classDataCopy.semester }}</h3>
    <h3 class=“class-info”>
      曜日時限：{{ classDataCopy.day }}{{ classDataCopy.period }}時限
    </h3>
    <div>
      <h3 class=“year”>配当年次</h3>
      <p v-if="classDataCopy['1st year'] && classDataCopy.required" class="year">
        1年次：必修
      </p>
      <p v-else-if="classDataCopy['1st year']" class="year">1年次</p>
      <p v-else class=“year”></p>
      <p v-if="classDataCopy['2nd year'] && classDataCopy.required" class=“year”>
        2年次：必修
      </p>
      <p v-else-if="classDataCopy['2nd year']" class="year">2年次</p>
      <p v-else class=“year”></p>
      <p v-if="classDataCopy['3rd year'] && classDataCopy.required" class="year">
        3年次：必修
      </p>
      <p v-else-if="classDataCopy['3rd year']" class="year">3年次</p>
      <p v-else class=“year”></p>
      <p v-if="classDataCopy['4th year'] && classDataCopy.required" class="year">
        4年次：必修
      </p>
      <p v-else-if="classDataCopy['4th year']" class="year">4年次</p>
      <p v-else class=“year”></p>
    </div>
    <router-link to=“/floor-select” class=“back” @click="goBack">戻る</router-link>
  </div>
</template>
<script>
import { db } from '../firebase'
import { doc, updateDoc, increment } from "firebase/firestore";
export default {
  name: "ClassInfo",
  props: ["id", "classData"],
  data() {
    return {
      isHeartRed: false,
      classDataCopy: JSON.parse(JSON.stringify(this.classData)), // プロパティのコピーを作成
    }
  },
  methods: {
    async toggleHeartColor() {
      const classRef = doc(db, 'class information', this.classDataCopy.id);
      if (this.isHeartRed) {
        this.isHeartRed = false;
        // ドキュメントを更新して、いいねのカウントを1減らす
        const decrement = increment(-1);
        await updateDoc(classRef, { recommendedCount: decrement });
        // 画面上の表示を更新する
        this.classDataCopy.recommendedCount--;
      } else {
        this.isHeartRed = true;
        // ドキュメントを更新して、いいねのカウントを1増やす
        const incrementValue = increment(1);
        await updateDoc(classRef, { recommendedCount: incrementValue });
        // 画面上の表示を更新する
        this.classDataCopy.recommendedCount++;
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.all {
  display: flex;
  flex-direction: column;
  };
.class-info1 {
  display: flex;
  width: 526px;
  height: 149px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-size: 50px;
  font-family: Zen Maru Gothic;
  font-weight: 700;
  margin: 0;
  text-align: center;
}
.class-name {
  display: flex;
  align-items: center;
  justify-content: center;
}
.recommend {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heart-icon {
  border:  2px solid #FF0000;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}
.class-info {
  display: flex;
  width: 515px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-size: 36px;
  font-family: Zen Kaku Gothic Antique;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  text-align: center;
  padding: 5px;
}
.year {
  color: #000;
  font-size: 20px;
  font-family: Zen Kaku Gothic Antique;
  text-align: left;
}
.button-container {
  position: fixed;
  bottom: 200px;
  right: 200px;
}
.back {
  position: absolute;
  right: 25px;
  bottom: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border: 2px solid #747578;
  border-radius: 80px;
  color: #FF0000;
  font-weight: 700;
  font-size: 16px;
  background-color: #fff;
  text-decoration: none;
}
</style>