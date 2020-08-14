$(function () {


    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#createBurger").val().trim(),
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Created New Burger");
                location.reload();
            }
        );
    });


});
