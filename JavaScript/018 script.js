/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'Use strict';

// Код возьмите из предыдущего домашнего задания
let numberFilm;

function start(){
   numberFilm = + prompt('Сколько фильмов вы уже посмотрели?',  ' ');
   while(numberFilm=='' || numberFilm==null || isNaN(numberFilm)){
    numberFilm = + prompt('Сколько фильмов вы уже посмотрели?',  ' ');
   }  
}
start();

 const personalMovieDB = {
     count: numberFilm,
     movies: {},
     actors: {},
     genres: [],
     privat: false
 };
 
 function showMyDB(){
     if (personalMovieDB.privat===false){console.log(personalMovieDB);}
 }
 showMyDB();

 function writeYourGenres(){
for(let i=1; i<4; i++){
    personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номерои ${i}`);
    }
}
writeYourGenres();
function rememberMyFilm(){
    for (let i=0; i<2; i++){
        const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
              appraisalFilm = prompt('На сколько оцените его?','');
        if(lastFilm=='' || appraisalFilm==''  || lastFilm==null ||appraisalFilm == null || lastFilm.length>50 ){
            i--;
            continue;
        }
        personalMovieDB.movies[lastFilm]=appraisalFilm;
     }
}  

rememberMyFilm();
function detectPersonalLevel(){
    if(personalMovieDB.count<10){console.log("Просмотрено довольно мало фильмов");}
    else if(personalMovieDB.count>=10 &&personalMovieDB.count<30){console.log("вы классический зритель");}
    else if(personalMovieDB.count>30){console.log("Вы киноман");}
    else {console.log("Произошла ошибка");}
}
detectPersonalLevel();

console.log(personalMovieDB.movies);


 