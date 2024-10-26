<template>
  <div class="all">
    <h1 class="classinfo-main">授業情報</h1>
    <div class=class-name>
      <h2 class=classinfo-title>科目名</h2>
      <h2 class=class-info>{{ classDataCopy.subject }}</h2>
    </div>
    <div class=class-name>
      <h2 class=classinfo-title>担当教員</h2>
      <h2 class=class-info>{{ classDataCopy.teacher }}</h2>
    </div>
    <div class=class-name>
      <h2 class=classinfo-title>学期</h2>
      <h2 class=class-info>{{ classDataCopy.semester }}</h2>
    </div>
    <div class=class-name>
      <h2 class=classinfo-title>曜日時限</h2>
      <h2 class=class-info>{{ classDataCopy.day }}{{ classDataCopy.period }}時限</h2>
    </div>

    <div class="back-floor"><button class="back-floor-box" @click="goBack">戻る</button></div>
  </div>
</template>

<script>
export default {
  name: "ClassInfo",
  props: ["id", "classData"],
  data() {
    return {
      isHeartRed: false,
      classDataCopy: JSON.parse(JSON.stringify(this.classData)), // プロパティのコピーを作成
    }
  },
  computed: {
    // クエリパラメータからフロア情報を取得
    floor() {
      return this.$route.query.floor || 'default';
    }
  },
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.back(); // 履歴がある場合は戻る
      } else {
        // 履歴がない場合は、フロア情報を持ってフロア選択ページに遷移
        this.$router.push({ name: 'FloorSelect', query: { floor: this.floor } });
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap');

* {
  font-family: "Zen Kaku Gothic New", sans-serif;
}

.classinfo-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #000;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
}

.class-name {
  display: flex;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
}

.class-data-title {
  font-weight: bold;
}

.class-info {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  margin: 0;
  text-align: center;
  padding: 5px;
}

.classinfo-title {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 0;
  text-align: center;
  padding: 5px;
}

.year {
  color: #000;
  font-size: 20px;
  text-align: left;
}

.button-container {
  position: fixed;
  bottom: 200px;
  right: 200px;
}

.back-floor {
  position: relative;
  text-align: center;
  margin: 50px 0;
}

.back-floor-box {
  position: relative;
  padding: 10px 50px;
  border: 2px solid #747578;
  border-radius: 30px;
  color: #ff0000;
  font-size: 22px;
  vertical-align: middle;
  background-color: white;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}

.back-floor-box:hover {
  background-color: #f5f5f5;
}

@media (max-width: 600px) {
  .classinfo-main {
    font-size: 32px;
  }

  .class-info {
    font-size: 24px;
  }

  .classinfo-title {
    font-size: 24px;
  }

  .back-floor-box {
    font-size: 16px;
    padding: 10px 30px;
  }
}
</style>