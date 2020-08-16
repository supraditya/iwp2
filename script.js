let person;
function begin(num) {
  if (num === 1) {
    person = prompt("Please enter your name");
  }
  function dateTime() {
    var d = new Date();
    var day = d.getDay();

    var dayArray = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var sec = d.getSeconds();
    var min = d.getMinutes();
    var hr = d.getHours();
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
    if (num === 1) {
      if (hr >= 0 && hr < 12) {
        document.getElementById("welcome").textContent =
          "Good Morning, " + person + ".";
      }
      if (hr >= 12 && hr < 16) {
        document.getElementById("welcome").textContent =
          "Good Afternoon, " + person + ".";
      }
      if (hr >= 16 && hr <= 23) {
        document.getElementById("welcome").textContent =
          "Good Evening, " + person + ".";
      }
    }

    $("#dateline").html(dayArray[day] + ",&nbsp");
    $("#dateline2").html(hr + ":" + min + ":" + sec);
  }
  setInterval(dateTime, 1000);
}
