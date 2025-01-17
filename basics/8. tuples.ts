// Tuples are a data structure that exists only in TS, used to define a set of data in a strictly defined order:
const userDataTuple: [boolean, number, string] = [true, 40, "John"];
userDataTuple.push(50);
const res = userDataTuple.map((t) => `${t} = data`);

// Desctructuring
const [bthd, age, userName] = userDataTuple;

// To extend tuples with an indefinite number of elements a special syntax is used. Can be used anywhere in the annotation, but only for once