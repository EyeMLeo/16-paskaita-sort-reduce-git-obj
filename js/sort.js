'use strict';
console.log('sort.js');

const users = [
  {
    name: 'James',
    age: 65,
    gender: 'male',
    town: 'London',
  },
  {
    name: 'Jane',
    age: 27,
    gender: 'female',
    town: 'Kaunas',
  },
  {
    name: 'Mike',
    age: 35,
    gender: 'male',
    town: 'Kaunas',
  },
  {
    name: 'June',
    age: 47,
    gender: 'female',
    town: 'London',
  },
];

console.table(users);

// isrikiuoti pagal amziu didejanciai
// users.sort((a, b) => a.age - b.age);
// console.table(users);

// isrikiuoti pagal amziu mazejanciai
// users.sort((a, b) => b.age - a.age);
// console.table(users);

console.log(users[0].town > users[1].town);

// rikiuojam pagal miesta
users.sort((a, b) => (a.town > b.town ? 1 : -1));
console.table(users);

// rikiuojam pagal gender
users.sort((a, b) => a.gender.localeCompare(b.gender));
console.log('a.gender.localeCompare(b.gender)');
console.table(users);

// isrikiuoti musu masyva pagal varda
// az
// za
