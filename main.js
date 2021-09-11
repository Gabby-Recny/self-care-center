var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
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


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


//Query Selectors
//
//
var receiveButton = document.querySelector('.receive-message-button');
//
// var radioSelector = document.querySelectorAll(".message-choice-box input[name='message']")

var messageBox = document.querySelector('.meditation-message-box');


//Event Listener

// receiveButton.addEventListener("click", generateMessage);


//   //The radio selector does not need an input value--the user already selects it
//   //Think event targets

// function generateMessage() {
//   if (message.userSelectedAffirmationMessage) {
//     return getRandomIndex(affirmations);
//   } else if (message.userSelectedMantraMessage) {
//     return getRandomIndex(mantras);
//   } else {
//     return "Please select mantra or affirmation"
//   }
// }


function userChoose() {
var affirmationChoice = document.getElementById("affOne");
var mantraChoice = document.getElementById("manTwo");

  if (affirmationChoice.checked === true) {
      console.log("This is your daily affirmation...");
  } else if (mantraChoice.checked === true) {
      console.log("This is your daily mantra...");
  } else
      console.log("Please select a daily message.");
}






// <input type="radio" id="affOne"
//  name="message" value="affirmation-choice">
//  <label for="affirmation-choice">affirmation</label>
// <input type="radio" id="manTwo"
//   name="message" value="mantra-choice">
//   <label for="mantra-choice">mantra</label>
// </div>





//able to add multiple events to the same element
//
