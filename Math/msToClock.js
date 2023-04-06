// goal is to convert milliseconds time into a clock format, specifying hours:minutes:seconds:millis
// difficulty: easy +

// input
let timeInMs = 123_456;

// calculations: ms to sec, day to sec
const dayInSec = 86_400;
let timeInSec = timeInMs / 1000;

// exclude days off the clock to calculate the little ones first
let oneDayTime = timeInMs % dayInSec; // in seconds

// converting time to hours then taking the int part of it is the hour
let hour = Math.floor(oneDayTime / 3600); // 60*60 = 3600

// converting time to minutes then taking the remaining of 60 in it is the minute
let minute = Math.floor(oneDayTime / 60 % 60);

// remains of 60 from the time is the second 
let second = oneDayTime % 60;

// millis is the leftover of the time in millis before conversion to seconds
let milli = timeInMs % 1000;

function displayTime(){
  let h = hour < 10 ? "0" + hour : hour;
  let min = minute < 10 ? "0" + minute : minute;
  let sec = second < 10 ? "0" + second : second;
  
  return `${h}:${min}:${sec}:${milli}`;
}
console.log(oneDayTime)
console.log(displayTime());