// typeof - operator that allows you to get the type.
// In the topic of type manipulation, it plays a big role because allows you to get the type of any literal,
// and work further with it as with type:

const googleDetails = {
    name: "Google",
    debts: 50000,
};

// type GoogleKeys = keyof googleDetails; // error, googleDetails - it's an object, not a type
type GoogleKeys = keyof typeof googleDetails; // "name" | "debts"

// When you need to work with something as with a type, then first use typeof on it, and then we perform the manipulations.