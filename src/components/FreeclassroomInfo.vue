<template>
  <div class="freeclassroom-info">
    <div class="header">
      <h1>空き教室情報</h1>
      <div class="date-display">{{ currentDate }}</div>
    </div>

    <div class="content">
      <div class="time-selector" v-if="!isClosed">
        <h2>時間帯を選択</h2>
        <ul>
          <li
            v-for="time in times"
            :key="time"
            :class="{ selected: selectedTime === time }"
            @click="selectTime(time)"
          >
            {{ time }}
          </li>
        </ul>
      </div>
      <div class="classroom-status">
        <h2>空き教室情報</h2>
        <table>
          <thead>
            <tr>
              <th>教室</th>
              <th>使用状況</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="room in classrooms" :key="room">
              <td>{{ room }}</td>
              <td :class="{'closed': isClosed, 'available': !isClosed && isAvailable(room), 'occupied': !isClosed && !isAvailable(room)}">
                {{ isClosed ? '閉館' : isAvailable(room) ? '空き' : '使用中' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchDataFromGAS } from "../lib/gas";

export default {
  name: "FreeclassroomInfo",

  data() {
    return {
      classrooms: [
        "301", "401", "501", "502 (WS)", "701", "702",
        "801", "802", "901", "902", "1001", "1002", "1003", "1004",
        "1101", "1102", "1103", "1104",
      ],
      times: [
        "1限前", "1限", "2限", "昼休み", "3限", "4限", "5限", "6限", "6限後",
      ],
      selectedTime: "1限前",
      freeClassroomData: null,
      currentDate: "",
      isClosed: false,
    };
  },

  methods: {
    selectTime(time) {
      this.selectedTime = time;
    },

    isAvailable(room) {
      return this.freeClassroomData?.[room]?.[this.selectedTime] === "空き";
    },

    getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      this.currentDate = `${year}-${month}-${day}`;
    },

    async fetchData() {
      try {
        const data = await fetchDataFromGAS();
        console.log("取得した二次元配列データ:", data);

        if (data[1][2] === "閉館") {
          this.isClosed = true;
        } else {
          this.isClosed = false;
          this.freeClassroomData = {};

          for (let i = 1; i <= 18; i++) {
            const room = this.classrooms[i - 1];
            this.freeClassroomData[room] = {};

            for (let j = 2; j <= 10; j++) {
              const timeIndex = j - 2;
              const timeSlot = this.times[timeIndex];
              const status = data[i][j];

              this.freeClassroomData[room][timeSlot] = status ? "使用中" : "空き";
            }

            // 特殊ケース対応: "502 (WS)" の教室
            if (i === 4 && room === "502 (WS)") {
              console.log("特殊な教室名のデータを処理:", room);
            }
          }
        }
      } catch (error) {
        console.error("データ取得エラー:", error);
      }
    },
  },

  async mounted() {
    this.getCurrentDate();
    await this.fetchData();
  },
};
</script>

<style scoped>
.freeclassroom-info {
  font-family: "Zen Kaku Gothic New", sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh; /* 最小高さを画面の高さに */
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 30px;
  width: 100%;
  position: relative;
}

h1 {
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin: 0 0 20px;
  text-align: center;
}

.date-display {
  font-size: 24px;
  color: #3A3B3E;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-radius: 20px;
}

.content {
  display: flex;
  gap: 30px;
  margin: 0 auto;
  flex: 1; /* 残りのスペースを埋める */
  width: 100%;
}

.time-selector {
  width: 200px;
  flex-shrink: 0;
}

.time-selector h2 {
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
}

.time-selector ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.time-selector li {
  padding: 12px 8px;
  border: 2px solid #747578;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  color: #ff0000;
  background-color: white;
  transition: all 0.3s ease;
}

.time-selector li:hover {
  background-color: #fff0f0;
}

.time-selector li.selected {
  background-color: #ff0000;
  color: white;
  border-color: #ff0000;
}

.classroom-status {
  flex: 1;
  min-width: 0; /* flexboxのバグ防止 */
}

.classroom-status h2 {
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
  text-align: center;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
}

th {
  padding: 12px;
  background-color: #f4f4f4;
  color: #3A3B3E;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
}

td {
  padding: 12px;
  text-align: center;
  font-size: 16px;
  border-radius: 8px;
}

.available {
  background-color: #e8f5e9;
  color: #2e7d32;
}

.occupied {
  background-color: #ffebee;
  color: #c62828;
}

.closed {
  background-color: #f5f5f5;
  color: #747578;
}

@media (max-width: 768px) {
  .freeclassroom-info {
    padding: 10px;
  }

  .header {
    margin: 10px 0 20px;
  }

  h1 {
    font-size: 32px;
    margin: 0 0 15px;
  }

  .date-display {
    font-size: 20px;
    padding: 8px 16px;
  }

  .content {
    gap: 15px;
  }

  .time-selector {
    width: 150px;
  }

  .time-selector h2,
  .classroom-status h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  .time-selector li {
    padding: 8px 4px;
    font-size: 14px;
  }

  th {
    font-size: 14px;
    padding: 8px;
  }

  td {
    font-size: 14px;
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .freeclassroom-info {
    padding: 5px;
  }

  .header {
    margin: 5px 0 15px;
  }

  h1 {
    font-size: 24px;
    margin: 0 0 10px;
  }

  .date-display {
    font-size: 16px;
    padding: 6px 12px;
  }

  .content {
    gap: 10px;
  }

  .time-selector {
    width: 100px;
  }

  .time-selector h2,
  .classroom-status h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .time-selector li {
    padding: 6px 2px;
    font-size: 12px;
    border-width: 1px;
  }

  th {
    font-size: 12px;
    padding: 6px 4px;
  }

  td {
    font-size: 12px;
    padding: 6px 4px;
  }

  td:first-child {
    width: 30%;
  }

  td:last-child {
    width: 70%;
  }
}
</style>
