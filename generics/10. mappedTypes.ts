// TS allows you to form object types by iterating and modifications of the original type. This mechanism is called Mapped types.
// For example, we can form:

interface Currencies {
    usa: "usa";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
}

type CustomCurrencies = {
    usa: string;
    china: string;
    ukraine: string;
    kz: string;
}

// Manually creating this type leads to several problems:
// If every country in the world will be in the list, you will spend a huge amount of time to change data manually.
// In this case, the copy will take up a huge amount of space in the code.
// But the main thing is that you will not have a dependencies of one type from another.
// If you remove a property in the target interface, copy will not be changed automatically.

// For optimizization, we will use Mapped types syntax:

// type MappedType = {
//     [identifier in many]: anyTypeOfData (string, number etc.)
// }

type CreateCustomCurr<T> = {
    [P in keyof T]: string;
};

type CustomCurrencies1 = CreateCustomCurr<Currencies>;

// P means propertys, that are taken from the keys coming to generic type.
// keyof T - getting these keys, instead of string can be any type you need (string, number, boolean etc.)
// This way we have established a connection between types
// and removing one of the properties in Currencies will change the type of CustomCurrencies

// + and - modifiers
// During the creation of a new type, you can add readonly and/or optional modifiers

// type CreateCustomCurr<T> = {
//    readonly [P in keyof T]?: string;
// };

// There's also operators “+” and “-”, which add or remove these modifiers from the original type.

// type CreateCustomCurr<T> = {
//    -readonly [P in keyof T]-?: string;
// };