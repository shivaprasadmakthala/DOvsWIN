//Javascript 
//prompt

// confirm
"use strict";

// confirm() is a JS functionality whcih pops up a dialog box with OK and Cancel associated with it.
// It you click OK then it IS TRUE else it is FALSE !

// let data = confirm("Is it RED Color ?");

// if (confirm(data) == true) {
//   alert("IT IS A RED COLOR BOX !");
// } else {
//   alert("different color !");
// }


// // Javascript prompt() function

// let number = prompt("Enter the number ");// js functionality to get user input

// let name = prompt("Your Name # ")

// for (let i = 1; i <= 10; i++) {
//   let result = number * i;
//   document.write(result+" ");
// }


// clock using JS

// function My_Clock(){
//   let date = new Date();
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();
//   let period = "AM";
//   if(hours == 0){
//     hours = 12;
//   }else if(hours >= 12){
//     hours = hours - 12;
//     period = "PM";
//   }
//   document.getElementById("clock").innerHTML = 
//    hours +":"+ minutes+":" + seconds +" " + period;
//    setTimeout(My_Clock, 1000);
// }
// My_Clock();





// setTime & Reset time
// let seconds = 0;
// let minutes = 0;
// let interval = 0;
// let minutes_value = document.getElementById("minutes");
// let seconds_value = document.getElementById("seconds");
// let start_button = document.getElementById("start");
// let stop_button = document.getElementById("stop");
// let reset_button = document.getElementById("reset");

// function Suman() {
//   minutes++;
//   if (minutes < 9) {
//     minutes_value.innerHTML = "0";
//   }
//   if (minutes > 9) {
//     minutes_value.innerHTML = minutes;
//   }
//   if (minutes > 99) {
//     seconds++;
//     seconds_value.innerHTML = "0" + seconds;
//     minutes = 0;
//     minutes_value.innerHTML = "0" + 0;
//   }
//   if (seconds > 9) {
//     seconds_value.innerHTML = seconds;
//   }
// }

// start_button.onclick = function () {
//   interval = setInterval(Suman);
// };

// stop_button.onclick = function () {
//   clearInterval(interval);
// };

// reset_button.onclick = function () {
//   clearInterval(interval);
//   minutes = "00";
//   seconds = "00";
//   seconds_value.innerHTML = seconds;
//   minutes_value.innerHTML = minutes;
// };




// function suman(){
//   document.write("Suman"+" ");

// }
//   setTimeout(suman,10000);





