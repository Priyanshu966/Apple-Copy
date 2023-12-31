//For toggling menubar

let btnToggle = document.querySelectorAll(".btn-toggle");
let hamBurger = document.querySelector(".hide-lines");
let xMark = document.querySelector(".xmark");
let logoCont = document.querySelector(".logo-cont");
let aBag = document.querySelector(".a-bag");
let aGlass = document.querySelector(".a-glass");
let navCenter = document.querySelector(".nav-center");
let main = document.querySelector("main");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let dropBar = document.querySelector(".drop-bar");
let rightCont = document.querySelectorAll("nav li");

btnToggle.forEach(function (e) {
  e.addEventListener("click", function () {
    hamBurger.classList.toggle("hide");
    logoCont.classList.toggle("hide");
    aBag.classList.toggle("hide");
    aGlass.classList.toggle("hide");
    navCenter.classList.toggle("flex-end");
    main.classList.toggle("hide");
    footer.classList.toggle("hide");
    header.classList.toggle("pos-rel");
    for (let i = 1; i <= 7; i++) {
      document.querySelector(`.sec${i}`).classList.toggle("hide");
    }
    xMark.classList.toggle("show");
    dropBar.classList.toggle("show");
    dropBar.classList.toggle("height");
  });
});

rightCont.forEach(function (e) {
  e.addEventListener("mouseover", function () {
    e.lastElementChild.classList.add("show-right");
  });
});
rightCont.forEach(function (e) {
  e.addEventListener("mouseout", function () {
    e.lastElementChild.classList.remove("show-right");
  });
});

//For toggling footer links

let linkToggle = document.querySelectorAll(".footer-link h6");

linkToggle.forEach(function (e) {
  e.addEventListener("click", function () {
    e.classList.toggle("border-hide");
    e.nextElementSibling.classList.toggle("show-link");
    e.lastElementChild.classList.toggle("rotate");
  });
});

//Variables for toggling slider buttons and slider

let slideCont = document.querySelector(".sec6");
let slides = document.querySelectorAll(".img-cont");
let fakeSlide = document.querySelector(".fakeimg-cont");
let btns = document.querySelectorAll(".btn");
let playBtn = document.querySelector(".play-btn");
let play = document.querySelector(".play-btn .fa-play");
let pause = document.querySelector(".play-btn .fa-pause");
let btnRelCont = document.querySelectorAll(".btnrel-cont");

let count = 0;
let stop = true;

//For assigning position according to slide index
slides.forEach(function (slide, index) {
  slide.style.left = `${100 * index}%`;
});

//For adding opacity when slide showup
for (y of slides) {
  y.style.opacity = 0.25;
}
slides[count].style.opacity = 1;

//For showing StreamNow button on slider when slide changes
for (z of btnRelCont) {
  z.classList.remove("show-btnrel-cont");
}
btnRelCont[count].classList.add("show-btnrel-cont");

//Clickable buttons for changing slides and other actions
btns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    count = index;

    //For adding and removing black background(of buttons) when btn is clicked
    for (x of btns) {
      x.classList.remove("black-bag");
    }
    btn.classList.add("black-bag");

    //For adding opacity when btn is clicked
    for (y of slides) {
      y.style.opacity = 0.25;
    }
    slides[count].style.opacity = 1;

    //For showing StreamNow button on slider when btn is clicked
    for (z of btnRelCont) {
      z.classList.remove("show-btnrel-cont");
    }
    btnRelCont[count].classList.add("show-btnrel-cont");

    //For changing slides when btn is clicked
    fakeSlide.style.transform = `translateX(${-100 * count}%)`;
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(${-100 * count}%)`;
    });

    //For toggling play and pause buttons
    pause.classList.add("hide");
    play.classList.add("show");

    clearInterval(start);
    stop = false;
  });
});

//For auto moving of slides after some interval.

let start;

function startInterval() {
  start = setInterval(function () {
    count++;
    if (count == slides.length - 1) {
      count = 0;
    }

    //For adding and removing black background(of buttons) after each interval
    for (x of btns) {
      x.classList.remove("black-bag");
    }
    btns[count].classList.add("black-bag");

    //For adding opacity after each interval
    for (y of slides) {
      y.style.opacity = 0.25;
    }
    slides[count].style.opacity = 1;

    //For showing StreamNow button on slider after each interval
    for (z of btnRelCont) {
      z.classList.remove("show-btnrel-cont");
    }
    btnRelCont[count].classList.add("show-btnrel-cont");

    //For changing slides after each interval
    slides.forEach(function (slide) {
      fakeSlide.style.transform = `translateX(${-100 * count}%)`;
      slide.style.transform = `translateX(${-100 * count}%)`;
    });
  }, 5000);
}

startInterval();

//For toggling play btn when btn is clicked
playBtn.addEventListener("click", function () {
  pause.classList.toggle("hide");
  play.classList.toggle("show");
  if (stop == true) {
    clearInterval(start);
    stop = false;
  } else {
    startInterval();
    stop = true;
  }
});
