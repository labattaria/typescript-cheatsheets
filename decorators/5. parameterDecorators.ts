import "reflect-metadata";
const limitMetadataKey = Symbol('limit');

interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

class myCar4 implements ICar {
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

    @validate
    startTravel(@limit passengers: number) {
        console.log(`Started with ${passengers} passengers`);
    }
}

const car4 = new myCar4();
car4.startTravel(3);


// parameter decorator with metadata
function limit(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
) {
    let limitedParameters: number[] =
        Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
    limitedParameters.push(parameterIndex);
    Reflect.defineMetadata(limitMetadataKey, limitedParameters, target, propertyKey);
}


// old version method decorator (TS version 4+) with metadata
function validate(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) {
    let method = descriptor.value;

    descriptor.value = function (...args: any) {
        let limitedParameters: number[] = Reflect.getOwnMetadata(
            limitMetadataKey,
            target,
            propertyKey
        );

        if (limitedParameters) {
            for (let index of limitedParameters) {
                if (args[index] > 4) {
                    throw new Error("Нельзя больше 4х пассажиров");
                }
            }
        }

        return method?.apply(this, args);
    };
}