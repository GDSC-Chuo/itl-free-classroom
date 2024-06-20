<template>
  <!-- 元のコード
  <div>
    <div>
      <h1 class="signin">Sign in</h1>
    </div>

    <form @submit.prevent="loginUser">
      <div class="info">
        <p id="info">
          <input class="id" type="email" v-model="email" id="signin-id" placeholder="ログインID">
          <input class="password" type="password" v-model="password" id="signin-password" placeholder="パスワード">
        </p>
      </div>
      <div><input type="submit" id="signin-button" class="login" value="ログイン"></div>
    </form>
    <div class="return">
      <router-link to="/" class="return-box">戻る</router-link>
    </div>
  </div> -->

  <div class="container">
    <div class="content">
      <div>
        <h1 class="signin">Sign in</h1>
      </div>

      <form @submit.prevent="loginUser">
        <div class="info">
          <p id="info">
            <input class="id" type="email" v-model="email" id="signin-id" placeholder="ログインID">
            <input class="password" type="password" v-model="password" id="signin-password" placeholder="パスワード">
          </p>
        </div>
        <div class="button-container">
          <input type="submit" id="signin-button" class="login" value="ログイン">
          <router-link to="/" class="return-box">戻る</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style>/* 元のコード
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
  opacity: .7;
} */

/*20240609add start*/
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 10vh;
  padding: 20px;
  box-sizing: border-box;
}

.content {
  /*background-color: white; */
  /*padding: 0%;*/
  border-radius: 10px;
  /*box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);*/
  text-align: center;
  width: 100%;
  /*max-width: 400px;*/
}

.signin {
  margin-bottom: -20px;
}

.info {
  margin-bottom: 20px;
}

#info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.id {
  font-size: 16px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
}

.password {
  font-size: 16px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.login {
  font-size: 22px;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: #FF0000;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin-top: 40px;
}

.return-box {
  font-size: 22px;
  width: 100px;
  height: 35px;
  border-radius: 30px;
  background-color: #FF0000;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin-top: 40px;
}

.login:hover, .return-box:hover {
  opacity: .7;
}
/*20240609add end*/
</style>

<script>
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    loginUser() {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          console.log("Success!");
          this.$router.push('/floor-select');
        })
        .catch((error) => {
          console.log("Failure...");
          alert('Failure... (' + error.message + ')');
        });
    },
  },
};

</script>