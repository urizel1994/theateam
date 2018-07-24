// 1
function fn(array) {

    for (i = 0; i < array.length; i = i + 1) {
        console.log(`${i}: ${array[i]}, массив: [${array}]`);
    }

}

function forEach(array, fn) {

    return fn(array); 

}


// 2
function map(array, fn, thisArg) {
    
    var newArray = [];

    for (i = 0; i < array.length; i = i + 1){
        newArray.push(fn.call(thisArg, array[i], i, array));
    }

    return newArray;

}

// 3
function reduce(array, fn, initial) {
    
    if (initial) {

        previousValue = initial;

        for (i = 0; i < array.length; i = i + 1) {
            var currentItem = array[i];
            previousValue = fn.call(null, previousValue, currentItem, index, array);
        }

    } else {

        previousValue = array[0];

        for (i = 1; i < array.length; i = i + 1) {
            currentItem = array[i];
            previousValue = fn.call(null, previousValue, currentItem, index, array);
        }

    }

    return previousValue;

}

// 4
function upperProps(obj) {
    
    var array = [];
    var keys = Object.keys(obj);

    for (var key of keys) {
        array.push(key.toUpperCase());
    }

    return array;
}


// 5
function slice(array, from, to) {

    var newArray = [];

    if (from >= 0 && to > 0) {

        for (i = from; i < array.length - (array.length - (to)); i = i + 1) {
            newArray.push(array[i]);
        }

    } else if (from < 0 && to > 0) {

        for (i = (array.length - (-from)); i <  array.length - (array.length - (to)); i = i + 1) {
            newArray.push(array[i]);
        }

    } else if (from < 0) {

        for (i = (array.length - (-from)); i < array.length; i = i + 1) {
            newArray.push(array[i]);
        }

    } else if (from > array.length) {

        return newArray;

    } else if (!from) {

        for (i = 0;  i < array.length - (array.length - (to)); i = i + 1) {
            newArray.push(array[i]);
        }
    
    } else if (to < 0) {

        for (i = from; i < array.length - to; i = i + 1) {
            newArray.push(array[i]);
        } 

    } else if ((from >= 0 && !to) || to > array.length) {

        for (i = from; i < array.length; i = i + 1) {
            newArray.push(array[i]);
        }

    } else if (!from && !to) {

        for (i = 0; i < array.length; i = i + 1) {
            newArray.push(array[i]);
        }

    }

    return newArray;
}