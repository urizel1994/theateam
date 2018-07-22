// 1
function fn(array) {
    for(i = 0; i < array.length; i = i + 1) {
        console.log(`${i}: ${array[i]}, массив: [${array}]`);
    }
}

function forEach(array, fn) {
    return fn(array); 

}

// 2
function fn(array) {

    var newArray = [];
    
    for(i = 0; i < array.length; i = i + 1) {
        newArray.push((array[i]).length);
    }
    return newArray;
}

function map(array, fn) {
    return fn(array);  

}

// 3
function fn(array, initial) {
    
    var sum;

    if(initial) {
        sum = initial;

        for(i = 0; i < array.length; i = i + 1) {
            sum = sum + (array[i]);
        } 
    } else {
        sum = array[0];

        for(i = 1; i < array.length; i = i + 1) {
            sum = sum + (array[i]);
        }
    }
    
    return sum;

}

function reduce(array, fn, initial) {
    return fn(array, initial);
}

// 4
function upperProps(obj) {
    
    var array = [];
    var keys = Object.keys(obj);

    for (i = 0; i < keys.length; i = i + 1){
        array.push(JSON.stringify(keys[i]).toUpperCase());
    }

    return array;
}

// 5
function slice(array, from, to) {

    var newArray = [];

    for(i = from; i < array.length - (array.length - (to)); i = i + 1){
        newArray.push(array[i]);
    }

    return newArray;
}