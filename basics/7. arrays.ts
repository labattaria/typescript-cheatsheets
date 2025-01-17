// Array annotation
const departments: string[] = ['dev', 'design', 'marketing'];
const nums: number[] = [4, 5, 6];
// string[] , number[], {}[] etc. - this is an indication that the array consists from the types specified before square brackets - []
// To create arrays with multiple data types inside, use tuples (tuples), union type or any[] annotation (using type any considered as bad practice) 

// By specifying the types inside the array, TS “knows” what each element in the array will be and gives us hints about unacceptable operations 
// both with array and its members

// Error, you cannot "push" a number into an array consisting of strings
// departments.push(5);

// Error, the first element is a string, it does not have such a method
// const department = departments[0];
// department.parseInt();
