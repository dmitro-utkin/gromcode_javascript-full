const delay = (ms) => {
  return new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log('Done'));
  }, 3000);
  });
}

delay(3000)