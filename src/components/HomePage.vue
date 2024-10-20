<template>
  <div class="home">

    <h1 class="home-title">iTL
      <br>Free Classroom
    </h1>

    <div class="name">
      <P><router-link to='/signin' class="select">sign in</router-link></P>
      <router-link to='/signup' class="choice">sign up</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<style scoped>
h1 {
  color: #030000;
  font-weight: 700;
  font-size: 40px;
}

.home-title {
  margin-top: 100px;
}

.select {
  position: relative;
  width: 200px;
  height: 60px;
  border: 2px solid #ff0000;
  border-radius: 40px;
  color: #ff0000;
  font-size: 40px;
  vertical-align: middle;
  background-color: #ffffff;
  text-decoration: none;
  margin: 30px;
  text-align: center;
  display: inline-block;
  line-height: 50px
}

.choice {
  position: relative;
  width: 200px;
  height: 60px;
  border: 2px solid #ff0000;
  border-radius: 40px;
  color: #ffffff;
  font-size: 40px;
  vertical-align: middle;
  background-color: #ff0000;
  text-decoration: none;
  margin: 30px;
  text-align: center;
  display: inline-block;
  line-height: 50px
}

@media (max-width: 600px) {
  .home-title {
    font-size: 32px;
  }

  .button {
    width: 120px;
    height: 35px;
    font-size: 16px;
    line-height: 35px;
  }
}
</style>