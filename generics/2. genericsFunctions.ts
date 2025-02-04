// To create the second (and subsequent) argument, which will also be defined during a function call,
// it is enough to register it via comma:

function updatingData<T, S>(data: T, options: S): T {
    return data;
};

// To perform different operations on different data types we use type narrowing:

function updatingData1<T, S>(data: T, options: S): string {
    switch (typeof data) {
        case "string":
            return `${data}, speed: ${options}`;
        case "number":
            return `${data.toFixed()}, speed: ${options}`;
        default:
            return "Not valid";
    };
};

// From a temporary placeholder you can form an array.
// In this case, we pass an array of the required types:

function updatingData2<T, S>(data: T[], options: S): T[] {
    return data;
};

let result1 = updatingData2([1], "good");
let result2 = updatingData2(["bad"], "good");
const result3 = updatingData2<number, string>([50], "cool");

interface Data {
    processing: <T>(data: T) => T;
};

const newResult: Data = {
    processing: (data) => {
        console.log(data);
        return data;
    },
};

newResult.processing(5);