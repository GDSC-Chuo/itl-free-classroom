<template>
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
  opacity: .7;
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