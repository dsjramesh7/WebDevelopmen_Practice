//objects
let user = {
  name: "ash",
  age: 19,
};
// console.log("ash age is " + user.age);

// Assignment 1 : Write a function that takes a user as an input and greets them with their name and age
const greetMessage = (a) => {
  console.log(`whatup ${a.name}!!!, your age is ${a.age} `);
};
// greetMessage(user);

// Assignment 2 : Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
let newUser = user;
newUser.gender = "male";
newUser["honorifics"] = "Mr";
// console.log("newUser", newUser);
const newUsergreet = (u) => {
  console.log(`Hi ${u.honorifics} ${u.name} age is ${u.age}`);
};
newUsergreet(newUser);

//Assignment 3 :Also tell the user if they are legal to vote or not
if (user.age >= 18) {
  console.log("you can vote");
} else {
  console.log("no you can't vote");
}
