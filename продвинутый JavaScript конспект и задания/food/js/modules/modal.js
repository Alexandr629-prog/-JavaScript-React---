function modal(){
        // Modal
        const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal =document.querySelector('.modal');
      

  function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';//запрет на скролл
    clearInterval(modalTimerId);

    // modal.classList.toggle('show'); лучше использовать первый вариант!!!
    // document.body.style.overflow = 'hidden';//страницу нельзя будет скрроллить
    // clearInterval(modalTimerId); // если сам открыл, то нужно сбросить таймер
  }
  function closeModal(){
    //modal.classList.toggle('show');
     modal.classList.add('hide');
     modal.classList.remove('show');
    document.body.style.overflow = ''; // браузер сам разберется)
  }

  modalTrigger.forEach(item =>{
    item.addEventListener('click', openModal);
  });   
   
    

  modal.addEventListener('click', (e) =>{
    if(e.target === modal || e.target.getAttribute('data-close')==''){//в новом окне крестик будет работать
     closeModal();
    }
  });

  document.addEventListener('keydown', (e) =>{
    if(e.code =='Escape' && modal.classList.contains('show')){
      closeModal();
    }
  });

  
  // modification modal

  const modalTimerId = setTimeout(openModal, 40000); 

  function showModalbyscroll(){
    // сколько сверху отлистал пользователь + высота последнего экрана>=
    // высоте прокрутки всегоо сайта
    if(window.pageYOffset+document.documentElement.clientHeight+1 >= document.documentElement.scrollHeight){
      //openModal();
      window.removeEventListener('scroll', showModalbyscroll);
     }
  }
  window.addEventListener('scroll', showModalbyscroll);

}

module.exports = modal;