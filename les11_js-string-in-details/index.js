// const splitText = (text, len = 10) => {
//   if (typeof text !== 'string') {
//     return null;
//   }

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

//   return strArr.join()
// };

// console.log(splitText('abcdefghasdfglk', 4));
// console.log(splitText('abcdefghasdfghjkweeereyey'));

// function splitText(str, chunkLength = 10) {
//   if (typeof str !== 'string') {
//     return null;
//   }

//   const result = [];
//   for (let i = 0; i < str.length; i += chunkLength) {
//     result.push(str.substr(i, chunkLength));
//   }

//   const formattedResult = result.map((substr) => substr.trim().toLowerCase()).map((substr) => substr.charAt(0).toUpperCase() + substr.slice(1));
//   return formattedResult.join('\n');
// }

// console.log(splitText('abcdefgh', 4));
// console.log(splitText('abcdefgh'));

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const contacts = [
//   {
//     name: 'Tom',
//     phoneNumber: '666-66-66',
//   },
//   {
//     name: 'John',
//     phoneNumber: '555-55-55',
//   },
//   {
//     name: 'Ann',
//     phoneNumber: '444-44-44',
//   },
//   {
//     name: 'Stephan',
//     phoneNumber: '333-33-33',
//   },
//   {
//     name: 'Suzy',
//     phoneNumber: '222-22-22',
//   },
//   {
//     name: 'Adel',
//     phoneNumber: '111-11-11',
//   },
// ];

// const sortContacts = (arr, isAsc = true) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
  
//   const sortedContacts = arr.slice().sort((a, b) => {
//     const comparison = a.name.localeCompare(b.name);
//     return isAsc ? comparison : -comparison;
//   });

//   return sortedContacts;
// };

// console.log(sortContacts(contacts));
// console.log(sortContacts(contacts, false));

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// const splitText = (text, len = 10) => {
//   if (typeof text !== 'string') {
//     return null;
//   }

//   const strArr = [];
//   let startPosition = 0;

//   while (startPosition < text.length) {
//     let chunk = text.substr(startPosition, len);

//     if (chunk.length === 0) {
//       break;
//     }

//     if (startPosition + len >= text.length) {
//       const remainingChars = len - (text.length - startPosition);
//       chunk = chunk.padEnd(remainingChars, '.');
//     }

//     strArr.push(chunk);
//     startPosition += len;
//   }

//   return strArr;
// };

// const splitText = (text, len = 10) => {
//   if (typeof text !== 'string') {
//     return null;
//   }

//   const strArr = [];
//   let startPosition = 0;

//   while (startPosition < text.length) {
//     let chunk = text.substr(startPosition, len);

//     if (chunk.length === 0) {
//       break;
//     }

//     chunk = (startPosition + len >= text.length) 
//       ? chunk.padEnd(len, '.') 
//       : chunk;
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPosition += len;
//   }

//   return strArr;
// };

// const splitText = (text, len = 10) => {
//   return typeof text !== 'string' 
//   ? null 
//   : text.match(new RegExp(`.{1,${len}}`, 'g'))
//         .map((chunk, index, array) => 
//         index === array.length - 1 
//           ? chunk.padEnd(len, '.') 
//           : chunk[0].toUpperCase() + chunk.slice(1));
// };

// console.log(splitText('abcd efgh', 4)); // Output: ['Abcd', ' Efgh', 'H...']

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

const countOccurrences = (text = '', str) => {
  if (str === '') {
    return null;
  }

  text = text || '';

  const matches = text.match(new RegExp(str, 'g')) || [];

  return matches.length;
};

// Example usage:
console.log(countOccurrences('hello, hello, hello', 'hello')); // Output: 3
console.log(countOccurrences('abcdabefab', 'ab')); // Output: 3
console.log(countOccurrences('', 'test')); // Output: 0
console.log(countOccurrences('test', '')); // Output: null