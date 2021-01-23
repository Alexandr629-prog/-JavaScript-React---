function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, classActive){
    //Tabs
const tabs=document.querySelectorAll(tabsSelector),
tabsContent = document.querySelectorAll(tabsContentSelector),
tabsParent = document.querySelector(tabsParentSelector);



function hideTabContent(){
    tabsContent.forEach(item =>{
    item.classList.add('hide');// скрываем блоки на сайте
    item.classList.remove('show', 'fade');
    });

    tabs.forEach(item =>{
        item.classList.remove('tabheader__item_active');//удаляем выделение вида меню
    });
  }
    function showTabContent(i = 0){// если функция вызывается без аргумента, то автоматически подставится 0
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');

      tabs[i].classList.add(classActive);
    }

    hideTabContent();
    showTabContent(); 

    tabsParent.addEventListener('click', (event) =>{
        const target =event.target;

        if(target && target.classList.contains(tabsSelector.slice(1))){//строка без первого символа
            tabs.forEach((item, i)=>{
              if(target == item){
                  hideTabContent();
                  showTabContent(i); 
              }
            });
        }
    });
}

export default tabs;