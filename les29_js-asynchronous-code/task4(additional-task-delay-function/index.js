function delay(delay, callback, context = null, ...args) { 
  setTimeout(callback.bind(context, ...args), delay);
};


// Example
function greet(name) {
  console.log('Hello, ' + name + '!');
}

delay(2000, greet, null, 'John');

