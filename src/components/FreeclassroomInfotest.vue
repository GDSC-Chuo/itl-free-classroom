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
              <th>Classroom</th>
              <th>Status</th>
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
      isClosed: false, // 閉館状態を管理
    };
  },
  methods: {
    selectTime(time) {
      this.selectedTime = time;
    },
    isAvailable(room) {
      // 部屋のステータスを確認
      return this.freeClassroomData?.[room]?.includes(this.selectedTime) || false;
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
        if (data[1][2] === "閉館") {
          this.isClosed = true;
        } else {
          this.freeClassroomData = {};
          for (let i = 1; i < data.length; i++) {
            const room = data[i][1];
            this.freeClassroomData[room] = {};
            for (let j = 2; j < data[0].length; j++) {
              const timeSlot = data[0][j];
              this.freeClassroomData[room][timeSlot] = data[i][j] ? "使用中" : "空き";
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
  font-family: Arial, sans-serif;
  margin: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.date-display {
  font-size: 1.2em;
  color: #555;
}

.content {
  display: flex;
}

.time-selector {
  width: 30%;
  margin-right: 20px;
}

.time-selector ul {
  list-style: none;
  padding: 0;
}

.time-selector li {
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  cursor: pointer;
  text-align: center;
}

.time-selector li.selected {
  background-color: #007bff;
  color: white;
}

.classroom-status {
  width: 70%;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  text-align: center;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
}

.available {
  background-color: #dff0d8;
  color: #3c763d;
}

.occupied {
  background-color: #f2dede;
  color: #a94442;
}

.closed {
  background-color: #ddd;
  color: #555;
}
</style>
