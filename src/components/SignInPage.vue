<template>
  <div>
    <h1>Sign in</h1>
  </div>

  <form>
    <div class="info">
      <p id="info">
        <input class="login-id" type="email" id="login-id" placeholder="ログインID">
        <sub style="color: red;" class="error-id"></sub>
        <input class="login-password" type="password" id="login-password" placeholder="パスワード">
        <sub style="color: red;" class="error-password"></sub>
      </p>
    </div>
    <div class="btn"><input type="submit" id="button" class="button" value="ログイン"></div>
    <router-link to="/" class="return-box">戻る</router-link>
  </form>
</template>

<style>
* {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  overflow: auto;
}

body {
  background-color: #3A3E3B;
}

.main-area {
  text-align: center;
  position: fixed;
  top: 0 auto;
  left: 0 auto;
  /*top: calc(50% - 45vh);*/
  /*left: calc(50% - 45vw);*/
  width: 700px;
  height: 750px;
  background: #FFFFFF;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3A3E3B;
}

.contents {
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  justify-content: center;
  padding: 20px;
}

.info {
  position: relative;
}

.login-id,
.login-password {
  position: relative;
  font-size: 15px;
  width: 400px;
  height: 30px;
  display: flex;
  border-radius: 30px;
  gap: 0 .7em;
  max-width: 200px;
  margin-bottom: .6em;
  padding: .7em .9em;
  border-color: #747578;
  background-color: white;
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
}

.return-box {
  text-align: center;
  font-size: 18px;
  width: 150px;
  height: 40px;
  border-radius: 30px;
  background-color: black;
  color: white;
  border-color: white;
  text-align: center;
  margin-top: 20px;
  text-decoration: none;
}
</style>

<script>
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);



// import { signInWithEmailAndPassword } from "firebase/auth";
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });


// import { onAuthStateChanged } from "firebase/auth";
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

</script>
