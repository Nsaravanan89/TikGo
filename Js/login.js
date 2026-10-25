document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === "" || passwordInput === "") {
        alert("Please fill in all fields.");
        usernameInput = " "
        passwordInput = " "
        return;
    }
    else{
        window.location.href = "home.html";
    }

    // console.log("Attempting login for:", usernameInput);
    // alert("Login system connected! Form submitted successfully.");
});
