<script setup>
import { ref, onMounted } from 'vue'
import VueComponent from '@/components/'

const accVal = ref(false);

function Acc() {
  if(!accVal.value){
    accVal.value = true
    console.log("IN")
  } else {
    accVal.value = false
    console.log("OUT")
  }
}
function ADMIN() {
  if(!accVal.value){
    accVal.value = true
    console.log("IN")
  } else {
    accVal.value = false
    console.log("OUT")
  }
}
// function HR() {
//   if(!accVal.value){
//     accVal.value = true
//     console.log("IN")
//   } else {
//     accVal.value = false
//     console.log("OUT")
//   }
// }
// function SALE() {
//   if(!accVal.value){
//     accVal.value = true
//     console.log("IN")
//   } else {
//     accVal.value = false
//     console.log("OUT")
//   }
// }
// function TKT() {
//   if(!accVal.value){
//     accVal.value = true
//     console.log("IN")
//   } else {
//     accVal.value = false
//     console.log("OUT")
//   }
// }
// function IT() {
//   if(!accVal.value){
//     accVal.value = true
//     console.log("IN")
//   } else {
//     accVal.value = false
//     console.log("OUT")
//   }
// }
// function MD() {
//   if(!accVal.value){
//     accVal.value = true
//     console.log("IN")
//   } else {
//     accVal.value = false
//     console.log("OUT")
//   }
// }
// function XL-X() {
//   if(!accVal.value){
//     accVal.value = true
//     console.log("IN")
//   } else {
//     accVal.value = false
//     console.log("OUT")
//   }
// }
// function OP() {
//   if(!accVal.value){
//     accVal.value = true
//     console.log("IN")
//   } else {
//     accVal.value = false
//     console.log("OUT")
//   }
// }
// function VISA() {
//   if(!accVal.value){
//     accVal.value = true
//     console.log("IN")
//   } else {
//     accVal.value = false
//     console.log("OUT")
//   }
// }
// function HR() {
//   if(!accVal.value){
//     accVal.value = true
//     console.log("IN")
//   } else {
//     accVal.value = false
//     console.log("OUT")
//   }
// }
const user = [
  {name: 'นัฌมิลล์',
  nickname: 'มิว',
  age: 22,
  gender: 'หญิง',
  birthdate: new Date('2001-12-15'),
  country: 'ไทย',
  number: '0936656164',
  department: 'IT',
  

  additionalNames: [
    { firstName: 'พัชระ', lastName: 'พี่เพชร' },
    { firstName: 'ฮะ', lastName: 'พี่ฮะ' },

  ]},
  {name: 'อาซียะ',
  nickname: 'ซี',
  age: 22,
  gender: 'หญิง',
  birthdate: new Date('2001-7-27'),
  country: 'ไทย',
  number: '0936656164',
  department: 'IT',


  additionalNames: [
    { firstName: 'พัชระ', lastName: 'พี่เพชร' },
    { firstName: 'ฮะ', lastName: 'พี่ฮะ' },

  ]},
  {name: 'อาซียะ11111',
  nickname: 'ซี',
  age: 22,
  gender: 'หญิง',
  birthdate: new Date('2001-4-7'),
  country: 'ไทย',
  number: '0936656164',
  department: 'IT',


  additionalNames: [
    { firstName: 'พัชระ', lastName: 'พี่เพชร' },
    { firstName: 'ฮะ', lastName: 'พี่ฮะ' },

  ]}
  
]

</script>
<template>
  <header>
    <h1>ระบบเช็ครายชื่อนักศึกษาฝึกงาน</h1>
    <img alt="Vue zego" class="zego" src="./assets/zego.jpg" width="200" height="100" />
    <hr><br>
    {{ accShow }}
    <div class="row">
      <!-- <div class="col-4 text-right" style="width: 100%;">11111111</div> -->
        <div class="col-8">
        <label for="search">Search: {{ acc }}</label>
        <input type="text" id="search">

        <ul>
          <li v-for="result in filteredResults" :key="result.id">
            {{ result.name }}
          </li>
        </ul>
      </div>
    </div>
    <HelloWorld/>
    <button type="button" class="test-margin btn btn-primary" @click="Acc()">ACC</button>
    <button type="button" class="test-margin btn btn-secondary" @click="ADMIN()">ADMIN</button>
    <button type="button" class="test-margin btn btn-success" @click="HR()">HR</button>
    <button type="button" class="test-margin btn btn-danger" @click="SALE()">SALE</button>
    <button type="button" class="test-margin btn btn-warning" @click="TKT()">TKT</button>
    <button type="button" class="test-margin btn btn-info" @click="IT()">IT</button>
    <button type="button" class="test-margin btn btn-secondary" @click="MD()">MD</button>
    <button type="button" class="test-margin btn btn-danger" @click="XL-X()">XL-X</button>
    <button type="button" class="test-margin btn btn-primary" @click="OP()">OP</button>
    <button type="button" class="test-margin btn btn-success" @click="VISA()">VISA</button>
    <button type="button" class="test-margin btn btn-warning" @click="GM()">GM</button>
    <hr>
    
    
      <div v-if="accVal" class="col-md-4 mb-3">
      <label for="validationTooltip01">ชื่อ</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="ชื่อ" value="" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
      <label for="validationTooltip01">ชื่อเล่น</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="ชื่อเล่น" value="" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
      <label for="validationTooltip01">อายุ</label>
      <input type="number" class="form-control" id="validationTooltip01" placeholder="อายุ" value="" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
      <label for="validationTooltip01">เพศ</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="เพศ" value="" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
      <label for="validationTooltip01">วัน/เดือน/ปีเกิด</label>
      <input type="date" class="form-control" id="validationTooltip01" placeholder="วัน/เดือน/ปีเกิด" value="" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
      <label for="validationTooltip01">ประเทศ</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="ประเทศ" value="" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
      <label for="validationTooltip01">เบอร์โทร</label>
      <input type="number" class="form-control" id="validationTooltip01" placeholder="เบอร์โทร" value="" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
      <label for="validationTooltip01">แผนก</label>
      <!-- นี่คือ comment ภายใน body <input type="text" class="form-control" id="validationTooltip01" placeholder="แผนก" value="" required>-->
      <div class="mb-3">
    <select class="form-select" required aria-label="select example">
      <option value="">All</option>
      <option value="1">ACC</option>
      <option value="2">ADMIN</option>
      <option value="3">HR</option>
      <option value="3">SALE</option>
      <option value="3">TKT</option>
      <option value="3">IT</option>
      <option value="3">MD</option>
      <option value="3">XL-X</option>
      <option value="3">OP</option>
      <option value="3">VISA</option>
      <option value="3">GM</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>

      <div class="valid-tooltip">
        Looks good!
      </div>
      <label for="validationTooltip01">ชื่อพี่เลี้ยง</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="ชื่อพี่เลี้ยง" value="" required>
      <div class="valid-tooltip">
        Looks good!
    </div>
      <!-- <h5>ชื่อ: {{ user.name }}</h5>
      <h5>ชื่อเล่น: {{ user.nickname }}</h5>
      <h5>อายุ: {{ user.age }}</h5>
      <h5>เพศ: {{ user.gender }}</h5>
      <input type="date" v-model="birthdatePicker" />
      <h5>วันเกิด: {{ formatDate(user.birthdate) }}</h5>
      <h5>ประเทศ: {{ user.country }}</h5>
      <h5>เบอร์โทร: {{ user.number }}</h5>
      <h5>แผนก: {{ user.department }}</h5> -->

      <div class="container">
      <button @click="updateUser" class="margin-top-20">อัปเดตข้อมูล</button>
    </div>
    <div class="container">
    <input type="file" class="margin-top-20" aria-label="file example" required>
    <div class="invalid-feedback">Example invalid form file feedback</div>
  </div>

      <div class="container">
  <button @click="printDocument" class="print-button">พิมพ์เอกสาร</button>
</div>
    </div>
  
  </header>


  <main>
    <table>
      <thead>
        <tr class="test-color">
          <th>ลำดับ</th>
          <th>ชื่อ</th>
          <th>ชื่อเล่น</th>
          <th>อายุ</th>
          <th>เพศ</th>
          <th>วันเกิด</th>
          <th>ประเทศ</th>
          <th>เบอร์โทร</th>
          <th>แผนก</th>
          <th>ชื่อพี่เลี้ยง</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in user" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.nickname }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ formatDate(item.birthdate) }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.department }}</td>
          <td>
            <ul>
              <li v-for="name in item.additionalNames">
                {{ name.firstName }} {{ name.lastName }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
  <div class="d-grid gap-2 col-6 mx-auto">
    <hr>
    <button class="btn btn-primary" type="button">ยืนยัน</button>
  </div>
</template>

<style scoped>
button-container {
  margin-top: 5px;
  display: flex;
  gap: 5px;

}

button-container button .wrapper {
  text-align: center;
  padding: 10px;
  justify-content: center;
}

img.zego {
  border-radius: 50%;
  border: 2px solid #dde746;

}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.image-container {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table,
th,
td {
  border: 1px solid black;
}

th,
td {
  padding: 10px;
  text-align: center;
}

.test-color {
  color: rgb(0, 0, 0);
  background-color: green;
}

.test-margin {
  margin-right: 8px;
}
.margin-top-20 {
    margin-top: 20px;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }

  .file-input {
    display: flex;
    margin-top: 10px;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
  .print-button {
    display: flex;
    margin-top: 10px;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
 
</style>


<script>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('th-TH', options).format(date);
};



</script>

