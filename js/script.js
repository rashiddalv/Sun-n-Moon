function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var bg = document.getElementById("wrapper");
  var sun = document.getElementById("sun");
  var moon = document.getElementById("moon");
  var stars = document.getElementById("stars");
  var starss = document.getElementById("starss");
  var session = "AM";
  var dow = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var day = date.getDate();

  // store date
  var currentDate =
    dow[date.getDay()] + ", " + month[date.getMonth()] + " " + day;
  // if (h == 0) {
  //   h = 12;
  // }

  if (h > 12) {
    session = "PM";
  }

  if (h > 6 && h < 18) {
    bg.style.background = "linear-gradient(#d4adc3, #72b6ff)";
    sun.classList.add("active");
    moon.classList.remove("active");
    // clouds.classList.add("active");
  }
  if (h < 6 || h >= 18) {
    bg.style.background = "linear-gradient(#463C77, #0E355D)";
    moon.classList.add("active");
    stars.classList.add("active");
    starss.classList.add("active");
    sun.classList.remove("active");
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = h + ":" + m + ":" + s;

  document.getElementById("timeclock").innerHTML =
    time;
  document.getElementById("AMPM").innerHTML =
    session;
  document.getElementById("currentDate").innerHTML = "<br>" +
  currentDate;
  setTimeout(showTime, 1000);
}

showTime();
