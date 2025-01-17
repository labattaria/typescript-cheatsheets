// The simplest transformations work exactly the same way as in native JS.
// They are valid because TS clearly understands sequence of actions.

const num = 5;
const strNum: string = num.toString();

const str = "qwerty";
const numStr: number = +str;

// With objects things are a little more complicated. If we're talking about transformation of one object into another,
// then most often we use transformative functions.
// They allow flexible customization of the transformation and easily change it in the future:

interface Department {
    name: string;
    budget: number;
};

const department = {
    name: "web-dev",
    budget: 50000,
};

interface Project {
    name: string;
    projectBudget: number;
};

function transformDepartment(department: Department, amount: number): Project {
    return {
        name: department.name,
        projectBudget: amount,
    };
};

const mainProject: Project = transformDepartment(department, 4000);