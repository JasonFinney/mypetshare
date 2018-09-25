$(document).ready(function () {
    $(document).on("click", "#submit", insterNewPet);
    $(document).on("click", "morePets", insertAnotherPet);

    function insertAnotherPet() {
        event.preventDefault();
        var petInfo = {
            pet_name: $("#pet-name").val().trim(),
            pet_type: $("#pet-type").val().trim(),
            pet_breed: $("#pet-breed").val().trim(),
            pet_picture_url: $("#pet-pic").val().trim(),
            service_animal: $("#service-animal").val().trim()
        }
        $.post("api/petsignup", petInfo);
        alert("You've signed up your pet! We'll send you to sign up another or to services if you only chose 1. Almost there!");
        window.location.href = "/service"
    }


    function insertNewPet() {
        event.preventDefault();
        var petInfo = {
            pet_name: $("#pet-name").val().trim(),
            pet_type: $("#pet-type").val().trim(),
            pet_breed: $("#pet-breed").val().trim(),
            pet_picture_url: $("#pet-pic").val().trim(),
            service_animal: $("#service-animal").val().trim()
        }
        $.post("api/petsignup", petInfo);
        alert("You've signed up your pet! We'll send you to sign up another or to services if you only chose 1. Almost there!");
        window.location.href = "/petsignup"
    }
    $(document).on("click", "#submit", insterNewPet);
    $(document).on("click", "morePets", insertAnotherPet);

})