// TS provides modifiers for class properties and methods. They allow developers to indicate their ownership and "visibility from outside".
// They will be removed from the code after compilation, so they make restrictions only in TS.

// By default, any properties and methods are public, i.e. available outside the class instance.
// This can also be specified with the public modifier:

class User10 {
    public email: string;
    public name: string;
}

// Usually they are not specified, except for a specific project style.
// Or a shortened notation of properties, where TS itself will create all the necessary data and assign it:

class User11 {
    constructor(public email: string, public name: string) {}
}


// If we want to prevent developers from working with a method or property “from the outside”, we can use the private modifier:

class Player {
    private login: string;
    private password: string;
    public server: string;
}

const player = new Player();
// player.login = "asdas"; // an error will be here
player.server = "qwerty";

// Now it can be used only inside the class itself.
// One of the options for working with a hidden property “from the outside” is to use get / set:

class Player1 {
    private login: string;
    private _password: string;
    public server: string;

    get password() {
        return this._password;
    }

    set password(newPass: string) {
        this._password = newPass;
    }
}

const newPlayer = new Player1();
newPlayer.password = "qwerty"; // ok


// When working with inheritance, private properties/methods will not be visible to descendants.
// If you want to make a property not accessible from outside, but appear on all descendants, you need to use the protected modifier:

class Player2 {
    private login: string;
    private _password: string;
    public server: string;
    protected consent: boolean;
}

class CompetitivePlayer extends Player2 {
    rank: number;

    isConsented() {
        this.consent ? "Yes" : "No"; // ok
        // this.login // error, property "login" is private
    }
}