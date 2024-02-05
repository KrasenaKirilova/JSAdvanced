// решение на колега, което приема джъдж, моето е второто , но не се харесва
function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let div = document.getElementById('extra');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        div.style.display = 'block';
    } else {
        button.textContent = 'More';
        div.style.display = 'none';
    }
}



// function toggle() {
//     let btn = document.querySelector('.button');
//     let text = document.getElementById('extra');

//     const MORE = "MORE";
//     const LESS = 'LESS'

//     btn.textContent = btn.textContent !== LESS ? LESS : MORE;
//     text.style.display = text.style.display !== "block" ? "block" : " none";
// }


// решение на преподавател, защото моето не го харесва Джъдж

// function toggle() {
//     const btnSpan = document.querySelector('.button');
//     const textWraper = document.querySelector('#extra');

//     const MORE = "MORE";
//     const LESS = 'LESS'

//     btnSpan.textContent = btnSpan.textContent === MORE ? LESS : MORE;
//     textWraper.style.display = textWraper.style.display === "none" ||
//     textWraper.style.display === ""
//      ? "block" 
//      : " none";
// }
