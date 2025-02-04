// When creating new types there's a mechanism similar to the standard string interpolation in JS.
// It allows you to form literal types according to the same syntax rules:

type MyAnimation = "fade";
type MyNewAnimation = `${MyAnimation}In`; // "fadeIn"

// When using union type, the same type will be formed, but with modifications:

type MyAnotherAnimation = "fade" | "swipe";
type MyNextAnimation = `${MyAnotherAnimation}In`; // "fadeIn | swipeIn"

// For convenient modifications, special generics have been added for working with strings.
// Passing non - strings in them leads to an error

// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>

type Direction = "in" | "out";
type MyFinalAnimation = `${MyAnimation}${Capitalize<Direction>}`;

// This mechanism can be used inside Mapped types to change property names:

interface Currencies1 {
    usa: "usa";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
}

type CreateCustomCurr1<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type CustomCurrencies2 = CreateCustomCurr1<Currencies1>;