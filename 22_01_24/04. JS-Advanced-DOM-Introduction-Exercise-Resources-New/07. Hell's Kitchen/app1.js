function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textAreaRef = document.querySelector("textarea");
   const bestRestaurantResult = document.querySelector("# bestRestaurant p");
   const bestWorkersResult = document.querySelector("# workers p");



   function onClick() {
      let inputArray = JSON.parse(textAreaRef.value);
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
         let currentWorkers = getAllWorkers(workers, result[name].workers);
         result[name].workers = sortWorkers(currentWorkers);
         uppdateSalary(result[name]);
      }
      let bestRestaurant = findBestRestaurant(result);
      appendBestRestaurant(bestRestaurant[0]);
      appendBestRestaurantWorkers(bestRestaurant[1]).workers;
   }

   function appendBestRestaurantWorkers(workers) {
      let buff = "";
      workers.forEach(worker  => buff += `Name: ${worker.name} With Salary: ${worker.salary} `);
      bestWorkersResult.textContent = buff;

   }

   function appendBestRestaurant(data){
      bestRestaurantResult.textContent = `Name: ${data[0]} Average Salary: ${data[1].avgSalory.toFixed(2)} Best Salary: ${data[1].bestSalory.toFixed(2)}`
   }

   function findBestRestaurant(restaurant) {

      return Object.entries(restaurant).sort((a, b) => {
         return b[1].avgSalory - a[1].avgSalory;
      })[0];
   }

   function sortWorkers(works) {
      return works.sort((workerA, workerB) => workerB.salary - workerA.salary);
   }

   function uppdateSalary(restaurant) {
      let sumOfSalary = 0;
      let bestSalary = 0;
      restaurant.workers.forEach(worker => {
         sumOfSalary += worker.salary;
         if (bestSalary < worker.salary) {
            bestSalary = worker.salary;
         }
      })
      restaurant.bestSalary = bestSalary;

   }

   function getAllWorkers(workersData) {
      let result = [];
      let workersArr = workersData.split(", ");

      for (let worker of workersArr) {
         let [workerName, salary] = worker.split(" ");
         salary = Number(salary);
         result.push({
            workerName,
            salary
         });
      }
      return result;
   }
}

(["PizzaHut - Peter 500, George 300, Mark 800",

   "TheLake - Bob 1300, Joe 780, Jane 660"]);


   