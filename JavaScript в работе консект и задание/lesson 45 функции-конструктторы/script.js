'Use strict';

function User(name, id){
    this.name =name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function(){
    console.log(`Пользователь ${this.name} ушел`);// добавляем метод в уже существующий объект
};



const ivan = new User('Ivan', 28);
const alex = new User ('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);

// констуркторы необходимы для создания новых однотипных объектов
// например, новые пользователи сайтов, компаненты сайтовБ везде где есть шаблонизация 

// это стандарт ES5, так  всё происходит под капотом JS
// в ES появились классы (синтаксический сахар):

class iser{
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello(){
        console.log(`Hello ${this.name}`);
    }
    exit(){
        console.log(`Пользователь ${this.name} ушел`);
    }
}

const i = new iser('fsd', 6);

iser.prototype.ex = function(){
    console.log('a');

};
console.log(i);

i.hello();
