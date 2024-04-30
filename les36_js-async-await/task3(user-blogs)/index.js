const getUsersBlogs = async users => {
  try {
    return await Promise.all(
      users.map(user => fetch(`https://api.github.com/users/${user}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(user => user.blog)
      )
    );
  } catch (error) {
    console.error("Помилка при отриманні даних про користувачів:", error);
    throw error;
  }
};


// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
