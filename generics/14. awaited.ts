// Awaited

// Awaited was the last one introduced into the language
// and is needed to form a type that returns the specified promise:

type FromPromise = Awaited<Promise<number>>; // number, not Promise<number>

// This type also allows you to recursively expand promises:

type FromPromise1 = Awaited<Promise<Promise<number>>>; // number

// Example usage to get type:

interface NewUser {
    name: string;
}

async function fetchUsers(): Promise<NewUser[]> {
    const users: NewUser[] = [
        {
            name: "Alex",
        },
    ];

    return users;
}

const users = fetchUsers(); // type Promise<NewUser[]>
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // NewUser[]