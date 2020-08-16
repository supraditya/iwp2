function showTime() {
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
    $("#dateline").html(dayArray[day] + ",&nbsp");
    $("#dateline2").html(hr + ":" + min + ":" + sec);
  }
  setInterval(dateTime, 1000);
}
