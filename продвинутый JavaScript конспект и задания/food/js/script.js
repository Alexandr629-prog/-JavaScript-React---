
require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';



import tabs from  './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc  from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', ()=>{
          // axios.get('http://localhost:3000/menu')
          //   .then(data =>{
          //       data.data.forEach(({img, altimg, title, descr, price}) =>{
          //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
          //       });
          //     });
          // getResource('http://localhost:3000/menu')
          // .then(data =>createCard(data));

          // function createCard(data){
          //   data.forEach(({img, altimg, title, descr, price})=>{
          //       const element = document.createElement('div');

          //       element.classList.add('menu__item');

          //       element.innerHTML =  `
          //     <img src=${img} alt=${altimg}>
          //     <h3 class="menu__item-subtitle">${title}</h3>
          //     <div class="menu__item-descr">${descr}</div>
          //     <div class="menu__item-divider"></div>
          //     <div class="menu__item-price">
          //         <div class="menu__item-cost">Цена:</div>
          //         <div class="menu__item-total"><span>${price}</span> грн/день</div>
          //     </div>`;
          //     document.querySelector('.menu .container').append(element);
          //   });
          // }

 
        //lesson 53 Реализация скрипта для отправки данных на сервер



    // fetch('  http://localhost:3000/menu')
    //     .then(data=>data.json())
    //     .then(res =>console.log(res));


    // lesson 56 Fetch API

    //API-интерфейс программного обеспечения(готовые методы и свойства которые мы можем юзать)
    //DOM API -методы которые позволят работат со страницей
    //google maps API -возможность работать с картами google

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 4000); 

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-01-30');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });

});





                  










