
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

          getResource('http://localhost:3000/menu')
              .then(data=>{
                data.forEach(({img, altimg, title, descr, price}) =>{
                  new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
                });
              });

          // axios.get('http://localhost:3000/menu')
          //   .then(data =>{
          //       data.data.forEach(({img, altimg, title, descr, price}) =>{
          //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
          //       });
          //     });
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



    

        // Slider

    let offset = 0;
    let slideIndex = 1;

    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        width = window.getComputedStyle(slidesWrapper).width,
        slidesField = document.querySelector('.offer__slider-inner');

    function countSlidesr(){
      if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent =  `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent =  slideIndex;
    }
    }
    function activeDot(){
      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex-1].style.opacity = 1;
    }
    countSlidesr();

    function deleteNotDigits(str){
      return +str.replace(/\D/g, '');
    }

    
    
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    // indicators.style.cssText = `
    //     position: absolute;
    //     right: 0;
    //     bottom: 0;
    //     left: 0;
    //     z-index: 15;
    //     display: flex;
    //     justify-content: center;
    //     margin-right: 15%;
    //     margin-left: 15%;
    //     list-style: none;
    // `; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to',  i + 1);
        dot.classList.add('dot');
        // dot.style.cssText = `
        //     box-sizing: content-box;
        //     flex: 0 1 auto;
        //     width: 30px;
        //     height: 6px;
        //     margin-right: 3px;
        //     margin-left: 3px;
        //     cursor: pointer;
        //     background-color: #fff;
        //     background-clip: padding-box;
        //     border-top: 10px solid transparent;
        //     border-bottom: 10px solid transparent;
        //     opacity: .5;
        //     transition: opacity .6s ease;
        // `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width); 
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        countSlidesr();
        activeDot();

        
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        countSlidesr();

        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            console.log(slideTo);
            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            countSlidesr();

            dots.forEach(dot => dot.style.opacity = ".5");
            dots[slideIndex-1].style.opacity = 1;
        });
    });

    // Calc 

    const result = document.querySelector(".calculating__result span");
    let sex = 'female', 
        height, weight, age, 
        ratio = 1.375;


    function calcTotal(){
      if(!sex ||  !height || !weight || !age || !ratio ){
        result.textContent ='____';
        return;
      }
      if(sex === 'female'){
        result.textContent = Math.round((447.6 + (9.2 *weight) + (3.1 * height ) - (4.3 *age))) * ratio;
      }else {
        result.textContent =Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 *age))) * ratio;
      }
    }
    calcTotal();


    function getStaticInformation(parentSelector, activeClass){
      const elements = document.querySelectorAll(`${parentSelector} div`);
      elements.forEach(elem =>{
        elem.addEventListener('click', (e) =>{
          if(e.target.getAttribute('data-ratio')){
            ratio = +e.target.getAttribute('data-ratio');
          }else{
            sex = e.target.getAttribute('id');
          }
  
          elements.forEach(elem =>{
            elem.classList.remove(activeClass);
          });
           e.target.classList.add(activeClass);
           console.log("sfs");
           calcTotal();
          });
        });
       }
    
    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

    function getDinamicInformation(selector){
      const input = document.querySelector(selector);
      input.addEventListener('input', ()=>{
        switch(input.getAttribute('id')){
          case 'height':
              height = +input.value;
              break;
          case 'weight':
              weight = +input.value;
              break;
          case 'age':
              age = input.value;
              
              break;
        }
        calcTotal();
      });
    }

    getDinamicInformation('#weight');
    getDinamicInformation('#height');
    getDinamicInformation('#age');

});





                  










