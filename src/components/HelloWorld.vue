<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <div>
      <div v-for="(classInfo, index) in classInfos" :key="index">
        <h2>{{ classInfo.data.subject }}</h2>
        <p>{{ classInfo.data.classroom }}</p>
        <p>{{ classInfo.data.id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase'
import { collection, query, limit, getDocs } from 'firebase/firestore';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      classInfos: []
    }
  },
  async created() {
    const q = query(collection(db, 'class information'), limit(10));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      this.classInfos.push({ id: doc.id, data: doc.data() });
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
