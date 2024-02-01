function create(words) {
 for (const word of words) {
     let divEl = document.createElement('div');
     let pEl = document.createElement('p');
     divEl.appendChild(pEl);

     divEl.addEventListener('click', clickHandler);

     pEl.textContent = word;
     pEl.style.display = 'none';
     document.getElementById('content').appendChild(divEl);
 }
  function clickHandler(event) {
   event.currentTarget.children[0].style.display = 'block'; 
  }
}