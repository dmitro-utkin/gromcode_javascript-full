// defer(func, ms) => Function

function defer(func, ms) {
    return function() {
        // setTimeout(() => func(...arguments), ms);
        setTimeout(() => func.call(this, ...arguments), ms);
        // setTimeout(() => func.apply(this, arguments), ms);
    }
}

// const sayHi = () => {
//     console.log('Hi');
// }
// const sum = (a, b) => {
//     console.log(a + b);
// }

// const user = {
//     name: 'Tom',
//     sayHi() {
//         console.log(`Hi. I'm ${this.name}!`)
//     }
// }

// sayHi();

// const deferredSayHi = defer(sayHi, 1000);
// const deferredSum = defer(sum, 1000);
// const deferredHi = defer(user.sayHi.bind(user), 1000);
// const deferredHi = defer(user.sayHi, 1000);

// deferredHi.call({ name: 'Bob' });