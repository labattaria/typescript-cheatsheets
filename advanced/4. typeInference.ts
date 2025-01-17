// When writing code, TS constantly analyzes it and makes sure that all operations are compatible, no syntactic or logical errors.
// This happens even when you don't specify annotations. Exactly so when hovering over variable a in the code:
let a = 'string';

// You will see variable type. This mechanism is called type inference. And since type inference works all the time, then you can shift part of the developer work routine to it.
// Error warnings and autocomplete will keep working

// In various sources you can find the following advice:
// You don't need to explicitly specify types if type inference can do it for you.

// Type inference doesn't always work. There are situations when he doesn't understands that he will be there. Here it is worth using annotations:
// 1. Creating an empty variable. Even after placing the value type y the variable will remain any:
// The variable will remain of type any
let salary1;
salary1 = 5000;

// Specifying an annotation will save you from problems
let salary2: number;
salary2 = 5000;

// 2. Functions that return any (JSON.parse(), etc.)
// 3. Type inference conflict with your code logic.
// If you create variables with primitive literals via const, then type inference will define them as a literal. 
// If via let - then as a general type (string, number, boolean...)