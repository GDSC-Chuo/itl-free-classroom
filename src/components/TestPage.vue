<template>
  <div class="hello">
    <div v-for="(classInfo, index) in classInfos" :key="index">
      <h2>{{ classInfo.data.subject }} {{ classInfo.data.classroom }}</h2>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase'
import { collection, query, limit, getDocs } from 'firebase/firestore';

export default {
  name: 'TestPage',
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
