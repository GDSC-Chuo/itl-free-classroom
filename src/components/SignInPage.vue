<template>
  <div class="signin-container">
    <div>
      <h1 class="signin-title">Sign in</h1>
    </div>

    <form @submit.prevent="loginUser">
      <div class="info">
        <small v-if="unVerified" style="color: blue;">
          {{ unVerified }}
        </small>
        <p id="info">
          <input class="mail" type="email" v-model="email" placeholder="メールアドレス">

          <input class="password" type="password" v-model="password" placeholder="パスワード">
          <span v-if="validationMessage" class="error-message">{{ validationMessage }}</span>
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
.signin-container {
  height: 100%;
}

.signin-title {
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
  position: absolute;
  text-align: center;
  left: 50%;
  bottom: -100px;
  transform: translateX(-50%);
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
  margin-bottom: 50px;
  transform: translateY(50%);
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

  .return-box {
    padding: 10px 35px;
  }
}
</style>


<script>
import { signin } from '@/lib/auth';

export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password: '',
      validationMessage: null,
      unVerified: null,
    };
  },
  methods: {
    async loginUser() {
      try {
        const isVerified = await signin(this.email, this.password);

        if (!isVerified) {
          this.validationMessage = null;
          this.unVerified = "認証メールを送信しました。メールのリンクから認証を行ってください"
          return 
        }

        this.$router.push('/floor-select')

      } catch (error) {
        console.error(error)
        
        switch (error.code) {
          case "auth/user-not-found":
            this.validationMessage = "ユーザーが登録されていません。"
            break;
        
          case "auth/invalid-email":
            this.validationMessage = "メールアドレスが正しくありません。"
            break;

          case "auth/wrong-password":
            this.validationMessage = "パスワードが一致しません。"
            break;
          
          case "auth/invalid-credential":
            this.validationMessage = "メールアドレス又はパスワードが異なります。"
            break;
  
          case "auth/too-many-requests":
            this.validationMessage = "認証メールを送信できませんでした。1分後に再度サインインを行い認証メールを送信してください。"
            break;
            
          default:
            this.validationMessage = "サインインに失敗しました。もう一度サインインを行ってください。"
            break;
        }
      }
    },
  },
};

</script>