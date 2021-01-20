function forms(){
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
}

module.exports =forms;