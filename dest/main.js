//nav
const showMenu = document.querySelector('.btnmenu'),
showNav = document.querySelector('.nav');
showMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    showNav.classList.toggle('active');
})
window.addEventListener('resize', function() {
    if (window.innerWidth < 992) {
        showMenu.classList.remove('active');
        showNav.classList.remove('active');
    }
})

//header background
const header = document.querySelector('header');
const slider = document.querySelector('.slider');
let heightSlider = slider.clientHeight;
let heightHeader = header.clientHeight;
let changeBgHeader = function () {
    let scrollY = window.pageYOffset;
    if (scrollY > heightSlider - heightHeader) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}
document.addEventListener('scroll', function(){
    changeBgHeader();
})

// //language option
// let showLang = document.querySelector('.lang');
// let langCurrent = document.querySelector('.lang .lang__current span');
// let langOpt = document.querySelector('.lang .lang__option')
// let langItems = document.querySelectorAll('.lang .lang__option a');
// showLang.addEventListener('click', function(e) {
//     e.stopPropagation();
//     showLang.classList.toggle('active')
// })
// langItems.forEach(function(item) {
//     item.addEventListener('click',function (e) {
//         e.preventDefault();
//         let langText = this.textContent;
//         let langCurrentSpan = langCurrent.textContent;
//         langCurrent.innerHTML = langText;
//         this.innerHTML = langCurrentSpan;
//     })
// })
// document.addEventListener('click',function (e) {
//     e.stopPropagation();
//     showLang.classList.remove('active');
// })

//back to top
let toTop = document.querySelector('.back-to-top');
let scrollTop = function() {
    window.scrollTo( {
        top:0,
        behavior: 'smooth'
    })
}
toTop.addEventListener('click',function() {
    scrollTop()
})
let heightSectionProduct = document.querySelector('.products').offsetTop;
let scrollTopBtn = function () {
    let scrollY = window.pageYOffset;
    if (scrollY > heightSectionProduct) {
        toTop.style.display = 'block';
    } else {
        toTop.style.display = 'none';
    }
}
document.addEventListener('scroll',function(){
    scrollTopBtn();
})
document.querySelector('footer .container .totop').addEventListener('click',function(e) {
    e.preventDefault();
    scrollTop();
})

//scroll to section
let menuSect = document.querySelectorAll('main .slider .slider__list .slider__item .slider__content a');
let sections = [];
menuSect.forEach(function(item, index) {
    let className = item.getAttribute('href').replace('#','');
    let getSect = document.querySelector('.' + className);
    sections.push(getSect);
    item.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: getSect.offsetTop - heightHeader + 1,
            behavior: 'smooth'
        })
    })
})
window.addEventListener('scroll',function() {
    sections.forEach(function(section, index) {
        if(window.pageYOffset > section.offsetTop -heightHeader && window.pageYOffset < section.offsetTop + section.offsetHeight) {
            removeMenu();
            menuSect[index].classList.add('active');
        } else {
            menuSect[index].classList.remove('active');
        }
    })
})


//nav mobile show section
let navSect = document.querySelectorAll('nav ul li a');
navSect.forEach(function(item,index) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        let className = item.getAttribute('href').replace('#','');
        let getSect = document.querySelector('.' + className);
        showMenu.classList.remove('active');
        showNav.classList.remove('active');
        window.scrollTo({
            top: getSect.offsetTop - heightHeader,
            behavior: 'smooth'
        })
    })
})


//slider
let sliderList = document.querySelectorAll('.slider__list .slider__item');
let currentSlider = 0;
let pageNo = document.querySelector('.slider__bottom__page .page__number');
let pageDot = document.querySelectorAll('.slider__bottom__page .page__dot .dot');
sliderList.forEach(function(item,index) {
    if (item.classList.contains('active')) {
        currentSlider = index;
    }
})
function goTo(index) {
    sliderList[currentSlider].classList.remove('active');
    pageDot[currentSlider].classList.remove('active');
    sliderList[index].classList.add('active');
    pageDot[index].classList.add('active');
    currentSlider = index;
    pageNo.innerHTML = (currentSlider + 1).toString().padStart(2,'0');
}
pageDot.forEach(function(dot,index) {
    dot.addEventListener('click',function() {
        goTo(index);
    })
})
let btnNextSlider = document.querySelector('.ctrl__button.--next');
btnNextSlider.addEventListener('click', function() {
    if (currentSlider < sliderList.length - 1) {
        goTo(currentSlider + 1);
    } else {
        goTo(0);
    }
})
let btnPrevSlider = document.querySelector('.ctrl__button.--prev');
btnPrevSlider.addEventListener('click', function() {
    if (currentSlider > 0) {
        goTo(currentSlider - 1);
    } else {
        goTo(sliderList.length -1);
    }
})

//carousel
$('.main-gallery').flickity({
  // options
  cellAlign: 'left',
  contain: true
});


//popup video
let clickPlay = document.querySelectorAll('.circle');
let showVid = document.querySelector('.popup-video');
let closeVid = document.querySelector('.popup-close');
let iframeVid = document.querySelector('.popup-video .iframe-wrap iframe');
clickPlay.forEach(function (item) {
    item.addEventListener('click',function() {
        let idVid = item.getAttribute('data-video-id');
        iframeVid.setAttribute('src', 'https://www.youtube.com/embed/' + `${idVid}` +'?autoplay=1')
        showVid.style.display = 'flex';
    });
});
closeVid.addEventListener('click', function() {
    iframeVid.setAttribute('src','');
    showVid.style.display = 'none';
})
showVid.addEventListener('click',function () {
    iframeVid.setAttribute('src','');
    showVid.style.display = 'none';
})

//news link
let changeGroup = document.querySelectorAll('.news__btn span');
let linkInternal = document.querySelector('.group__link.internal');
let linkExternal = document.querySelector('.group__link.external');
let currentLink = 0;
changeGroup.forEach(function(group,index) {
    group.addEventListener('click', function() {
        changeGroup[currentLink].classList.remove('active');
        currentLink = index;
        changeGroup[currentLink].classList.add('active');
        if(currentLink == 0) {
            linkInternal.style.display = 'block';
            linkExternal.style.display = 'none';
        } else {
            linkInternal.style.display = 'none';
            linkExternal.style.display = 'block';
        }
    })
})
