<template>
  <div class="main-area">
    <div class="contents">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  background-color: #3A3E3B;
}
.main-area {
  position: absolute;
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
.contents {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
}
p {
  margin: 0;
}
</style>
