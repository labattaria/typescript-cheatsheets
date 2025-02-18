// Inheritance is when we can create a chain of classes that hasparent-child relationship.
// The descendant will contain all the properties and methods of the parent,
// and at the discretion of the developer contain something additional or slightly different implementation of the parent functional.
// For inheritance we use the extends keyword:

class Box5 {
    width: number;
    height: number = 500;
}

class PresentBox extends Box5 {
    wrap: string;
    height: number = 600;
}

// Descendants may be constructed differently, which means they will have their personal constructor.
// Don't forget to use superconstructor before using this:

class PresentBox1 extends Box5 {
    wrap: string;
    height: number = 600;

    constructor(wrap: string, width: number) {
        super();
        this.wrap = wrap;
    }
}


// In an inherited class, properties and methods must match the types of analogues in the parent.
// n methods, the return value must be the same, and new arguments must have a optional modifier:

// Parent
// async content(value: string) {
//     const date = await new Date().toTimeString();
// }

// Derived
// async content(value: string, text ?: string) {
//     const date = await new Date().toTimeString();
// }


// To say that a method has been overwritten and in its descendant it already has another functionality,
// there is an override modifier:

// override async content(value: string, text?: string) {
//     const date = await new Date().toTimeString();
// }

// There's two reasons to use override modifier:

// 1. Clearly tell the developer that this is an overwritten parent method
// 2. If this method disappears from the parent class, there will be an error in the derived class. 
// This way we will make sure that the derived class will not use its own method and we can always fix it.