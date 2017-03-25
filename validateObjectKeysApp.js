// Validate object keys
// Spend up to 20 minutes writing a function called validateKeys.This function
// takes two arguments, object and expectedKeys. object is (you guessed it!) an
// object that we want to valdiate keys for. expectedKeys is an array of keys
// that we expect to find on the object.
//
// validateKeys should return true if object has all of the keys from
// expectedKeys, and no additional keys. It should return false if one or
// more of the expectedKeys is missing from the object, or if the object
// contains extra keys not in expectedKeys.


// running the function with `objectA` and `expectedKeys`
// should return `true`
var objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago'
}

// running the function with `objectA` and `expectedKeys`
// should return `false`
var objectB = {
    id: 3,
    age: 33,
    city: 'Peoria'
}

var expectedKeys = ['id', 'name', 'age', 'city'];

// function validateKeys(object, expectedKeys) {
//  // your code here
//   return object.map(check => {
//     if (check.length === expectedKeys.length) {
//       for(let i = 0; i < check.length; i++) {
//         check[i] !== expectedKeys[i];
//       }

//     }
//     else {
//       console.log("The length of your object and array, does not match");
//       return false;
//     }
//   })

// }
//console.log(Object.keys(objectA).length);

// function validateKeys(object, expectedKeys) {
//     if (Object.keys(object).length !== expectedKeys.length) {
//         return false;
//     }

//     for (let i = 0; i < expectedKeys.length; i++) {
//         if (!Object.keys(object).find(key => {
//             return key === expectedKeys[i];
//         })) {
//             return false;
//         }
//     }
//     return true;
// }

function validateKeys(object, expectedKeys) {
    if (Object.keys(object).length !== expectedKeys.length) {
        return false;
    }
    //why can I use this????
    for (let i = 0; i < expectedKeys.length; i++) {
        return (!Object.keys(object).find(key => {})) ? key === expectedKeys[i] : false;
    }
    return true;
}

/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/

function testIt() {
    var objectA = {
        id: 2,
        name: 'Jane Doe',
        age: 34,
        city: 'Chicago'
    }

    var objectB = {
        id: 3,
        age: 33,
        city: 'Peoria'
    }

    var objectC = {
        id: 9,
        name: 'Billy Bear',
        age: 62,
        city: 'Milwaukee',
        status: 'paused'
    }

    var expectedKeys = ['id', 'name', 'age', 'city'];

    if (typeof validateKeys(objectA, expectedKeys) !== 'boolean') {
        console.error('FAILURE: `validateKeys` should return a boolean value');
        return;
    }

    if (!validateKeys(objectA, expectedKeys)) {
        console.error('FAILURE: running `validateKeys` with the following object and keys ' +
            'should return `true` but returned `false`:\n' + objectA + '\n' + expectedKeys)
        return;
    }

    if (validateKeys(objectB, expectedKeys)) {
        console.error('FAILURE: running `validateKeys` with the following object and keys ' +
            'should return `false` but returned `true`:\n' + objectB + '\n' + expectedKeys);
    }

    if (validateKeys(objectC, expectedKeys)) {
        console.error('FAILURE: running `validateKeys` with the following object and keys ' +
            'should return `false` but returned `true`:\n' + objectC + '\n' + expectedKeys);
    }

    console.log('SUCCESS: `validateKeys` is working');
}

testIt()
