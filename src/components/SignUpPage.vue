<template>
  <div>
    <div>
      <h1 class="signin">Sign Up</h1>
    </div>

    <form>
      <div class="info">
        <p id="info">
          <input class="mailAddress" type="email" id="mailAddress" autocomplete="username" placeholder="メールアドレス">
          <input class="password" type="password" id="password" autocomplete="current-password" placeholder="パスワード">
        </p>
      </div>
      <div class="btn"><input type="button" id="register" class="button" value="登録"></div>
      <div class="return">
        <router-link to="/" class="return-box">戻る</router-link>
      </div>
    </form>
  </div>
</template>

<style>
.signin {
  text-align: center;
  padding-top: 10px;
  font-size: 50px;
}

.info {
  padding-top: 80px;
  margin-left: 10px;
  text-align: center;
}

.mailAddress,
.password {
  position: relative;
  font-size: 15px;
  width: 80%;
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

.mailAddress {
  margin-bottom: 50px;
}

.btn {
  text-align: center;
}

.button {
  font-size: 18px;
  width: 250px;
  height: 50px;
  border-radius: 30px;
  background-color: #FF0000;
  color: white;
  border-color: #FF0000;
  text-align: center;
  margin-top: 100px;
}

.return {
  text-align: center;
  height: 40px;
  width: 150px;
  font-size: 18px;
  padding-top: 10px;
  border-radius: 30px;
  background-color: black;
  text-align: center;
  margin-top: 50%;
  margin-left: 50px;
}

.return-box {
  text-decoration: none;
  border-color: 2px solid white;
  color: white;
}

.return:hover {
  color: #747578;
}
</style>

<script>
// import "../firebase.js";
// import 'firebase/auth';
// import { getAuth, createUserWithEmailAndPassword } from '../firebase.js';
// const auth = getAuth();

// export default {
//  data() {
//    return {
//      email: '',
//      password: '',
//    };
//  },
//  mounted() {
//    const registerButton = document.getElementById('register');
//    if (registerButton) {
//      registerButton.addEventListener('click', this.register);
//    }
//  },
//  beforeUnmount() {
//    const registerButton = document.getElementById('register');
//    if (registerButton) {
//      registerButton.removeEventListener('click', this.register);
//    }
//  },
//  methods: {
//    register(event) {
//      event.preventDefault();
//      const mailAddress = document.getElementById('mailAddress').value;
//      const password = document.getElementById('password').value;
//
//      createUserWithEmailAndPassword(auth, mailAddress, password)
//        .catch(function (error) {
//          alert('登録できません（' + error.message + ')');
//        });
      //   .then(() => {
      //     // Successful registration
      //     this.$router.push('/');
      //   })
      // .catch((error) => {
      //   // Failed registration
      //   alert('Registration failed (' + error.message + ')');
      // });
//    },
//  },
//};
</script>