let animeName = ["MHA", "Naruto", "AOT", "Demon Slayer"];

// console.log(animeName.length);
// console.log(animeName[2]); // haam zindagi

for (let i = 0; i < animeName.length; i++) {
  // console.log(animeName[i]); // mentos zindagi
}

// Assignment 1:Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
const arrayOfNum = [
  1, 123, 2, 5, 78, 23, 234, 345, 11, 234234, 65645, 99, 1, 67,
];

const findEvenInArray = (arrayOfNum) => {
  // console.log(arrayOfNum);
  return arrayOfNum.filter((element) => element % 2 === 0);
};
// console.log(findEvenInArray(arrayOfNum));

// assignment 2: create a function that takes an array of objects as input, and returns the users whose age > 18 and are male
let Users = [
  {
    username: "kira",
    age: 21,
    gender: "male",
  },
  {
    username: "ino",
    age: 22,
    gender: "female",
  },
  {
    username: "zoro",
    age: 17,
    gender: "male",
  },
  {
    username: "shawn",
    age: 11,
    gender: "male",
  },
  {
    username: "sakshi",
    age: 25,
    gender: "female",
  },
  {
    username: "kendo",
    age: 28,
    gender: "male",
  },
];

function conditionFilteredUser0(arr) {
  const newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male" && arr[i].age > 18) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

function conditionFilteredUser(usersarray) {
  return usersarray.filter((e) => e.age > 18 && e.gender === "male");
}

console.log(conditionFilteredUser0(Users));
console.log(conditionFilteredUser(Users));
