'use strict';

localStorage.setItem('number', 5);

// localStorage.removeItem('number');
// localStorage.clear();

 console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if(localStorage.getItem('isChecked')){
    checkbox.checked = true;
}

if(localStorage.getItem('bg') === 'changed'){
    form.style.background = 'red';
}


checkbox.addEventListener('change', () =>{
        localStorage.setItem('isChecked', true);
});

change.addEventListener('click', ()=>{

    if(localStorage.getItem('bg') === 'changed'){
        console.log('sa');
        localStorage.removeItem('bg');
        form.style.background = '#fff';

    }else{
        localStorage.setItem('bg', 'changed');
        form.style.background = 'red';
    }
});

const persone ={
    name: 'Alex',
    age: 25
};

//const serialisePersone =JSON.stringify(persone);
localStorage.setItem('alex', persone);

console.log(localStorage.getItem('alex'));






