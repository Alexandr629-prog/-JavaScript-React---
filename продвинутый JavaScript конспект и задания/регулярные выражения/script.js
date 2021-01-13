'use strict';

// new RegExp('pattern', 'flags');
// /pattern/
const ans = prompt('введите ваше число');

const reg = /\d/g;
console.log(ans.match(reg)); 

const str = 'my name is R2D2';

console.log(str.match(/\w\d\w\d/));

// \D  не цифры 
// \W  не буквы 
// \S  не пробелы 



// \d цифры 
// \w буква
// \s пробелы


// i 
// g 
// m 

//console.log(ans.search(reg));
//console.log(ans.match(reg));

// const pass = prompt('password');

// console.log(pass.replace(/./g,'*'));

console.log('12-23-45'.replace(/-/g, ':'));


