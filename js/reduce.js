'use strict';
console.log('reduce.js');

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const nums = [5, 7, 1, 50, 12];

// avg one way 5 + 7 + 1 + 50 + 12 = 75 / 5 = 15

// avg other way 5/5 + 7/5 + 1/5 + 50/5 + 12/5 = 15

// surasti bendra masyvo reiksmiu suma su forEach

{
  let total = 0;
  nums.forEach((sk, i, arr) => {
    // sumuoti su total
    total = total + sk;
  });
  // console.log('total ===', total);
  console.log('nums ===', nums);
  // surasti bendra masyvo reiksmiu suma su reduce
  // debugger;
  const reduceRezult = nums.reduce((total, sk, i, arr) => {
    // ispausdinti su konsole kiekvienos iteracijos:
    // indexa, total, sk
    const sum = total + sk;
    console.log(`iteracija: ${i}, sk: ${sk}, total: ${sum}`);
    return sum; // 1
  }, 0);
  console.log('reduceRezult ===', reduceRezult);
}

{
  // avg su forEach
  let total = 0;
  nums.forEach((sk, i, arr) => {
    // sumuoti su total
    total = total + sk;
  });
  const avg = total / nums.length;
  console.log('avg ===', avg);

  // one way
  // const avgReduce = nums.reduce((total, sk, i, arr) => total + sk, 0) / nums.length;

  const avgReduce = nums.reduce((total, sk, i, arr) => total + sk / arr.length, 0);

  console.log('avgReduce ===', avgReduce);
}

{
  // su forEach atrinkti didziausia masyvo reikme
  let maxVal = nums[0];
  nums.forEach((sk) => {
    // if (sk > maxVal) {
    //   maxVal = sk;
    // }
    maxVal = Math.max(maxVal, sk);
  });
  console.log('maxVal ===', maxVal);

  console.log('Math.max(5, 7, 1, 50, 12) ===', Math.max(5, 7, 1, 50, 12));
  console.log('Math.max(...nums) ===', Math.max(...nums));

  // su reduce atrinkti didziausia masyvo reikme
  // hint (Math.max()) palengvinimas

  const maxReduce = nums.reduce((max, sk) => Math.max(max, sk), nums[0]);
  console.log('maxReduce ===', maxReduce);
}

{
  // sugeneruoti html sarasa is masyvo
  const colors = ['red', 'green', 'blue', 'yellow'];
  // <ol id="colors"></ol>
  // const colEl = document.getElementById('colors');

  // map generate elements
  // const htmlString = colors.map((color) => `<li>${color}</li>`).join('');
  // console.log('htmlString ===', htmlString);

  // reduce
  const htmlString = colors.reduce((acc, color) => acc + `<li>${color}</li>`, '');

  // colEl.innerHTML = htmlString;
}
