<template>
  <div class="top-change">
    <p>
      {{  status  }}
    </p>
    <div v-if="success">
      <p>
        あと{{ count }}秒後に自動的にトップ画面へリダイレクトされます。
      </p>
      <router-link to="/top">
        トップ画面へ
      </router-link>
    </div>
  </div>
</template>

<script>
import { emailVerify, reloadAuth } from '@/lib/auth';

export default {
  name: "EmailVerificationPage",
  data() {
    return {
      status: "メールの認証状態を確認しています",
      count: 10,
      timer: null,
      success: false
    }
  },
  mounted() {
    this.emailVerifyAndRedirect()
  },
  methods: {
    async emailVerifyAndRedirect() {
      try {
        const isSuccess = await emailVerify(this.$route.query.oobCode);
        await reloadAuth()

        if (isSuccess) {
          this.success = true
          this.status = "メールの認証が完了しました。"
          this.startCountDown()
        } else {
          this.status = "メールの認証が失敗しました。再度メール認証を行ってください"
        }
      } catch (error) {
        console.log(error)

        switch (error.code) {
          case "auth/expired-action-code":
            this.status = "認証コードの有効期限が切れています。再度メール認証を行ってください"
            break;
          
          case "auth/invalid-action-code":
            this.status = "無効な認証コードです。再度メール認証を行ってください"
            break;

          default:
            this.status = "メールの認証が失敗しました。再度メール認証を行ってください"
            break;
        }
      }
    },
    startCountDown() {
      this.timer = setInterval(() => {
        this.count--;
        if (this.count <= 0) {
          this.autoRedirect();
        }
      }, 1000);
    },
    autoRedirect() {
      clearInterval(this.timer);
      this.$router.push('/top');
    },
    cancelAutoRedirect() {
      clearInterval(this.timer);
    }
  },
  beforeRouteLeave() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.top-change {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.choice-box {
  position: relative;
  margin: 40px 30px;
  width: 400px;
  height: 100px;

  border: 2px solid #747578;
  border-radius: 80px;
  color: #ff0000;
  font-weight: 500;
  font-size: 40px;
  vertical-align: middle;
  background-color: #fff;
  text-decoration: none;

  text-align: center;
  line-height: 100px;
}

.choice-box:hover {
  background-color: #f5f5f5;
}

@media (max-width: 600px) {
  .choice-box {
    width: 200px;
    height: 80px;
    font-size: 24px;
    line-height: 80px;
  }
}
</style>