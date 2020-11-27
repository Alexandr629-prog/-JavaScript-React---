//console.log(document.body);
//console.log(document.documentElement);// получение всего html файла
console.log(document.body.childNodes);// все узлы body
//console.log(document.body.firstChild);//получение 1 узла родителя
//console.log(document.body.lastChild);//получение последнего  узла родителя

//console.log(document.querySelector('#current').parentNode.parentNode);// получение родителя #current
//дублирование parentNode получает родителя родителя
//console.log(document.querySelector('[data-current ="3"]').nextSibling);
//console.log(document.querySelector('[data-current ="3"]').previousSibling);//предыдущий элемент

// console.log(document.querySelector('[data-current ="3"]').previousElementSibling);//получение предыдущего элемента
// console.log(document.querySelector('[data-current ="3"]').nextElementSibling);//получение следующего элемента

// console.log(document.body.firstElementChild);//получение первого ребенка
//console.log(document.body.lastElementChild);//получение первого ребенка

for (let node of document.body.childNodes){
    if(node.nodeName=='#text'){
        continue;
    }
    console.log(node);
}
