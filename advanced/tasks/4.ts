const refs = {
	forms: document.querySelectorAll("form"),
	email: document.querySelector("#email") as HTMLInputElement,
	title: document.querySelector("#title") as HTMLInputElement,
	text: document.querySelector("#text") as HTMLTextAreaElement,
	checkbox: document.querySelector("#checkbox") as HTMLInputElement,
};

interface IFormData {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
};

const formData: IFormData = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};

refs.forms.forEach((form) => {
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		formData.email = refs.email?.value ?? "";
		formData.title = refs.title?.value ?? "";
		formData.text = refs.text?.value ?? "";
		formData.checkbox = refs.checkbox?.checked ?? false;

		const validateData = validateFormData(formData);

		if (validateData) {
			checkFormData(formData);
		}
	})
});

function validateFormData({ email, title, text, checkbox}: IFormData): boolean {
	if (email !== "" && title !== "" && text !== "" && checkbox !== false) {
		return true;
	} else {
		console.log("Please, complete all fields");
		return false;
	}
};

function checkFormData(data: IFormData): void {
	const { email } = data;
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

	if (emails.some((e) => e === email)) {
		console.log("This email is already exist");
	} else {
		console.log("Posting data...");
	}
};