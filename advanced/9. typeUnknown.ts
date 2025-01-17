// There are situations when we can obtain the essence of the unknown type. To work with them there is an unknown type, which is type-safe analogue of any.
let smth: unknown;
smth = 'str';
// let data1: string[] = smth;
// data.find(e => e); will be and error

// The problem of any is that it is any type. There is no strictness in it. It does not perform any type checking. But unknown - unknown type.
// In any there can be anything, but in unknown we don’t know what can be.
// Anything can be applied to anything, but nothing can be applied to the unknown.

const someValue: any = 10;
someValue.method(); 

const someValue1: unknown = 10;
// someValue.method(); error

// To work with this type, you must use type narrowing. So we will understand what it is and be able to work with it correctly:
function fetchData(data: unknown): void {
    if (typeof data === "string") {
        console.log(data.toLowerCase());
    }

    // here is unknown type
    console.log(data);
};

// This type can be used to work with functions that return anything. For example, JSON.parse().
// This way we will avoid errors and we will work with the data correctly:
const userData2 = '{"isBirthdayData": true, "ageData": 40, "userNameData": "John"}';

function safeParse(s: string): unknown {
    return JSON.parse(s);
};

const data3 = safeParse(userData2);

function transferData(d: unknown): void {
    if (typeof d === "string") {
        console.log(d.toLowerCase());
    } else if (typeof d === "object" && d) {
        console.log(data);
    } else {
        console.error("Some error");
    }
};

transferData(data);

// A JSON string can contain different data and thanks to the function safeParse we will get not just anything, but unknown.
// A function transferData uses type narrowing to work correctly.
// In TS, in the try/catch construction, the error that comes in catch will be like unknown.
// This happens because the compiler does not know which it is the error that the developer will throw out of the try block.
try {
    if (1) {
        throw new Error("error");
    }
} catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    } else if (typeof e === "string") {
        console.log(e);
    }
};