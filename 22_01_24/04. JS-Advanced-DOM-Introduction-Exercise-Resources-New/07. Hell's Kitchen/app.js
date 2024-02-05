function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector("textarea");
   const bestRestaurantResult = document.getElementById("bestRestaurant>p");
   const workerResult = document.getElementById("workers>p");



   function onClick() {
      let inputArray = JSON.parse(input.value);
      let result = {}

      for (let line of inputArray) {
         let [name, workers] = line.split(' - ');

         if (!result.hasOwnProperty(name)) {
            result[name] = {
               avgSalory: 0,
               bestSalory: 0,
               workers: []
            }
         }
      }


   }
}