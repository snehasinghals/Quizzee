const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "test@gmail.com" && password === "123456") {
        localStorage.setItem("quizzeeUser", email);
        window.location.href = "home.html";
    } else {
        errorMsg.innerText = "Invalid Email or Password";
    }
});

// addEventListener = Jab yeh event ho, tab yeh kaam 
//const - constant
// preventDefault() - It stops the browser from doing its default action.
//localStorage = Browser ki choti memory
//setItem() = Us memory ke andar kuch store karna
//window.location.href=Current page chhodo aur home.html kholo.