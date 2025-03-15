interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

@changeDoorStatus(false)
@changeAmountOfFuel(95)
class myCar implements ICar {
    fuel: string = '50%';
    open: boolean = true;
    errors: any;
    _weight: number = 1000;
    freeSeats: number;

    get weight() {
        return this._weight;
    }

    set weight(num: number) {
        this._weight = this._weight + num;
    }

    isOpen(value: string) {
        return this.open ? "open" : `close ${value}`;
    }

    startTravel(passengers: number) {
        console.log(`Started with ${passengers} passengers`);
    }
}

const car = new myCar();


// old version class decorators (TS version 4+) + decorator factories 
// a decorator factory is simply a function that returns the expression that will be called by the decorator at runtime
function changeDoorStatus(status: boolean) {
    return <T extends {new (...args: any[]): {}}>(constructor: T) => {
        return class extends constructor {
            open = status;
        };
    }
}

function changeAmountOfFuel(amount: number) {
    return <T extends {new (...args: any[]): {}}>(constructor: T) => {
        return class extends constructor {
            fuel = `${amount}%`;
        };
    }
}


// // ES class decorators (TS version 5.0+, "experimentalDecorators" property must be set to false)
// function changeDoorStatus(status: boolean) {
//     return <T extends {new (...args: any[]): {}}>(target: T, context: ClassDecoratorContext<T>) => {
//         return class extends target {
//             open = status;
//         };
//     }
// }

// function changeAmountOfFuel(amount: number) {
//     return <T extends {new (...args: any[]): {}}>(target: T, context: ClassDecoratorContext<T>) => {
//         return class extends target {
//             fuel = `${amount}%`;
//         };
//     }
// }


// old version class decorators (TS version 4+)
// function closeCar<T extends {new (...args: any[]): {}}>(constructor: T) {
//     return class extends constructor {
//         open = false;
//     };
// }

// function addFuel<T extends {new (...args: any[]): {}}>(constructor: T) {
//     return class extends constructor {
//         fuel = '100%';
//     };
// }