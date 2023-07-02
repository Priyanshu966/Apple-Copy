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
        for(let i = 1; i <= 6; i++){
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

//For toggling footer links

let linkToggle = document.querySelectorAll('.footer-link h6');

linkToggle.forEach(function(e){
    e.addEventListener('click' , function(){
        e.classList.toggle('border-hide');
        e.nextElementSibling.classList.toggle('show-link');
        e.lastElementChild.classList.toggle('rotate');
    })
})

/*For toggling slider buttons and slider*/

let slideCont = document.querySelector('.sec6');
let slides = document.querySelectorAll('.img-cont');
let fakeSlide = document.querySelector('.fakeimg-cont');
let btns = document.querySelectorAll('.btn');
let playBtn = document.querySelector('.play-btn');
let play = document.querySelector('.play-btn .fa-play');
let pause = document.querySelector('.play-btn .fa-pause');

let count = 0;
let stop = true;


slides.forEach(function(slide , index){
    slide.style.left = `${100 * index}%`;

})

for(y of slides){
    y.style.opacity = 0.25;
}
slides[count].style.opacity = 1;

btns.forEach(function(btn , index){
    btn.addEventListener('click' , function(){
        count = index;
        for(x of btns){
            x.classList.remove('black-bag');
        }
        btn.classList.add('black-bag');

        for(y of slides){
            y.style.opacity = 0.25;
        }
        slides[count].style.opacity = 1;

        fakeSlide.style.transform  = `translateX(${-100 * (count)}%)`;
        slides.forEach(function(slide){
            slide.style.transform =  `translateX(${-100 * count}%)`
        })

        pause.classList.add('hide');
        play.classList.add('show');
        clearInterval(start);
        stop = false;
    })

})

let start;
let cloneSlides;

slides.forEach(function(e){
    cloneSlides = e.cloneNode(true);
})

function startInterval(){
        start = setInterval(function(){
           
        count++
        if(count == slides.length - 1){
            count = 0;
        }
        for(x of btns){
            x.classList.remove('black-bag');
        }
        btns[count].classList.add('black-bag');

        for(y of slides){
            y.style.opacity = 0.25;
        }
        slides[count].style.opacity = 1;
        slides.forEach(function(slide){
            fakeSlide.style.transform  = `translateX(${-100 * (count)}%)`;
            slide.style.transform =  `translateX(${-100 * count}%)`;
        })
       
        
    }, 5000);
}

startInterval();
playBtn.addEventListener('click' , function(){
    pause.classList.toggle('hide');
    play.classList.toggle('show');
    if(stop == true){
        clearInterval(start);
        stop = false;
    }else{
        startInterval();
        stop = true;
        
    }

})