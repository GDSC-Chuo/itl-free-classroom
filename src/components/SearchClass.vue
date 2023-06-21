<!-- TODO: デザイン修正、ログインする/ログインせずに使うというリンクを用意する -->
<template>
 
    <div >
      <h1>Class Information</h1>
    </div>
    
      <h3><input type="text" name="subject" placeholder="Input Information">
        

      </h3>
  <p><img src="@/assets/serchpng.png" width="200" height="150"></p>

  </template>
  
  <script>
  
  export default {
    name: 'HomePage'
  }
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
  
  </style>