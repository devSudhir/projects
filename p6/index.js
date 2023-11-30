//control flow statements

//if statement

let x = 10;

if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

//if else statement

if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}

// if else if statement

if (x > 10) {
  console.log("x is greater than 10");
} else if (x < 10) {
  console.log("x is less than 10");
} else {
  console.log("x is equal to 10");
}

//challenge - 5

//create a variable name password store nothing
//if password is equals to 8 characters print "Welcome"
//if password is less than 8 characters print "Password is too short"
//If password is greater than 8 characters then print "Password is too long and it should be 8 characters"
//if all false print "Please provide a password"

let password = "Sudhir234";

if (password.length == 8) {
  console.log("Welcome");
} else if (password.length < 8) {
  console.log("Password is too short");
} else if (password.length > 8) {
  console.log("Password is too long and it should be 8 characters");
} else {
  console.log("Please provide a password");
}

//switch case

x = 10;

switch (x) {
  case 10:
    console.log("x is 10");
    break;
  case 20:
    console.log("x is 20");
    break;
  case 30:
    console.log("x is 30");
    break;
  case 40:
    console.log("x is 40");
    break;
  case 50:
    console.log("x is 50");
    break;
  case 60:
    console.log("x is 60");
    break;
  case 70:
    console.log("x is 70");
    break;
  case 80:
    console.log("x is 80");
    break;
  case 90:
    console.log("x is 90");
    break;
  case 100:
    console.log("x is 100");
    break;
  default:
    console.log("Invalid value of x");
}

//challenge

//create a variable name fruit and store "banana" in it.
//if case is "banana" print "banana is good"
//if case is "Orange" print "I am not fan of orange"
//If case is apple print "I like apple"
//dafult "I have never heard of that fruit"

let fruit = "banana";

switch (fruit) {
  case "banana":
    console.log("banana is good");
    break;
  case "Orange":
    console.log("I am not fan of orange");
    break;
  case "apple":
    console.log("I like apple");
    break;
  default:
    console.log("I have never heard of that fruit");
}
