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
