<!-- TODO: デザイン修正、ログインする/ログインせずに使うというリンクを用意する -->
<template>
  <div>
    <h1>  iTL  </h1>
    <h1>Free Classroom</h1>

    <p><router-link to="/3rd-floor" class="select">sign in</router-link></p>
    <p><router-link to="/3rd-floor"  class="select">sign up</router-link></p>
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

.select{position: relative;
  margin: 20px;  /* 間隔 */
  width: 600px;
  height: 300px;

  border: 2px solid #747578;
  border-radius: 80px;
  color: #f6f1f1;
  font-weight: 500;
  font-size: 62px;
  vertical-align: middle;
  background-color: #e50c0c;
  text-decoration: none;

  text-align: center;
  line-height: 150px;

}

</style>