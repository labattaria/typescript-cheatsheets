// In simple terms, implementation is a description of what should be inside a class using one or more interfaces.
// Allows you to build certain connections and dependencies.
// For implementation we use the implements keyword:

interface IUser {
    login: string;
    password: string;
}

class UserForm implements IUser {
    login: string;
    password: string;
}

// Now the class should have all the properties and methods that were in interface.
// The class itself can be supplemented with other methods or properties.

// We have created a connection and if something changes in the user interface,
// then TS will tell us that we need to change something in the class.

// Implementation can be carried out with several interfaces at once:

interface FormValidation {
    valid: boolean;
    isValid: (data: string) => boolean;
}

class DeliveryUserForm implements IUser, FormValidation {
    login: string;
    password: string;
    valid: boolean = false;

    isValid(login: string) {
        return login.length > 3;
    }
}

// If you do not specify a type for the login argument, there will be an error. 
// All because class doesn't automatically take argument annotations or optional properties of the interface(s).