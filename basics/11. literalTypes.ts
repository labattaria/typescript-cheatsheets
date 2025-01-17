// primitive literal types
// Primitives are simple data types, strings, numbers, booleans, symbols, etc. Literals are concrete values ​​of these types. Primitive literal types are types based on concrete primitive values:
let msg: "Hello" = "Hello";
const salary: 5000 = 5000;
const truthy: true = true;
// Now the value in the variable can only be of the specified type. A common use is function arguments:
// Now the arguments and result of the function can only have several values ​​that will save you from errors + are included hints during function calls
function startServer(protocol: "http" | "https", port: 3000 | 3001): "Server started" {
    return "Server started";
}

// An example of annotating a function with a limited number of values:
function createAnimation(
    id: string | number,
    animName: string,
    timingFunc: "ease" | "ease-out" | "ease-in",
    duration: number,
    iterCount: "infinite" | number
): void { }

// For arguments that come dynamically to a function, you can combine annotations, conditions and constants. So we will additionally activate the check at the runtime code level:
const port3000: number = 3000;
const port3001: number = 3001;

function startServer1(protocol: "http" | "https", port: 3000 | 3001): "Server started" {
    if (port === port3000 || port === port3001) {
        console.log(`Server started on ${protocol}://server:${port}`);
    } else {
        console.error("Invalid port");
    }

    return "Server started";
}