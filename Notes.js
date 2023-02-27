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
