$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        var emailInput = $("#login-email").val();
        var passwordInput = $("#login-password").val();
        console.log(emailInput);
        console.log(passwordInput);
        var userData = {
            user_email: emailInput,
            user_password: passwordInput
        };
        console.log(userData);
        if (!userData.user_email || !userData.user_password) {
            return;
        };
        loginUser(userData.user_email, userData.user_password);
        // emailInput.val("");
        $("#login-email").val("");
        // passwordInput.val("");
        $("#login-password").val("");
    });
    function loginUser(user_email, user_password) {
        $.post("/api/login", {
            user_email: user_email,
            user_password: user_password
        }).then(function (data) {
            window.location.replace(data);
        }).catch(function (err) {
            console.log(err);
        });
    }
})