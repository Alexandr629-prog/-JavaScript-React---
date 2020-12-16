'use strict';

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return  this.height*this.width;
    }
}

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgcolor){
        super(height, width);//всегда первой строчкой в конструкторе
        this.text = text;
        this.bgcolor = bgcolor;
    }

    showMyProps(){
        console.log(`Текст: ${this.text}, цвет ${this.bgcolor} `);
    }
}

const div = new ColoredRectangleWithText(255, 10, 'hello', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// абстракия - отделение концепции от ее экземпляра
// наследование - способность объекта или класса базироаввться на другом объекте или классе
