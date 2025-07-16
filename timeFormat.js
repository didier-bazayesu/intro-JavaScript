//formatting in 24 hours time.



// here this is my logic.


// function comvertTime(time){

//     time = time.split(' ')
//     let pastTime = time[0].split(':').map(Number)
//     return time[1]  ===  'pm'&& pastTime[0] < 12 ? `${pastTime[0]+12}: ${pastTime[1]} pm` : time.join(' ');

  
 
// }

function to24hourtime(hour, minute, period) {
  // hour will always range from 1 to 12 (inclusive)
  // minute will always range from 0 to 59 (inclusive)
  // period will always be either "am" or "pm"
    if(hour >=1 && hour <=12 && minute >=0 && minute<60 && period == 'pm' || period == 'am') return `${period == 'pm' && hour < 12 ? hour+12 : hour} :${minute} ${period}`

    else return `is not in the range specified`

    
         
}


// another logic works not mine .

function to24hourtime(hour, minute, period) {
  if (period === 'am' && hour === 12) hour = 0;
  if (period === 'pm' && hour !== 12) hour += 12;
  
  let hh = hour.toString().padStart(2, '0');
  let mm = minute.toString().padStart(2, '0');
  
  return `${hh}${mm}`;
}

