`use strict`;

//promise -обещания(если произошло что-то ты обещаем что у нас выполнится след действие)

// console.log('запрос данных');

// const req = new Promise(function(resolve, reject){
// //resolve - что-то выполнилось
// //reject - что-то пошло не так
//     setTimeout(() => {
//         console.log('подготовка данных...');
    
//         const product ={
//             name: 'tv',
//             price: 2000
//         };
    
//         resolve(product);
        
//     },2000);

// });

// req.then((product)=>{//метод для обработки положительного результата
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data =>{
//     data.modify = 'true';
//     return data;
    

// }).then((data)=>{
//     console.log(data);
// }).catch(()=>{
//     console.error("произошла ошибка");// если сработал reject сразу перемтимся в catch
// }).finally(()=>{//используется в конце, обозначает действия которые должны быть произведены при любом Promise
//     //например не важно как выполнился запрос нам нужно очс=истить форму от старых данных
//     // т.е. form.reset() помещается в блок finally
//     console.log('finally');
// });
//ошибку можем получить когда ссылаемся на несуществующий файл, сервер упал...
// такие операции обрабатываются с помощью reject

const test = time =>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve(), time);
        
    });
};

test(1000).then(()=>console.log('1000ms'));
test(2000).then(()=>console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(()=>{//чтобы точно убедились что все нашри promise уже выполнились
// //например изображения получаются с разных серверов и мы хотим чтобы они использовались как только загрузятся
// // мы должны подождать загрузки всех наших promise, promise.all Этим и занимается
// console.log('All');

// });

Promise.race([test(1000), test(2000)]).then(()=>{
    // отрабатывает когда первый promise верно отработал
    console.log('then one');
    
    }).catch(()=>{
        // отрабатывает когда первый promise не верно отработал
        console.log('cath one');
    });


