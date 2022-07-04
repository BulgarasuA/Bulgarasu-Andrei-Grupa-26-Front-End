console.log("----Begining-----");
var phrase = 'it\'s just javascript'
var phrase2 = "Javascrip is \"not\" too scary"
console.log(phrase,);
console.log(phrase2);

console.log("------Undefind & Null-----")
var undefindeage;
console.log(undefindeage)
undefindeage = 5;
console.log(undefindeage);
undefindeage = undefined;
console.log(undefindeage);
undefindeage = null;
console.log(undefindeage);

console.log("-------Operatii de adunare-----")
var x = 5;
var y = "20";
var total = x + y;
console.log (total);
x = 20;
var total = x + y;
console.log(total);

var age = 33;
var ageasastring = "44";
console.log(age + ageasastring)

console.log ("-------COMPARATORI---------");
var age = 33;
var ageString = "33";
if (age == ageString) {
    console.log("TRUUEEE");
} else {
    console.log("Not True");
}
 
var age =21;
var ageString = "33";
var gender = "Male"
var religie = "Catholic"
if (age > 30) {
    if (gender !== "Male")
    console.log("You are MALE 30 years old")
    else {
        console.log("You are Female 30 years old")
    }
} else if (age > 20) {
    if (religie !== "Catholic")
console.log("You are Catholic 20 years old")
else {
    console.log("You are noncatholic 20 years old")
}
} else if (age > 10) {
    console.log("You are 10 years old")
} else {
    console.log( "You are to young")
}
 
console.log("--------!NOT------")

var age = 16;
var minAge = 18;
var maxAge = 50;
if (!(age > minAge  || age < maxAge)){
    console.log("Acces allowed");
} else {
    console.log("Acces denied")
}
if ( age <= minAge  || age >= maxAge){
    console.log("Acces allowed");
} else {
    console.log("Acces denied")
}

console.log("----Arrays----")

var fruits = ["banana", "orange", "apple", "mango"]
console.log(fruits[0]);
console.log(fruits[fruits.length -1]);
console.log(fruits.join(" si "));
console.log(fruits.pop());
console.log(fruits.toString());
console.log(fruits.push("Mango")) 
console.log(fruits.toString());
console.log(fruits.shift());
console.log(fruits.toString());
console.log(fruits.toString());
console.log(fruits.unshift("Banana"));
console.log(fruits.toString());

var array1 = ['Andrei', 'Ilie', 'Gheorge'];
var array2 = ['George', 'Alex', 'Razvan'];
var array3 = ['Marius', 'Costel', 'MAx'];
console.log(array1.concat(array2).concat(array3));
console.log(array1.concat(array2, array3));

console.log(fruits.slice(3));
console.log(fruits.toString());
console.log(fruits.slice(4));

console.log(fruits.toString());
console.log(fruits.splice(2, 2, "Adauga ceva"));
console.log(fruits.toString());
var number = [300, 200, 201, 2033, 0, 2];
console.log(number.sort(function (a,b) { return a-b}));

var person1= {
    firstName: "Andrei",
    age: 19
}
var person2 = {
    firstName: "Ilie",
    age: 21
}
var person3 = {
    firstName:"Max",
    age: 18
}
var person4 = {
    firstName: "George",
    age: 23
}
var personArray = [ person1, person2, person3, person4];


console.log(personArray.sort(function (a,b){
    if(a.firstName > b.firstName)
    return 1;
    else if(a.firstName < b.firstName)
    return -1;
    else 
    return 0;
}));


var ageb = 16;
var minAgeb = 18;
var maxAgeb = 50;
if (ageb > minAgeb || ageb < maxAgeb){
    console.log("Acces allowed");
} else {
    console.log("Acces denied")
}

