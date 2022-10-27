class Circle{
    constructor(radius, color){
         this.radius = radius;
}
getRadius (){
        return this.radius;
}
getArea (){
        return this.radius *this.radius * Math.PI;
}
}
let circle = new Circle(4);
let radius = circle.getRadius();
let area = circle.getArea();
console.log('bán kính là '+radius+ " diện tích là "+area);