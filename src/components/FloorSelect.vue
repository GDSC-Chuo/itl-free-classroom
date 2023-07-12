<template>
  <div class="wrapper">
      <div class="title">
        <h1>フロア選択</h1>
        <router-link to="/search-class" class="select">授業を検索</router-link>
      </div>

    <div class="select-area">
      <div class="floor-change">
        <router-link to="/3rd-floor" class="floor-box">3F</router-link>
        <router-link to="/4th-floor" class="floor-box">4F</router-link>
        <router-link to="/5th-floor" class="floor-box">5F</router-link>
        <router-link to="/7th-floor" class="floor-box">7F</router-link>
        <router-link to="/8th-floor" class="floor-box">8F</router-link>
        <router-link to="/9th-floor" class="floor-box">9F</router-link>
        <router-link to="/10th-floor" class="floor-box">10F</router-link>
        <router-link to="/11th-floor" class="floor-box">11F</router-link>
        <router-link to="/" class="return-top">Topへ戻る</router-link>
      </div>
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

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
}

h1 {
  margin: 20px;
  font-size: 50px;
  text-align: center;
  color: #3A3B3E;
}

.floor-change {
  /* 折り返し */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

@media screen and (max-width: 922px) {
  .floor-change{
    padding-top: 10px;
  }
}
.floor-box, .return-top {
  position: relative;
  margin: 25px 30px;
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
.return-top {
  font-size: 28px;
}

.floor-box:hover {
  /* opacity: 0.6; */
  background-color: #f5f5f5;
}

.return-top:hover {
  background-color: #f5f5f5;
}

.select{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ff0000;
  color:#ffffff;
  width: 200px;
  height:70px;
  font-weight: 100;
  font-size: 31px;
  border-radius: 80px;
  background-color: hsl(0, 100%, 50%);
  text-decoration: none;
  
  

  text-align: center;


}

.select:hover {
  background-color:#fb9090;
}



/* @media screen and (max-width: 400px) {
  モバイル版対応させたい部分
  * {
    max-width: 300px;
  }
  .wrapper {
    position: absolute;
    overflow: hidden;
  }
} */

</style>
