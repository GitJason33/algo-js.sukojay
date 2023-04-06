// goal is to convert milliseconds time into a clock format, specifying hours:minutes:seconds:millis
// difficulty: medium

// input
let timeInMs = 0;

// calculations: ms to sec, day to sec
const dayInSec = 86_400;
let timeInSec = Math.floor(timeInMs / 1000);

// exclude days off the clock to calculate the little ones first
let oneDayTime = timeInSec % dayInSec; // in seconds

// converting time to hours then taking the int part of it is the hour
let hour = Math.floor(oneDayTime / 3600); // 60*60 = 3600

// converting time to minutes then taking the remaining of 60 in it is the minute
let minute = Math.floor(oneDayTime / 60 % 60);

// remains of 60 from the time is the second 
let second = oneDayTime % 60;

// millis is the leftover of the time in millis before conversion to seconds
let milli = timeInMs % 1000;


// let's add AM_PM system
function AMorPM(){
  // check if it's midnight
  if(hour < 12 && hour === 0) {
    hour = 12;
    return "AM";
  }
  // check if it's day hours
  else if(hour < 12) return "AM";

  // else it's afternoon, night hours
  else{
    // mid-day
    if(hour === 12) return "PM";

    // other hours till 23
    for(let i = 13, j = 1; i <= hour; i++, j++)
      if(hour === i){
        hour = j;
        return "PM";
      }
  }
}

// let's modify it to be with days as well (day of year, 365 is max)
// first, know that for every 86_400 seconds, there is 1 day
let day = Math.floor(timeInSec / dayInSec);



function displayTime(){
  let am_pm = AMorPM();
  let d = day < 10 ? "0" + day : day;
  let h = hour < 10 ? "0" + hour : hour;
  let min = minute < 10 ? "0" + minute : minute;
  let sec = second < 10 ? "0" + second : second;
  let mil = milli < 100 ? "00" + milli : milli;
  
  return `${d}:${h}:${min}:${sec}:${mil} ${am_pm}`;
}
console.log(oneDayTime)
console.log(displayTime());