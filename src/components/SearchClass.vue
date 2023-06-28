<!-- TODO: デザイン修正、ログインする/ログインせずに使うというリンクを用意する -->
<template>
  <div class="search-area">
    <div >
      <h1>Class Information</h1>
    </div>
    
    <form @submit.prevent="search">
      <input v-model="searchKeyword" type="text" name="subject" placeholder="Input Information">
      <img src="@/assets/serchpng.png" width="200" height="150" @click="search">
    </form>

    <div v-if="isSearchExecuted">
      <div v-if="searchResults.length">
        <h2>Search Results</h2>
        <ul>
          <li v-for="(result, index) in searchResults" :key="index">
            {{ result.subject }} :  {{ result.teacher }} {{ result.classroom }} {{ result.day }} {{ result.semester }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>{{ searchKeyword }}に一致する検索結果がありません。</p>
      </div>
    </div>

  </div>
</template>
  
  <script>
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default {
  name: 'SearchClass',
  data() {
    return {
      searchKeyword: '',
      searchResults: [],
      isSearchExecuted: false,
    }
  },
  methods: {
    async search() {
      this.searchResults = [];
      try {
        const q = query(collection(db, 'class information'), where('subject', '==', this.searchKeyword),where('teacher', '==', this.searchKeyword));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          this.searchResults.push(doc.data());
        });
      } catch (error) {
        console.error("Error fetching documents: ", error);
        this.searchResults = [];
      } finally {
        this.isSearchExecuted = true;
      }
    },
  },
};
</script>
  
  <style scoped>
  h1 {
    width: 5px; /* 入力フィールドの幅を変更 */
    height: 5px; /* 入力フィールドの高さを変更 */
    text-align: center;
    position: relative; /* 相対位置指定 */
    top: 50px; /* 上方向に50px移動 */
    left: 40px; /* 左方向に20ピクセル移動 */
    
  }
  p {
    position: relative; /* 相対位置指定 */
    top: 50px; /* 上方向に50px移動 */
    
  }
  ::placeholder {
    font-size: 20px; /* プレースホルダーテキストのフォントサイズを変更 */
            
  }
  input[type="text"] {
    width: 500px; /* 入力フィールドの幅を変更 */
    height: 50px; /* 入力フィールドの高さを変更 */
    background-image: url("@/assets/serchpng.png"); /* 画像のパスを指定 */
    background-size: 10%;
    background-position: center;
    padding-left: 40px; /* 画像の左側に余白を設定 */
    border-radius: 10px; /* 入力フィールドの縁取りを丸くする */
    border: 2px solid rgb(198, 195, 195); /* 入力フィールドの縁取りの色を変更 */
    padding: 2px; /* 入力フィールド内の余白を指定 */
    margin: 100px 400px 100px auto;
    position: relative; /* 相対位置指定 */
    top: 50px; /* 上方向に50px移動 */
    left: 120px; /* 左方向に20ピクセル移動 */
           
}
.search-area {
  max-height: 100vh;
  overflow-y: auto; /* スクロールできるようにするよ */
}
  
  </style>