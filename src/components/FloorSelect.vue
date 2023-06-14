<template>
  <!-- <div>
    <h1>フロア選択</h1>
  </div> -->

  <div class="select-area">
    <div class="floorchange">
      <router-link to="/3rd-floor" class="floorbox">3F</router-link>
      <router-link to="/4th-floor" class="floorbox">4F</router-link>
      <router-link to="/5th-floor" class="floorbox">5F</router-link>
      <router-link to="/7th-floor" class="floorbox">7F</router-link>
      <router-link to="/8th-floor" class="floorbox">8F</router-link>
      <router-link to="/9th-floor" class="floorbox">9F</router-link>
      <router-link to="/10th-floor" class="floorbox">10F</router-link>
      <router-link to="/11th-floor" class="floorbox">11F</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloorSelect",
};
</script>

<style scoped>
* {
  overflow: auto;
}

.select-area {
  width: 60vw;
  margin: auto;
}

.floorchange {
  /* 折り返し */
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  text-align: center;
  width: 732px;
  margin: auto;
}

.floorbox {
  position: relative;
  margin: 20px;  /* 間隔 */
  width: 200px;
  height: 100px;

  border: 2px solid #747578;
  border-radius: 80px;
  color: #ff0000;
  font-weight: 500;
  font-size: 62px;
  vertical-align: middle;
  background-color: #fff;
  text-decoration: none;

  text-align: center;
  line-height: 100px;
}

.floorbox:hover {
  opacity: 0.6;
}
</style>
