enum TransferStatus {
	Pending = "pending",
	Rejected = "rejected",
	Completed = "completed",
}

enum ErrorMessages {
	NotFound = "Not found: 404",
	NotEnoughSpace = "Not enough space: 507",
	Forbidden = "Forbidden: 403",
}

interface ITransfer {
	path: string;
	data: string[];
	date?: Date;
	start: (p: string, d: string[]) => string;
	stop: (reason: string) => string;
}

interface TransferError {
	message: ErrorMessages;
}

class SingleFileTransfer implements ITransfer, TransferError {
	path: string;
	data: string[];
	date: Date;
	message: ErrorMessages;
	transferStatus: TransferStatus;

	constructor(status: TransferStatus) {
		this.transferStatus = status;
	};

	start = (p: string, d: string[]): string => {
		// return d.length > 0 ? `Transfer started with: ${p}, our data: ${d.join()}` : `Transfer started with: ${p}, our data is empty`;
		return `Transfer started with: ${p}, data: ${d.length > 0 ? d.join(', ').trim() : 'empty'}`;
	};

	
	checkTransferStatus = (): string => {
		return this.transferStatus;
	};
	
	stop = (reason: string): string => {
		return `Transfer status - stopped or canceled, reason: ${reason}. Time when transfer was stopped: ${new Date().toLocaleString()}`;
	};
	
	rejected = (errorMsg: ErrorMessages): string => {
		return `Transfer status: ${TransferStatus.Rejected}, error message: ${errorMsg}`;
	};

};

const newTransfer = new SingleFileTransfer(TransferStatus.Pending);
console.log(newTransfer.start("Test", ["asd", "dasdsa", "asdfsf"]));
console.log(newTransfer.checkTransferStatus());
console.log(newTransfer.stop("Not enough space"));
console.log(newTransfer.rejected(ErrorMessages.NotEnoughSpace));