<template>
  <div>
    <div>
      <h1 class="signin-title">Sign in</h1>
    </div>

    <form @submit.prevent="loginUser">
      <div class="info">
        <small v-if="validationMessage" style="color: red;">
          {{ validationMessage }}
        </small>
        <small v-if="unVerified" style="color: blue;">
          {{ unVerified }}
        </small>
        <p id="info">
          <input class="id" type="email" v-model="email" id="signin-id" placeholder="ログインID">
          <input class="password" type="password" v-model="password" id="signin-password" placeholder="パスワード">
        </p>
      </div>
      <div><input type="submit" id="signin-button" class="login" value="ログイン"></div>
    </form>
    <div class="signin-return">
      <router-link to="/" class="return-box">戻る</router-link>
    </div>
  </div>
</template>

<style>
.signin-title {
  position: relative;
  text-align: center;
  padding-top: 20vh;
  display: inline-block;
  font-size: 40px;
  line-height: 50px
}

.signin-id {
  position: relative;
}

.signin-password {
  position: relative;
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
  margin-top: 10vh;
}

.login:hover {
  opacity: .7;
}

.signin-return {
  position: relative;
  text-align: center;
  margin-top: 200px;
  /* ログインボタン最下部からの距離 */
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
      unVerified: null
    };
  },
  methods: {
    async loginUser() {
      try {
        const isVerified = await signin(this.email, this.password);

        if (!isVerified) {
          this.validationMessage = null;
          this.unVerified = "認証メールを送信しました。メールのリンクから認証を行ってください"
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