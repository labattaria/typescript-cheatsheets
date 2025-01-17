// Difference between types and interfaces
// These two entities are very similar, but there are also differences that determine what exactly to use in different situations
// 1. The difference in the syntax when creating new type and interface:
// we use the intersection operator to create a new type, to create new interfaces we use the extends keyword

// 2. Difference in syntax when extending existing type and interface:

// It is allowed to add new fields into the existing interface
interface IConfig3 {
    protocol: "http" | "https";
    port: 3000 | 3001;
};

interface IConfig3 {
    date: Date;
};

// Error! Duplicate name gives error
type Config1 = {
    protocol: "http" | "https";
    port: 3000 | 3001;
};

// dublicate name
// type Config1 = {
//     date: Date
// }

// 3. Only objects can be placed in interfaces, but objects are allowed in type literals:
// 4. If you need a primitive type as an alias, then here only types
// 5. If you take a ready-made interface from somewhere and need to extend it - in this case it is necessary to use interfaces
// 6. If you work with objects - you can use both
// But keep in mind that interfaces are used more often to work with objects
// This is also described in the documentation - "If you would like a heuristic, use interface until you need to use features from type."