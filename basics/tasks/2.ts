const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 3,
	units: "m3",
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0]; // [electricity, water]

const calculatePayments = ({ readings: elReadings, mode }: {
	readings: number,
	units: string,
	mode: string
}, { readings: wReadings }: {
	readings: number,
	units: string,
}, elRate: number, wRate: number) => {
	if (mode === "double" && elReadings < 50) {
		monthPayments[0] = elReadings * elRate * 0.7;
	} else {
		monthPayments[0] = elReadings * elRate;
	}

	monthPayments[1] = wReadings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = ([elPayment, wPayment]: number[], { readings: elReadings, units: elUnits }: {
	readings: number,
	units: string,
	mode: string,
}, { readings: wReadings, units: wUnits }: {
	readings: number,
	units: string,
}) => {
	const text: string = `    Hello!
    This month you used ${elReadings} ${elUnits} of electricity
    It will cost: ${elPayment}€
    
    This month you used ${wReadings} ${wUnits} of water
    It will cost: ${wPayment}€`;

	return text;
};

console.log(sendInvoice(monthPayments, electricityUserData, waterUserData));