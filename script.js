document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const displayData = document.getElementById("display-data");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = `
            <h2>Registration Data:</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p>
        `;

        displayData.innerHTML = userData;
        form.reset();
    });
});