//часть 1
function returnFirstArgument(arg1) {
    return arg1
}
console.log(returnFirstArgument(10));
console.log(returnFirstArgument('привет'));


function sumWithDefaults(a, b = 100) {
    return a+b;
}
console.log(sumWithDefaults(10, 20));
console.log(sumWithDefaults(2, 4));
console.log(sumWithDefaults(10));



function returnFnResult(fn) {
    return fn();
}
console.log(returnFnResult(() => 'привет'));



function returnCounter(number) {
    let num = number;
    return function() {
        return num++;
    }
}
let f = returnCounter(10);
console.log(f());
console.log(f());
console.log(f());



function returnArgumentsArray(...args) {
    return args;
}
console.log(returnArgumentsArray(1, 2, 3));



function bindFunction(fn, ...args) {
    return  fn.bind(undefined,...args);
}
function sum(a, b) {
    return a + b;
}
let newSum = bindFunction(sum, 2, 4);
console.log(newSum());

//часть 2
//forEach
function forEach(array, fn) {
    for (let i=0; i<array.length; i++)
        fn(array[i]);
}
let array = [1,2,3];
function fn(arr) {
    console.log(arr + 2);
}
array.forEach(fn);
forEach(array,fn);

//map
function map(array, fn) {
    let result = [];
    for (let i=0; i<array.length; i++)
        result.push(fn(array[i]));
    return result
}
function fn1(arr) {
    return arr +2;
}

array1 = array.map((arr) => arr +2);
array11 = map(array,fn1);
console.log(array1);
console.log(array11);

//reduce

function reduce(array, fn, initial) {
    let result = [];
    result.push(initial);
    for (let i=0; i<array.length; i++)
        result.push(array[i]);
    let resultValue = result[0];
    for (let i=1; i<result.length ; i++){
        resultValue = fn(resultValue, result[i]);}
    return resultValue
}

console.log(array.reduce(function(a, b) {
    return a + b;
}));
console.log(reduce(array, function(a, b) {
    return a + b;
}, 2));


//obj
function upperProps(obj) {
    let result = [];
    for (let prop in obj) {
        result.push(prop.toUpperCase());
    }
    return result;
}

console.log(upperProps({ name: 'Сергей', lastName: 'Петров' }));

//slice

function slice(array, from, to) {
    let result = [];
    for (let i=from; i<to; i++)
        result.push(array[i]);
    return result
}
console.log(array.slice(1,2));
console.log(slice(array,1,2));