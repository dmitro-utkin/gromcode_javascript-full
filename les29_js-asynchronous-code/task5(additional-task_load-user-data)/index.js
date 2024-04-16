function requestUserData(userId, callback) {
  const generateRandomDelay = () => Math.floor(Math.random() * 3000) + 1000;

  const executeCallback = (data, error) => {
      setTimeout(() => {
          if (error) {
              callback(null, 'Failed to load user data');
          } else {
              const userData = {
                  userId: userId,
                  email: userId + '@example.com'
              };
              callback(userData);
          }
      }, generateRandomDelay());
  };

  if (userId === 'broken') {
      executeCallback(null, true);
  } else {
      executeCallback();
  }
}

requestUserData('userid777', console.log);
requestUserData('broken', console.log)