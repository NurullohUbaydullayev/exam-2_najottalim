const elHamburgerBtn = document.querySelector('.menu-btn')
const elHeader = document.querySelector('.header')

const elArrowBtn = document.querySelector('.how-works__item__btn')
const elHowWorksItem = document.querySelector('.how-works__list__item')

elHamburgerBtn.addEventListener('click', function(){
    elHeader.classList.toggle('header--adaptive')
})

elArrowBtn.addEventListener('click', function(){
    elHowWorksItem.classList.toggle('how-works__list__item--active')
})