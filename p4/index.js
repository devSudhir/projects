//Relational oprators
//comparision operators

//> < >= <=

console.log(10 >= 10);

console.log(10 <= 10);

console.log(10 > 10);

console.log(10 < 10);

//Equality operators

//==, === and !== are equality operators

console.log(10 == 10);

console.log(10 === 10);

console.log(10 !== 10);

console.log(10 == "10");
console.log(10 === "10");

//challenge - 3

// create a variable name firstFavNumber and store your fav number

let firstFavNumber = 3;

//create a variable name secondFavNumber and store your fav number

let secondFavNumber = 7;

// check firstFavnumber is greater than secondFavNumber

console.log(firstFavNumber > secondFavNumber);

// check firstFavnumber is less than secondFavNumber

console.log(firstFavNumber < secondFavNumber);

// check firstFavnumber is greater than or equal to secondFavNumber

console.log(firstFavNumber >= secondFavNumber);

// check firstFavnumber is less than or equal to secondFavNumber

console.log(firstFavNumber <= secondFavNumber);

//check firstFavNumber is equal to secondFavNumber using strict equalty operator

console.log(firstFavNumber === secondFavNumber);

//check firstFavNumber is not equal to secondFavNumber using strict equalty operator

console.log(firstFavNumber !== secondFavNumber);

//check firstFavNumber is equal to secondFavNumber using loose equalty operator

console.log(firstFavNumber == secondFavNumber);

//Strings
let firstName = "Sudhir";
let secondName = "Samantaray";

//String concatenation

let fullName = firstName + " " + secondName;

console.log(fullName);

//built-in methods

console.log(firstName.concat(secondName));

//Appending

firstName += " Kumar ";
console.log(firstName);

//Cases

console.log(firstName.toLowerCase());

console.log(firstName.toUpperCase());

//slice

console.log(firstName.slice(0, 9));

//split and join

console.log(firstName.split(" "));

console.log(firstName.split("").join(" "));

//includes

console.log(firstName.includes("Kumar"));

//trim

console.log(firstName.trim());

console.log(fullName);

//challenge - 4

// create a varible name favCricketerFirstName and store your fav cricketer first name

let favCricketerFirstName = "M.S.";

//create a varible name favCricketerLastName and store your fav cricketer last name

let favCricketerLastName = "Dhoni";

//create a variable name fullCricketerName and concatenate (favActorFirstName and favActorLastName)

let fullCricketerName = favCricketerFirstName + " " + favCricketerLastName;

//crate a variable name uppercase and CAPITALISE your fav cricketer full name

let uppercase = fullCricketerName.toUpperCase();

console.log(uppercase);

//crate a variable name message and store `My favourite cricketer is favCricketerFullName and say something about him`

let message = `My favourite cricketer is ${fullCricketerName} and he is captain cool`;

console.log(message);
