function search() {
   const listItems = document.querySelectorAll("#towns li");
   const inputValue = document.getElementById("searchText").value;
   const result = document.getElementById("result");

   let sum = 0;
   const inputToLower = inputValue.toLowerCase();

   for (const li of listItems) {

      const liTextToLower = li.textContent.toLowerCase();

      if (liTextToLower.includes(inputToLower)) {
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
         sum++;
      } else {
         li.style.fontWeight = "";
         li.style.textDecoration = "";
      }
   }
   result.textContent = `${sum} matches found`;
   //inputValue.textContent = "";

}
