<template>
  <div>
    <div>
      <h1 class="signup">Sign Up</h1>
    </div>

    <form @submit.prevent="registerUser">
      <div class="info">
        <p id="info">
          <input v-model="email" class="id" type="email" id="signup-id" autocomplete="username" placeholder="メールアドレス">
          <input v-model="password" class="password" type="password" id="signup-password" autocomplete="current-password"
            placeholder="パスワード">
        </p>
      </div>
      <div><input type="submit" id="signup-button" class="register" value="登録"></div>
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
  padding-top: 80px;
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

.return {
  text-align: center;
  margin-top: 50px;
}

.return-box {
  padding: 10px 50px 10px 50px;
  border: 3px solid white;
  border-radius: 30px;
  color: white;
  font-size: 22px;
  vertical-align: middle;
  background-color: none;
  text-decoration: none;

  text-align: center;
  line-height: 350px;
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
      password: '',
    };
  },
  methods: {
    registerUser() {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, this.email, this.password)
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