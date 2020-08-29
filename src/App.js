import React from 'react';
import './App.css';
import WordCard from './WordCard';

var Q1 = "";
var Q2 = "";
var Q3 = "";
var Q4 = "";
var W1 = "";
var W2 = "";
var W3 = "";
var W4 = "";

var i = Math.floor(Math.random()*5);

if(i == 0) {
    Q1 = "กระต่าย";
    W1 = "RABBIT";
    Q2 = "แมว";
    W2 = "CAT";
    Q3 = "หมา";
    W3 = "DOG";
    Q4 = "วัวนม";
    W4 = "COW";
}

else if(i == 1) {
    Q1 = "นก";
    W1 = "BIRD";
    Q2 = "ผีเสื้อ";
    W2 = "BUTTERFLY";
    Q3 = "ไก่";
    W3 = "CHICKEN";
    Q4 = "แมลงวัน";
    W4 = "FLY";
}

else if(i == 2) {
    Q1 = "วิ่ง";
    W1 = "RUN";
    Q2 = "เดิน";
    W2 = "WALK";
    Q3 = "นอน";
    W3 = "SLEEP";
    Q4 = "กระโดด";
    W4 = "JUMP";
}

else if(i == 3) {
    Q1 = "ต้นไม้";
    W1 = "TREE";
    Q2 = "กระโดด";
    W2 = "JUMP";
    Q3 = "โทรศัพท์";
    W3 = "TELEPHONE";
    Q4 = "หมา";
    W4 = "DOG";
}

else{
    Q1 = "เหยี่ยว";
    W1 = "HAWK";
    Q2 = "เสือ";
    W2 = "TIGER";
    Q3 = "สิงโต";
    W3 = "LION";
    Q4 = "งู";
    W4 = "SNAKE";
}

function App() {
  return (
    <body>
      <div><br></br><br></br><h2>WELCOME To Games test your English knowledge.</h2></div>
      <h1>เกมทดสอบความรู้เกี่ยวกับคำศัพท์ภาษาอังกฤษอย่างง่าย</h1> <br></br>
      <div className = "h3"><div id="demo"></div><br></br></div>

      &nbsp;&nbsp;&nbsp;1. "{Q1}" ภาษาอังกฤษเขียนอย่างไร ? <br></br>
      <WordCard value={W1}/>

      &nbsp;&nbsp;&nbsp;2. "{Q2}" ภาษาอังกฤษเขียนอย่างไร ? <br></br>
      <WordCard value={W2}/>
  
      &nbsp;&nbsp;&nbsp;3. "{Q3}" ภาษาอังกฤษเขียนอย่างไร ? <br></br>
      <WordCard value={W3}/>

      &nbsp;&nbsp;&nbsp;4. "{Q4}" ภาษาอังกฤษเขียนอย่างไร ? <br></br>
      <WordCard value={W4}/>
     
    </body>
    
  );
}

export default App;