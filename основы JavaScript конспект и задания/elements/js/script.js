'Use strict';
// старые методы для получения элементов на странице
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),// имеет метод forEach последние два варианта более соврменные
      oneHeart = wrapper.querySelector('.heart');// получаем первый такой элемент на странице
     

//console.log(box);
//console.log(btns[1]);//псевдомассив, прототипно наследуется от htmlCollection

//console.log(circles);//HtmlCOllection
 
//console.log(hearts);

// hearts.forEach(item =>{
//     console.log(item);
// });  
 
//console.log(oneHeart);


//УРОК29(Действиями с элементами на странице)!!

//console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText= `background-color: blue; width: 500px`;//inline стили, они самые важные!

// btns[1].style.borderRadius = '100%';

// circles[0].style.backgroundColor ='red';

// for(let i=0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor='blue';
// }

// hearts.forEach(item =>{
//     item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');//элмент существует только внутри JS
// const text = document.createTextNode('Тут был я');

// div.classList.add('black');

// document.body.append(div);// современный элемент добавляет в конец родителя наш div


//wrapper.prepend(div);// в начало родителя

// hearts[0].before(div);// перед первывм сердечком
//hearts[0].after(div);// после первого сердечка

// circles[0].remove();// удаление первого кружка
//hearts[0].replaceWith(circles[0]);//замена первого сердечка первым кружком

//немного устаревшие конструкции!!

//wrapper.appendChild(div);// в конец wrapper

//wrapper.insertBefore(div, hearts[0]);//вставляем div перед hearts[0]

//wrapper.removeChild(hearts[0]);//удаление второго сердечка
//wrapper.replaceChild(circles[0], hearts[0]);//первый кружок вместо первого сердечка

//div.innerHTML= '<h1>Hello World</h1>';// когда хотим получить только текст
 //div.textContent = "Hello";//нельзя вставлять теги

// div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');// перед div
// div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');//вначало div
// div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>');// перед концом div
// div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');// после div





