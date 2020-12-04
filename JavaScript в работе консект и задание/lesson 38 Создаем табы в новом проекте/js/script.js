
window.addEventListener('DOMContentLoaded', ()=>{
const tabs=document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

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

            tabs[i].classList.add('tabheader__item_active');
          }

          hideTabContent();
          showTabContent(); 

          tabsParent.addEventListener('click', (event) =>{
              const target =event.target;

              if(target && target.classList.contains('tabheader__item')){
                  tabs.forEach((item, i)=>{
                    if(target == item){
                        hideTabContent();
                        showTabContent(i); 
                    }
                  });
              }
          });
});

