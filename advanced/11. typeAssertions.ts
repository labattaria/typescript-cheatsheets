// In real code there are situations when the received from somewhere the value is not the type we expect.
// We can ask TS to reconsider his attitude towards a certain type, the type assertion mechanism is used

const fetchNewData = (url: string, method: "GET" | "POST"): void => {
    console.log(method);
};

const reqOptions = {
    url: "https://someurl.com",
    method: "GET"
};

fetchNewData("qqq", "GET");

// An error will be here:
// fetchNewData(reqOptions.url, reqOptions.method);

// The reqOptions.method property is of type string, which means it does not fit argument annotation with literals.
// If we know that the value of the property matches or is suitable, then we can assert it value with the as operator:

// The error disappears
fetchNewData(reqOptions.url, reqOptions.method as "GET");

// What is important to remember:

// 1. In such operations, as a developer, you take the risks.
// TS allows you to clarify string to its literal(specific value).
// But when changing the value properties in the object - TS will not indicate an error for you.

// 2. TS will not allow you to create illogical constructions.
// You can ask TS to reconsider the attitude or behavior, but do not indicate to perceive it this way.
// Only assertion of more specialized types is available: string - string literal, number - number literal, etc.
// The operation in the opposite direction is not makes sense.

// Error:
// fetchNewData(reqOptions.url, reqOptions.method as 5);

// 3. It is necessary to distinguish between type assertion and type conversion.
// After compilation, there will be nothing left of constructs with the as operator.
// Conversion is turning a number into a string, etc.


// This situation can be solved in two other ways, also with type assertion.
// The first is to approve the value at the stage object:

const reqOptions1 = {
    url: "https://someurl.com",
    method: "GET" as "GET",
};

// The second is to turn the entire object into a literal type:

const reqOptions2 = {
    url: "https://someurl.com",
    method: "GET",
} as const;

// Type assertions can often be used when working with a DOM tree, when we want to clarify which element we are working with:

const box = document.querySelector(".box") as HTMLElement;
const input = document.querySelector("input") as HTMLInputElement;

// We are clarifying a more specialized interface, because HTMLElement is a special case of Element.
