<!-- TODO: デザイン修正、ログインする/ログインせずに使うというリンクを用意する -->
<template>
  <div class="home">
    
    <h1> iTL </h1>
    <h1>Free Classroom</h1>

    <div class="name">
      <P><router-link to= '/signin' class="select">sign in</router-link></P>
      <router-link to= '/signup' class="choice">sign up</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<style scoped>

h1{color: #030000;
  font-weight: 700;
  font-size: 32px;
  margin: 0s;}

.select{
  position: relative;
  width: 200px;
  height: 50px;
  border: 2px solid #ff0000;
  border-radius: 30px;
  color: #ff0000;
  font-size: 32px;
  vertical-align: middle;
  background-color: #ffffff;
  text-decoration: none;
  margin:40px ;
  text-align: center;
  display:inline-block;
  line-height:50px

}

.choice{
  position: relative;
  width: 200px;
  height:50px;
  border: 2px solid #ff0000;
  border-radius: 30px;
  color: #ffffff;
  font-size: 32px;
  vertical-align: middle;
  background-color: #ff0000;
  text-decoration: none;
  margin: 40px;
  text-align: center;
  display:inline-block;
  line-height:50px

  
}

</style>