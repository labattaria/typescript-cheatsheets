type ItemsQuantity = "empty" | number;

interface ClothesWarehouse {
	jackets: "empty" | number;
	hats: "empty" | number;
	socks: "empty" | number;
	pants: "empty" | number;
}

interface StationeryWarehouse {
	scissors: "empty" | number;
	paper: "empty" | boolean;
}

interface AppliancesWarehouse {
	dishwashers: "empty" | number;
	cookers: "empty" | number;
	mixers: "empty" | number;
}

interface TotalWarehouse extends ClothesWarehouse, StationeryWarehouse, AppliancesWarehouse {
	deficit: boolean;
	date: Date;
}

const totalData: TotalWarehouse = {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
	deficit: true,
	date: new Date(),
};

function printReport(data: TotalWarehouse): string {
	const res: string = Object.entries(data).filter((item) => item[1] === "empty").reduce((total, item) => `${total} ${item[0]},`, "");

	if (res.trim().length) {
		return `We need this items: ${res.slice(0, -1)}`;
	} else {
		return "Everything fine";
	}
};

console.log(printReport(totalData));
