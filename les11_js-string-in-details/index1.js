// const text = 'message';

// const myMessage = `
//   The text is ${text.toLocaleUpperCase()},
//   And something else.
// `;

// // console.log(myMessage);
// // console.log(text[0]); // m
// // console.log(text[text.length - 1]); // e
// // console.log(text[text.length]); // undefined

// console.log(text.charAt(text.length)); // 
// console.log(text.charAt(1)); // e

// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------
// ----------------------------------------------------

// splitText

// splitString('abcd efgh', 4) => 'Abcd\n efg\nH...'

// 1. 'abcdefgh' => ['abcd', 'efgh']
// 2. ['abcd', 'efgh'] => ['Abcd', 'Efgh']
// 3. 'Abcd\nEfg'

// const splitText = (text, len) => {
//   const strArr = [];
//   let startPosition = 0;

//   while(true) {
//     let chunk = text.substr(startPosition, len);

//     if(chunk.length === 0) {
//       break;
//     }

//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPosition += len;

    
//   }

//   return strArr.join('\n')
// };

// console.log(splitText('abcdefgh', 4));
