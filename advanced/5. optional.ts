// To indicate that a property in an object or an argument in a function may be optional, the optional operator is used - "?"
// In the object we put it after the property name:
interface User {
    login: string;
    password: string;
    age: number;
    parents?: {
        mother?: string;
        father?: string;
    }
};

// There are situations when objects must adhere to a strict form, even if the property has no value. The property should always be there.
// In this case, the union type will help us, not the optional operator:
interface User1 {
    login: string;
    password: string;
    age: number;
    addr: string | undefined;
};

// In functions, the optional operator is installed after the argument name:
// Now, when using such an argument inside the function body, the optional chaining operator is used
// It allows you to make a request to a property or method of an object and if we dont get it, then just return undefined. This allows you to avoid errors.
function sendUserData(obj: User, db?: string): void {
    console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
};
