let thala = "7";

let jerseyNumber = Number(thala);

//  method 2

thala = Number(thala);

console.log(typeof thala);

// to convert anythg into a number use Number()

// NaN means not a number but still it shows as a number when u use type of
// value of null will be 0 when u log
// undefined also be NaN
// "33abc" will be NaN bcz its a not pure number
// for true/false it will be converted to 1 or 0 (binary)

/*
"33" => 33
"33abc" => NaN
"abc" => NaN
undefined => NaN
null => 0
true=> 1
false => 0
*/
console.log("---------Conversion to Boolean---------");
let num = 1;

num = Boolean(num);
console.log(num);

let num1 = 0;
num1 = Boolean(num1);
console.log(num1);

// 1 => true
// 0 => false
// "" => false
// "string" => true
// so empty strings indicate false while string containing smtg is true

console.log("========conversion to string");

let number = 33;

number = String(number);

console.log(number);
console.log(typeof number);

//
