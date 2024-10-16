const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timer;

initDate();

document.getElementById('startButton').addEventListener("click", function() {
  document.getElementById('value').innerHTML = document.getElementById("myDate").value;
  let splitValues = document.getElementById("myDate").value.split('-'); 
  let end = new Date(splitValues[0], splitValues[1] - 1, splitValues[2]);
  clearInterval(timer);
  showRemaining(end);
  timer = setInterval(showRemaining, 1000, end);
});

function showRemaining(end) {
  let now = new Date();
  let distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = 'EXPIRED! Select upcoming birthday!';
    return;
  }


  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);

  document.getElementById('countdown').innerHTML = days + ' days ';
  document.getElementById('countdown').innerHTML += hours + ' hrs ';
  document.getElementById('countdown').innerHTML += minutes + ' mins ';
  document.getElementById('countdown').innerHTML += seconds + ' secs';
}

function initDate() {
  let defaultDate = new Date();
  let month;
  if (defaultDate.getMonth() + 1 > 9) {
    month = "" + (defaultDate.getMonth() + 1);
  } else {
    month = '0' + (defaultDate.getMonth() + 1);
  }
  document.getElementById("myDate").value = defaultDate.getFullYear() + '-' + month + '-' + defaultDate.getDate();
}