<template>
  <div :class="{ 'special-area': isSpecificComponent, 'main-area': !isSpecificComponent }">
    <div class="contents">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      componentsToControl: ['SignIn', 'SignUp', 'Home'], // 特別なstyleを当てるコンポーネント名の配列
    };
  },
  computed: {
    isSpecificComponent() {
      return this.componentsToControl.includes(this.$route.name); // routeNameがcomponentsToControlに含まれているかをチェック
    },
  },
}
</script>


<style>
body {
  background-color: #3A3E3B;
}

.main-area {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1200px;
    height: 1000px;
    background: #FFFFFF;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #3A3E3B;
    overflow: auto;
}

/* 画面が小さくなったときの調整 */
@media (max-width: 1300px) {
    .main-area {
        width: 90%;
        /* 画面幅の90% */
        height: 80%;
        /* 画面高さの80% */
    }
}

/* スマホ版のスタイル */
@media (max-width: 600px) {
    .main-area {
        width: 95%;
        top: 5%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 5%;
    }
}

.special-area {
  text-align: center;
  position: absolute;
  top: 5vh;
  left: calc(50% - 250px);
  width: 500px;
  height: 550px;
  background: #FFFFFF;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3A3E3B;
}

.contents {
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

p {
  margin: 0;
}
</style>
