// ReadonlyArray

const arr: Array<number> = [1, 2, 3];
const readOnlyArray: ReadonlyArray<string> = ["Hello"];

interface IState {
    data: {};
    tag: string;
};

function action(state: Readonly<IState>) {
    return state;
};

// Partial

interface IState1 {
    data: {
        name: string;
    };
    tag: string;
};

const state: Partial<IState1> = {
    data: {
        name: "John",
    }
    // tag property is optional
};

// Required (the opposite of Partial)

interface IState2 {
    data: {
        name: string;
    };
    tag?: string;
};

const strictData: Required<IState2> = {
    data: {
        name: "Mike",
    },
    // tag property is required, otherwise there will be an error
    tag: "MikeAwesome",
};