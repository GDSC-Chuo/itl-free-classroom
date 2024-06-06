<template>
  <div>
    <div>
      <h1 class="signup">Sign Up</h1>
    </div>

    <form @submit.prevent="validateAndRegister">
      <div class="info">
        <p id="info">

          <input v-model="email" class="id" type="email" id="signup-id" autocomplete="username" placeholder="メールアドレス" :class="{ 'error': emailError }">
          <span v-if="emailError" class="error-message">中央大学のメールアドレスで登録してください</span>

          <input v-model="password1" class="password" type="password" id="signup-password1" autocomplete="current-password" placeholder="パスワード" :class="{ 'error': !passwordsMatch }">
          
          <input v-model="password2" class="password" type="password" id="signup-password2" autocomplete="current-password" placeholder="パスワード" :class="{ 'error': !passwordsMatch }">

          <span v-if="!passwordsMatch" class="error-message">パスワードが一致しません</span>
        </p>
      </div>
      <div><input type="submit" id="signup-button" class="register" value="登録" ></div>
    </form>
    <div class="return">
      <router-link to="/" class="return-box">戻る</router-link>
    </div>
  </div>
</template>

<style>
h1 {
  text-align: center;
  padding-top: 10px;
  font-size: 50px;
}

.info {
  /*padding-top: 80px;*/
  margin-left: 10px;
  text-align: center;
}

.id,
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
}

.id {
  margin-bottom: 50px;
}

.password.error,
.id.error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 14px;
  display: block;
  margin-top: 10px;
}

.register {
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

.register:hover {
  opacity: .8;
}

.register:disabled {
  background-color: #FF8888;
  border-color: #FF8888;
}

.return {
  text-align: center;
  margin-top: 50px;
}

.return-box {
  padding: 10px 50px;
  border: 3px solid black;
  border-radius: 30px;
  color: black;
  font-size: 22px;
  vertical-align: middle;
  background-color: none;
  text-decoration: none;
  text-align: center;
}
</style>

<script>
import { app } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password1: '',
      password2: '',
      emailError: false,
    };
  },
  computed: {
    passwordsMatch() {
      return this.password1 === this.password2;
    },
  },
  methods: {
    validateAndRegister() {
      this.emailError = !this.email.endsWith('@g.chuo-u.ac.jp');

      if (!this.passwordsMatch || this.emailError) {
        return;
      }
      
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, this.email, this.password1)
        .then(() => {
          this.$router.push('/floor-select');
        })
        .catch((error) => {
          alert('Failure...(' + error.message + ')');
        });
    },
  },
};
</script>
