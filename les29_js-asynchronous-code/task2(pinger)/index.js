// pinger(num, period)

const pinger = (count, period) => {
  let i = count;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
    
  }, period);

  // setTimeout(() => {
  //   clearInterval(interval);
  // }, num * period);
}

pinger(5, 100);
pinger(7, 150);
