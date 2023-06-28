<template>
  <div :class="{'special-area': isSpecificComponent, 'main-area': !isSpecificComponent}">
    <div class="contents">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      componentToControl: 'SignIn', // 特別なstyleを当てるコンポーネント名
    };
  },
  computed: {
    isSpecificComponent() {
      return this.$route.name === this.componentToControl; // routeNameっていうのは、index.jsで定義しているnameのこと！
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
  top: calc(50% - 45vh);
  left: calc(50% - 45vw);
  width: 90vw;
  height: 90vh;
  background: #FFFFFF;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3A3E3B;
}
.special-area {
  text-align: center;
  position: fixed;
  top: 15%;
  left: 30%;
  width: 40%;
  height: 70%;
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
  padding: 20px;
}
p {
  margin: 0;
}
</style>
