// Type guards

function printMsg1(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) { // <= type guard
        msg.forEach((m) => console.log(m));
    } else if (typeof msg === "number") { // <= type guard
        console.log(msg);
    } else {
        console.log(msg);
    }
};

// To follow the DRY principle (do not repeat the code or don't repeat yourself),
// we can move these check(protection) conditions into separate functions.
// In TS you can use additional syntax for such functions and create custom type guards
// which return a predicate(boolean value: true or false).

function isNumber(n: unknown): n is number {
    return typeof n === "number";
};

function isNumber1(n: string[] | number | boolean): n is number {
    return typeof n === "number";
};

// The isNumber function will return true only if the argument is a number.
// The is operator allows us to say that a boolean value will be returned, where it is checked that n is a number.
// We can use custom type guard functions in conditions:

if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
} else if (isNumber(msg)) { // <= predicate custom type guard function 
    console.log(msg);
} else {
    console.log(msg);
};


// More advanced type guards determine to which object this entity belongs to.
// For example, according to the interface:

interface Car {
    engine: string;
    wheels: number;
};

interface Ship {
    engine: string;
    sail: string;
};

function isCar(car: Car | Ship): car is Car {
    return "wheels" in car;
};

function isShip(ship: Car | Ship): ship is Ship {
    return "sail" in ship;
};

function repairVehicle(vehicle: Car | Ship) {
    if (isCar(vehicle)) {
        vehicle.wheels;
    } else if (isShip(vehicle)) {
        vehicle.sail;
    } else {
        console.log(vehicle);
    }
};
