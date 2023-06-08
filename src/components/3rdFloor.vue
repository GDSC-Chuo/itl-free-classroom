<template>
  <div>
    <div class="title">
      <p>3F</p>
    </div>
    <img src="@/assets/3F.png" alt="3F" >
    <router-link to="/floor-select" class="back">フロア選択へ戻る</router-link>
  </div>
</template>

<script>

export default {
  name: '3rdFloor'
}
</script>

<style scoped>
.title {
  position: absolute;
  left: 20px;
  top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border: 2px solid #747578;
  border-radius: 80px;
}
/* titleというdivの中にあるpの設定  */
.title > p {
  color: #ff0000;
  font-weight: 700;
  font-size: 32px;
  margin: 0s;
}
img {
  max-width: calc(90vw - 32px);
  max-height: calc(90vh - 32px);
}
.back {
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  border: 2px solid #747578;
  border-radius: 80px;
  color: #ff0000;
  font-weight: 700;
  font-size: 16px;
  background-color: #fff;
  text-decoration: none;
}
/* hoverとは、マウスカーソルを対象物に重ねた時の挙動のこと  */
.back:hover {
  background-color: #f5f5f5;
}
</style>