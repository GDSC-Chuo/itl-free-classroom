<template>
  <div class="wrapper">
    <div class="title">
      <h1>フロア選択</h1>
      <router-link to="/search-class" class="search-class">授業を検索</router-link>
    </div>

    <div class="floor-change">
      <router-link to="/3rd-floor" class="floor-box">3F</router-link>
      <router-link to="/4th-floor" class="floor-box">4F</router-link>
      <router-link to="/5th-floor" class="floor-box">5F</router-link>
      <router-link to="/7th-floor" class="floor-box">7F</router-link>
      <router-link to="/8th-floor" class="floor-box">8F</router-link>
      <router-link to="/9th-floor" class="floor-box">9F</router-link>
      <router-link to="/10th-floor" class="floor-box">10F</router-link>
      <router-link to="/11th-floor" class="floor-box">11F</router-link>
      <router-link to="/top" class="return-top">Top</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloorSelect",
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: 0;
}

.title {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 1vh;
}

h1 {
  margin: 20px 100px 20px;
  font-size: 40px;
  text-align: center;
  color: #3A3B3E;
}

.search-class {
  display: flex;
  align-items: center;
  margin: 20px 100px;
  justify-content: center;
  border: 2px solid #ff0000;
  color: #ffffff;
  width: 200px;
  height: 70px;
  font-weight: 100;
  font-size: 32px;
  border-radius: 80px;
  background-color: hsl(0, 100%, 50%);
  text-decoration: none;
  text-align: center;
}

.search-class:hover {
  background-color: #fb9090;
}

.floor-change {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}


.floor-box,
.return-top {
  position: relative;
  margin: 25px 30px;
  width: 200px;
  height: 100px;

  border: 2px solid #747578;
  border-radius: 80px;
  color: #ff0000;
  font-weight: 500;
  font-size: 48px;
  vertical-align: middle;
  background-color: #fff;
  text-decoration: none;

  text-align: center;
  line-height: 100px;
}

.floor-box:hover {
  background-color: #f5f5f5;
}

.return-top:hover {
  background-color: #f5f5f5;
}

@media (max-width: 1100px) {
  h1 {
    font-size: 32px;
  }

  .floor-box,
  .return-top {
    width: 150px;
    height: 80px;
    font-size: 32px;
    line-height: 80px;
  }

  .search-class {
    width: 180px;
    height: 60px;
    font-size: 24px;
    line-height: 50px;
  }
}

@media (max-width: 600px) {

  .floor-change {
    max-width: 800px;
  }

  .floor-box,
  .return-top {
    width: 100px;
    height: 60px;
    font-size: 24px;
    line-height: 60px;
  }
}
</style>
