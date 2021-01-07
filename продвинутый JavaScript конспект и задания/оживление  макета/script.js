'use strict';
// эти методы возвращают новый массив, не как foreach

// filter 

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(item =>item.length<5);
// console.log(shortNames);

// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });

// console.log(shortNames);

// map трансформирующий метод

// let answers = ['IvAn', 'AnnA', 'Hello'];

// const result  = answers.map(item =>item.toLowerCase());
// console.log(result);

// every/some все/хотя бы один элемент соответствуют условию

// const some = [4, 5, 6];

// console.log(some.some(item =>typeof(item==='number')));

// console.log(some.every(item =>typeof(item)==='number'));

// reduce собирать массив в единое целое

// const arr = [4, 5, 1, 3, 2, 6];
//                     // 0      4
//                     // 4      5
//                     // 9      1
//                        //......
// const res= arr.reduce((sum, current)=>sum+current);

// console.log(res);

const arr = ['apple', 'pear', 'plum'];
                    // 0      4
                    // 4      5
                    // 9      1
                       //......
const res= arr.reduce((sum, current)=>`${sum}, ${current}`, 3);

console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)//массив из строк объекта
.filter(item =>item[1]==='persone')
.map(item =>item[0]);
console.log(newArr);







