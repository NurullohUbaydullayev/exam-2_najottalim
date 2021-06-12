const elHamburgerBtn = document.querySelector('.menu-btn')
const elHeader = document.querySelector('.header')

elHamburgerBtn.addEventListener('click', function(){
    elHeader.classList.toggle('header--adaptive')
})