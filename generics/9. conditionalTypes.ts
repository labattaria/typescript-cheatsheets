// Types can be formed using the ternary operator, where we literally ask: “does this type inherit from (or is compatible with) this?
// If yes - there will be this type, if no - another type”:
// SomeType extends OtherType ? TrueType : FalseType;

type Example = "string" extends "Hello" ? string : number; // number, different literal types

// Conditional types always require a constraint using the extends keyword.
// We work with types. There will be an error when using a literal.
// Specific values ​​must first be converted to type using the typeof operator:

const newString: string = "Hello";
// type Example1 = "string" extends newString ? string : number; // error
type Example2 = "string" extends typeof newString ? string : number;

// Сonditional types are often used in combination with generics.

// type FromUserOrFromBase<T extends string | number> = T extends string ? IDataFromUser : IDataFromBase;

// interface UserData<T extends "created" | Date> {
//     created: T extends "created" ? "created" : Date;
// };

// Conditional types can be branched, achieving the desired result and combining conditions:

type GetStringType<T extends "hello" | "world" | string> = T extends "hello"
    ? "hello"
    : T extends "world"
    ? "world"
    : string;
    
// Infer operator allows you to “pull out” a specific type from an entity:

type GetFirstType<T> = T extends Array<infer First> ? First : T;
type Ex = GetFirstType<number[]>; // number

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;

// Implementation of a type that accepts any type and returns an array of this type:

type ToArray<Type> = Type extends any ? Type[] : never;
type ExArray = ToArray<number>; // number[]
type ExArray2 = ToArray<Ex | string>; // number[] | string[]
