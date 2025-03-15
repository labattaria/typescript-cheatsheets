interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

class myCar2 implements ICar {
    fuel: string = '50%';
    open: boolean = true;
    errors: any;
    _weight: number = 1000;

    @checkNumberOfSeats(4)
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

const car2 = new myCar2();
car2.freeSeats = 3;
console.log(car2);
console.log(car2.errors);


// // ES property decorator (TS version 5.0+, "experimentalDecorators" property must be set to false)
// function checkNumberOfSeats(limit: number) {
//     return function (target: undefined, context: ClassFieldDecoratorContext) {
//         return function (this: any, newAmount: number) {
//             if (newAmount >= 1 && newAmount <= limit) {
//                 return newAmount;
//             } else {
//                 throw Error(`Больше ${limit} сидений быть не может, меньше 1 тоже`);
//             };
//         };
//     };
// }


// old version property decorator (TS version 4+)
function checkNumberOfSeats(limit: number) {
    return function (target: Object, propertyKey: string | symbol) {
        let symbol = Symbol();

        const getter = function (this: any) {
            return this[symbol];
        };

        const setter = function (this: any, newAmount: number) {
            if (newAmount >= 1 && newAmount <= limit) {
                this[symbol] = newAmount + 1;
            } else {
                // console.log(`Больше ${limit} сидений быть не может`);
                Object.defineProperty(target, 'errors', {
                    value: `Больше ${limit} сидений быть не может`
                })
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}