// Generic classes operate on the same principle: abstract identifiers will be replaced by anything at the moment of using:

class Users<T, S> {
    name: T;
    age: S;

    constructor(name: T, age: S) {
        this.name = name;
        this.age = age;
    };
};

const alex = new Users("Alex", 28);

// An alternative syntax allows you to manually specify types when creating an instance.
// This is useful when data comes from others sources, and not written manually:

const ann = new Users<string, number>("Ann", 26); // not really useful
const nameData = "John";
const ageData = 32;
const john = new Users<string, number>(nameData, ageData);

// Сlass methods can be generics. And the same names of identifiers do not intersect:

class Person<T, S> {
    name: T;
    age: S;

    constructor(name: T, age: S) {
        this.name = name;
        this.age = age;
    };

    sayMyFullName<T>(surname: T): string {
        if (typeof surname !== "string") {
            return `I have only name: ${this.name}`;
        } else {
            return `${this.name}, ${surname}`;
        };
    };
};