<template>
  <div class="freeclassroom-info">
    <div class="header">
      <h1>空き教室情報</h1>
      <div class="date-display">{{ currentDate }}</div>
    </div>
    <div class="date-display">{{ currentDate }}</div>

    <div class="content">
      <div class="time-selector">
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
              <td :class="{'available': isAvailable(room), 'occupied': !isAvailable(room)}">
                {{ isAvailable(room) ? '空き' : '使用中' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FreeclassroomInfo",
  data() {
    return {
      classrooms: [
        "301", "401", "501", "502 (WS)", "701", "702",
        "801", "802", "901", "902", "1001", "1002", "1003", "1004",
        "1101", "1102", "1103", "1104"
      ],
      times: [
        "1限前", "1限", "2限", "昼休み", "3限", "4限", "5限", "6限", "6限後"
      ],
      selectedTime: "1限前", // 初期選択の時間帯
      freeClassroomData: {
        "301": ["1限前", "昼休み", "5限"],
        "401": ["1限", "3限", "4限"],
        "501": ["1限", "2限", "6限"],
        // 以下に他の教室のデータを追加
      },
      currentDate: "", // 現在の日付を格納
    };
  },
  methods: {
    selectTime(time) {
      this.selectedTime = time;
    },
    isAvailable(room) {
      return this.freeClassroomData[room]?.includes(this.selectedTime) || false;
    },
    getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      this.currentDate = `${year}-${month}-${day}`;
    }
  },
  mounted() {
    this.getCurrentDate();
  }
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

th, td {
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
</style>
