const lightOne = document.getElementById("light-1");
const lightTwo = document.getElementById("light-2");
const lightThree = document.getElementById("light-3");

const startAudio = document.getElementById("audio");
const lastAudio = document.getElementById("last-audio");
let interval1, interval2, interval3;

function start() {
  interval1 = setInterval(light1, 1000);
  interval2 = setInterval(light2, 2000);
  interval3 = setInterval(light3, 3000);
}

function redSound() {
  startAudio.play();
  startAudio.currentTime = 0;
}

function blueSound() {
  lastAudio.play();
  lastAudio.currentTime = 0;
}

function light1() {
  redSound();
  turnOn1(lightOne);
  setTimeout(() => turnOff1(lightOne), 1000);
  clearInterval(interval1);
}

function light2() {
  redSound();
  turnOn2(lightTwo);
  setTimeout(() => turnOff2(lightTwo), 1000);
  clearInterval(interval2);
}

function light3() {
  blueSound();
  turnOn3(lightThree);
  setTimeout(() => turnOff3(lightThree), 1500);
  clearInterval(interval3);
}

function turnOn1(light) {
  light.style.backgroundColor = "#ff1515";
}

function turnOn2(light) {
  light.style.backgroundColor = "#ff1515";
}

function turnOn3(light) {
  light.style.backgroundColor = "#3124f2";
}

function turnOff1(light) {
  light.style.backgroundColor = "#380e0e";
}

function turnOff2(light) {
  light.style.backgroundColor = "#380e0e";
}

function turnOff3(light) {
  light.style.backgroundColor = "#121032";
}
