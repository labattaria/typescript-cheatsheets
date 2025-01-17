// Advanced types
type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

const serverConfig3: Config = {
    protocol: "https",
    port: 3001,
};

// Now a type named Config can be used for annotation other objects. If they do not conform to this form, we will get an error.
// The properties of an object inside type can contain anything (literals, types, objects, etc.)

// You can also include a function description into a separate type:
type StartFunction = (protocol: "http" | "https", port: 3000 | 3001) => string;

const startServer5: StartFunction = (protocol: "http" | "https", port: 3000 | 3001): "Server started" => {
    console.log(`Server started on ${protocol}://server:${port}`);

    return "Server started";
};

// Type intersection
// We often have to combine types for convenient and fast creating what we need.
// Sometimes we don't want to duplicate code (the DRY principle), sometimes types come to us from a third-party library or file.
// In these and other cases we will need the intersection operator (&)

// Let's add a new type with a role to the example, with the help of which we will a new configuration type has been created:
type Role = {
    role: string;
};

type ConfigWithRole = Config & Role;

const serverConfig5: ConfigWithRole = {
    protocol: "https",
    port: 3001,
    role: "admin",
};

const backupConfig: Config = {
    protocol: "http",
    port: 3000
};

// Thanks to the intersection operator (intersection, &), we have combined two types and got the ConfigWithRole type.
// It contains all the properties from combined types. Now all three types can be used in code