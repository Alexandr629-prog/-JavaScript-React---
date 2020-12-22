'use strict';

const inputRub = document.querySelector("#rub"),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () =>{//событие происходит когда что-то вводится в инпут
    //событие change происходит когда в input что-то ввели и выходим из фокуса 
    console.log('aaaa');
    const request = new XMLHttpRequest();
    
    //request.open(method, url, async, login, pass); собирает настройки, которые помогут в будущем сделать запрос
    request.open('GET', 'js/current.json');
    request.setRequestHeader('content-type', 'application/json; charset=utf-8');
    request.send();// в GET body не будет
    
    //своства:
    //status как выполнился запрос
    //statusText текстовое описние ответа от сервера 
    //response ответ от сервера(должны использовать на клиенте)
    //readyState текущее состояние нашего запроса (5 разных вариантов)

    //события:

    //это события отслеживает статус готовности нашегоо запрса в данный текущий момент
    // request.addEventListener('readystatechange', () =>{
    //     if(request.readyState === 4 && request.status ===200){
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     }else{
    //         inputUsd.value ='Что-то пошло не так...';
    //     }
    // });
    //это событие срабатывает один раз когда запрос полностью готов, не обязательно успешно
    request.addEventListener('load', () =>{
        if(request.status ===200){// проверяем усешность выполнения запроса
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        }else{
            inputUsd.value ='Что-то пошло не так...';
        }
    });


});      
