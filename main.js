var mantras = [
  "Breathing in, I send myself love. <br> Breathing out, I send love to someone else who needs it.",
  "Don't let yesterday take up too much of today.",
  "Every day is a second chance.",
  " Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];



var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];



//Query Selectors

var receiveButton = document.querySelector('.receive-message-button');

var messageBox = document.querySelector('.meditation-message-box');

var messageText = document.querySelector('.message-text');

var meditationBell = document.querySelector('#meditation-bell-image');

var affirmationChoice = document.getElementById("affOne");

var mantraChoice = document.getElementById("manTwo");

var defaultBackground = document.querySelector('body');

var mantraBackground = document.querySelector(".mantra-background")

var affirmationBackground = document.querySelector(".affirmation-background")

//Event Listener

receiveButton.addEventListener("click", getWoke);


function getWoke() {
  userChoose();
  bellFade();
  textFade();
}

function userChoose() {
var affirmationOutput = affirmations[Math.floor(Math.random() * affirmations.length)];
var mantraOutput = mantras[Math.floor(Math.random() * mantras.length)];

  if (affirmationChoice.checked === true) {
      messageText.innerHTML = affirmationOutput;

      defaultBackground.style.background = "red";

      // defaultBackground.classList.add('affirmationBackground');
      // defaultBackground.classList.remove('mantraBackground');

  } else if (mantraChoice.checked === true) {
      messageText.innerHTML = mantraOutput;
      
      defaultBackground.style.background = "blue";

      // defaultBackground.classList.add('mantraBackground');
      // defaultBackground.classList.remove('affirmationBackground');

  } else {
      messageText.innerText = "Please select a daily message.";
    }
}

function bellFade() {
  meditationBell.classList.add('fade')
}

function textFade() {
  messageText.classList.add('fade')
}
