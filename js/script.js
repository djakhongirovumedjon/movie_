
//1) Удалить все рекламные блоки со страницы (правая часть сайта)

let adds = document.querySelectorAll('.promo__adv img')

adds.forEach(add => {
    
    add.remove('promo__adv img')
    //add.style.display = "none" можно и так чтобы не показывать рекламу но в задании написано удалить рекламные блоки
});  








//2) Изменить жанр фильма, поменять "комедия" на "драма"

let genre = document.querySelector('.promo__genre')

function genr() {
    genre.innerHTML = 'Драма'
}

genr()







//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
//Реализовать только при помощи JS

let bg = document.querySelector('.promo__bg')

function bgi(){
    bg.style.background = "url('../img/bg.jpg')";
}

bgi();















// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 






// 5) Добавить нумерацию выведенных фильмов 

let numberr = document.querySelectorAll('.promo__interactive-item')

numberr.forEach(function(item, i, ) {
    item.innerHTML = i+1+"";
});




'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};










////////// category ////////// 
let promo_items = document.querySelectorAll('.promo__menu-item')
let menu = document.querySelector('.promo__menu')
  
promo_items.forEach(item => {
    item.onclick = (event) =>{
        event.preventDefault()
        promo_items.forEach(m => m.classList.remove('promo__menu-item_active'))
          
        item.classList.add('promo__menu-item_active')
    }
   
});





