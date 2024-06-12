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
  position: fixed;
  top: calc(50% - 225px);
  left: calc(50% - 400px);
  width: 800px;
  height: 450px;
  background: #FFFFFF;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3A3E3B;
  overflow: auto;
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
