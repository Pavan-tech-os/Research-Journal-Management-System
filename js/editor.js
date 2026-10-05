function assignReviewer() {

    alert("Reviewer assigned successfully!");

}


function checkPlagiarism() {

    const result =
        document.getElementById("plagiarismResult");

    if (result) {

        result.style.display = "block";

    }

}


function viewPaper(paperId) {

    alert(
        "Opening paper: " + paperId
    );

}


/* Assign Reviewer Form */

const reviewerForm =
    document.getElementById("reviewerForm");

if (reviewerForm) {

    reviewerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Reviewer assigned successfully!"
            );

            reviewerForm.reset();

        }
    );

}


/* Search and Filter */

const searchInput =
    document.getElementById("searchPaper");

const statusFilter =
    document.getElementById("statusFilter");

if (searchInput && statusFilter) {

    function filterSubmissions() {

        const searchValue =
            searchInput.value.toLowerCase();

        const statusValue =
            statusFilter.value;

        const rows =
            document.querySelectorAll(
                "#submissionTable tbody tr"
            );


        rows.forEach(function(row) {

            const text =
                row.innerText.toLowerCase();

            const status =
                row.innerText.toLowerCase();


            const matchesSearch =
                text.includes(searchValue);


            let matchesStatus = true;


            if (statusValue === "review") {

                matchesStatus =
                    status.includes("under review");

            }

            else if (statusValue === "revision") {

                matchesStatus =
                    status.includes("revision");

            }

            else if (statusValue === "accepted") {

                matchesStatus =
                    status.includes("accepted");

            }

            else if (statusValue === "rejected") {

                matchesStatus =
                    status.includes("rejected");

            }


            row.style.display =
                matchesSearch && matchesStatus
                ? ""
                : "none";

        });

    }


    searchInput.addEventListener(
        "input",
        filterSubmissions
    );


    statusFilter.addEventListener(
        "change",
        filterSubmissions
    );

}