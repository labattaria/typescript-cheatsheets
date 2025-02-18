// In the modern JS standard, it is already possible to create static properties and methods of a class.
// For this, the static keyword is used.
// This allows the class to have an entity that is common to each instance.
// A common setting, a common method, something that generally characterizes this class.

class Player5 {
    static game: string = "Battlefield";
}

const game = Player5.game; // "Battlefield"

// Static method and property names cannot use built-in ones, such as name.
// Visibility modifiers(private, protected) can be applied to them.
// In this case, they can be used only within the classes themselves in this format:

class Player6 {
    private static game: string = "Battlefield"; // private static field

    static getGameName() {
        return Player6.game;
    }
}

// There is no such thing as static classes in TS.
// Even if a class consists of only static entities, we cannot create a construction like static class Test {}

// To initialize static properties, there are static blocks.
// They allow you to set a value only once, when the object is first initialized.

function setName() {
    return "Battlefield";
}

class Player7 {
    private static game: string;

    static {
        Player7.game = setName();
    }
}