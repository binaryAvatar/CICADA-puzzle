function conversion(seconds) {
  let hours = 0;
  let minutes = 0;
  let days = 0;
  let years = 0;
  let answer;

  if (seconds < 0) {
    answer = "Please type in a positive number.";
    return answer;
  } else if (seconds > 59) {
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
      if (hours > 23) {
        days = Math.floor(hours / 24);
        hours = hours % 24;
        if (days > 364) {
          years = Math.floor(days / 365);
          days = days % 365;
        }
      }
    }

    answer =
      "Years: " +
      years +
      "||  Days: " +
      days +
      "||  Hours: " +
      hours +
      "||  Minutes: " +
      minutes +
      "||  Seconds: " +
      seconds +
      " .";
  } else {
    answer = seconds + " seconds.";
  }
  return answer;
}

function toSeconds(getyears, getDays, getHours, getMinutes, getSeconds) {
  let sec = getSeconds;
  let minSec = getMinutes * 60;
  let hrSec = getHours * 60 * 60;
  let dSec = getDays * 24 * 60 * 60;
  let ySec = getyears * 365 * 24 * 60 * 60;
  let totalS = sec + minSec + hrSec + dSec + ySec;

  if (totalS < 0) {
    return "Please type in a valid number.";
  } else {
    return totalS + " seconds.";
  }
}

let seconds = document.querySelector("#mySeconds");
let firstButton = document.querySelector("#convertSeconds");
let display1 = document.querySelector("#result1");

let getYears = document.querySelector("#yS");
let getDays = document.querySelector("#dS");
let getHours = document.querySelector("#hS");
let getMinutes = document.querySelector("#mS");
let getSeconds = document.querySelector("#sS");
let secondButton = document.querySelector("#convToSeconds");
let display2 = document.querySelector("#result2");
let word = document.getElementById("inputAnswer");
let buttonCheck = document.getElementById("butVerify");
let display3 = document.getElementById("messageDisplay");

firstButton.addEventListener("click", function(e) {
  let fromSeconds = Number(seconds.value);
  display1.innerHTML = conversion(fromSeconds);
});

secondButton.addEventListener("click", function(e) {
  let fromYears = Number(getYears.value);
  let fromDays = Number(getDays.value);
  let fromHours = Number(getHours.value);
  let fromMinutes = Number(getMinutes.value);
  let fromSeconds = Number(getSeconds.value);
  display2.innerHTML = toSeconds(
    fromYears,
    fromDays,
    fromHours,
    fromMinutes,
    fromSeconds
  );
});

function checkAnswer(word) {
  let pass = "25920";

  if (word === pass) {
    window.location.href = "./ducks.html";
  } else {
    display3.innerHTML = "You are a loser!";
  }
}

buttonCheck.addEventListener("click", function(e) {
  let answerGeo = String(word.value);
  checkAnswer(answerGeo);
});
