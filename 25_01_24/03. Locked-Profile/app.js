function lockedProfile() {
    let btns = Array.from(document.querySelectorAll("button"));

    btns.forEach(x => x.addEventListener("click", showMore));

    function showMore(e) {
        let hiddenInfo = e.currentTarget.parentElement.querySelector("div");
        let currentRadioButton = e.currentTarget.parentElement.querySelector("input[type ='radio']:checked");

        if (currentRadioButton.value === "unlock") {
            if (e.currentTarget.textContent === "Show more") {
                e.currentTarget.textContent = "Hide it";
                hiddenInfo.style.display = "block";
            } else {
                e.currentTarget.textContent = "Show more";
                hiddenInfo.style.display = "none";
            }
        }
    }
}
