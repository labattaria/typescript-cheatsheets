// TS allows you to say at the syntax level that the properties of an object, arrays or tuples are immutable.
// Any operation aimed at this will be perceived as a mistake. For this we can use readonly modifier.

interface User3 {
    readonly userLogin: string;
};

const user: User3 = {
    userLogin: "first"
};

// will be an error
// user.userLogin = "Error";

// When using readonly on an array, array and his elements become unchangeable. Methods such as pop(), push(), etc. will not work. 
// The same thing happens in tuples:
const basicPorts: readonly number[] = [3000, 3001, 5555];
// basicPorts[0] = 5; will be an error

const basicPorts1: readonly [number, ...string[]] = [3000, '3001', '5555'];
// basicPorts1[0] = 5; will be an error
// basicPorts1.push(566); will be and error

// Such restrictions exist only at the development stage, inside TS. After compilation, these properties and arrays will be editable.
// But at the development stage they allow you to avoid mistakes, especially when you work in a team.
