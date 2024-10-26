<template>
  <div>
    <div>
      <h1 class="signup-title">Sign Up</h1>
    </div>

    <form @submit.prevent="validateAndRegister">
      <div class="info">
        <p id="info">
          <input v-model="email" class="mail" type="email" id="signup-id" autocomplete="username" placeholder="メールアドレス"
            :class="{ 'error': emailError }">
          <span v-if="emailError" class="error-message">{{ emailError }}</span>

          <input v-model="password1" class="password" type="password" id="signup-password1"
            autocomplete="current-password" placeholder="パスワード" :class="{ 'error': passwordError || !passwordsMatch }">

          <input v-model="password2" class="password" type="password" id="signup-password2"
            autocomplete="current-password" placeholder="パスワード確認" :class="{ 'error': !passwordsMatch }">

          <span v-if="!passwordsMatch || passwordError" class="error-message">{passwordError}</span>
        </p>
      </div>
      <div>
        <input type="submit" id="signup-button" class="register" value="登録">
      </div>
    </form>
    <div class="return">
      <router-link to="/" class="return-box">戻る</router-link>
    </div>
  </div>
</template>

<style scoped>
.signup-title {
  position: relative;
  text-align: center;
  display: inline-block;
  font-size: 40px;
  line-height: 50px;
  padding: 20px 0;
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

.password.error,
.id.error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 14px;
  display: block;
  margin-bottom: 10px;
  text-align: center;
}

.register {
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
  margin-top: 20px;
}

.register:hover {
  opacity: .8;
}

.register:disabled {
  background-color: #FF8888;
  border-color: #FF8888;
}

.return {
  position: relative;
  text-align: center;
  margin-top: 100px;
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
    margin-top: 60px;
  }
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
      emailError: '',
      passwordError: '',
    };
  },
  computed: {
    passwordsMatch() {
      return this.password1 === this.password2;
    },
  },
  methods: {
    validateAndRegister() {
      this.clearErrors();

      // メアド検証
      if (!this.email.endsWith('@g.chuo-u.ac.jp')) {
        this.emailError = '中央大学のメールアドレスで登録してください';
      }

      // パスワード検証
      if (!this.passwordsMatch) {
        this.passwordError = 'パスワードが一致しません';
      }

      // エラーがある場合は処理を中断
      if (this.emailError || this.passwordError) {
        return;
      }

      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, this.email, this.password1)
        .then(() => {
          this.$router.push('/floor-select');
        })
        .catch((error) => {
          this.handleLoginError(error);
        });
    },
    clearErrors() {
      this.emailError = '';
      this.passwordError = '';
    },
    handleLoginError(error) {
      if (error.code === 'auth/email-already-in-use') {
        this.emailError = 'このメールアドレスは既に使用されています';
      } else if (error.code === 'auth/weak-password') {
        this.passwordError = '6文字以上のパスワードを設定してください';
      } else {
        alert('登録に失敗しました: ' + error.message);
      }
    },
  },
};
</script>