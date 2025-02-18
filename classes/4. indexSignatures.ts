// The initial value of properties in classes can be set using class fileds or using constructor.
// Most likely in your work you will meet both.
// What to use will dictate the style of the project or your preference:

class ExtraBox {
    height: number = 500;

    constructor() {
        this.height = 500;
    }
}

// If we know what type all the properties will be, but we don’t know how many there will be,
// then you can apply Index Signatures:

// class Styles {
//     [s: string]: string;
// }

// const style = new Styles();
// style.color = 5; // error
// style.font = "Roboto";

// But with classes this feature is not so convenient. If we want to add method - you will have to add a type:

// class Styles {
//     [s: string]: string | ((s: string) => boolean);;

//     method() {
//         // 
//         return false;
//     }
// }