// In TS there is a possibility to create abstract classes - a concept, a kind of template of something.

abstract class AbstractVehicle {
    model: string;
    capacity: number;
    abstract startEngine: (time: Date) => string;
    stopEngine(time: Date): string {
        this.startEngine(new Date());
        return "Engine Stopped";
    }
}

class Vehicle extends AbstractVehicle {
    startEngine = (time: Date) => {
        return "Started";
    };
}

// A method specified via abstract must be implemented in the descendant in accordance with the specified type.
// And the stopEngine method is ready to use, as are the two properties.
// Ready-made methods could not be passed when implementing the interface, because it contains only types:

interface IEngine {
    model: string;
    capacity: number;
    startEngine: (time: Date) => string;
}

class Vehicle1 implements IEngine {
    model: string;
    capacity: number;
    startEngine = (time: Date) => {
        return "Started";
    };
}

// So abstract classes can give a little more freedom. They have two restrictions:
// You can't create instances of them, you can only inherit from them.
// You cannot create individual abstract methods without declaring the entire class abstract.
// After compilation, the abstract classes remain, but without abstract methods. They appear only in descendants.