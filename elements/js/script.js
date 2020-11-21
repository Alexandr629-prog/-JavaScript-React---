'Use strict';
// старые методы для получения элементов на странице
const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns[1]);//псевдомассив, прототипно наследуется от htmlCollection
// даже если одна кнопка на странице получим HtmlCollection

const circles = document.getElementsByClassName('circle');
console.log(circles);//HtmlCOllection

//более соврмменные методы

const hearts = document.querySelectorAll('.heart');// имеет метод forEach

console.log(hearts);

hearts.forEach(item =>{
    console.log(item);
});

const oneHeart = document.querySelector('.heart');// получаем первый такой элемент на странице
console.log(oneHeart);
