// GASのWebアプリURL
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbxY0Zr3nad7TKnKlN8S7u1BtwX8a63QzvATciGhVhy6J9owJswGaBAmC235-yHXrGpu/exec";
// データを取得する関数
async function fetchDataFromGAS() {
  try {
    // GASからデータを取得
    const response = await fetch(GAS_API_URL);
    if (!response.ok) {
      throw new Error("データの取得に失敗しました");
    }

    // JSONデータを解析
    const data = await response.json();
    console.log("取得したデータ:", data);

  } catch (error) {
    console.error("エラー:", error);
  }
}



// 関数を実行
fetchDataFromGAS();