//JSON Формат для передачи и хранения данных
//набор пар ключ значение все строки должны быть в двойных ковычках
//в качестве значениу могут быть объекты, массивы, числа, строки, логические значения или null

//плюсы JSON:
//маленький вес файлов
//простота чтения даже для человека(пришел на смену xml)

const persone ={
    name: 'Alex',
    tel: '+74444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};
console.log(JSON.stringify(persone));
const clone = JSON.parse(JSON.stringify(persone));//все сущности в двойных ковычках
//глубокое клонирование объектов
clone.parents.mom = 'Anna';

console.log(persone);
console.log(clone);