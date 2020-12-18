'use strict';

// spred-оператор разворота(берет сущность и раскладывает ее на отдельные элементы)
// Rest - занимается обратным(отдельные элементы объединяет в один массив)

const log = function(a, b, ...rest){
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage'); /* два последних элемента поместились в массив */

function calcOrDouble(number, basics=2){
    console.log(number*basics);
}

calcOrDouble(2);