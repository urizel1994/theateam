// Numbers
// 1.1 
(80 / 2 - 4) / 3 * 2;

// 1.2
9 + 1;

// 1.3
(1 + 2 (1 + 1*2 + 1*2*2)) * 5;


// Strings
// 2.1
const js = 'Hello ' + 'javascript';
console.log(js);

// 2.2
'quick brown fox jumped over lazy dog'.indexOf('j');

// 2.3
'Goodbye javascript'.replace('Goodbye', 'Hello');

// 2.4
'mississippi'.replace(/i/g, '!');


// Variables
// 3.1
var red = 10;
var blue = 20;
var yellow = 40;
var purple = red + blue;
var green = blue + yellow;
var orange = red + yellow;
var black = purple + green + orange;
console.log(black);

// 3.2
var hello = 'Привет, ';
var goodbye = 'Пока, ';
var name = 'Пётр';
var helloGoodbye = hello + name + '. ' + goodbye + name + '. ';
console.log(helloGoodbye);


// Functions
// 4.1
function seconds (total) {
    return total % 60;
}

// 4.2
function perimeter (side, count) {
    return side * count ;
}

// 4.3
function pedestrianFlowRate (cycleLength, trafficLength, turningLength) {
    return cycleLength - (trafficLength + turningLength);
}