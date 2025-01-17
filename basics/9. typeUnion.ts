// Union type is a mechanism that allows you to combine several types, to literally say: this entity can be either this type, or this. A special operator is used for this
const message: string | number = 5;
const messages: string[] | number[] = ['a', 'b'];

// Usually we try to make sure that there is only one data type in the arrays. But with the help of the union type we can declare that it contains different types:
// But try to avoid such situations. When iterating and executing certain actions with elements of different types can be obtained errors. It is better for the array to be homogeneous
const randomData: (string | number)[] = ['name', 25];

function printMsg6(msg: string | number): void {
    console.log(msg);
}

printMsg6(4);
printMsg6('string');

// But you need to be careful when manipulating these arguments. inside the function body. You can only use operations available with all types in union type. Otherwise there will be an error:
function pringMsg7(msg: string | number): void {
    // We can try to use several methods

    // console.log(msg.toLowerCase());
}

// The toLowerCase() method exists only on a string. If the function gets number, then there will be an error, which TS will warn you about. 
// To work with such situations it is necessary to use the type narrowing mechanism