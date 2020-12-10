// глобальные сущности браузера:

// documet - объект который содержит всю html структуру

// window - окно в котором показывается документ(его можно изменить уменьшив окно браузера)

// scrin - весь видимый монитор

'Use strict';

const box = document.querySelector('.box'),
        btn = document.querySelector('button');
        console.log(btn);

// const width = box.clientWidth;//ширина вместе с padding
// const heigth = box.clientHeight;

 

// const width = box.offsetWidth;// ширина вс=метсе со скроллом и padding
// const heigth = box.offsetHeight;

const width = box.scrollWidth; // ширина без учета прокрутки
const heigth = box.scrollHeight;// высота с учетом всех прокруток 


console.log(width, heigth);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';

    console.log(box.scrollTop);//количество пролистаного

});

console.log(box.getBoundingClientRect().top);// bottom and reighr ведут себя не так как в css
//reighr -слева плюс ширина элемента
//bottom высота элемента+ top(т.е. от верхнего края до конца элемента)

const style = window.getComputedStyle(box);

console.log(style.display);

// мы не можем в java script работать с псевдоэлемментами

// можем получит только стили псевдоэлемента при помощи getComputedStyle
//псевдоэлемент прописывается вторым аргументом

console.log(document.documentElement.scrollTop);//так получать у document
//это значение мы можем модифицировать


window.scrollBy(0, 400);//от текущего значени
window.scrollTo(0, 400);// начала страницы


