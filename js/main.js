'use strict';
console.log('main.js');

// taikomes
const pNumsEl = document.getElementById('nums');
const nums = [5, 10, 1, 50, 12];
// 1. i ` <p id="nums"></p>` surasyti skaicius is `const nums = [5, 10, 1, 50, 12];`
const stringFromArray = nums.join(', ');
pNumsEl.textContent = stringFromArray;

// 2. paspaudus pelyte ant to paragrafo isrikiuoti skaicius didejancia tvarka
pNumsEl.addEventListener('click', () => {
  console.log('click');
  nums.sort((x, y) => x - y);
  pNumsEl.textContent = nums.join(', ');
});
