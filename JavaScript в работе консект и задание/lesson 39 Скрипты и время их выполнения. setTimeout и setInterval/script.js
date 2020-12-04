const btn = document.querySelector('.btn');
let time, 
    i=0;

const timeId =setTimeout(function(text, add){// запуск функции через промежуток времени
    console.log(text);
    console.log(add);
}, 2000,'hello', 'add' );


clearInterval(timeId);//остановка таймера

function logger(){
    if(i === 3){
        clearInterval(time);
    }
    console.log('text');
    i++;

}
function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame(){
        if (pos===300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top=pos+'px';
            elem.style.left=pos+'px';
        }
    }
}
btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', ()=>{
//     // const time = setTimeout(logger, 1000);
    
//     time = setInterval(logger, 1000);// если функци€ т€жеда€ и выполн€етс€ некоторое врем€, (3c)
//     //то setinterval не будет ждать после ее выполнени€ еще врем€
    
// });

// let id = setTimeout(function log(){
// console.log('hello');
// id = setTimeout(log, 500);//setTimeout дождетс€ пока выполнитс€ код выше, потом подождет интервал и отработает снова
// }, 500);


