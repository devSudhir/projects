//loop

//for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//while loop

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// do while loop

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 10);

//logical operator

//&& , || and !

let x = 10;

if (x > 10 && x < 20) {
  console.log("x is greater than 10 and less than 20");
} else {
  console.log("x is less than 10 or greater than 20");
}

let y = 10;

if (y > 10 || y < 20) {
  console.log("y is greater than 10 or less than 20");
} else {
  console.log("y is less than 10 or greater than 20");
}

let z = 10;

if (!(z > 10 && z < 20)) {
  console.log("z is greater than 10 and less than 20");
} else {
  console.log("z is less than 10 or greater than 20");
}
