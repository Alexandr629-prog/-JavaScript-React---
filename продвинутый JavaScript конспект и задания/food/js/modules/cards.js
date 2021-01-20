function cards(){

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
}

module.exports =cards;