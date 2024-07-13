// console.log("Hi ");
// console.log("My name is subhankar");
// console.log("I am a webdeveloper");

//Function expression

// function fun() {
//   console.log("Hi ");
//   console.log("My name is subhankar");
//   console.log("I am a webdeveloper");
// }
// fun();

//with return value in console

// function fun() {
//   console.log("Hi ");
//   console.log("My name is subhankar");
//   console.log("I am a webdeveloper");

//   return "Hello Dev";
// }

//with arguments
// function fun(username) {
//   if (username === undefined) {
//     username = "Baba ";
//   }
//   console.log(`Hey Dev ${username}`);
// }
// fun("Raja");
// fun("Varun");
// fun();

// function fun(username) {
//   if (!username) {
//     username = "Baba ";
//   }
//   console.log(`Hey Dev ${username}`);
// }
// fun("Raja");
// fun("Varun");
// fun();

//Es6 introduce
// function fun(username = "Baba") {
//   console.log(`Hey Dev ${username}`);
// }
// fun("Raja");
// fun("Varun");
// fun();

function fun(username, age, profession) {
  console.log(typeof username);
  console.log(typeof age);
  console.log(`Hey ${username} is ${age} and he is a  ${profession}`);
}

fun("Raja", 29, "Developer");
