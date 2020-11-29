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

// const result = confirm("are you here?");
// console.log(result);// true or false в зависимости от ответа пользователя

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
// // callback позволяют нам быть уверенными что определенный код не будет исполнен,
// // пока другой код не закончит свое выполнение

//!!УРОК 20(ОБЪЕКТЫ, ДЕСТРУКТИЗАЦИЯ ОБЪЕКТОВ)!!
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTeat: function(){
//         console.log('Test');
//     }
// };

// options.makeTeat();
// const {border, bg} = options.colors;//дестурктиризация объекта!(ES6)
// console.log(border)// black;
// //console.log(options['colors']['border']);//black
// console.log(options);

// let counter=0;
// for(let key in options){//цикл будет работат столько раз, сколько свойств есть у объекта
//     if(typeof(options[key])==='object'){
//         for(let i in options[key]){
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else{
//         console.log(`свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(Object.keys(options).length);

//!!УРОК 21(МАССИВЫ И ПСЕВДОМАССИВЫ)!!
//ПСЕВДОМАССИВЫ -выглялят как массивы, НО не имеют НИКАКИХ МЕТОДОВ т.е. это просто структура, хранящая данные попроядку
// const array = [2, 13, 26, 8, 10];
// array.sort(compareNum);
// console.log(array);
// function compareNum(a,b){
//     return a-b;
// }

// //array.pop();//удаляет последний элемент массива
// // array.push(10);//добавляет элемент в конец массива
// // array[99]=0;
// // console.log(array);
// // console.log(array.length);//100, потому что длинна массива это ИНДЕКС ПОСЛЕДНЕГО ЭЛЕМЕНТА +!

// array.forEach(function(item, i, arr){
//    console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for(let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// for(let value of array){//метод перебора массивов и псевдомассивов
// в нем можем использоввать break and continue в отличии от foreach
//     console.log(value);
// }

// const str=prompt('', '');
// const products=str.split(', ');//формирование массива на основание строк, учитываяя разделитель
// products.sort();// сортирует  массив из СТРОК
// console.log(products.join('; '));//преобразует массив в строку разделив через ;

//УРОК22(ПЕРЕДАЧА ПО ССЫЛКЕ И ПО ЗНАЧЕНИЮ)!!
// let a = 5,
//     b = a;//значение
// b=b+5;
// console.log(a);//5
// console.log(b);//10

// const obj ={
//     a: 5,
//     B:1
// };
// const copy =obj;//ссылка
// copy.a=10;//модифицируем начальный оюъект
// console.log(copy);
// console.log(obj);

// //примитивы передаются по значению, объекты по ССЫЛКЕ!!!

// function copy(mainObj){
// let objCopy={};

// let key;
// for (key in mainObj){
//     objCopy[key]=mainObj[key];
// }
// return objCopy;
// }

// const numbers={
//     a: 2,
//     b: 5,
//     c:{
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers=copy(numbers);// поверхностная копия
//  newNumbers.a = 10;
//  newNumbers.c.x=2;// это свойство изменится у двух объектов

//  console.log(newNumbers);
//  console.log(numbers);

//  const add ={
//      d: 17,
//      e: 20
//  };

//  const clone = Object.assign({}, add);// поверхностная копия предыдущего объекта

//  clone.d=20;
//  console.log(add);
//  console.log(clone);

//  const oldArray = ['a', 'b', 'c'];
//  const newArray = oldArray.slice();//поверхностная копия oldArray

//  newArray[1] = 'dsfdsf';
//  console.log(newArray);
//  console.log(oldArray);

//  const video=['youtube', 'vimeo', 'retube'],
//         blogs =['wordpress', 'livejournal', 'blogger'],
//         internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// // оператор spread в ES для массивов, а в ES9 и для объектов
// //этоот оператор разворачивает структуру и достает из нее данные

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num =[2, 5, 7];

// log(...num);

// const array =['a', 'b'];
// const newAarray = [... array]; // 4 способ создания поверхностной копии

// const q={
//     one: 1,
//     two: 2,
//     number: {
//     1: 1,
//     2: 2
//     }
// };
// const newObj ={...q};
// console.log(newObj);

//!! УРОК 23(основы ООП прототипно-ориентированное наследование)!!
// let str ="some";
// let strObj = new String(str);

// console.log(typeof(str));//string
// console.log(typeof(strObj));//object
// //когда мы используем какой-то метод у строки стpока сначала оборачивается оюъектом
// //вызывается метод который есть у объекта а потом возвращается обратно в строку

// console.dir([1, 2, 3]);

// const solder = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log('Hello');
//     }
// };

// // const jonh=Object.create(solder);//созание объекта который прототипно наследуется от другого объекта
// // jonh.armor=300;//armor: 300
// const jonh ={
//     health: 100
// };

// // //jonh.__proto__= solder;// устаревший метод наследования у прототипа

// Object.setPrototypeOf(jonh, solder);// аналогично применению выше только новый стандарт
// console.log(jonh.health);//100

// jonh.sayHello();//hello

//!!УРОК 25(ОТЛАВЛИВАЕМ ОШИБКИ В СВОЕМ КОДЕ ПРИПОМОЩИ КОНСОЛИ РАЗРАБОТЧИКА)!!
// function hello(){
//     console.log("hello wprld");
// }
// hello();

// function hi(){
//     console.log('Say hi');
//     debugger;
// }
// hi();

// const ar = [1, 14, 4, 30, 54],
//         sorted =ar.sort(compareNum);

// function compareNum(a, b){
//     return a-b;
// }
// console.log(sorted);
//!!УРОК 26(ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ В JS)

// To String
// данные полученные от пользователя всегда тип данных строка(интыпы, формы, промпт)!!
//1)
// console.log(typeof(String(null)));//string

// //2)
// console.log(typeof(5+''));//string

// const num = 5;
// console.log("https://vk.com/catalog/"+num);

// const fontize =26+'px';

// // to NUmber

// //1)
// console.log(typeof(Number('4')));

// // 2)
// console.log(typeof(+'5'));

// // 3)
// console.log(typeof(parseInt('15px', 10)));// 15


// let ans =+prompt('hello', '');

// // To boolen

// //0, '', null, undefined, NaN;- false
// //1)
// let switcher = null;
// if(!switcher){
//     console.log("working..");
// }
// switcher =1;

// if(!switcher){
//     console.log("working..");
// }

// // 2)
// console.log(typeof(Boolean('4')));

// // 3)
// console.log(typeof(!!'4444'));

//  УРОК27(ЗАДАЧИ С СОБЕСЕДОВАНИЙ НА ПОНИМАНИЕ ОСНОВ)
// let x = 5; 
// alert( x++ );//5

// console.log([ ] + false - null + true);// NaN т.к. от строки пытаемся отнять строку
// console.log([]+false-4);//также NaN

// let y = 1;
// let z = y = 2;
// alert(z);// 2
// alert(y);//2

 
// console.log([ ] + 1 + 2);//12

// alert("1"[0]);// обращение к нулевому элементу строки
// alert("1"[1]);//undefined

// console.log(2 && 1 && undefined && 0 && null); //undefined
// console.log(2 || 1);//2
// console.log(0 && 1);//0
// console.log(2 && 3);//последний символ
// console.log(false || 0);//последний символ

// console.log(2 && 1 && null && 0 && undefined);// null
// // оператор && всегда запинается на лжи
// // оператор || всегда запинается на правде


// console.log(!!( 1 && 2 ));// true
// console.log( 1 && 2); // 2
//                   3
// alert( null || 2 && 3 || 4 ); //3, сначала выполняется оператор && так как его приоритет выше

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a===b);//fslse
// console.log(a==b); //false

// alert( +"Infinity" );// infinity (тип данных число)

// console.log("Ёжик" > "Яблока");//false, смотреть таблицу юникода символов

// console.log(0 || "" || 2 || undefined || true || false );//2


//УРОК 28(Получение элементов со страницы)
//DOM-объектоная модель документа


//УРОК28(сОБЫТИЯ И ИХ ОБРАБОТЧИКИ) ВАЖНЫЙ!!


//УРОК 34(СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ)!!

//touchstart при возникновении каасания
//touchmove  при движении пальца 
//touchend   как только палец отрвался от элмента
//touchenter  когда ведем пальцем по жкрану и на находим на элемммент на котором висит это событие
//touchleave  палец продолжил скользить и ушел за пределы элемента
//touchcancel точка соприкосновения больше не регистрируетсятна поверхности

//touches -колво пальцев на экране во время таба
//targetTouches-колво пальцев на конкретном элементе
//chengedTouches 
//chengedTouches-список пальце которые учавствуют  в текущем событии, даже тот палец который был убран
 
//примера кода в 33 практике