//arrays

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);

//push

arr.push(11);

console.log(arr);

//pop

arr.pop();

console.log(arr);

//shift

arr.shift();

console.log(arr);

//unshift

arr.unshift(12);

console.log(arr);

//splice

arr.splice(2, 1);

console.log("Splice", arr);

//concat

let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];

let arr3 = arr1.concat(arr2);

console.log(arr3);

//sort

arr.sort();

console.log(arr);

//reverse

arr.reverse();

console.log(arr);

//indexOf

console.log(arr.indexOf(2));

//create array name favSingers, store 3 favourite singers

//log the first singer in that array

// create array name favNUmbers and store 4 favNUmbers

//create array name mixedArr ["string", ["other array"], 123, true]

//Now access each item in that array by using [] notation

const favSingers = ["Arijit", "Udit", "Sonu"];

console.log(favSingers[0]);

const favNUmbers = [1, 2, 3, 4, 5];

const mixedArr = ["sks", [1, 2], 123, true];

console.log(mixedArr[0]);
console.log(mixedArr[1][0]);
console.log(mixedArr[1][1]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);

console.log(favNUmbers.join("-"));

//object

let obj = {
  name: "Sudhir",
  age: 25,
  gender: "Male",
};

console.log(obj);

obj.name = "<NAME>";

console.log(obj);

obj.age = 26;

console.log(obj);

obj.gender = "Female";

console.log(obj);

//delete

delete obj.age;

console.log(obj);

//keys

console.log(Object.keys(obj));

//values

console.log(Object.values(obj));

//entries

console.log(Object.entries(obj));

//
//create object name car
//add (type , model, color) as properties

let car = {
  type: "Car",
  model: "BMW",
  color: "Blue",
};

console.log(car);

//check type of object

console.log(typeof car);

//update the type property to "TATA"

car.type = "TATA";

console.log(car);

//ass new property wheels

car.wheels = 4;

console.log(car);

//log car to the console

console.log(car);
