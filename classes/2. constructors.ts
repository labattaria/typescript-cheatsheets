// The constructor method is needed to create an instance of the class and assigning initial values.
// It is called when created construction with new

// This is a method, which means you can apply to it:
// typing of all arguments and overloads. But! You can't change what it returns. This will result in an error.
// Overloads are available to constructors in the same format as for normal functions.
// But with a large number of arguments it is better refrain from using them:

class SmartBox {
    width: number;
    height: number;
    volume: string;

    constructor(volume: string);
    constructor(width: number);
    constructor(widthOrVolume: number | string) {
        if (typeof widthOrVolume === "number") {
            this.width = widthOrVolume;
        } else {
            this.volume = widthOrVolume;
        }

        this.height = 500;
    }
};

// Another limitation is that constructors cannot use generics. 
// But classes themselves and other methods can use generics.