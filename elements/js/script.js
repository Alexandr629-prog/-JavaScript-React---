'Use strict';
// старые методы для получения элементов на странице
const box = document.getElementById('box');

//console.log(box);

const btns = document.getElementsByTagName('button');

//console.log(btns[1]);//псевдомассив, прототипно наследуется от htmlCollection
// даже если одна кнопка на странице получим HtmlCollection

const circles = document.getElementsByClassName('circle');
//console.log(circles);//HtmlCOllection

//более соврмменные методы
               //wrapper
const hearts = document.querySelectorAll('.heart');// имеет метод forEach

//console.log(hearts);

// hearts.forEach(item =>{
//     console.log(item);
// });
                 //wrapper   
const oneHeart = document.querySelector('.heart');// получаем первый такой элемент на странице
//console.log(oneHeart);


//УРОК29(Действиями с элементами на странице)!!
//console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText= `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor ='red';

// for(let i=0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor='blue';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');//элмент существует только внутри JS
const text = document.createTextNode('Тут был я');

div.classList.add('black');

document.body.append(div);// современный элемент добавляет в конец родителя наш div
const wrapper = document.querySelector('.wrapper');

//wrapper.prepend(div);

// hearts[0].before(div);
//hearts[0].after(div);

// circles[0].remove();
//hearts[0].replaceWith(circles[0]);

//немного устаревшие конструкции

wrapper.appendChild(div);// в конец wrapper

wrapper.insertBefore(div, hearts[0]);
// методы для добавления элементов

div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = "Hello";//нельзя вставлять теги

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');//после конца div





