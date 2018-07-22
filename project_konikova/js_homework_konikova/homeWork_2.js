// 1
function returnFirstArgument(anyParameter) {
    return anyParameter;
}

// 2
function sumWithDefaults(a, b) {

    if (b === undefined) {
        b = 100;
    }

    return a + b;

}

// 3
function returnFnResult(fn) {
    function fn(name) {
        return `Привет, ${name}!`
    }

    return fn('Антон');
}

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
function bindFunction(sum, a, b) {
    function sum() {
        return a + b;
    }
   
    return sum();
}
