function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}
setInterval(displayTime, 10);
