function solve() {

    const getTaskInput = document.getElementById("task");
    const getTextAreaInput = document.getElementById("description");
    const getdateInput = document.getElementById("date");
    const getBtnAddInput = document.getElementById("add");

    getBtnAddInput.addEventListener("click", btnAdd);
    const getClassOrange = document.getElementsByClassName("orange")[0];
    const divAdd = getClassOrange.parentElement.parentElement.children[1];

    const getClassGreenElement = document.getElementsByClassName("green")[0];

    const divAddClassGreen = getClassGreenElement.parentElement.parentElement.children[1];

    function btnAdd(ev) {

        if (getTaskInput.value === "" || getTextAreaInput.value === "" || getdateInput.value === "") {
            return;
        }

        ev.preventDefault();

        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = getTaskInput.value;

        let p1 = document.createElement("p");
        p1.textContent = `Description: ${getTextAreaInput.value}`;

        let p2 = document.createElement("p");
        p2.textContent = `Due Date: ${getdateInput.value}`;

        let div = document.createElement("div");
        div.classList.add("flex");

        let btnStart = document.createElement("button");
        btnStart.textContent = "Start"
        btnStart.classList.add("green");
        div.appendChild(btnStart)

        let btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete"
        btnDelete.classList.add("red");
        div.appendChild(btnDelete)

        let btnFinish = document.createElement("button");
        btnFinish.textContent = "Finish";
        btnFinish.classList.add("orange");

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div);

        divAdd.appendChild(article);

        btnDelete.addEventListener("click", del)
        btnStart.addEventListener("click", start);
        btnFinish.addEventListener("click", finished);

        function del(ev) {

            ev.target.parentElement.parentElement.remove();

        }

        const inProgress = document.getElementById("in-progress");

        function start() {

            btnStart.remove();
            btnDelete.remove();

            div.appendChild(btnDelete);
            div.appendChild(btnFinish);
            inProgress.appendChild(article);

        }

        function finished() {
            
            btnDelete.remove();
            btnFinish.remove();

            divAddClassGreen.appendChild(article)

        }

        getTextAreaInput.value = "";
        getTaskInput.value = "";
        getdateInput.value = "";
    }
}