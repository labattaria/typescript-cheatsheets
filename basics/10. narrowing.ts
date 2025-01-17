// When using a union type in function arguments, a situation may arise where we want to perform different operations depending on on the data type.
// To do this we need to “narrow down the types”, in the simplest option using the typeof operator:
// Inside the first condition branch, msg will be defined as a string, in the second is like a number. 
// This means that different methods will be available to them.Outside the condition, the variable will still be a union type.
function pringMsg8(msg: string | number): void {
    if (typeof msg === 'string') {
        console.log(msg.toLowerCase());
    } else {
        console.log(msg.toExponential());
    }

    console.log(msg);
}

// The Array.isArray() method allows you to define an array
function printMsg9(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m));
    } else if (typeof msg === 'number') {
        console.log(msg.toFixed());
    } else {
        console.log(msg);
    }
}

// You can apply equality across values ​​and types
const printReadings = (a: number | string, b: number | boolean) => {
    if (a === b) {
        console.log(a, b);
    }
}

// The in operator will determine whether a property exists in an object
function checkReadings(readings: { system: number } | { user: number }): void {
    if ('system' in readings) {
        console.log(readings.system);
    } else {
        console.log(readings.user);
    }
}

// The instanceof operator will determine whether an argument is an instance
function logValue(x: string | Date) {
    if (x instanceof Date) {
        console.log(x.getDate());
    } else {
        console.log(x.trim());
    }
}

// And sometimes an operation is needed, available on different types at once
const printReadings2 = (a: number[] | string) => {
    console.log(a.slice(0, 3));
}