//type conversion

let x = "10";

console.log(typeof x);

//converting string to number

let y = Number(x);

console.log(y, typeof y);

let z = +x;

console.log(z, typeof z);

let zz = parseInt(x);

console.log(zz, typeof zz);

//converting number to string

x = 20;

let s1 = x.toString();

console.log(s1, typeof s1);

let s2 = x + "";

console.log(s2, typeof s2);

let s3 = String(x);

console.log(s3, typeof s3);

//converting string to decimal

let money = "23.11";

console.log(money, typeof money);

let money1 = parseFloat(money);

console.log(money1, typeof money1);
