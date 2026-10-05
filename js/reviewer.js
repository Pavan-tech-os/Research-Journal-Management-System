/* =========================
   REVIEWER FUNCTIONS
========================= */


const reviewForm =
    document.getElementById("reviewForm");


if (reviewForm) {

    reviewForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Review submitted successfully!"
            );


            reviewForm.reset();

        }
    );

}