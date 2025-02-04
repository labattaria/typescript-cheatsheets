// Pick, Omit, Extract, Exclude, Record

// Omit
// The Omit type is required to exclude the specified properties from another type.
// The second argument can only be string | number | symbol
interface Currencies3 {
    usa: "usa";
    china: "cny";
    ukraine: "uah";
    kz: "tenge";
}
type CurrWithoutUSA = Omit<Currencies3, "usa">;


// Pick
// The Pick type is required to filter a type, based on specified properties.
// Only the selected ones remain
// You can only specify existing ones in target type. If there are several of them, then in union type
type CurrUSAAndUkraine = Pick<Currencies3, "usa" | "ukraine">;


// Exclude
// The Exclude type allows you to remove from the union type those that match condition:
type CountriesWithoutUsa = Exclude<keyof Currencies3, "usa">;


// Extract
// The Extract type selects types that match the condition. Extract is the opposite of Exclude:
type NewAnimation = "fade" | "swipe";
type SwipeType = Extract<NewAnimation, "swipe">;


// Record
// The Record type allows you to construct another type in the key: value format.
// This is a convenient way to tell TS: there will be an object, the keys will be this, the values ​​will be this:

type CreateCustomCurr2<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type PlayersNames = "alex" | "john";
type CustomCurrencies3 = CreateCustomCurr2<Currencies3>;
type GameDataCurr = Record<PlayersNames, CustomCurrencies3>;

const gameData: GameDataCurr = {
    alex: {
        customChina: "test",
        customKz: "test",
        customUkraine: "test",
        customUsa: "test",
    },
    john: {
        customChina: "test",
        customKz: "test",
        customUkraine: "test",
        customUsa: "test",
    },
};