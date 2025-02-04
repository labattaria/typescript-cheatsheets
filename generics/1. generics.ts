// TS has a mechanism called “Generics”
// It allows you to install a “temporary placeholder” that will be replaced when using:

function processingData<T>(data: T): T {
    return data;
};

let res1 = processingData(1); // type number
let res2 = processingData("1"); // type string

// T is a temporary placeholder which is written in angle brackets and further used to type the argument and return values
// When calling a function, we can substitute any type and TS will know what fits into the result

// Alternative syntax
// When calling, we clearly say what needs to be passed into the argument

const res3 = processingData<number>(10);


// Generics can be created for types, interfaces, functions, methods and classes.
// This cannot be done for enums.
// For generics, you can use any names and designations.
// In simple cases, the letters T, U, V, S are used, f there will be property then P, if key/value then K/V.

// Identifiers are always capitalized.
// In complex cases, this temporary placeholder is usually described with more detailed information: ReferralSystem<UserID, UserReferrals>.

// There are generics built into TS for a variety of purposes.

// Array<T>
const arrOfString: Array<string> = ["Hello", "World"];