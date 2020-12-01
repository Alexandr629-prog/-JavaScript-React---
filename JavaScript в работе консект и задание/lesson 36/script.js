const btns =document.querySelectorAll('button'),
      wrapper =document.querySelector('.btn-block');
// console.log(btns[0].classList.length);//кол-во классво 1 кнопки
// console.log(btns[0].classList.item(0));//1 класс первой кнопки
// console.log(btns[0].classList.add('red', 'fgdfgsdgsd'));//добавление нового класса
// console.log(btns[0].classList.remove('blue'));//удаление класса
// console.log(btns[0].classList.toggle('blue'));//есди класс есть то он будет удален, если нет, то будет добавлен

// if(btns[1].classList.contains('red')){//проверка на наличие класса
//     console.log('red');
// }

btns[0].addEventListener('click', ()=>{

    // if(!btns[1].classList.contains('red')){
    // btns[1].classList.add('red');
    // }else{btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');//аналогия выше
});

//console.log(btns[0].className);// устаревший метод возвращает строку классов

//ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
wrapper.addEventListener('click', (event)=>{
// if(event.target && event.target.tagName=='BUTTON')//первое условие проверят, что элемент кликабельный
// {
//     console.log('hello');
// }
// if(event.target && event.target.classList.contains('blue'))//первое условие проверят, что элемент кликабельный
// {
//     console.log('blue');
// }

if(event.target && event.target.matches('button.blue'))//первое условие проверят, что элемент кликабельный
{
    console.log(' have blue');
}
    //console.dir(event.target);
});

// btns.forEach(btn =>{
// btn.addEventListener('click', ()=>{//при таком назначении события на  кнопке созданной динамически нет его!
// // т.е. при назначении событий на несколько одинаковых элементов во измежании ошибки, описанной выше
// // нужно использовать ДЕЛЕГИРОВАНИЕ
// console.log('hello');
// });
// });
 
//мы делегируем событие с родителя на его потомка, при делегировании можно создать на лету 
//еще кнопки которые будут иметь данные события

const btn =document.createElement('button');
btn.classList.add('blue');
wrapper.append(btn);//помещааем кнопу в конец wrapper и на ней назначено делегирование!!!

