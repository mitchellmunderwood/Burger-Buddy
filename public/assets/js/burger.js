$(function () {

    $(".eat-burger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id")
        var devoured = { id: id };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function () {
                console.log("Devoured a Burger");
                location.reload();
            }
        );
    });

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
