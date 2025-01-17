// Interface is another type in TS that allows you to syntactically write down the template of the object that will be created
// An interface is created using the interface keyword, name with capital letter and opening curly braces:
interface IConfig {
    protocol: "http" | "https";
    port: 3000 | 3001;
};

// The properties of an object can contain anything: literals, other types, etc.
// It won't break the code if you replace the type with an interface. They are very similar.
// Usually interface names are written in Hungarian notation, starting with letters I and further camelCase.
// This is an optional rule, depending on project and company (for example: IConfig, IMainSlider, IAdminUser etc.)

// Interface merging
// To combine several interfaces and get a new one The extends keyword is used:
interface IRole {
    role: string;
};

interface IConfigWithRole extends IConfig, IRole {
    // here we can add extra properties if you need
};

const serverConfig6: IConfigWithRole = {
    protocol: "https",
    port: 3001,
    role: "admin"
};

// Index signatures
// If you don’t know how many properties will be in an object, but you know which one form they will all be, then you can use a special syntax:
interface Styles {
    [key: string]: string;
};

const styles: Styles = {
    position: "absolute",
    top: "20px",
    left: "50px",
};

// Now all objects annotated with this interface should follow the structure: the property is only a string, its value is also just a string