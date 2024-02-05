// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);
//    const rows = document.querySelectorAll("tbody tr");

//    function onClick() {

//       let searchField = document.getElementById("searchField").value.toLowerCase();

//       for (const row of rows) {
//          let rowToLower = row.textContent.toLowerCase();

//          if (rowToLower.includes(searchField)) {
//             row.setAttribute("class", "select");
//          } else {
//             row.removeAttribute("select");
//          }
//       }
//    }
// }

//второ решение на Тодор Стоянов

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const searchFieldRef = document.getElementById("searchField");
   const tableRows = Array.from(document.querySelectorAll("tbody tr"));

   function onClick() {

       const searchText = searchFieldRef.value;

      for (let row of tableRows) {
         let tableData = Array.from(row.querySelectorAll("td"));

         for (let td of tableData) {
            if(td.textContent.includes(searchText)) {
               row.classList.add("select");
               break;
            } else {
               row.classList.remove("select");
            }
            
         }
         
      }
      searchFieldRef.value = "";
   }
}

