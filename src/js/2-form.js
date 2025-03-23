const formData = {
    email: "",
    message: ""
};
const LC_KEY = "feedback-form-state";

const formFeed = document.querySelector(".feedback-form");
const inputMail = formFeed.elements.email;
const messageText = formFeed.elements.message;

formFeed.addEventListener("input", handleInput);
formFeed.addEventListener("submit", handleFeedback);
const values = JSON.parse(localStorage.getItem(LC_KEY)) ?? { email: "", message: "" };
savedFields(values);

function handleInput(e) {
    if (values.email) {
        formData.email = values.email;
    }
    if (values.message) {
        formData.message = values.message;
    } 
    e.target.name === "email" ? formData.email = e.target.value : formData.message = e.target.value;
    localStorage.setItem(LC_KEY, JSON.stringify(formData))
};

function handleFeedback(e) {
    e.preventDefault();
    if (inputMail.value && messageText.value) {
        console.log(JSON.parse(localStorage.getItem(LC_KEY)));
    } else {
        return alert('Fill please all fields');
    }
    formData.email = "";
    formData.message = "";
    localStorage.removeItem(LC_KEY);
    e.target.reset();
}

function savedFields({email, message}) {
    if (email) {
        inputMail.value = email;
    };
    if (message) {
        messageText.value = message;
    }
}