// Function arguments type annotation
function logBrtMsg(isBirthday: boolean, userName: string, age: number) {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    } else {
        return "Error"
    }
}

// Function return values type annotation (after function signature), :void if the function does not return anything
function logBrtMsg5(isBirthday: boolean, userName: string, age: number): string {
    if (isBirthday) {
        return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
    } else {
        return "Error"
    }
}