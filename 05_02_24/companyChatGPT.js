class Company {
    constructor() {
      this.departments = {};
    }
  
    addEmployee(name, salary, position, department) {
      if (!name || !salary || !position || !department || salary < 0) {
        throw new Error("Invalid input!");
      }
  
      if (!this.departments[department]) {
        this.departments[department] = [];
      }
  
      const newEmployee = { name, salary, position };
      this.departments[department].push(newEmployee);
  
      return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
  
    bestDepartment() {
      let bestDepartmentName = "";
      let bestAverageSalary = 0;
  
      for (const department in this.departments) {
        const employees = this.departments[department];
        const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
        const averageSalary = totalSalary / employees.length;
  
        if (averageSalary > bestAverageSalary) {
          bestAverageSalary = averageSalary;
          bestDepartmentName = department;
        }
      }
  
      if (bestDepartmentName === "") {
        return "No departments found.";
      }
  
      const sortedEmployees = this.departments[bestDepartmentName].sort((a, b) => {
        if (b.salary !== a.salary) {
          return b.salary - a.salary;
        } else {
          return a.name.localeCompare(b.name);
        }
      });
  
      const result = `Best Department is: ${bestDepartmentName}\nAverage salary: ${bestAverageSalary.toFixed(2)}\n`;
  
      const employeeDetails = sortedEmployees.map(emp => `${emp.name} ${emp.salary} ${emp.position}`).join('\n');
  
      return result + employeeDetails;
    }
  }