// Find by id
// Spend up to 15 minutes writing a function called findById. This function takes
// two arguments items and idNum. items is an array of objects. idNum is the id
// we're trying to find in items.
//
// Calling findById([{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}], 2) should
// return {id: 2, foo: 'bizz'}.

// you can pass in `scratchData` to test out `findByid`
// your function
var scratchData = [
  {id: 22, foo: 'bar'},
  {id: 28, foo: 'bizz'},
  {id: 19, foo: 'bazz'}
];

// function findById(items, idNum) {
//  // your code here
//   return items.find(getItem => {
//     console.log(getItem.id === idNum);
//     return getItem.id === idNum;
//   });
// }


// function findById(items, idNum) {
//  // your code here
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].id === idNum) {
//       console.log(items[i]);
//       return items[i];
//     }
//   }
// }


//why can I do this? becasue the return is inside of the loop? if I put outside is out of the scope.
function findById(items, idNum) {
 // your code here
  for (let i = 0; i < items.length; i++) {
//     if (items[i].id === idNum) {
//       console.log(items[i]);
//       return items[i];
//     }

    return items[i].id === idNum ? items[i] : false;



  }
}



//

function testIt() {
  var testData = [
    {id: 1, foo: 'bar'},
    {id: 2, foo: 'bizz'},
    {id: 3, bang: 'boo'}
  ];
  var result = findById(testData, 3);
  if (!(result && result !== null && typeof result === 'object')) {
    console.error('`findById` must return an object');
    return
  }
  if (result.id !== 3) {
    console.error(
      'Asked for item with id of `3` but got back one with id of ' +
      result.id
    );
    return
  }
  if (result.bang !== 'boo') {
    console.error('Expected all key/value pairs from target object to be returned');
    return
  }
  console.log('SUCCESS: `findByid` is working');
}

testIt();
