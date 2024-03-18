export const tasks = [
    { text: 'Buy milk', done: false, id: '1' },
    { text: 'Pick up Tom from airport', done: false, id: '2' },
    { text: 'Visit party', done: false, id: '3' },
    { text: 'Visit doctor', done: true, id: '4' },
    { text: 'Buy meat', done: true, id: '5' },
];

const storage ={};

export const setItem = (key, value) => {
    Object.assign(storage, { [key]: value });
};

export const getItem = key => storage[key];