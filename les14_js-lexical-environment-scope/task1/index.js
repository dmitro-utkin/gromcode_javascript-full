let message = 'Just learn it';

function sendMessage(name) {
  console.log(`${name}, ${message}! Your Gromcode`);
}

function setMessage(text) {
  message = text;
}

sendMessage('Ann');
setMessage('Good job');
sendMessage('Ann');

module.exports = {
  sendMessage,
  setMessage,
};
