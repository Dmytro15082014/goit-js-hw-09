const formData = {
    email: "",
    message: ""
}
let LOCAL_KEY = localStorage.setItem("feedback-form-state", JSON.stringify(formData));

const formFeed = document.querySelector(".feedback-form");
formFeed.addEventListener("input", handleInput);
formFeed.addEventListener("submit", handleFeedBack);


function handleInput(e) {
    console.log(e);
}

function handleFeedBack(e) {
    e.preventDefault();
    console.log(e.target);
    formFeed.reset()
}