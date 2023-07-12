<!-- TODO: デザイン修正、ログインする/ログインせずに使うというリンクを用意する -->
<template>
  <div class="search-area">
  <h1>Class&nbsp;Information</h1>

  <form @submit.prevent="search">
  <div class="searchbox">  <input v-model="searchKeyword" type="text" name="subject" placeholder="       「教員名」もしくは「授業名」で検索">
    <img src="@/assets/search-icon.svg" width="53" height="53" @click="search">
  </div>
</form>

  <div v-if="isSearchExecuted">
    <div v-if="searchResults.length">
      <h2>Search Results</h2>
    </div>
    <div v-else>
      <p>{{ searchKeyword }}に一致する検索結果がありません。</p>
    </div>
  </div>
<div v-if="isElementVisible">
 <h3>Ex）教員名「飯尾淳」&nbsp;&nbsp;授業名「基礎演習」</h3>
</div>


  <!--検索した時だけの表示はこれ-->
  <div v-if="isSearchExecuted"> 
    <table class="result">
      <tr>
        <th>Subject</th>
        <th>Teacher</th>
        <th>Class</th>
        <th>Day</th>
        <th>Semester</th>
      </tr>
      <tr v-for="(result, index) in searchResults" :key="index">
        <td>{{ result.subject }}</td>
        <td>{{ result.teacher }}</td>
        <td>{{ result.classroom }}</td>
        <td>{{ result.day }}</td>
        <td>{{ result.semester }}</td>
      </tr>
    </table>
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
      isElementVisible:true
    };
  },
  methods: {
    async search() {
      this.searchResults = [];
      try {
        // 'subject'について検索
        const q1 = query(collection(db, 'class information'), where('subject', '==', this.searchKeyword));
        const querySnapshot1 = await getDocs(q1);
        querySnapshot1.forEach((doc) => {
          this.searchResults.push(doc.data());
        });

        // 'teacher' について検索
        const q2 = query(collection(db, 'class information'), where('teacher', '==', this.searchKeyword));
        const querySnapshot2 = await getDocs(q2);
        querySnapshot2.forEach((doc) => {
          if (!this.searchResults.some(result => result.id === doc.id)) {
            this.searchResults.push(doc.data());
          }
        });

      } catch (error) {
        console.error("Error fetching documents: ", error);
        this.searchResults = [];
      } finally {
        this.isSearchExecuted = true;
      }
      this.isElementVisible = false;
    },  
  }
};


</script>
  
<style scoped>
/*検索をする要素全体（inputのところで同じように設定した方が良いのでしょうか*/
.searchbox {
  /*検索ボタンと一緒に移動するようにrelativeにする*/
  position: relative;
  width: 100%;
}

input {
  width: 100%;
}
/*小久保さんがやってくれた部分、要素を縦に並べる*/
.search-area {
  
  display: flex; /*並べ方の指定*/
  flex-direction: column; /*縦に並べる*/
}
/*Class Informationの設定*/
h1 {
  margin: 50px auto;
  width: 100%;
  text-align: center;
  
}
/*検索の虫眼鏡の画像の設定*/
img {
  /*searchboxに合わせて位置を指定*/
  position: absolute;
  top: 8px;
  right: 10px;
}
/*検索方法の例の設定*/
h3 {
  top: 220px;
  text-align: center;
  color: black;
}
/*検索結果の要素の設定*/
.result {
  margin-top:50px;
  font-size: 25px;
  text-align: center;
  color:black;
  border: 2px solid black; /* 黒い2pxの実線の枠 */
  border-radius: 15px; /* 入力フィールドの縁取りを丸くする */
  width: 100%;
}
.result td {
  padding: 8px;
  text-align: center;
}

li {
  list-style: none;
}

::placeholder {
  font-size: 30px;
  /* プレースホルダーテキストのフォントサイズを変更 */
  color: rgb(177, 169, 169);
  transform: translateY(0px);
  /* テキストを上方向に5px移動 */
  text-align: left;
}

input[type="text"] {
  width: 65vw;
  /* 入力フィールドの幅を変更 */
  height: 60px;
  /* 入力フィールドの高さを変更 */
  background-position: center;
  border-radius: 10px;
  /* 入力フィールドの縁取りを丸くする */
  border: 2px solid rgb(198, 195, 195);
  /* 入力フィールドの縁取りの色を変更 */
  padding: 2px;
  /* 入力フィールド内の余白を指定 */
  top: 2px;
  /* 上方向に50px移動 */
  text-align: center;
  font-size: 50px;
}
 .search-area {
    max-height: 100vh;
    overflow-y: auto; /* スクロールできるようにするよ */
  }

  @media (max-width: 767px) {
    

  }
  @media (min-width: 769px) {
    
  }
</style>