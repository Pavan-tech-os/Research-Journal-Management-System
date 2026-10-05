const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const role = document.getElementById("role").value;

        // Check empty fields
        if (email === "" || password === "" || role === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Password validation
        if (password.length < 6) {
            alert("Password must contain at least 6 characters.");
            return;
        }

        // Save login information for frontend demonstration
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userRole", role);

        alert("Login successful!");

        // Redirect according to selected role
        if (role === "author") {

            window.location.href = "author/dashboard.html";

        } else if (role === "editor") {

            window.location.href = "editor/dashboard.html";

        } else if (role === "reviewer") {

            window.location.href = "reviewer/dashboard.html";

        } else {

            alert("Invalid role selected.");

        }

    });

}