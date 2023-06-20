<template>
  <div >
    <h1>授業情報</h1>
    <h2>{{ classData.subject }}</h2>
    <h2>教員： 飯尾淳</h2>
    <h3>学期： 前期</h3>
    <div>
      <h3>履修可能学年</h3>
      <p>1年: 必修</p>
      <p>2年: 可</p>
      <p>3年: 不可</p>
      <p>4年</p>
    </div>
    <div>
      <h3>授業実施日時</h3>
      <p>水曜 ４限</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ClassInfo',
  props: ['id', 'classData']
}
</script>

<style scoped>

</style>