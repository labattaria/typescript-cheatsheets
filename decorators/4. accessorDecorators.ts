interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

class myCar3 implements ICar {
    fuel: string = '50%';
    open: boolean = true;
    errors: any;
    _weight: number = 1000;
    freeSeats: number;

    get weight() {
        return this._weight;
    }

    @log
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

const car3 = new myCar3();
car3.weight = 3;
console.log(car3.weight);


// ES accesors decorators (TS version 5.0+, "experimentalDecorators" property must be set to false)
// function logOnSet<T, R>(
//     target: (this: T, value: number) => R,
//     context: ClassSetterDecoratorContext<T, number>
// ) {
//     return function (this: T, ...args: any): R {
//         console.log(`Изменяем значение на ${[...args]}`);
//         return target.apply(this, args);
//     };
// }

// function logOnGet<T, R>(
//     target: (this: T) => R,
//     context: ClassGetterDecoratorContext<T, number>
// ) {
//     return function (this: T): R {
//         console.log('Test');
//         return target.apply(this);
//     };
// }


// old version accessor decorator (TS version 4+)
function log(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor | void {
    const oldSet = descriptor.set;
    const oldGet = descriptor.get;
    descriptor.set = function (this: any, ...args: any) {
        console.log(`Изменяем значение на ${[...args]}`);
        return oldSet?.apply(this, args);
    };

    descriptor.get = function () {
        console.log('Test');
        return oldGet?.apply(this);
    };
}