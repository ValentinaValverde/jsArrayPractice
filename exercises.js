'use strict'

document.addEventListener('DOMContentLoaded', function () {
    console.log('CONTENT LOADED');
    // ---------------------
    // Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
    // myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
    // ---------------------

    // Put your answer below -------------------------
    function myFunction(string, num) {
        let motherFunction = string.repeat(num);
        console.log(motherFunction);
    }
    myFunction("sunshine ", 3);
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and reverses all the values in an array
    // The function should not mutate the original array
    // ---------------------

    // Put your answer below -------------------------
    const arr = [1, 2, 3];
    const newArr = arr.reverse();
    console.log(newArr);
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and removes all falsy values from the array
    // ---------------------

    // Put your answer below -------------------------
    const arr2 = [0, 1, 4, true, false, null, "mother", undefined, "hello", "", NaN];
    const newArr2 = arr2.filter(function (value) {
        return value;
    });
    console.log(newArr2);

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
    // const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
    // returns { name: 'Charlie', color: 'brown', age: 10 };
    // ---------------------

    // Put your answer below -------------------------
    const arr3 = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
    function newArr3(array) {
        console.log(array[0][0] + ": " + array[0][1]);
        console.log(array[1][0] + ": " + array[1][1]);
        console.log(array[2][0] + ": " + array[2][1]);
    }
    newArr3(arr3);
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and removes duplicate values
    // [1,2,3,4,5,4,3] should return [1,2,3,4,5]
    // ---------------------

    // Put your answer below -------------------------
    const arr4 = [1, 2, 3, 4, 5, 4, 3];
    const newArr4 = arr4.filter((c, index) => {
        return arr4.indexOf(c) === index;
    });
    console.log(newArr4);

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
    // [1,2,3,4] and [1,2,3,4] should return true
    // [1,2,3,4,5] and [1,2,3,4] should return false
    // [1,2,3,4] and [1,2,3,4,4] should return false
    // [1,2,3,4] and [1,4,3,2] should return true
    // ---------------------

    // Put your answer below -------------------------
    const newArr5 = [1, 2, 3, 4];
    const newArr6 = [1, 2, 3, 4, 5];
    function identicalVals(a5, a6) {
        const arrayString = String(a5);
        const arrString2 = String(a6);
        console.log(arrayString.includes(arrString2));
    }
    identicalVals(newArr5, newArr6);

    // -----------------------------------------------

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //            ___  ____  _  ____  ______        //
    //           / _ )/ __ \/ |/ / / / / __/        //
    //          / _  / /_/ /    / /_/ /\ \          //
    //         /____/\____/_/|_/\____/___/          //
    //                                              //
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    //              _____       ____   
    //             /     \    /    /   
    //            /       \  /    / ____   
    //           /    /\   \/    / / __ \   
    //          /    /  \       / / /_/ /    . _ .
    //         /____/    \_____/  \____/     
    //                                      



    // ---------------------
    // Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
    // [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
    // [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
    // DO NOT USE Array.prototype.flat()
    // ---------------------

    // Put your answer below -------------------------

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and splits it into parts of size i
    // ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
    // ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
    // ---------------------

    // Put your answer below -------------------------

    // -----------------------------------------------
});