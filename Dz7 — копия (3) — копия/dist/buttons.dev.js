"use strict";

var _clock = require("./Modules/clock.js");
var _stopwatch = require("./Modules/stopwatch.js");
var _timer = require("./Modules/timer.js");
var htmlElements = {
  startBtn: document.querySelector(".container-timer .buttons button.start"),
  stopBtn: document.querySelector(".container-timer .buttons button.stop"),
  resetBtn: document.querySelector(".container-timer .buttons button.reset"),
  watch: document.querySelector(".container-timer .watch"),
  timer: document.querySelector("container .links .timer")
};
htmlElements.startBtn = document.querySelector(".container .buttons button.start");
htmlElements.stopBtn = document.querySelector(".container .buttons button.stop");
htmlElements.resetBtn = document.querySelector(".container .buttons button.reset");
htmlElements.startBtnTimer = document.querySelector(".container-timer .buttons button.start2");
htmlElements.stopBtnTimer = document.querySelector(".container-timer .buttons button.stop2");
htmlElements.resetBtnTimer = document.querySelector(".container-timer .buttons button.reset2");
htmlElements.clock = document.querySelector(".container .links .clock");
htmlElements.watch = document.querySelector(".watch");
htmlElements.stopwatch = document.querySelector(".container .links .stopwatch");
htmlElements.timer = document.querySelector(".container .links .timer");
htmlElements.output = document.querySelector(".container .output");
htmlElements.containerClock = document.querySelector(".container-clock");
htmlElements.containerTimer = document.querySelector(".container-timer");
htmlElements.containerStopWatch = document.querySelector(".container-stopWatch");
htmlElements.input = document.querySelector(".container-timer .change change.newTime");
htmlElements.watchTimer = document.querySelector(".container-timer .watch");
document.getElementById("button1").style.color = "gray";
document.getElementById("button2").style.color = "gray";
document.getElementById("button3").style.color = "gray";

document.getElementById("button1").onclick = function () {
  this.style.color = "blue";
  document.getElementById("button2").style.color = "gray";
  document.getElementById("button3").style.color = "gray";
  var clock = new _clock.Clock({
    template: 'h:m:s'
  });
  clock.start();
};

document.getElementById("button2").onclick = function () {
  this.style.color = "blue";
  document.getElementById("button1").style.color = "gray";
  document.getElementById("button3").style.color = "gray";
  var stopWatchStart = new _stopwatch.StopWatchStart({
    template: 'h:m:s'
  });
  stopWatchStart.render();
  htmlElements.stopBtn.removeAttribute("hidden");
  htmlElements.startBtn.removeAttribute("hidden");
  htmlElements.resetBtn.removeAttribute("hidden");
  htmlElements.startBtn.addEventListener("click", stopWatchStart.runStopWatch);
  htmlElements.stopBtn.addEventListener("click", stopWatchStart.stopStopWatch);
  htmlElements.resetBtn.addEventListener("click", stopWatchStart.resetStopWatch);
};

document.getElementById("button3").onclick = function () {
  this.style.color = "blue";
  document.getElementById("button1").style.color = "gray";
  document.getElementById("button2").style.color = "gray";
  var timer = new _timer.Timer({
    template: 'h:m:s'
  });
  timer.render();
  htmlElements.startBtnTimer.addEventListener("click", timer.runTimer);
  htmlElements.stopBtnTimer.addEventListener("click", timer.stopTimer);
  htmlElements.resetBtnTimer.addEventListener("click", timer.resetTimer);
  htmlElements.watchTimer.addEventListener("click", htmlElements.input.removeAttribute("hidden"));
}; 
// document.querySelectorAll("[contenteditable]").onclick = function() {
//     editables.forEach(el => {
//         el.addEventListener("blur", () => {
//             localStorage.setItem("dataStorage-" + el.id, el.innerHTML);
//         })
//     });
//     // once on load
//     for (var key in localStorage) {
//         if (key.includes("dataStorage-")) {
//             const id = key.replace("dataStorage-", "");
//             document.querySelector("#" + id).innerHTML = localStorage.getItem(key);
//         }
//     }
// }