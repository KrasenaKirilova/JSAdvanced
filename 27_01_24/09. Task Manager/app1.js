function solve() {
    const formRef = document.querySelector("form");
    const taskRef = document.getElementById("task");
    const textAreaRef = document.getElementById("description");
   const dateRef = document.getElementById("date");

    //const addBtn = document.getElementById("add");

    let [addTask, openTask, inProgress, complete] = document.querySelectorAll("section");



    formRef.addEventListener("submit", onSubmitHandler);



    function onSubmitHandler(e) {
        e.preventDefault();
        // let formElements = e.target.elements;

        // let taskName = formElements[0].value;
        // let description = formElements[1].value;
        // let date = formElements[2].value;

        let taskName = taskRef.value;
        let description = textAreaRef.value;
        let date = dateRef.value;

        if (!taskName || !description || date) {
            return;
        }

            createArticle(taskName, description, date);
    }
    

    function createArticle(taskName, description, date) {
        const newArticle = document.createElement("article");
        newArticle.innerHTML = getArticleTemplate(taskName, description, date);
        openTask.children[1].appendChild(newArticle);
        addEventListenerToBtn();

    }
function addEventListenerToBtn(){
    
}

    function getArticleTemplate(taskName, description, date) {
        return `<h3>${taskName}</h3>` +
            `<p>Description: ${description}</p>` +
            `<p>Due Date: ${date}</p>` +
            getBtnPartial();
    }
    function getBtnPartial() {
        return `<div class = "flex">` +
            `<button class = "green">Start</button>` +
            `<button class = "red">Delete</button>` +
            `</div>`;
    }
}