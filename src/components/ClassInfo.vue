<!-- TODO: デザイン修正、フロアガイドに戻るボタンとフロア選択に戻るボタン追加-->
<template>
  <div >
    <h1>授業情報</h1>

    <h2>科目名：{{ classData.subject }}</h2>
    <h3 v-if="classData.required">【必修科目】</h3>
    <h3 v-else>【選択科目】</h3>
    <h2>担当教員：{{ classData.teacher }}</h2>
    <h3>学期：{{ classData.semester }}</h3>
    

    <div>
      <h3>配当年次</h3>
      <p v-if="classData['1st year'] && classData.required">1年次：必修</p>
      <p v-else-if="classData['1st year']">1年次：可</p>
      <p v-else>1年次：不可</p>

      <p v-if="classData['2nd year'] && classData.required">2年次：必修</p>
      <p v-else-if="classData['2nd year']">2年次：可</p>
      <p v-else>2年次：不可</p>

      <p v-if="classData['3rd year'] && classData.required">3年次：必修</p>
      <p v-else-if="classData['3rd year']">3年次：可</p>
      <p v-else>3年次：不可</p>

      <p v-if="classData['4th year'] && classData.required">4年次：必修</p>
      <p v-else-if="classData['4th year']">4年次:可</p>
      <p v-else>4年次：不可</p>
    </div>
    <div>
      <h3>授業実施日時</h3>
      <p>{{ classData.day }} {{ classData.period }}時限</p>
    </div>
    <router-link to="/floor-select" class="back">フロア選択へ戻る</router-link>
  </div>
</template>

<script>

export default {
  name: 'ClassInfo',
  props: ['id', 'classData']
}
</script>

<style scoped>
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
  color: #ff0000;
  font-weight: 700;
  font-size: 16px;
  background-color: #fff;
  text-decoration: none;
}

</style>