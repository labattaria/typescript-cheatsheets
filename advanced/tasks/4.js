var refs = {
    forms: document.querySelectorAll("form"),
    email: document.querySelector("#email"),
    title: document.querySelector("#title"),
    text: document.querySelector("#text"),
    checkbox: document.querySelector("#checkbox"),
};
;
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
refs.forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        e.preventDefault();
        formData.email = (_b = (_a = refs.email) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
        formData.title = (_d = (_c = refs.title) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : "";
        formData.text = (_f = (_e = refs.text) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : "";
        formData.checkbox = (_h = (_g = refs.checkbox) === null || _g === void 0 ? void 0 : _g.checked) !== null && _h !== void 0 ? _h : false;
        var validateData = validateFormData(formData);
        if (validateData) {
            checkFormData(formData);
        }
    });
});
function validateFormData(_a) {
    var email = _a.email, title = _a.title, text = _a.text, checkbox = _a.checkbox;
    if (email !== "" && title !== "" && text !== "" && checkbox !== false) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
;
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    if (emails.some(function (e) { return e === email; })) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
;
