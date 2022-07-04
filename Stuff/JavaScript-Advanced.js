console.log("----COntrol Structures----")

var hour = 16;
var greeting;

if(hour < 18){
    greeting = "good day"
} else {
    greeting = "good evening"
}
console.log(greeting)


console.log("------SWITCH-------")
var dayofWeek = 6;
var isSunny = true;
var isCloudy = false;
var isRain = true;

switch(dayofWeek) {
    case 4:
        case 5:
            console.log("Soon Is weekend(Grupare)");
            break;
    case 6:
        if(!isSunny || !isCloudy) 
        console.log("Today is Saturday an is sunny(TRUE)");
        else {
            console.log("Today is Saturday an is no sunny(FALSE)");
        }
        break;
        case 0:
            console.log("Today is Sunday");
            break;
            case 5:
                console.log("today is friday");
                if(isRain){
                    console.log("Today is Friday and raining");
                break;
                }
            default:
                console.log("Looking for the Weekend");
                break;

}

console.log("----Array---")

var person1 ={
    firstName: "Andrei",
    age:20
}
var person2 ={
    firstName: "Ilie",
    age:18
}
var person3 = {
    firstName: "Vasile",
    age:21
}
var person4 ={
    firstName: "Gheorghe",
    age:22
}
var personArray = [ person1,person2,person3,person4];

for (var indexx = 0; indexx < personArray.length; indexx++) {
    console.log("Using index:" + personArray[indexx].firstName);
}
for(var index in personArray) {
    console.log("Using another index" + personArray[index].age);
}

personArray.forEach( x => console.log("Using another index: " + x.firstName));

for(var person of personArray) {
    console.log("Using object: " + person.firstName)
}


console.log("-------Structuri Repetitive-------")

for(var i=0; i < 100; i++){
    if(i % 20 === 0)
    console.log("The number is:", i);
}

var counter = 11;

do {
    console.log("Using do: " + counter)
    counter++
} 
while(counter < 10);

var counter1 = 1;

while( counter1 < 10 ) {
    console.log("Using while: " + counter1);
    counter1++;
}

console.log("-----Stopping conditions------")

for(var i =0; i < 100; i++) {
    if(i % 7 === 0)
    {
    console.log("Divided by 7: " + i);
     }
}

for(var i =0; i < 100; i++) {
    if(i % 11 !== 0) 
    break;
    {
    console.log("Divided by 11: " + i);
     }
}

counter1 = 0;
while( counter1 < 10 ) {
    console.log("Using while with break: " + counter1);
    counter1++;
    if( counter1 === 6)
    break;
}


console.log("-----Unary operator-----")
console.log(typeof person1.firstName);
console.log(typeof person1.age);

console.log("-----Ternary operator-----")

if(person1.age > 10) {
console.log("On if statemant");
} else { 
console.log("Else Statemant");
}

console.log(person1.age > 22  || person2.age < 20? "On if statemant" : "Else Statemant" );







