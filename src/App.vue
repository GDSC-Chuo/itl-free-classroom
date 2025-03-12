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
@import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap');

body {
  background-color: #3A3E3B;
  font-family: "Zen Kaku Gothic New", sans-serif;
}

.main-area {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 90vh;
  background: #FFFFFF;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  color: #3A3E3B;
  overflow: auto;
}

.special-area {
  position: absolute;
  text-align: center;
  top: 5vh;
  left: 50%;
  transform: translate(-50%, 0);
  width: 500px;
  height: fit-content;
  background: #FFFFFF;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  color: #3A3E3B;
}

.contents {
  width: calc(100% - 40px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 10px;
}

p {
  margin: 0;
}

/* スマホ版のスタイル */
@media (max-width: 600px) {
  .special-area {
    width: fit-content;
    height: auto;
  }
}
</style>