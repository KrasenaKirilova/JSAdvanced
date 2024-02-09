function createPerson() {
    class Person {
        constructor(name, email) {
            this.name = name,
            this.email = email
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject
        }
    }
   
    
    return {
        Person, 
        Teacher
    };
       
}

//така се приема от джъдж!!!

const person = new Person('Krasena', "chris369@abv.bg");
const teacher = new Teacher('Rosko', "blabla", "worker");

console.log(person);
console.log(teacher);