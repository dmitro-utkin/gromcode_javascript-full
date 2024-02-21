// sendMessage

// without 'use strict';
// message = "Just learn it!";

// const sendMessage = (name) => {
//   sender = "Gromcode";
//   console.log(`${name}, ${message}. You ${sender}`);
// };

// sendMessage("Tom");

"use strict";

// ---------------------------------
// function expression
// ---------------------------------

// const message = "Just learn it!";

// sendMessage("Tom");

// const sendMessage = (name) => {
//   const sender = "Gromcode";
//   console.log(`${name}, ${message}. You ${sender}`);
// };

// ERROR //
// --------------------------------------
// --------------------------------------
// --------------------------------------


// --------------------------------------
// function declaration
// --------------------------------------

let message = "Just learn it!";

// sendMessage("Tom");

function sendMessage(name) {
  const sender = "Gromcode";
  console.log(`${name}, ${message}. You ${sender}`);
};

// sendMessage("Tom");

//  NO ERROR //
// -----------------------------------------------
// -----------------------------------------------
// -----------------------------------------------

function setMessage(text) {
  message = text;
}

sendMessage("Tom");

setMessage("Hello!");

sendMessage("Tom");

// message ='Hi!';

// sendMessage('Tom');