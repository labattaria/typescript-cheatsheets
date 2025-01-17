// There are situations in development when something is limited to an enumeration several options.
// And the program selects one of them.For example:
// 1. Object movement options: up, down, left, right
// 2. List of available currencies: €, $, ₴
// 3. List of available animations: fadeIn, fadeDown, swipeLeft, swipeRight

// And we want to give her and the developers only limited choice. Enums are used for this purpose.
// This structure only exists within the TS. It allows you to avoid typos and the use of third-party options:

// Standard enum (numeric). Automatic numbering of values.
enum Directions {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM,
};

// String enum
enum TimingFunc {
    EASE = "ease",
    EASE_IN = "ease-in",
    LINEAR = "linear",
};

// Numeric enum
enum TimingFunc1 {
    EASE = 1,
    EASE_IN = 2,
    LINEAR = 10,
};

function frame(elem: string, dir: Directions, tFunc: TimingFunc1): void {
    if (dir === Directions.RIGHT) {
        console.log(tFunc);
    }
};

frame("id", Directions.RIGHT, TimingFunc1.LINEAR);

// There is a variant of heterogeneous enum - this is a combination of string and numerical values. But in reality this is not worth using.
// In string enumerations you cannot do calculations for obtaining new values. In numbers - you can.
