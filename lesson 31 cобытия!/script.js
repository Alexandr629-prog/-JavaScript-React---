const btn =document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function(){// неверный метод назначения события
//     alert("Click");
// };

// btn.onclick = function(){
//     alert("Second click");
// };

// btn.addEventListener('click', () =>{
// alert('click');
// });

//let i=0;
const deleteElement =(e) =>{
console.log(e.currentTarget);
console.log(e.type);
// i++;
// if(i===1){btn.removeEventListener('click', deleteElement);}
};

// btn.addEventListener('click', (e) =>{//первым аргументом всегда передается event
//     console.log(e.target);// возвращает элемент на котором сработало событие
//     e.target.remove();// удаление этого элемента
//     //console.log("hover");
// });

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);//всплытие событий- событие сначала срабатывает на вложенном элементе, 
//и после поднимается по иерархии вверх

const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault();//отмена стандартного действия браузера, прописывается вначале метода!
    
    console.log(event.target);
});

btn.forEach(btn =>{
  btn.addEventListener('click', deleteElement, {once: true});// назначение обработчика событий на несколько элементов
});
