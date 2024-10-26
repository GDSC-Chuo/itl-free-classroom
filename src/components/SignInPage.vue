<template>
  <div>
    <div>
      <h1 class="signin-title">Sign in</h1>
    </div>

    <form @submit.prevent="loginUser">
      <div class="info">
        <p id="info">
          <input class="mail" type="email" v-model="email" placeholder="メールアドレス">

          <input class="password" type="password" v-model="password" placeholder="パスワード">
          <span v-if="credentialsError" class="error-message">{{ credentialsError }}</span>
        </p>
      </div>
      <div><input type="submit" id="login" class="login" value="ログイン"></div>
    </form>
    <div class="return">
      <router-link to="/" class="return-box">戻る</router-link>
    </div>
  </div>
</template>

<style scoped>
.signin-title {
  position: relative;
  text-align: center;
  display: inline-block;
  font-size: 40px;
  line-height: 50px
}

.info {
  text-align: center;
}

.mail,
.password {
  position: relative;
  font-size: 20px;
  width: 300px;
  height: 30px;
  display: flex;
  border-radius: 30px;
  gap: 0 .7em;
  margin-bottom: .6em;
  padding: .7em .9em;
  border-color: #747578;
  background-color: white;
  text-align: center;
  display: inline-block;
}

.error-message {
  color: red;
  font-size: 14px;
  display: block;
  text-align: center;
}

.login {
  position: relative;
  font-size: 22px;
  width: 200px;
  height: 50px;
  border-radius: 30px;
  background-color: #FF0000;
  color: white;
  border-color: #FF0000;
  text-align: center;
  display: inline-block;
  margin-top: 50px;
}

.login:hover {
  opacity: .7;
}

.login:disabled {
  background-color: #FF8888;
  border-color: #FF8888;
}

.return {
  position: relative;
  text-align: center;
  margin-top: 150px;
}

.return-box {
  position: relative;
  padding: 10px 50px;
  border: 3px solid white;
  border-radius: 30px;
  color: white;
  font-size: 22px;
  vertical-align: middle;
  background-color: none;
  text-decoration: none;
  text-align: center;
  display: inline-block;
}

@media (max-width: 600px) {

  .mail,
  .password {
    width: 80%;
  }

  .return {
    margin-top: 150px;
  }

  .login {
    margin-top: 20px;
  }
}
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
      credentialsError: '',
    };
  },
  methods: {
    loginUser() {
      this.clearErrors();

      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push('/floor-select');
        })
        .catch((error) => {
          console.log("Failure...");
          this.handleLoginError(error);
        });
    },

    clearErrors() {
      this.credentialsError = '';
    },
    handleLoginError(error) {
      if (error.code === 'auth/invalid-login-credentials') {
        this.credentialsError = 'メールアドレスまたはパスワードが正しくありません';
      } else {
        alert('不明なエラーが発生しました: ' + error.message);
      }
    },
  },
};

</script>