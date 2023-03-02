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
An array is a list-like data structure in JavaScript
ex.:
let numbers = [1, 2, 3];
    ^array name ^data in the array

typeOf[]
let names = ["George", "John", ]
*/