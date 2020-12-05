const now = new Date(); //текущая дата без аргуметов       
const n =Date.parse('2020-12-05'); // метода получения даты из строки, можно и без него      
console.log(n);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
//console.log(now.getHours());
//console.log(now.getUTCHours());

//console.log(now.getTimezoneOffset()); //разница в минутах между UTC временм и моим(-180)

//console.log(now.getTime());


console.log(now.setHours(40));//результат смотреть в консоли браузера
console.log(now);


let start = new Date();

for(let i=0; i<100000; i++){
       let some = i ** 3;//возведение в степень
}

let end = new Date();

alert(`Цикл отраьотал за ${end - start}милисекунд`);

console.log(2 ** 3);//
