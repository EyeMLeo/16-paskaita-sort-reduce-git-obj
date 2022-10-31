'use strict';
console.log('simpleSort.js');

const words = ['z', 'a', 'm', 'h'];

const nums = [5, 10, 1, 50, 12];

// console.table(users);

console.log('words ===', words);
console.log('nums ===', nums);

// zodziai nuo a-z
words.sort();
console.log('words ===', words);

// nums nuo didejancia tvarka
nums.sort(); // skaitinems reiksmems, neveikia
console.log('nums ===', nums);

// nums.sort(fn);
// fn grazina 3 galimas reiksmes,
// teigiama, neigiam arba nuli
//
nums.sort((a, b) => a - b);
console.log('nums ===', nums);
// mazejancia tvarka
nums.sort((a, b) => b - a);
console.log('nums mazejancia ===', nums);

// isplestine sort versija (supratimui)
nums.sort((a, b) => {
  const diff = a - b;
  if (diff > 0) {
    return 1;
  } else if (diff < 0) {
    return -1;
  } else if (diff === 0) {
    return 0;
  }
});
console.log('nums ===', nums);
