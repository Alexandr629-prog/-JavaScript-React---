function openModal(modalSelector, modalTimerId){
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';//запрет на скролл
  console.log(modalTimerId);
  if(modalTimerId){
    clearInterval(modalTimerId);
  }
 

  // modal.classList.toggle('show'); лучше использовать первый вариант!!!
  // document.body.style.overflow = 'hidden';//страницу нельзя будет скрроллить
  // clearInterval(modalTimerId); // если сам открыл, то нужно сбросить таймер
}
function closeModal(modalSelector){ 
  const modal =document.querySelector(modalSelector);
  //modal.classList.toggle('show');
   modal.classList.add('hide');
   modal.classList.remove('show');
   document.body.style.overflow = ''; // браузер сам разберется)
}


function modal(triggerSelector, modalSelector, modalTimerId){
        // Modal
        const modalTrigger = document.querySelectorAll(triggerSelector),
              modal =document.querySelector(modalSelector);
      

  
  modalTrigger.forEach(item =>{
    item.addEventListener('click', () => openModal(modalSelector, modalTimerId));
  });   
   
    

  modal.addEventListener('click', (e) =>{
    if(e.target === modal || e.target.getAttribute('data-close')==''){//в новом окне крестик будет работать
     closeModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) =>{
    if(e.code =='Escape' && modal.classList.contains('show')){
      closeModal(modalSelector);
    }
  });

  
  // modification modal



  function showModalbyscroll(){
    // сколько сверху отлистал пользователь + высота последнего экрана>=
    // высоте прокрутки всегоо сайта
    if(window.pageYOffset+document.documentElement.clientHeight+1 >= document.documentElement.scrollHeight){
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalbyscroll);
     }
  }
  window.addEventListener('scroll', showModalbyscroll);

}

export default modal;
export {closeModal};
export {openModal};