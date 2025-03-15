import "reflect-metadata";

interface ICuboid {
	width: number;
	length: number;
	height: number;
	calcArea: (multiply?: number) => number;
	calcVolume: (multiply?: number) => number;
}

@createdAt
class ShippingContainer implements ICuboid {
	@IsInt()
	@Min(1)
	width: number;

	@IsInt()
	@Min(1)
	length: number;

	@IsInt()
	@Min(1)
	@Max(8)
	height: number;
	// lastCalculation: string;
	// createdAt: Date;

	constructor(width: number, length: number, height: number) {
		this.width = width;
		this.length = length;
		this.height = height;
		validate(this, "width", width);
		validate(this, "length", length);
		validate(this, "height", height);
	}

	@lastCalculation("calcArea")
	calcArea(multiply?: number): number {
		return this.width * this.length * (multiply ? multiply : 1);
	}

	@lastCalculation("calcVolume")
	calcVolume(multiply?: number) {
		return this.width * this.length * this.height * (multiply ? multiply : 1);
	}
}

type ShippingContainerData = {
	lastCalculation: string;
	createdAt: Date;
};

const container = new ShippingContainer(10, 100, 7) as ICuboid & ShippingContainerData;
container.width = 5;
container.height = 5;
console.log(container.createdAt);
console.log(container.calcArea());
console.log(container.lastCalculation);
console.log(container.calcVolume());
console.log(container.lastCalculation);

finalValidate(container);

function createdAt<T extends {new (...args: any[]): {}}>(constructor: T) {
	return class extends constructor {
		createdAt = new Date();
	};
}

function lastCalculation(method: string) {
	return function (
		target: Object,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	): PropertyDescriptor | void {
		const oldValue = descriptor.value;

		descriptor.value = function (this: any, ...args: any[]) {
			this.lastCalculation = `Последний подсчет ${method} был ${new Date()}`;
			return oldValue.apply(this, args);
		};
	};
}

function IsInt() {
	return function (target: Object, propertyKey: string) {
		Reflect.defineMetadata("IsInt", true, target, propertyKey);
	};
}

function Min(value: number) {
	return function (target: Object, propertyKey: string) {
		Reflect.defineMetadata("Min", value, target, propertyKey);
	};
}

function Max(value: number) {
	return function (target: Object, propertyKey: string) {
		Reflect.defineMetadata("Max", value, target, propertyKey);
	};
}

function validate(target: Object, propertyKey: string, value: any) {
	if (
		Reflect.getMetadata("IsInt", target, propertyKey) &&
		(!Number.isInteger(value) || value !== parseInt(value))
	) {
		throw new Error(`property ${propertyKey} should be an integer`);
	}

	if (
		Reflect.hasMetadata("Min", target, propertyKey) &&
		value < Reflect.getMetadata("Min", target, propertyKey)
	) {
		throw new Error(`min value for ${propertyKey} is ${Reflect.getMetadata(
			"Min", target, propertyKey)}`
		);
	}

	if (
		Reflect.hasMetadata("Max", target, propertyKey) &&
		value > Reflect.getMetadata("Max", target, propertyKey)
	) {
		throw new Error(`max value for ${propertyKey} is ${Reflect.getMetadata(
			"Max", target, propertyKey)}`
		);
	}
}

function finalValidate(obj: unknown) {
	if (obj && typeof obj === "object" && !Array.isArray(obj)) {
		for (let key in obj) {
			validate(obj, key, obj[key as keyof typeof obj]);
		}
	}
}