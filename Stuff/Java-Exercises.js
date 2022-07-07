console.log("-----Verifica de care tip este variabila------");

var variable = 1122132;
switch (typeof variable) {
  case "boolean":
    console.log("I`m boolean");
    break;
  case "object":
    console.log("I`m Object");
    break;
  case "function":
    console.log("I`m a function");
  case "number":
    console.log("I`m a number");
}
console.log("-----------------");

console.log("----Gaseste numarul maxim-----");
var numberArray = [11, 4, 9, 100, 88, 0, 1001, 77];

var max = numberArray[0];
for (var i = 0; i < numberArray.length - 1; i++) {
  if (numberArray[i] > max) {
    max = numberArray[i];
  }
}
console.log("Numarul maxim este: " + max);

console.log("----Gaseste numarul minim-----");
var min = numberArray[0];
for (i = 1; i < numberArray.length; i++) {
  if (numberArray[i] < min) {
    min = numberArray[i];
  }
}
console.log("Numarul minim este: " + min);

console.log("----Gaseste suma numerelor-----");

var suma = 0;
for (i = 0; i < numberArray.length - 1; i++) {
  suma = suma + numberArray[i];
}
console.log("Suma numerelor este de: " + suma);

var age = 20;

if (age < 20) {
  console.log("True");
} else {
  console.log("Not true");
}

anytype = ["Andrei", "George", "Alexandru", "Marius"];

for (i = 0; i < anytype.length; i++) {
  console.log(anytype[i]);
}

for (i = anytype.length; i >= 0; i--) {
  console.log(anytype[i]);
}

ages = 30;

do {
  console.log(ages);
  ages++;
} while (ages < 40);
{
}
