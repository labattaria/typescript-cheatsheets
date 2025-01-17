// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }

type Animal = 'cat' | 'dog' | 'bird';

interface AnimalData {
	animal: Animal;
	breed: string;
	sterilized?: string;
};

enum AnimalStatus {
	Available = 'available',
	NotAvailable = 'not available',
};

interface AvailableAnimalData extends AnimalData {
	location: string;
	age?: number;
};

interface AvailableAnimalResponse {
	status: AnimalStatus.Available;
	data: AvailableAnimalData;
};

interface NotAvailableAnimalResponse {
	status: AnimalStatus.NotAvailable;
	data: {
		message: string;
		nextUpdateIn: Date;
	}
};

type AnimalResponse = AvailableAnimalResponse | NotAvailableAnimalResponse;

function isAvailable(res: AnimalResponse): res is AvailableAnimalResponse {
	if (res.status === AnimalStatus.Available) {
		return true;
	} else {
		return false;
	}
};

function checkAnimalData(animal: AnimalResponse): AvailableAnimalData | string {
	if (isAvailable(animal)) {
		return animal.data;
	} else {
		return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
	}
};
