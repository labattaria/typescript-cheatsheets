// It is always possible to lose context in classes.
// In TS it is possible to clearly say what the context should be and not get such situations:

class Player8 {
    #login: string;

    constructor(login: string) {
        this.#login = login;
    }

    logIn() {
        return `Player ${this.#login} online!`;
    }
}

const verifiedPlayer = new Player8("Test");
const test = verifiedPlayer.logIn;
test(); // error, cannot read properties of undefined (reading '#login')

// The problem can be solved using bind or an arrow function.
// But you won't know about the error until you run the code.
// That's why TS has an option to say right away what the context will be as the first argument in the function.
// And you will see an error at the development stage:

class Player9 {
        #login: string;

    constructor(login: string) {
        this.#login = login;
    }

    logIn(this: Player9) { // this type
        return `Player ${this.#login} online!`;
    }

    isPro(): this is Player9 {
        return this instanceof Player9;
    }
}

const verifiedPlayer1 = new Player9("Test");
const test1 = verifiedPlayer1.logIn;
test(); // error, the 'this' context of type 'void' is not assignable to method's 'this' of type 'Player9'

// Sometimes we return a context from a method, i.e. a reference to an object instance.
// In such cases, it is not worth hard - typing the return value, as it can break the logic:
// Example:

// connect() {
//     return this;
// }

// Using the context, we can check what class the instance belongs to and write additional type guard:

const somePlayer: Player8 | Player9 = new Player9("Test");
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);