interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

class myCar1 implements ICar {
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

    @checkAmountOfFuel
    isOpen(value: string) {
        return this.open ? "open" : `close ${value}`;
    }

    startTravel(passengers: number) {
        console.log(`Started with ${passengers} passengers`);
    }
}

const car1 = new myCar1();
console.log(car1.isOpen('checked'));


// // ES method decorator (TS version 5.0+, "experimentalDecorators" property must be set to false)
// function checkAmountOfFuel<T, A extends any[], R>(
//     target: (this: T, ...args: A) => R,
//     context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
// ) {
//     return function (this: T, ...args: A): R {
//         console.log(`${String(context.name)}`);
//         return target.apply(this, args);
//     };
// }


// old version method decorator (TS version 4+)
function checkAmountOfFuel(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
): PropertyDescriptor | void {
	const oldValue = descriptor.value;
	descriptor.value = function (this: any, ...args: any[]) {
		console.log(this.fuel);
		return oldValue.apply(this, args);
	};
}