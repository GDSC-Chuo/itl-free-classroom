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
