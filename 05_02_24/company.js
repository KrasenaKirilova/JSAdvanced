class Company {
    constructor() {
        this.depatrments = {};
    }

        addEmployee(name, salary, position, department) {
            if (!name || !salary || !position || ! department || Number(salary) < 0)  {
                throw new Error ("Invalid input!");
            } 

            if (!this.department[department]) {
                this.department[department] = {
                    
                }
            }


            

            }
        }

        

        bestDepartment()
    
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());