let size, email;
size = document.getElementById('#size').value;
email = document.getElementById('#email').value;

function subscribe() {
    alert("Hello! " + "Thank you for getting in touch");
    console.log(email);
}

let validateInput = () => {
    if (size === "") {
        console.log("Kindly choose your size");
    }
}