//quickly run a program #!.usr/bin/env node
//console.log('\x1Bc');

/*
FOR LOOP NOTES:

-the initialization is run first, and only once. its often used to define a counter variable

-then, before every iteration, the condition is checked to see if its true - if it is, the for loop will run another iteration

-then, after each iteration, the final expression is run

Initialization expressions:

No initialization: for (; condition; finalExpression) {...}
Variable initialization: for (var i = initialValue; condition; finalExpression) {...}
Multiple variable initialization: for (var i = initialValue, j = initialValue2; condition; finalExpression) {...}
Constant initialization: for (const i = initialValue; condition; finalExpression) {...}
Block-scoped variable initialization (using let): for (let i = initialValue; condition; finalExpression) {...}
Block-scoped multiple variable initialization (using let): for (let i = initialValue, j = initialValue2; condition; finalExpression) {...}
Condition expressions:

Simple condition: for (var i = initialValue; i < limit; finalExpression) {...}
Nested condition: for (var i = initialValue; i < limit && j > 0; finalExpression) {...}
Function call: for (var i = initialValue; checkCondition(); finalExpression) {...}
Ternary operator: for (var i = initialValue; i < limit ? j > 0 : k < 10; finalExpression) {...}
Final expressions:

No final expression: for (var i = initialValue; condition;) {...}
Increment: for (var i = initialValue; i < limit; i++) {...}
Decrement: for (var i = initialValue; i > limit; i--) {...}
Arbitrary expression: for (var i = initialValue; i < limit; i += step) {...}
Note that these are just examples, and there may be other variations possible depending on the specific use case.
*/

/*
SCOPE NOTES:

-scope refers to which variables can be accessed by your code at a specific location in your code

-variables declared outside of a funcion are globally scoped; it can be reference from any line of code throughout the file

-even though a global variable can be referenced from anywhere in your code, the value assigned to the variable cannot be 
    accessed until after the assignement operation occurs

- functional scope is a variable declared inside of a function (locally-scoped) (cannot be referenced outside of the function)

-a function will access local scope before global scope (the closest scope to the call will be accessed)
    -parameters are locally scoped (they are the creation of a variable in the function)

-nested functions example:

let globalVar = 'global';  //global scope

function outer() {  //outer scope
    let outerVar = 'outer';

    function inner() {  //inner scope
        let innerVar = 'inner';
        console.log(globalVar, outerVar, innerVar);
    }
    inner();
}

outer();

if not in the local area it will peel out towards global until the call gets the answer it wants. 
-scopes can go out but not in. inner -> outer -> global

-Block scope: any block of code (code inside of curly brackets) creates its own scope
block scope cannot be access globally;

if (true) { //block scope
    let block = 'Jenny from the';
    console.log(block, 'block');
}

console.log(block); //global scope

-> returns error

-Dont use globally scoped varibales in functions, dont change globally scoped variables in function.
    declared the variable in the function instead as to not effect globally
-avoid cluttering the global namespace with lots of variable
-only declare variables globally if they need to be accessed globally
-its safer to declare variables in functions or blocks so you dont overwrite variables accidently
*/

/*
ARRAYS:
-An array is a list-like data structure in JavaScript
ex.:
let numbers = [1, 2, 3];
    ^array name ^data in the array

-typeof:
let names = ["George", "John", "Scott"]
console.log(typeof name); -> returns object because an array is an object technically

-Array.isArray():
//checks if the variable is an array
console.log(Array.isArray(names));

-Bracket Access:
names[0] -> "George" //arrays are 0 indexed

-bracket access helps accessing an array at a specific index. '
-also allows editing the array

names[0] = "David" -> "george" becomes "david"

-access last element of the arr
console.log(names[names.length - 1]); //array is zero indexed so to get proper index you need to subtract 1

-add to end of array
names.push("Jane"); -> adds Jane to the end of the array (pushing something to the end)

-remove and return from end of array
let latestAdd = names.pop(); -> removed Jane from the array and added it to variable 
(the variable isnt necessary you can just remove with .pop())

- remove first element of array
let firstElRemoved = names.shift(); -> removes first element which is David (can be returned to variable just like pop() but unnecessary)

-add to first element of array
names.unShift("George"); -> adds george to the beginning of the array

-query the array (find an item in the array)
names.indexOf("George"); -> returns 0 (first position of the array) will return -1 if item not found (does not exist in the array)

-extract a portion of the array
names.slice(0,1); -> returns the 0 index //it will return to initial index given and slice(stop) right before the final index given
names.slice(0,2); -> returns the 0 and 1 index
names.slice(1); will return everything after the 0 index (does not require a start and finish)

let namesCopy = names.slice(); -> creates a new array/a copy of the original
namesCopy[0] = "Kate"; //changes the 0 index of the copy not the original

-includes method (new way to query)
names.includes("George"); -> will return true
names.includes("Elizabeth") - > will return false

-reverse method (modifies the array! caution)
names.reverse(); -> reverses in place and does not return anything


-splice method (a mutator) used to add or remove from middle of the array
first arg is an index second is a count of elements to remove
also returns a new array with all deleted elements

let beatles = ['Paul', 'George', 'John', 'Ringo'];
let newGroup = beatles.splice(1, 2); -> returns george and john in a new array

(let newGroup = beatles.splice(1, 2, "Pete", "Nimit")); -> would remove george and john
    from the original array and add pete and nimit in their place)

can also add without removing by doing the above with a starting index and no second arg

-join method
let sentence = "The Beatles were " + beatles.join(", ");
this allows you to join an array with a string using specific customization

-Concat methods (join two arrays)
let older = ['Ringo', 'John'];
let younger = ['Paul', 'George'];

console.log(older.concat(younger)); -> older takes in younger array

-multi-dimensional arrays-
let relatedThings = [['Windows', 'MacOS'],['New York', 'Chicago']];
console.log(relatedThings[1][0]); -> returns New York from the nested arrays

let rsvpGroups = [['Jane', 'Mel'], 'Jack', ['Rohan', 'David', 'Meg']];
for (let i = 0; i < rsvpGroups.length; i++) {
    
}
*/