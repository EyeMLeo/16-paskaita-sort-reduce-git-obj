"use strict";
console.log("script.js");

// #  Sort

// 1. i ` <p id="nums"></p>` surasyti skaicius is `const nums = [5, 10, 1, 50, 12];`
const nums = [5, 10, 1, 50, 12];

let pNumsEl = document.getElementById("nums");
pNumsEl.textContent = nums.join(", ");

// 2. paspaudus pelyte ant to paragrafo isrikiuoti skaicius didejancia tvarka

pNumsEl.addEventListener("click", () => {
  nums.sort((a, b) => a - b);
  pNumsEl.textContent = nums.join(", ");
});

// 3. sugeneruoti ol sarasa is `const colors = ['red', 'green', 'blue', 'yellow'];`
const colors = ["red", "green", "blue", "yellow"];
let colorsOLEl = document.getElementById("colors");

function arrayToList(array) {
  return array.reduce((acc, spalva, i, arr) => {
    acc = acc + `<li>${spalva}</li>`;
    console.log("acc inside===", acc);
    return acc;
  }, "");
}

let colorList = arrayToList(colors);
console.log("colorList ===", colorList);

colorsOLEl.insertAdjacentHTML("afterbegin", colorList);
// 4. pridideti html mygtuka, kuri paspaudus isrikiuoti spalvas pagal abecele mazejancia tvarka
let sortColorsBtnEl = document.getElementById("sortColors");

sortColorsBtnEl.addEventListener("click", () => {
  colorsOLEl.innerHTML = "";
  colors.sort((a, b) => a.localeCompare(b));
  console.log("colors ===", colors);
  let newColorsList = arrayToList(colors);

  colorsOLEl.insertAdjacentHTML("afterbegin", newColorsList);
});

// ## users masyvas

const students = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Siauliai",
    hasCar: false,
  },
];

let averageStudentsLength = students.reduce((acc, el, i, arr) => {
  //   console.log("acc, sk,i,arr ===", acc, sk, i, arr);
  console.log(el.name.length);
  acc = acc + el.name.length / students.length;
  console.log("acc ===", acc);
  return acc;
}, 0);

console.log(averageStudentsLength);

// 1. gauti visu vardu ilgiu vidurki

// 2. grazinti jauniausia zmogu

let youngestStudent = students.reduce((acc, el, i, arr) => {
  console.log("acc ===", acc);
  console.log("el ===", el);

  if (acc.age < el.age) {
    return acc;
  } else if (acc.age >= el.age) {
    return (acc = el);
  }
}, students[0]);
console.log("youngestStudent ===", youngestStudent);

// 3. extra sunkesne. grazinti
//    ```javascript
//    const rez = {
//       London: 2,
//       Kaunas: 3,
//     };
//    ```
console.log(
  "====================================================================================="
);

let totalCities = students.reduce((acc, el, i, arr, cities) => {
  // Jeigu acc neturi jokio miesto pavadinimo
  if (JSON.stringify(acc).length <= 2) {
    acc[el.town] = 1;
  }
  // jeigu yra pirminis miestas arba daugiau
  else {
    // jeigu miestas jau egzistuoja sarase
    if (acc[el.town] >= 1) {
      acc[el.town] += 1;
    }
    // jeigu miestas NEegzistuoja sarase
    else {
      acc[el.town] = 1;
    }
  }
  console.log("acc ===", acc);
  return acc;
}, {});

// ## students masyvas
// ```javascript
const studentsOld = [
  {
    name: "James",
    gender: "male",
    age: 25,
    town: "Vilnius",
    hasCar: true,
  },
  {
    name: "Jill",
    gender: "female",
    age: 28,
    town: "Kaunas",
    hasCar: true,
  },
  {
    name: "Mike",
    gender: "male",
    age: 18,
    town: "Kaunas",
    hasCar: false,
  },
  {
    name: "Jane",
    gender: "female",
    age: 22,
    town: "Klaipeda",
    hasCar: false,
  },
  {
    name: "Jannet",
    gender: "female",
    age: 29,
    town: "Klaipeda",
    hasCar: true,
  },
  {
    name: "Cory",
    gender: "male",
    age: 30,
    town: "Siauliai",
    hasCar: true,
  },
  {
    name: "Minks",
    gender: "male",
    age: 19,
    town: "Vilnius",
    hasCar: false,
  },
];
// ```

// ### Students uzdaviniai

// 1r. suskaiciuoti studentu vyru amziu vidurki.
let maleStudentsAvg = students.reduce((acc, el, i, arr) => {
  if (el.gender == "male") {
    if (acc === 0) {
      acc = el.age;
    } else {
      acc = (acc + el.age) / 2;
    }
    console.log("el.age ===", el.age);
    console.log("acc ===", acc);
  }

  return acc;
}, 0);
console.log("maleStudentsAvg ===", maleStudentsAvg);
// 2r. suskaiciuoti vairuotoju amziu vidurki.

// 1. atrinkti i nauja masyva studentus kurie turi masina
let driversAVG = students.filter((element, index, array) => {
  if (element.hasCar === true) {
    return true;
  } else {
    return false;
  }
});

let averageDriversAge =
  driversAVG.reduce((acc, el) => {
    acc = acc + el.age;
    return acc;
  }, 0) / driversAVG.length;
console.log("driversAVG ===", averageDriversAge);
// 1.1 atrinkti i nauja masyva studentus kurie turi masina su forEach
let studentsHasACarFE = [];
students.forEach((element) => {
  console.log(element);

  if (element.hasCar === true) {
    console.log("element in if has car ===", element);
    studentsHasACarFE.push(element);
  }
});
console.log("studentsHasACarFE ===", studentsHasACarFE);
console.log("students ===", students);
// 2. Atrinkti i nauja masyva zmones is Vilniaus
let peopleFromVilnius = students.reduce((acc, el, i, arr) => {
  if (el.town == "Kaunas") {
    acc.push(el);
    console.log("if ran");
  }

  return acc;
}, []);
console.log("peopleFromVilnius ===", peopleFromVilnius);

// 3. Atrinkti i nauja masyva moteris
let onlyWomen = students.reduce((acc, el, i, arr) => {
  if (el.gender === "female") {
    acc.push(el);
  }
  return acc;
}, []);
console.log("onlyWomen ===", onlyWomen);

// 4. suzinoti ar yra nors vienas zmogus is Kauno

let isThereKaunas = students.reduce((acc, el, i, arr) => {
  if (el.town === "Kaunas") {
    acc = "there are kaunas elements";
  }

  return acc;
}, "not found");
console.log("isThereKaunas ===", isThereKaunas);

// 5. suskaiciuoti kiek zmoniu yra jaunesni nei 26
let youngerThan26 = students.reduce((acc, el, i, arr) => {
  if (el.age < 26) {
    acc++;
  }
  return acc;
}, 0);
console.log("youngerThan26 ===", youngerThan26);
// 6  Grazinti nauja masyva kuriame yra visu zmoniu amziai;
let agesOnly = students.reduce((acc, el, i, arr) => {
  acc.push(el.age);
  return acc;
}, []);
console.log("agesOnly ===", agesOnly);
// 6. Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas

let nameAndCity = students.reduce((acc, el, i, arr) => {
  let currentArrayEmptyTo = {};
  currentArrayEmptyTo["Name"] = el.name;
  currentArrayEmptyTo["Town"] = el.town;
  acc.push(currentArrayEmptyTo);
  return acc;
}, []);
console.log("nameAndCity ===", nameAndCity);

// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu

let studentsOrderList = `<ol>${students.reduce((acc, el, i, arr) => {
  acc += `<li>${el.name} ${el.age} met.</li>`;
  return acc;
}, "")}</ol>`;
document.body.insertAdjacentHTML("afterbegin", studentsOrderList);

console.log("studentsOrderList ===", studentsOrderList);
// 8. Gauti visu zmoniu metu suma .reduce
let allAgesAgain = students.reduce((acc, el, i, arr) => {
  acc += el.age;
  return acc;
}, 0);
console.log("allAgesAgain ===", allAgesAgain);

// 10  surasti zmongu vardu 'Mike' ir padaryti kad jis nusipirko masina yra tiesa
students.map((el, i, arr) => {
  if (el.name === "Mike") {
    el.hasCar = true;
  }
});
console.log("students ===", students);
// 11  sugeneruoti visus studentus su ju vardais ir amziais i atskirus p tagus ir patalpinti htmle

let newPTags = students.reduce((acc, el, i, arr) => {
  acc = `<p>${el.name} ${el.age} met.</p>`;
  document.body.insertAdjacentHTML("afterbegin", acc);
}, "");
