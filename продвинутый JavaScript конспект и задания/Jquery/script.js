import $ from 'jquery';
// import  'jquery'

console.log($('#btn:first'));
console.log($('.list-item:first'));

$(document).ready(function(){
    $('.list-item:first').hover(function(){
       
        $(this).toggleClass('active');
       
    });

    $('.list-item').eq(4).on('click', function(){
        console.log('aassf');
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle' 
        }, 2000);
    });     

    
});