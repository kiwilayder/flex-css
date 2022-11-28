document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger').addEventListener('click', function() {
            document.querySelector('.menu').classList.toggle('open');
    });
});

let popupBg = document.querySelector('.popup'); // Фон попап окна
let popup = document.querySelector('.popup__form'); // Само окно
let openPopupButtons = document.querySelectorAll('.menu__button'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__close'); // Кнопка для скрытия окна
let closeSubmit = document.querySelector('.popup__submit');

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg || e.target === closeSubmit ) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});