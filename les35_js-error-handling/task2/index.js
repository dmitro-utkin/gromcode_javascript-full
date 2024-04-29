// fetch('https://example.com');

// const succesRequest = Promise.resolve({  name: 'Tom',});

// succesRequest
//   .then(date => {
//     console.log(date);
//     throw new Error('Unexpected error');
//   })
//   .catch(err => {
//     console.warn(err.message)
//   });

// const failedRequest = Promise.reject(new Error('Fail'));

// failedRequest
//   .then(date => {
//     console.log(date);
//   })
//   .catch(err => {
//     console.warn(err.message);
//     throw err;
//     // return Promise.reject('err')
//   })
//   .then(date => {
//     console.log(date);
//   })

// window.addEventListener('unhandledrejection', function (e) {
//   console.log(e.reason.message);
// })

// ------------------------------
// ------------------------------
// ------------------------------

// fetch ('')
//   .then((response) => {
//     debugger;
//     if (response.status === 200) {
//       return response.json();
//     } 
//     throw new Error('No data');
//   })
//   .then((data) => console.log(data))
//   .catch(err => {
//     debugger;
//     console.log(err);
//   });
