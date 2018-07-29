// 1
function returnFirstArgument(anyParameter) {
    return anyParameter;
}

// 2
function sumWithDefaults(a, b) {

    b = b || 100;

    return a + b;

}

// 3
function fn(name) {
    return `Привет, ${name}!`
}

function returnFnResult(fn) {
    return fn;
}
returnFnResult(fn('Антон'));

// 4

function returnCounter(number) {

    var innerNumber = number;

    return function F() {
        return innerNumber = innerNumber + 1;
    }

}

// 5
function returnArgumentsArray() {  

    var array = [];
    
    for (var i = 0; i < arguments.length; i = i + 1){
        array.push(arguments[i]);
    }

    return array;
}

// 6
function fn(...subArgs) {

    var sum = 0;

    for (var i = 0; i < subArgs.length; i = i + 1){
        sum = sum + subArgs[i];
    }  

    return sum;

}

function bindFunction(fn, ...mainArgs) {

    var argumentsArray = [...mainArgs];
    return fn.apply(this, argumentsArray);
  
}
