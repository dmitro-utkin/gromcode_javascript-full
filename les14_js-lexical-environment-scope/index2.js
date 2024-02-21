// messenger


const createMessenger = () => {
  let message = 'Hi!';

  function sendMessage(name) {
    const sender = "Gromcode";
    console.log(`${name}, ${message}. You ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
  }
};

const messenger1 = createMessenger();
messenger1.sendMessage('Bob')

// -------------------------------

const messenger2 = createMessenger();

messenger2.sendMessage('Tom');
messenger2.setMessage('Hello!');

messenger1.sendMessage('Ann');