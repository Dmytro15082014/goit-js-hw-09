const formData = {
    email: "",
    message: ""
};
const LC_KEY = "feedback-form-state";

const formFeed = document.querySelector(".feedback-form");
const inputMail = formFeed.elements.email;
const message = formFeed.elements.message;

formFeed.addEventListener("input", handleInput);
formFeed.addEventListener("submit", handleFeedBack);

saveFeed()

function handleInput(e) {
    if (e.target.name === "email") {
        formData.email = e.target.value;
        localStorage.setItem(LC_KEY, JSON.stringify(formData.email))
    } else {
        formData.message = e.target.value;
        localStorage.setItem(LC_KEY, JSON.stringify(formData.message))
    }
    localStorage.setItem(LC_KEY, JSON.stringify(formData))
}

function handleFeedBack(e) {
    e.preventDefault();
    localStorage.removeItem(LC_KEY)
    formFeed.reset()
}

function saveFeed() {
    const saveText = JSON.parse(localStorage.getItem(LC_KEY));
    console.log(saveText);
    if (saveText) {
        inputMail.value = saveText.email;
        message.value = saveText.message;
    }
}