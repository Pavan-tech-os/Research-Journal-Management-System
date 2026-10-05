console.log(
    "Research Journal Management System loaded successfully."
);


/* Smooth navigation */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function(link) {

    link.addEventListener(
        "click",
        function(event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


/* General message */

function showMessage(message) {

    alert(message);

}