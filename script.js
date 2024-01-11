const seconds = document.getElementById('sec');
const minutes = document.getElementById('min');
const hours = document.getElementById('hour');
const logoButton = document.querySelectorAll('.logo-btn');
const clock = document.querySelector('.clock');
const teamLogo = document.getElementById('logo');

setInterval(updateClock, 1000);

function updateClock() {
  let date = new Date();
  let sec = date.getSeconds() / 60;
  let min = (date.getMinutes() + sec) / 60;
  let hour = (date.getHours() + min) / 12;

  seconds.style.transform = "rotate(" + (sec * 360) + "deg)";
  minutes.style.transform = "rotate(" + (min * 360) + "deg)";
  hours.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();

document.getElementById('tide').addEventListener('click', function() {
       teamLogo.src = 'img/tide.png'; 
});

document.getElementById('dolphins').addEventListener('click', function() {
       teamLogo.src = 'img/dolphins.png'; 
});

document.getElementById('unc').addEventListener('click', function() {
       teamLogo.src = 'img/unc.png'; 
});

document.getElementById('hurricanes').addEventListener('click', function() {
  teamLogo.src = 'img/hurricanes.png'; 
});

document.getElementById('giants').addEventListener('click', function() {
  teamLogo.src = 'img/nylogo.png'; 
});

document.getElementById('hokies').addEventListener('click', function() {
  teamLogo.src = 'img/tech.png'; 
});

document.getElementById('mountaineers').addEventListener('click', function() {
  teamLogo.src = 'img/wvu-3.png'; 
});

document.getElementById('bulldogs').addEventListener('click', function() {
  teamLogo.src = 'img/bulldogs.png'; 
});