// To indicate that an entity definitely exists we use Non-Null and Non-Undefined operator - "!"
// Even if TS warns you about an error, then this operator will disable this behavior. It should only be used when you are 100% sure that we have value, method, property etc.
// Otherwise there will be errors in a runtime

// We tell the code that the parents property and the db argument will definitely be there. 
// This means that further operations can be applied to them.
interface User2 {
    login: string;
    password: string;
    age: number;
    parents?: {
        mother?: string;
        father?: string;
    }
};

function sendUserData1(obj: User, db?: string): void {
    console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
};

// Sometimes this operator allows you to adjust the TS logic and say, that the function will definitely be synchronous.
// And other situations when TS is not certain of the existence of something at the time of use.