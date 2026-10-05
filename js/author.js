/* =========================
   AUTHOR FUNCTIONS
========================= */


function submitPaper() {

    alert(
        "Research paper submitted successfully!"
    );

}


function submitRevision() {

    const file =
        document.getElementById("revisionFile");


    if (!file || file.files.length === 0) {

        alert(
            "Please select a revised paper first."
        );

        return;

    }


    alert(
        "Revised paper submitted successfully!"
    );


    file.value = "";

}


/* Paper Submission */

const paperForm =
    document.getElementById("paperForm");


if (paperForm) {

    paperForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Research paper submitted successfully!"
            );

            paperForm.reset();

        }
    );

}