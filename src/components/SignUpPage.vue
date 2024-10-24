<template>
    <div>
        <div>
            <h1 class="signup-title">Sign Up</h1>
        </div>

        <form @submit.prevent="validateAndRegister">
            <div class="info">
                <small v-if="validationMessage" style="color: red;">
                    {{ validationMessage }}
                </small>
                <small v-if="confirmMessage" style="color: blue;">
                    {{ confirmMessage }}
                </small>
                <p id="info">

                    <input v-model="email" class="id" type="email" id="signup-id" autocomplete="username"
                        placeholder="メールアドレス" :class="{ 'error': emailError }">
                    <span v-if="emailError" class="error-message">中央大学のメールアドレスで登録してください</span>

                    <input v-model="password1" class="password" type="password" id="signup-password1"
                        autocomplete="current-password" placeholder="パスワード" :class="{ 'error': !passwordsMatch }">

                    <input v-model="password2" class="password" type="password" id="signup-password2"
                        autocomplete="current-password" placeholder="確認用パスワード" :class="{ 'error': !passwordsMatch }">

                    <span v-if="!passwordsMatch" class="error-message">パスワードが一致しません</span>
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

<style>
.signup-title {
    position: relative;
    text-align: center;
    padding-top: 15vh;
    display: inline-block;
    font-size: 40px;
    line-height: 50px
}

.info {
    padding-top: 30px;
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
    display: inline-block;
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
    margin-top: 5vh;
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
    /* ログインボタン最下部からの距離 */
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
</style>

<script>
import { signup } from '@/lib/auth';

export default {
    name: "SignUp",
    data() {
        return {
            email: '',
            password1: '',
            password2: '',
            emailError: false,
            validationMessage: null,
            confirmMessage: null
        };
    },
    computed: {
        passwordsMatch() {
            return this.password1 === this.password2;
        },
    },
    methods: {
        async validateAndRegister() {
            this.emailError = !this.email.endsWith('@g.chuo-u.ac.jp');

            if (!this.passwordsMatch || this.emailError) {
                return;
            }

            try {
                await signup(this.email, this.password1);
                this.confirmMessage = "認証メールを送信しました。メールのリンクからアカウントを有効化してください。"
            } catch (error) {
                console.error(error);

                switch (error.code) {
                    case "auth/email-already-in-use":
                        this.validationMessage = "既にこのメールアドレスは登録されています。"
                        break;
                
                    case "auth/password-does-not-meet-requirements":
                        this.validationMessage = "パスワードの形式が正しくありません。"
                        break;
                    
                    case "auth/user-disabled":
                        this.validationMessage = "このメールアドレスではサインアップができません。別のメールアドレスでお試しください"
                        break;

                    default:
                        this.validationMessage = "サインアップに失敗しました。別のメールアドレスでお試しください"
                        break;
                }
            }
        },
    },
};
</script>