<template>
  <div class="component-area">
    <div class="title">
      <p>3F</p>
    </div>
    <img src="@/assets/3F.png" alt="3F" >
  </div>
</template>

<script>

export default {
  name: '3rdFloor'
}
</script>

<style scoped>
.component-area {
}
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
</style>