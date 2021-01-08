
window.addEventListener('DOMContentLoaded', ()=>{
//Tabs
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

          // Timer

          const deadLine = '2020-12-18';//input возвращает страку такого же плана

          function getTimeRemaining (endtime){
            const t = Date.parse(endtime) - Date.parse(new Date()),
                  days = Math.floor(t/(1000*60*60*24)),
                  hours =Math.floor((t / (1000 * 60 * 60)%24)),
                  minutes =Math.floor((t / 1000 / 60)% 60),
                  seconds =Math.floor( (t / 1000)% 60);

              return{
                   'total': t,
                   'days': days,
                   'hours': hours,
                   'minutes': minutes,
                   'seconds': seconds
              };
          }

          function getZero(num){
            if(num>=0 && num < 10){
              return `0${num}`;
            }else{
              return num;
            } 
          }

          function setClock(selector, endtime){
            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timeInterval = setInterval(updateClock, 1000);

                  updateClock();

                  function updateClock(){
                    const t = getTimeRemaining(endtime);
                    
                    days.innerHTML = getZero(t.days);
                    hours.innerHTML = getZero(t.hours);
                    minutes.innerHTML = getZero(t.minutes);
                    seconds.innerHTML = getZero(t.seconds);

                    if(t.total<=0){
                      clearInterval(timeInterval);
                      days.innerHTML = 0;
                      hours.innerHTML = 0;
                      minutes.innerHTML = 0;
                      seconds.innerHTML = 0;
                    }

                  }
          }

          setClock('.timer', deadLine);

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

          //Используем классы для карточек

          class MenuCard{
            constructor(src, alt, title, descr, price, parentSelector, ...classes){
              this.src = src;
              this.alt = alt;
              this.title = title;
              this.descr = descr;
              this.price = price;
              this.classes = classes; //массив
              this.parent = document.querySelector(parentSelector);
              this.transfer = 27;
              this.chahgeToUAN();
            }

            chahgeToUAN(){
              this.price = this.price * this.transfer;
            }

            render(){
              const element = document.createElement('div');
              if(this.classes.length === 0 || this.classes[0]!='menu__item'){ /* провепряем длинну массива, ибо даже если мы ничего не передали вернется пустой массив */
                this.element = 'menu__item';
                element.classList.add(this.element);
              }else{
              this.classes.forEach(className => element.classList.add(className));
              }
              
              element.innerHTML =  `
              <img src=${this.src} alt=${this.alt}>
              <h3 class="menu__item-subtitle">${this.title}</h3>
              <div class="menu__item-descr">${this.descr}</div>
              <div class="menu__item-divider"></div>
              <div class="menu__item-price">
                  <div class="menu__item-cost">Цена:</div>
                  <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
              </div>`;
            this.parent.append(element);
            }

          }

          const getResource = async (url)=>{
            const res = await fetch(url); 

            if(!res.ok){
             throw new Error(`Could not fetch ${url}, status: ${res.status}`); //объект ошибки
            }
            return await res.json();//это Promies
          };

          // getResource('http://localhost:3000/menu')
          //     .then(data=>{
          //       data.forEach(({img, altimg, title, descr, price}) =>{
          //         console.log(img, altimg, title, descr, price);
          //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
          //       });
          //     });

          axios.get('http://localhost:3000/menu')
            .then(data =>{
                data.data.forEach(({img, altimg, title, descr, price}) =>{
                  console.log(img, altimg, title, descr, price);
                  new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
                });
              });
          // getResource('http://localhost:3000/menu')
          // .then(data =>createCard(data));

          // function createCard(data){
          //   data.forEach(({img, altimg, title, descr, price})=>{
          //       const element = document.createElement('div');

          //       element.classList.add('menu__item');

          //       element.innerHTML =  `
          //     <img src=${img} alt=${altimg}>
          //     <h3 class="menu__item-subtitle">${title}</h3>
          //     <div class="menu__item-descr">${descr}</div>
          //     <div class="menu__item-divider"></div>
          //     <div class="menu__item-price">
          //         <div class="menu__item-cost">Цена:</div>
          //         <div class="menu__item-total"><span>${price}</span> грн/день</div>
          //     </div>`;
          //     document.querySelector('.menu .container').append(element);
          //   });
          // }

 
        //lesson 53 Реализация скрипта для отправки данных на сервер

         // Forms

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data)=>{
      const res = await fetch(url, {
        method: "POST",
              headers:  {
                'content-type': 'application/json'
              },
              body: data
      });
      return await res.json();//это Promies
    };



    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src =message.loading;
            statusMessage.alt = 'spinner';
            statusMessage.style.cssText=`/* создание inline стилей */
            display: block;
            margin: 0 auto;
            `;
            //form.append(statusMessage);
           form.insertAdjacentElement('afterend', statusMessage);//после конца формы
            
           const formData = new FormData(form);//получение данных с формы
           //console.log(Object.fromEntries(formData.entries())); вернет объект
           const json =JSON.stringify(Object.fromEntries(formData.entries()));//перевод данных с формы в json
           
            postData('http://localhost:3000/requests', json)
            .then(data =>{
                  console.log(data);
                  showThanksModal(message.success);
                  statusMessage.remove();
            }).catch(()=>{
              showThanksModal(message.failure);
            }).finally(()=>{
              form.reset();
            }); 
        });
    }

    //lesson 54 красиове оповещение пользователя

    function showThanksModal(message) {
      const prevModalDialog = document.querySelector('.modal__dialog');

      prevModalDialog.classList.add('hide');
      openModal();      

      const thanksModal = document.createElement('div');
      thanksModal.classList.add('modal__dialog');
      thanksModal.innerHTML = `
          <div class="modal__content">
              <div class="modal__close" data-close>×</div>
              <div class="modal__title">${message}</div>
          </div>
      `;
      document.querySelector('.modal').append(thanksModal);
     
      setTimeout(() => {
          thanksModal.remove();
          prevModalDialog.classList.add('show');
          prevModalDialog.classList.remove('hide');
          closeModal();
      }, 4000);
    }

    // fetch('  http://localhost:3000/menu')
    //     .then(data=>data.json())
    //     .then(res =>console.log(res));


    // lesson 56 Fetch API

    //API-интерфейс программного обеспечения(готовые методы и свойства которые мы можем юзать)
    //DOM API -методы которые позволят работат со страницей
    //google maps API -возможность работать с картами google

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: "POST",
    //   body: JSON.stringify({name: 'Alex'}),
    //   headers: {
    //     'content-type': 'application/json'
    //   }
    // })//в этой строчке возвражается Promise
    //     .then(data => data.json())
    //     .then(data => console.log(data));

});



                  










