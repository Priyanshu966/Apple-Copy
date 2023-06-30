//For toggling menubar

let btnToggle = document.querySelectorAll('.btn-toggle');
let hamBurger = document.querySelector('.hide-lines');
let xMark = document.querySelector('.xmark');
let logoCont = document.querySelector('.logo-cont');
let aBag = document.querySelector('.a-bag');
let aGlass = document.querySelector('.a-glass');
let navCenter = document.querySelector('.nav-center');
let main = document.querySelector('main');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let dropBar = document.querySelector('.drop-bar');
let rightCont = document.querySelectorAll('nav li');


btnToggle.forEach(function(e){
    e.addEventListener('click' , function(){
        hamBurger.classList.toggle('hide');
        logoCont.classList.toggle('hide');
        aBag.classList.toggle('hide');
        aGlass.classList.toggle('hide');
        navCenter.classList.toggle('flex-end');
        main.classList.toggle('hide');
        footer.classList.toggle('hide');
        header.classList.toggle('pos-rel');
        for(let i = 1; i <= 5; i++){
            document.querySelector(`.sec${i}`).classList.toggle('hide');
        }
        xMark.classList.toggle('show');
        dropBar.classList.toggle('show');
        dropBar.classList.toggle('height');
    })
})

rightCont.forEach(function(e){
    e.addEventListener('mouseover' , function(){
        e.lastElementChild.classList.add('show-right');
    })
})
rightCont.forEach(function(e){
    e.addEventListener('mouseout' , function(){
        e.lastElementChild.classList.remove('show-right');
    })
})