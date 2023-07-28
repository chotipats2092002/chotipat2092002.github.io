function Circle(radius) {
    let obj = {};
    obj.radius = radius;
    obj.area = function() {
        return Math.PI * this.radius * this.radius;
    }
    obj.perimeter = () => {
        return 2*Math.PI*this.radius;
    }
}

radius = Number(prompt("Enter radius"));
const c = new Circle(radius);
alert('Area = ' + c.area().toFixed(2));
alert('Parimeter = ' + c.parimeter().toFixed(2));
