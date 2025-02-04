// keyof - an operator that allows you to get all the properties of an object, its keys.
// We're working with types, not literals, so it can be applied to interface, type and class:

interface ICompany {
    name: string;
    debts: number;
};

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = "debts"; // "debts" or "name"

// The result of the work is the union type of the properties.
// Often this technique used with generics to create a link between type and its properties.

function printDebts3<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debts: S
) {
    console.log(company[name]);
};

const google: ICompany = {
    name: "Google",
    debts: 50000,
};

printDebts3(google, "name", "debts");