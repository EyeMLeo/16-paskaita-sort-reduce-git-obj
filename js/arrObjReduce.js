'use strict';
console.log('arrObjReduce.js');

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
    name: 'Serbentautas',
    age: 30,
    gender: 'male',
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

// gauti visu useriu amziu vidurki

const usersAvg = users.reduce((avg, uObj) => avg + uObj.age, 0) / users.length;

console.log('usersAvg ===', usersAvg);

const ages = users.map((uObj) => uObj.age).reduce((avg, sk) => avg + sk, 0) / users.length;
// obj destructuring
// const ages = users.map(({ age }) => age).reduce((avg, sk) => avg + sk, 0) / users.length;
console.log('ages ===', ages);

// 1gauti visu vardu ilgiu vidurki
