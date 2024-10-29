<template>
  <div class="top-change">
    <router-link to="/floor-select" class="choice-box">空き教室情報</router-link>
    <router-link to="/search-class" class="choice-box">授業情報</router-link>
  </div>
</template>

<script>
export default {
  name: "TopPage",
};
</script>

<style scoped>
.top-change {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: 0;
}

.choice-box {
  position: relative;
  margin: 40px 30px;
  width: 400px;
  height: 100px;

  border: 2px solid #747578;
  border-radius: 80px;
  color: #ff0000;
  font-weight: 500;
  font-size: 40px;
  vertical-align: middle;
  background-color: #fff;
  text-decoration: none;

  text-align: center;
  line-height: 100px;
}

.choice-box:hover {
  background-color: #f5f5f5;
}

@media (max-width: 600px) {
  .choice-box {
    width: 200px;
    height: 80px;
    font-size: 24px;
    line-height: 80px;
  }
}
</style>