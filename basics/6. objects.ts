// Object in JS is a basic unit, but in TS they are more often used as types other entities: Type, Interface... 
// But we can type objects at the stage of use (in functions etc.)

// our object
const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: "John",
}

// Object annotation when used in a function
function logBrtMsg1 (data: {
    isBirthdayData: boolean,
    ageData: number,
    userNameData: string,
}): string {
    return "qwerty";
}

// Object destructuring
function logBrtMsg2({
    isBirthdayData,
    userNameData,
    ageData
}: {
    isBirthdayData: boolean,
    userNameData: string,
    ageData: number,
}): string {
    return `${isBirthdayData}, ${userNameData}, ${ageData}`;
}