window.addEventListener('DOMContentLoaded', ()=>{
 'use strict';

//функция может вызываться 4-мя способами ив каждом будет разный контекст вызова

//1

// function showThis(a, b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a+b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// 2
// const bj = {
//     a: 20,
//     b: 15,
//     sum: function(){
//         function shout(){
//             console.log(this);//просто функция в функциии поэтому контекст вызова равен undefined
//         }
//         shout();
//     }
// };

// bj.sum();

// 3
// function User(name, id){
//     this.name =name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello ${this.name}`);
//     };
// }
//  let ivan = new User ('Ivan', 23);

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count (num){
//     return this*num;
// }

// const double = count.bind(2);// 2 это this, создает новую функциюю
// console.log(double(3));// 3 это num



const btn = document.querySelector('button');

// btn.addEventListener('click', function(){//  втаком случае this равно event.target

//     this.style.backgroundColor = 'red';
// });

// btn.addEventListener('click', ()=>{//  втаком случае this не равно event.target

//     console.log(this);// вроде как даже в строгом режиме вернет window
//     this.style.backgroundColor = 'red';// не покрасит нопку, так как контекст потерялся
// });

// btn.addEventListener('click', (e)=>{//  втаком случае this не равно event.target

//     console.log(this);// вроде как даже в строгом режиме вернет window
//     e.target.style.backgroundColor = 'red';// не покрасит нопку, так как контекст потерялся
// });


const obj = {
    num: 5,
    sayNumber: function(){
        const say =() =>{
            console.log(this); //this будетт ссылаться на сам объект, 
            //так как сстрелочная ыункция берет контекст родителя
        };
        say();
    }
};

obj.sayNumber();

const double = a => a*2;// так как один аргумент

console.log(double(4));


// 1) обычняа функцияя this = windiw, если чтоит use strict = undefined
// 2) контекст у методов объекта будет сам объект
// 3) this  в констурокторах и классах это  новый экземпляр объекта
// 4) ручная привязка this; call, apply, bind

});