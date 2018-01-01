// const person = {
//     age: 22,
//     location: {
//         city: 'kathmandu',
//         temp: 14
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: tempature } = person.location;
// if (city && tempature) {
//     console.log(`It's ${tempature} in ${city}. `);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName= "Self-Published" } = book.publisher;

// console.log(`${ publisherName}`);

// Array destructuring 
// const address = ['26 Bhim marga', 'Kathmandu', 'Bagmati', '44277'];
// const [, city, state = 'Janakpur'] = address;
// console.log(`Your are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medium, ] = item;
console.log(`A medium ${coffee} costs ${medium}. `);