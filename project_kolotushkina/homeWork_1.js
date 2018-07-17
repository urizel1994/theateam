//Numbers

console.log((80/2 -4) - (80/2 -4) / 3);
console.log(9+1-(2017%2-1)*6);
console.log((1+2+4+8)*5);

//String

console.log('Hello ' + 'javascript');
console.log('quick brown fox jumped over lazy dog'.indexOf('j'));
console.log('Goodbye javascript'.replace('Goodbye', 'Hello'));
console.log('mississippi'.replace(/i/g, '!'));

//Variables

const red = 10;
const blue = 20;
const yellow = 40;
const purple = blue + red;
const green = yellow + blue;
const orange = yellow + red;
const black = green + orange + purple;
console.log(black);

const hello = 'Привет';
const goodbye = 'Пока';
const name = 'Пётр';
// console.log(hello + ', ' + name + '. ' + goodbye + ', ' + name);
console.log(`${hello}, ${name}. ${goodbye}, ${name}.`);

//Functions
const seconds = (total) => total % 60;
console.log(seconds(160));

const perimeter = (side, count) => side * count;
console.log(perimeter(5,7));

const pedestrianFlowRate = (cycleLength, trafficLength, turningLength) => (cycleLength - (trafficLength + turningLength))/cycleLength*100;
console.log(`${pedestrianFlowRate(60,35,19)}%`);

//If statement
const fizzbuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    else if (number % 3 === 0) return 'Fizz';
    else if (number % 5 === 0) return 'Buzz';
    else return number;
};
console.log(fizzbuzz(30));

const iGoToNorth = (number) => number > 10 && number < 30 && number % 7 === 0;
console.log(iGoToNorth(21));

//While loop
const isPlain = (number) => {
   for (let i = 2; i <= number / 2; i++) {
       if (number % i === 0) return false;
   }
   return true
};
console.log(isPlain(23));

const fib = (number) => {
    if (number < 3) return 1;
    let fib1 = 1;
    let fib2 = 1;
    let fib3;
    for (let i = 3; i <= number; i++) {
        fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
    }
    return fib3;
};
console.log(fib(8));

const digitSumm = (number) => {
    let num = number;
    let sum = 0;
    while (num !== 0) {
        sum += num % 10;
        num = (num - num % 10)/10;
    }
    return sum >= 0 ? sum : -sum;
};
console.log(digitSumm(-11340009));

//Object
let book = {
    name: 'Программирование на Javascript',
    type: 'Book'
};

let cat = {
    name: "Fluffy",
    likes: 'milk'
};
const isACat = (cat) => cat.name === 'Garphield' || cat.likes === 'milk';
console.log(isACat(cat));

//Array
const array = [7,8,9,10,11,12,13];
console.log(array);

const summ = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};
console.log(summ(array));

const evens = (array) => {
    let newArray = [];
    array.forEach((num) => {
        if (num % 2 === 0)
            newArray.push(num)
    });
    return newArray;
};
console.log(evens(array));

const array2 = [3,4,5];
const combination = (array1, array2) => {
    let newArray = [];
    array1.forEach((num)=> {
        array2.forEach((num2) => {
            newArray.push([num, num2])
        })
    });
    return newArray
};
console.log(combination(array, array2));

//String one more time
let string = 'Hello';
console.log(string.concat(' ', 'coding', ' ', 'in', ' ', 'javascript'));

string = 'Coding in javascript';
console.log(string.substr(5, 8));
console.log(string.substring(5, 13));