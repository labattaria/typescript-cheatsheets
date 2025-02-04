// To get the type of value in a specific property, we can use Indexed Access Types:

interface INewCompany {
    name: string;
    debts: number;
    management: {
        owner: string;
    };
};

type CompanyDebtsType = INewCompany["debts"]; // number
type CompanyOwnerType = INewCompany["management"]["owner"]; // string

// To use a variable when getting a type, use typeof operator.
// The algorithm is the same: we get the type from the variable and apply it:

const debts = "debts";
type CompanyNewDebtsType = INewCompany[typeof debts]; // number