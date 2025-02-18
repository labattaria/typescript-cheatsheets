// Classes in TS are created according to the same rules as in JS, but with an additional feature - typing.
// Modern TS is using "Class fields", which allows, among other things, to create properties immediately without a constructor:

class Box {
    width: number;
}

class Box1 {
    width: number = 500;
}

// We immediately created a property and indicated its type. You can set the value by default right here
// During initial setup, this code will warn about error.
// By default, each property must be initialized in the constructor

// There are two ways to get rid of the error
// Use the “!” operator - width!: number
// n the tsconfig.json file, find the strictPropertyInitialization property and set it to position false

class Box2 {
    width: number;
    height: number;

    constructor(width: number) {
        this.width = width;
        this.height = 500;
    }
};

// Important! To ensure that all tsconfig.json file settings are applied,
// you need to run the command without adding arguments, including the file path