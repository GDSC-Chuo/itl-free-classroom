<template>
  <div class="search-area">
    <h1>授業情報検索</h1>

    <form @submit.prevent="search">
      <div class="search-box"> <input v-model="searchKeyword" type="text" name="subject"
          placeholder="キーワードを入力し検索マークをクリック">
        <img src="@/assets/search-icon.svg" width="53" height="53" @click="search">
      </div>
    </form>

    <div v-if="isSearchExecuted">
      <div v-if="searchResults.length">
        <h2>Search Results</h2>
      </div>
      <div v-else>
        <p>「{{ searchKeyword }}」に一致する検索結果がありません。</p>
      </div>
    </div>
    <div v-if="isElementVisible">
      <h3>Ex: 飯尾淳 (教員名) / 基礎演習 (授業名)</h3>
      <h3>※完全一致での検索となります</h3>
    </div>


    <!--検索した時だけの表示はこれ-->
    <div v-if="isSearchExecuted">
      <table class="result">
        <tr>
          <th>授業名</th>
          <th>教員</th>
          <th>クラス</th>
          <th>曜日</th>
          <th>学期</th>
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
      isElementVisible: true
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
.search-box {
  position: relative;
  width: 100%;
}

input {
  width: 80%;
}

.search-area {
  display: flex;
  flex-direction: column;
}

/*Class Informationの設定*/
h1 {
  margin: 50px auto;
  text-align: center;
}

/*検索の虫眼鏡の画像の設定*/
img {
  position: absolute;
  top: 8px;
  right: 10px;
  width: 40px;
}

/*検索方法の例の設定*/
h3 {
  top: 220px;
  text-align: center;
  color: black;
}

/*検索結果の要素の設定*/
.result {
  margin-top: 50px;
  font-size: 24px;
  text-align: center;
  color: black;
  border: 2px solid black;
  border-radius: 15px;
  width: 100%;
  margin-bottom: 50px;
}

.result td {
  padding: 8px;
  text-align: center;
}

li {
  list-style: none;
}

::placeholder {
  font-size: 16px;
  color: rgb(177, 169, 169);
  transform: translateY(0px);
  text-align: left;
}

input[type="text"] {
  width: 60vw;
  height: 60px;
  background-position: center;
  border-radius: 10px;
  border: 2px solid rgb(198, 195, 195);
  padding: 2px;
  top: 2px;
  text-align: center;
  font-family: "Zen Kaku Gothic New", sans-serif;
  font-size: 24px;
}

.search-area {
  max-height: 80vh;

}

.result {
  margin-top: 0px;
  flex-direction: column;
  font-size: 24px;
}

@media (max-width: 600px) {
  h1 {
    font-size: 32px;
  }

  .search-area {
    position: fixed;
    top: 0%;
  }

  .search-box {
    text-align: center;
    font-size: 24px;
  }

  input[type="text"] {
    font-size: 16px;
  }

  img {
    width: 32px;
  }

  h2 {
    text-align: center;
    font-size: 30px;
  }

  h3 {
    font-size: 16px;
  }

  .result {
    font-size: 16px;
  }
}
</style>