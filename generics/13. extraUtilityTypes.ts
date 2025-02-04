// ReturnType, Parameters, ConstructorParemeters

// ReturnType
// The ReturnType is required to obtain the type that returns the function passed to it.
// It's the function type that's being used, so don't forget to use typeof
function calculate(a: number, b: number): number {
    return a * b;
}

type CalculateRT = ReturnType<typeof calculate>; // number


// Parameters
// The Parameters type allows you to get the type of function arguments in the tuple form:
type CalculatePT = Parameters<typeof calculate>;


// ConstructorParameters
// The ConstructorParameters type allows you to get the type of arguments in classes
class ExampleClass {
    constructor(a: number) {}
}

type T0 = ConstructorParameters<typeof ExampleClass>;