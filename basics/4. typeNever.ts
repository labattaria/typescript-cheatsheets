// Basic type never
// There are functions that never reach a return value
const createError = (msg: string) => {
    throw new Error(msg);
}

function logBrtMsg4(isBirthday: boolean, userName: string, age: number): string {
    if (isBirthday === true) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    } else if (isBirthday === false) {
        return "Too bad";
    }

    return createError("Error");
}