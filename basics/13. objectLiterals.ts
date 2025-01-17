// Object literals
// If there is an object in the code that is used later, then it may not be suitable for the conditions that seem to the programmer obvious at first glance:
const serverConfig = {
    protocol: "https",
    port: 3001,
};

const startServer3 = (protocol: "http" | "https", port: 3000 | 3001): "Server started" => {
    console.log(`Server started on ${protocol}://server:${port}`);

    return "Server started";
};

// startServer3(serverConfig.protocol, serverConfig.port);
// TS will show an error, because in serverConfig.protocol or serverConfig.port can be anything.
// And the function only accepts specific input values

// To indicate what type an object should have and what it can be made of consist, object literals are used:
const serverConfig4: { protocol: "http" | "https"; port: 3000 | 3001 } = {
    protocol: "https",
    port: 3001
};

// function object literals
// Such literals can be used as annotations and in functions. (A function is an object in JS).
// Thus we will describe what The arguments the function takes, in what form and what it can return:
const startServer4: (protocol: "http" | "https", port: 3000 | 3001) => string = (
    protocol: "http" | "https",
    port: 3000 | 3001
): "Server started" => {
    console.log(`Server started on ${protocol}://server:${port}`);

    return "Server started";
};

// The most important thing is to distinguish the annotation from the declaration of the function itself, which is not always easy with this syntax. 
// Please note that in the annotation In this example, we return string, and the function itself states that it returns the specific string "Server started"

