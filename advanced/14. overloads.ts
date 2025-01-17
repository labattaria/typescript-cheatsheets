// In order to clearly describe all use cases of the functions and document them - we can use overloads.
// We describe them and what will be returned from each:

// function calculateArea(side: number): Square;
// function calculateArea(a: number, b: number): Rect;
// function calculateArea(a: number, b?: number): Square | Rect {};

// 1. The overload is written before the main body of the function.
// 2. Arguments can be named differently, this is acceptable.
// 3. All overloads must be compatible with the main function. You can't do it like this:

// function calculateArea(side: string): Square; <= error
// function calculateArea(a: number, b: number): Rect;
// function calculateArea(a: number, b?: number): Square | Rect {};

// When using this technique, the prompts will be more informative and more specific.
// This technique is especially worth using if the function is complex and has many optional arguments.

// Overload does not affect performance or execution speed of the functions. After compilation it completely disappears.