<!-- TODO: デザイン修正、フロアガイドに戻るボタンとフロア選択に戻るボタン追加-->
<template>
  <div >
    <h1 class="class-info1">授業情報</h1>

    <h2 class="class-info">科目名：{{ classData.subject }}</h2>
    <h2 class="class-info">担当教員：{{ classData.teacher }}</h2>
    <h3 class="class-info">学期：{{ classData.semester }}</h3>
    <h3 class="class-info">曜日時限：{{ classData.day }}{{ classData.period }}時限</h3>
      

    <div>
      <h3 class="year">配当年次</h3>
      <p v-if="classData['1st year'] && classData.required" class="year">1年次：必修</p>
      <p v-else-if="classData['1st year']" class="year">1年次：可</p>
      <p v-else class="year">1年次：不可</p>

      <p v-if="classData['2nd year'] && classData.required" class="year">2年次：必修</p>
      <p v-else-if="classData['2nd year']" class="year">2年次：可</p>
      <p v-else class="year">2年次：不可</p>

      <p v-if="classData['3rd year'] && classData.required" class="year">3年次：必修</p>
      <p v-else-if="classData['3rd year']" class="year">3年次：可</p>
      <p v-else class="year">3年次：不可</p>

      <p v-if="classData['4th year'] && classData.required" class="year">4年次：必修</p>
      <p v-else-if="classData['4th year']" class="year">4年次:可</p>
      <p v-else class="year">4年次：不可</p>
    </div>
    
    <router-link to="/floor-select" class="back">戻る</router-link>
  </div>
</template>

<script>

export default {
  name: 'ClassInfo',
  props: ['id', 'classData']
}
</script>

<style scoped>
.class-info{
display: flex;
width: 515px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #000;
text-align: center;
font-size: 36px;
font-family: Zen Kaku Gothic Antique;
margin: 0;
}

.class-info1{
display: flex;
width: 526px;
height: 149px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: #000;
text-align: center;
font-size: 50px;
font-family: Zen Maru Gothic;
font-weight: 700;
}

.year{
color: #000;
text-align: center;
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
  color: #ff0000;
  font-weight: 700;
  font-size: 16px;
  background-color: #fff;
  text-decoration: none;
}

</style>