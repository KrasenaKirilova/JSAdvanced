class Circle {
    constructor(r) {
        this.radius = r;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        return this.radius = value / 2;
    }
}


const myCircle = new Circle(5);
console.log(myCircle);
console.log(myCircle.radius);
console.log(myCircle.area);
console.log(myCircle.diameter);

myCircle.diameter = 50;


console.log(myCircle.radius);

