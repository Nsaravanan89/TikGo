document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match! Please check and try again.");
        return;
    }else{
        window.location.href = "login.html";
    }

    // if (password.length < 6) {
    //     alert("Password must be at least 6 characters long.");
    //     return;
    // }

    console.log("Registration Submission:", { fullName, email });
    alert("Registration submitted successfully!");
});
