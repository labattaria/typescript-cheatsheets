// Creating a generic type also allows you to substitute the desired type during use.
// The syntax is still the same identifiers in angle brackets:

type Member<T> = {
    login: T;
    age: number;
};

const newMember: Member<string> = {
    login: "str",
    age: 25,
};

const newMember1: Member<"str"> = {
    login: "str",
    age: 30,
};

// Type also allows you to create generic helper types due to the literal values syntax:

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
const data1: OneOrMany<number[]> = [5];

// Interfaces are more often used, which allow you to put different data into objects:

interface User4<T> {
    login: T;
    age: number;
};

interface User5<ParentsData> {
    login: string;
    age: number;
    parents: ParentsData
};


// Generic constraints
// Here is a limitation mechanism that will allow you to restrict the identifier in the generic.
// To do this we use extends keyword:
// In this case we we can say that it will only be an object of any size with two required properties.

interface ParentsOfUser {
    mother: string;
    father: string;
};

interface User6<ParentsData extends ParentsOfUser> {
    login: string;
    age: number;
    parents: ParentsData;
};

// You can also use primitive types such as a string or a number for restrictions, including union type.
// For example a function that accepts only a string or a number:

const depositMoney = <T extends number | string>(amount: T): T => {
    console.log(amount);
    return amount;
};