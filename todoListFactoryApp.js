// Todo list factory
// Spend up to 20 minutes writing a function called makeToDos. This function
// should take two arguments: owner and toDos. owner is a string of the name
// of the owner of the to do list. toDos is an array of strings representing
// items to be done.
//
// makeToDos should return an object with owner and toDos properties that
// correspond to the values passed in as arguments.
//
// It should also have a method called .generateHtml. This method should return
// a string representing an unordered list. Each item from toDos should appear
// as an <li> in the list. For example, if makeToDos was called like
// this: makeToDos('Teddy', ['wake', 'eat', 'drink', 'work', 'sleep']), calling
// .generateHtml on the resulting object should generate a string like this:
// '<ul><li>wake</li><li>eat</li><li>drink</li><li>work</li><li>sleep</li></ul>'.

function makeToDos(owner, toDos) {
    // your code here
    return {
        owner: owner, toDos: toDos,
        //generateHtml: () => { this generated an error why?
        generateHtml: function() {
            let html = '<ul>';
            this.toDos.forEach(todo => {
                html += `<li> ${todo} </li>`;
            });
            return html + '</ul>';
        }
    }
}

/* From here down, you are not expected to
   understand.... for now :)

   Nothing to see here!

*/

// tests

function testIt() {
    var toDos = ['get milk', 'walk dog', 'pay bills', 'eat dinner'];
    var owner = 'Steve';
    var myToDos = makeToDos(owner, toDos);
    if (!myToDos || !myToDos instanceof Object) {
        console.error('FAILURE: `makeToDos` must return an object');
        return;
    }

    var expectedKeys = ['owner', 'toDos', 'generateHtml'];
    if (Object.keys(myToDos).length !== expectedKeys.length || !expectedKeys.every(function(key) {
        return key in myToDos;
    })) {
        console.error('FAILURE: expected `makeToDos` to have a `.toDos` property ' +
            'whose value is an array of todo items');
        return;
    }

    if (myToDos.owner !== owner) {
        console.error('FAILURE: expected `makeToDos` to return an object with `.owner` ' +
            'set to value passed in for `owner`, in this case ' + owner);
        return;
    }
    if (!toDos.every(function(toDo) {
        return myToDos.toDos.find(function(_toDo) {
            return _toDo === toDo;
        })
    })) {
        console.error('FAILURE: makeToDos toDos property returned' + Object.values(myToDos.toDos) + '. Expected: ' + Object.values(todos));
    }

    var element = $(myToDos.generateHtml());

    if (element.length !== 1) {
        console.error('FAILURE: `makeToDos` must return an object with a `generateHtml` ' +
            'method that returns an unordered list');
        return;
    }

    if (!toDos.every(function(toDo) {
        return element.find('li:contains("' + toDo + '")').length === 1;
    })) {
        console.error('FAILURE: generateHtml must return li element for every todo');
        return
    }

    console.log('SUCCESS: `makeToDos` is working');

}

testIt();
