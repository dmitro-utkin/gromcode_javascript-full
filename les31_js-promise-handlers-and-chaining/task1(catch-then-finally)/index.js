// requestUserData

const requestUserData = (userId) => {
  const request = new Promise((resolve, reject) => {
    if (userId === "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    }
    setTimeout(() => {
      resolve({
        name: "John",
        age: 17,
        email: `${userId}`,
        userId,
      });
    }, 1000);
  });

  return request;
};

requestUserData("broken")
  .catch(error => {
    console.log(error);
    throw new Error("Error");
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"))

// requestUserData("broken-1").then((data) => console.log(data));
