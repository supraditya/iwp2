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
function blogAlert() {
  var id = document.getElementById("emailinput").value;
  var con = document.getElementById("contactinput").value;

  var flag1 = 0;
  var flag2 = 0;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(id)) {
    flag1 = 1;
  }
  if (/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/.test(con)) {
    flag2 = 1;
  }
  if (flag1 === 1 && flag2 === 1) {
    alert("Submission successful.\n\nEmail: " + id + "\nContact: " + con);
  }
}
function contactSubmit() {
  var conid = document.getElementById("contactname").value;
  var conemail = document.getElementById("contactemail").value;
  var conph = document.getElementById("contactphone").value;
  var conmsg = document.getElementById("textbox").value;
  var flag1 = 0;
  var flag2 = 0;
  var flag3 = 0;
  var flag4 = 1;
  if (/^[a-zA-Z ]*$/.test(conid)) {
    flag1 = 1; //Name is valid
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(conemail)) {
    flag2 = 1; //Email is valid
  }
  if (/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/.test(conph)) {
    flag3 = 1; //Phone is valid
  }
  if (conmsg === "") {
    flag4 = 0; //Message box is empty
  }
  if (flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 == 1) {
    alert("Submission successful!");
  } else {
    alert(
      "One or more invalid inputs.\n\n Please note that:\n\n 1. A name cannot contain a number\n 2. The message box cannot be empty."
    );
  }
}
function search() {
  // console.log("Triggered search");
  var highlight = document.querySelectorAll(".blogcontent");
  var str1 = document.getElementById("searchinput").value;
  str1 = str1.toLowerCase();
  var i = 0;
  for (i = 0; i < highlight.length; i++) {
    if (highlight[i].textContent.toLowerCase().search(str1) != -1) {
      highlight[i].style.backgroundColor = "yellow";
      highlight[i].style.color = "black";
    } else if (highlight[i].textContent.toLowerCase().search(str1) === -1) {
      highlight[i].style.backgroundColor = "transparent";
      highlight[i].style.color = "white";
    }
  }

  //Clears highlights if inputs are empty
  if (str1 === "") {
    for (i = 0; i < highlight.length; i++) {
      highlight[i].style.backgroundColor = "transparent";
      highlight[i].style.color = "white";
    }
  }
}
