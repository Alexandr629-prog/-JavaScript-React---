//!!!УРОК5(ПЕРЕМЕННЫЕ И СТРОГИЙ РЕЖИМ)!!!
"Use strict";//следует подключать в начале файла
// a = 15//в строгом режиме это ошибка
// //console.log(number); ошибка!! глобальное отличие let от var
// let number = 5;
// const leftBorderWidth = 5;
// // константы нельзя перезаписывать. Хорошим ттоном является использование констант везеде, где это возможно.
// const obj = {
//     a:50
// };

// obj.a=10;
// //Т.Е. прямых констант в JavaScript не бывает

// //console.log(Name);
// var Name = 'Ivan';

// {
//     let result = 50;
// }
// //console.log(result);//ошибка!!
// {
//     var result2 = 50;
// }
// //console.log(result2);есть доступ к переменной!
// //есть еще одно отличие связанное с циклами(var от let)

// //новый стандарт не поддерживается в старых браузерах

// //alert(5);//точка с запятой обязательна!
// [].push('a');


//!!!!УРОК6(Классификация типов данных в JavaScript)!!!!
//Тип число:
//let num = 4.6;
//console.log(4/0);//infinity
//console.log(-4/0);//-infinity
//console.log('string' * 9);//NaN

//Тип строка:
const persone = `Alex`;
//двойные и одинарные ковычки не отличаются. Косые кавычки(пектики)

//логический тип данных:
const bool = false;

//Тип null
//console.log(something);ошибка внутри консоли vscode. В браузере ReferenceError(ссфлочная ошибка, тоот де null)

//Тип undefined, т.е когда что-то существует, но у него нет никакого значения
let und;
//console.log(und);//undefined

// есть еще Symbol и Bigint

//Тип объект-это коллекция данных. используется для хранения любых типов данных!
const object= {
name: "John",
age: 25,
isMarried: false
};
//console.log(object.name);//этот варик лучше
//console.log(object["name"]);

//!!Массив не евляется отдельным типом данных, это частный случай объекта!!Собес!!
let arr=['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
//console.log(arr[1]);
//Массивы как и объекты являются конплексными типами данных и могут включать любые другие типы данных!
//Ключи в массивах-это номера, которые начинаются с единицы

//!! УРОК7(ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ)!!
//alert('hello');предупреждение о чем-то важном. Окошко нельзя стилировать

//const result = confirm("are you here?");
//console.log(result);// true or false в зависимости от ответа пользователя

//const answer = + prompt("Вам есть 18","");//тип данных строкаб если есть + будет число
//console.log(typeof(answer));
//вся информация, которая приходит от пользователя по дефолту-это строка

const answer=[];
//answer[0] = prompt('Как ваше имя?', '');
//answer[1] = prompt('Как ваша фамилия?', '');
//answer[2] = prompt('Сколько вам лет?', '');

//document.write(answer); заменяет все содержимое на сайте значением в скобках
//console.log(typeof(answer)); object

//console.log(typeof(null)) object(официально признанная ошибка, null отдельный тип данных)

// выше перечисленные команды(alert, confirm, prompt),так же document, window работают только в браузере!


//!!!УРОК8(ИНТЕРПОЛЯЦИЯ)
//интерполяция значит, что мы прямо внутри строки можем вставлять значение переменной

//const category='toys';
//console.log(`http://someurl.com/${category}/5js`);должны быть косые ковычки(бэктики)!!

//const user="Ivan";
//alert(`Привет, ${user}`);

//Урок 9(Операторы js);

//console.log('arr'+"-object") arr-object
//console.log(4+ +"5") 9, благодаря унарному плюсу

let incr=10,
    decr=10;
//++incr;
//--decr;
//console.log(++incr); инкримент
//console.log(--decr);  декримент 

//console.log(5%2); остаток от деления

//console.log(2*4=='8') true, нестрогое сравнение
//console.log(2*4==='8') false, строгое сравнение

const isChecked=true,
      isClose=true;
 //console.log(isChecked && isClose); true  
     
//!= не равно


//!!!УРОК10(УЧИМСЯ РАБОТАТЬ С СИСТЕМОЙ КОНТРОЛЯ ВЕРСИЙ GIT И СЕРВИСОМ GITHUB)
//плюсы git:
//1) можно удобно откатываться на несколько кммитов назад
//2) экономия памяти(статичный эдементы картинки, шрифты не копируются несколько раз)
//3) над одним проектом могут работать много  человек

//git init- инициализация репохитория
// git config --local user.name "alAlex"
// git config --local user.email aaskaldovic@gmail.com настройки пользователя который будет работать с репозиторием
// git remote add origin https/... добавляем удаленный репозиторий в данной случае репозиторий назван origin
// git push -u origin master -пушим репозиторий,
// ключ -u говорит что в дальнейшем всё будет по умолчанию заливаться на ветку master

//три состояния файлов у git репозиториев:
//1) файлы просто созданы;
//2) git следит за определенными файлами(файды в indexe); git add -A
//3) git создал commit; git commit -a -m"название коммита"

//!!УРОК11(КАК РАБОТТЬ С GITHUB  С РАЗНЫХ КОМПЬЮТЕРОВ, GITIGNORE И GIT KRAKEN)!!
// git clone - клонирование репозизитория
// git pull - загрузка актуальной версии реозитория на локальный компьютер
// при разнице с версиями репозитория на локальном компьютере и на git hub необходимо использовать команду git pull
// чтобы произошел так называеймый merge(слияние) между двумя проектами
//git push загрузка на сервер
// gitignore предназначем чтобы не заливать на удаленный сервер какие-то файлы. например node_modules
// git kraken-программа для удобной работы с git репозиториями

// !!УРОК 12(НАПИСАНИЕ КОДА)!!

// !!!УРОК13(УСЛОВИЯ)!!!
/*if(1){
    console.log('ok');
} else{
    console.log('error');
}


if(Num<49){
    console.log('error');
} else if (Num>100){
    console.log('Много');
}else{
    console.log('ok');
}

(Num===50) ? console.log('ok') : console.log('error');// единственный тернарный оператор в js, имеет 3 аргумента
const Num = 50;
switch(Num){
    case 49: 
       console.log('неверно');
       break;
    case 100:
        console.log('неверно');
       break;
    case 51:
        console.log('в точку!');
        break;
    default:
        console.log('не в этот раз');         
}
*/
// !!УРОК 14(ЦИКЛЫ)!!!
 /*let num=50;
 while(num<=55){
     console.log(num);
     num++;
 }

 do {
    console.log(num);
    num++;
 }
 while(num<55);

 for(let i = 1; i<8; i++){
     if(i===6) {continue;}//пропустит 6
     console.log(i);
 }*/

 //!!!УРОК16(ФУНКЦИИ, СТРЕЛОЧНЫЕ ФУНКЦИИ)!!
// let num=20;
// function showFirstMessage(text){//function declaration
//     console.log(text);
//     let num=10;
//     console.log(num);

// }
// showFirstMessage('hello');//не забывай вызывать функции!!
// console.log(num);

// console.log(calc(2, 5));
// function calc(a, b){
//     return (a+b);
// }


// function ret(){
//     let num =50;
//     //

//     return num;
// }
// const anotherName=ret();
// console.log(anotherName);

// const logger = function(){//function expression, создается только тогда когда до нее доходит поток кода


//     console.log("hello");
// };
// logger();//т.е. ее можно вызвать ТОЛЬКО после объявления

// const calc = (a,b)=> a+b;// не имеет контекста вызова(THIS) ВАЖНРО!!
// console.log(calc(2,5));

// //!!УРОК 17(МЕТОДЫ И СВОЙСТВА СТРОК И ЧИСЕЛ)!!!
// //МЕТОДЫ -вспомогательный функции
// //СВОЙСТВА -ВСПОМОГАТЕЛЬНЫЕ ЗНАЧЕНИЯ
// const str = 'test';
// const array =[ 1, 2, 3];
// console.log(array.length);
// //строку на прямую изменить не можем!

// console.log(str.toUpperCase());//не меняет исходную строку
// console.log(str.toLowerCase);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf("fruit"));//возвращает индекс первоно вхождения подстроки в строку если ее нет то -1

// //модификация строк!
// const logg ="hello world";
// console.log(logg[0]);
// console.log(logg.slice(6, 11));// начиная с 6 по 11 НЕ включая 11 символь, немерация начинается с 0!
// console.log(logg.slice(6));// начиная с 6 и до конца
// console.log(logg.slice(-5, -1));//worl

// console.log(logg.substring(6,11));//аналок slice

// console.log(logg.substr(6, 5));// начиная с 6 позиции 5 символов

// //ЧИСЛА
// const num = 12.2;
// console.log(Math.round(num));//округление обычное

// const test = "12.2px";
// console.log(parseInt(test));// остаетяс только целое число превращщенный в целый тип данных
// console.log(parseFloat(test));// остается только дробное число преобразованное к типу с плавающей точкой

// //УРРОК 19(CALBACK-ФУНКЦИИ)!!
// function first(){
//     // do something
//     setTimeout(function()
//     {
//         console.log(1);
//     }, 500);
    
// }
// function second(){
//     console.log(2);
// }

// first();
// second();
// //Если в коде функции идут одна за другой это не значит, что они выполняются так же!
// //callback-это функция которая должна быть выполнена после того как другая функция завершила свое выполнение

// function learnJS(lang, callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done(){
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);// не ставим скобки после done потму что мы ее не вызываем а передаем!
// // callback позволяют нам быть уверенными что определенный код не будет исполнение,
// // пока другой код не закончит свое выполнение

//!!УРОК 20(ОБЪЕКТЫ, ДЕСТРУКТИЗАЦИЯ ОБЪЕКТОВ)!!
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTeat: function(){
        console.log('Test');
    }
};

options.makeTeat();
const {border, bg} = options.colors;//дестурктиризация объекта!(ES6)
console.log(border);
//console.log(options['colors']['border']);//black
console.log(options);

let counter=0;
for(let key in options){//цикл будет работат столько раз, сколько свойств есть у объекта
    if(typeof(options[key])==='object'){
        for(let i in options[key]){
            console.log(`свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    }else{
        console.log(`свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(Object.keys(options).length);



