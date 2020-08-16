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

    $("#submit_btn").on("click", function (event) {
        event.preventDefault();
        if ($("#burgerName").val().trim().length < 1) {
            alert("You can't add a nameless burger");

        } else {
            var newBurger = {
                name: $("#burgerName").val().trim(),
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
        }
    });


});
