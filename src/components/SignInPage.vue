<template>
  <div >
    <div>
      <h1 class="signin">Sign in</h1>
    </div>

    <form>
      <div class="info">
        <p id="info">
          <input class="id" type="email" id="signin-id" placeholder="ログインID">
          <input class="password" type="password" id="signin-password" placeholder="パスワード">
        </p>
      </div>
      <div><input type="submit" id="button" class="login" value="ログイン"></div>
      <div class="return">
        <router-link to="/" class="return-box">戻る</router-link>
      </div>
    </form>
  </div>
</template>

<style>
.login {
  font-size: 22px;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: #FF0000;
  color: white;
  border-color: #FF0000;
  text-align: center;
  margin-top: 120px;
}

.login:hover {
  opacity: .8;
}

</style>


<script>
export default {
  name: 'SignIn'
}

</script>
