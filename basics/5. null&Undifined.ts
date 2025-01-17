// Although in native JS null and undefined can be inserted anywhere, in TS this will interfere with code analysis and identification of inaccuracies
// This behavior can be disabled in the compiler configuration. To do this, just set the strictNullChecks option to false. But! You shouldn't do this, it leads to errors in the code
// function getRndData() {
//     if (Math.random() < 0.5) {
//         return null;
//     } else {
//         return "   Some data   ";
//     }
// }

// const data = getRndData();
// const trimmedData = data.trim();

// The data can contain either null or a string. TS checks disabled
// TS will not tell you that there may be an error at the null.trim() stage
// And even if you specify the const data: string annotation it won't change anything
// So don't disable this check and use these types according to purpose and need





