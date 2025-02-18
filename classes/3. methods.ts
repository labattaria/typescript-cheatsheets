// Methods work according to the same rules as regular functions. To them
// You can use overloads, generics, return value and arguments typing.

// checkBoxSize(transport: number): string;
// checkBoxSize(transpoty: number[]): string;
// checkBoxSize(transport: number | number[]): string {
//     if (typeof transport === "number") {
//         return transport >= this.width ? "Ok" : "Not ok";
//     } else {
//         return transport.some((t) => t >= this.width) ? "Ok" : "Not ok";
//     }
// }

// The get/set keyword is also available for class methods. These keywords turning them into accessor properties.

// This allows encapsulate the necessary properties,
// do checks on the setting the value moment and returning the interface for working with the class to the outside:

// get content() {
//     return this._content;
// }

// set content(value) {
//     this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
// }

// const firstBox = new Box(250);

// console.log((firstBox.content = "Test"));
// console.log(firstBox.content);

// If there is no set paired with get, then this property is automatically becomes readonly.
// The type of the value argument inside set is automatically set tobased on the type that get returns. 
// Can be changed if necessary
// get/set properties cannot be asynchronous. If you need asynchronous - use the normal method.