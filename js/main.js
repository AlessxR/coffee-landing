const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
// console.log(burger);

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
    });
})