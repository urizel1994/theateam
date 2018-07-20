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
        fn(array[i], i, array);
}
let array = [1,2,3];
function fn(arr,index, array) {
    console.log(`${index}: ${arr + 2} in ${array}`);
}
array.forEach(fn);
forEach(array,fn);

//map
function map(array, fn) {
    let result = [];
    for (let i=0; i<array.length; i++)
        result.push(fn(array[i], i , array));
    return result
}
function fn1(arr, index, array) {
    return arr + index + array.length;
}

array1 = array.map(fn1);
array11 = map(array,fn1);
console.log(array1);
console.log(array11);

//reduce

function reduce(array, fn, initial) {
    let accumulator, current, result;
    if (initial) {
        accumulator = initial;
        current = 0;
    } else {
        accumulator = array[0];
        current = 1;
        if (!array.length) {
            throw new TypeError('Reduce of empty array with no initial value\n')
        }
    }
    for (let i = current; i<array.length; i++){
        accumulator = fn(accumulator, array[i], i, array)
    }
    return accumulator;

}
array = [1];
console.log(array.reduce(function(a, b, index, array) {
    return a + b;
}));
try {
    console.log(reduce(array, function(a, b) {
        return a + b;
    }));
} catch (e) {
    console.log(e)
}



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

function slice(array, from = 0, to = array.length) {
    let result = [];
    if (from < 0) {
        from = array.length + from ;
    }
    if (to < 0) {
        to = array.length + to ;
    }
    if (to > array.length) {
        to = array.length
    }
    for (let i=from; i<to; i++)
        result.push(array[i]);
    return result
}
array = [1,2,3,4,5];
console.log(array.slice(-3,-1));
console.log(slice(array,-3,-1));