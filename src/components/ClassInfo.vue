<template>
    <div class=“all”>
        <h1 class="class-info1">授業情報</h1>
        <div class=“class-name”>
            <h2 class=“class-info”>科目名：{{ classDataCopy.subject }}</h2>
        </div>
        <h2 class=“class-info”>担当教員：{{ classDataCopy.teacher }}</h2>
        <h3 class=“class-info”>学期 ：{{ classDataCopy.semester }}</h3>
        <h3 class=“class-info”>
            曜日時限：{{ classDataCopy.day }}{{ classDataCopy.period }}時限
        </h3>

        <router-link to=“/floor-select” class=“back” @click="goBack">戻る</router-link>
    </div>
</template>
<script>
import { db } from '../firebase'
import { doc, updateDoc, increment } from "firebase/firestore";
export default {
    name: "ClassInfo",
    props: ["id", "classData"],
    data() {
        return {
            isHeartRed: false,
            classDataCopy: JSON.parse(JSON.stringify(this.classData)), // プロパティのコピーを作成
        }
    },
    methods: {
        async toggleHeartColor() {
            const classRef = doc(db, 'class information', this.classDataCopy.id);
            if (this.isHeartRed) {
                this.isHeartRed = false;
                // ドキュメントを更新して、いいねのカウントを1減らす
                const decrement = increment(-1);
                await updateDoc(classRef, { recommendedCount: decrement });
                // 画面上の表示を更新する
                this.classDataCopy.recommendedCount--;
            } else {
                this.isHeartRed = true;
                // ドキュメントを更新して、いいねのカウントを1増やす
                const incrementValue = increment(1);
                await updateDoc(classRef, { recommendedCount: incrementValue });
                // 画面上の表示を更新する
                this.classDataCopy.recommendedCount++;
            }
        },
        goBack() {
            this.$router.go(-1);
        }
    }
};
</script>
<style scoped>
.all {
    display: flex;
    flex-direction: column;
}

.class-info1 {
    display: flex;
    width: 526px;
    height: 149px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    font-size: 50px;
    font-family: Zen Maru Gothic;
    font-weight: 700;
    margin: 0;
    text-align: center;
}

.class-name {
    display: flex;
    align-items: center;
    justify-content: center;
}

.recommend {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.heart-icon {
    border: 2px solid #FF0000;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
}

.class-info {
    display: flex;
    width: 515px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    font-size: 36px;
    font-family: Zen Kaku Gothic Antique;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    text-align: center;
    padding: 5px;
}

.year {
    color: #000;
    font-size: 20px;
    font-family: Zen Kaku Gothic Antique;
    text-align: left;
}

.button-container {
    position: fixed;
    bottom: 200px;
    right: 200px;
}

.back {
    position: absolute;
    right: 25px;
    bottom: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 40px;
    padding-right: 40px;
    border: 2px solid #747578;
    border-radius: 80px;
    color: #FF0000;
    font-weight: 700;
    font-size: 16px;
    background-color: #fff;
    text-decoration: none;
}
</style>