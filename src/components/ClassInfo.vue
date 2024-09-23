<template>
    <div class=“all”>
        <h1 class="class-info1">授業情報</h1>
        <div class=class-name>
            <h2 class=class-info2>科目名</h2>
            <h2 class=class-info>{{ classDataCopy.subject }}</h2>
        </div>
        <div class=class-name>
            <h2 class=class-info2>担当教員</h2>
            <h2 class=class-info>{{ classDataCopy.teacher }}</h2>
        </div>
        <div class=class-name>
            <h2 class=class-info2>学期</h2>
            <h2 class=class-info>{{ classDataCopy.semester }}</h2>
        </div>
        <div class=class-name>
            <h2 class=class-info2>曜日時限</h2>
            <h2 class=class-info>{{ classDataCopy.day }}{{ classDataCopy.period }}時限</h2>
        </div>
        

        <router-link to=“/floor-select” class=back @click="goBack">戻る</router-link>
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
    height: 149px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    font-size: 50px;
    font-weight: 700;
    margin: 0;
    text-align: center;
}

.class-name {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;
    flex-direction: column;
}

.class-data-title {
    font-weight: bold;
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
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    margin: 0;
    text-align: center;
    padding: 5px;
}

.class-info2 {
    display: flex;
    width: 515px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0;
    text-align: center;
    padding: 5px;
}

.year {
    color: #000;
    font-size: 20px;
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