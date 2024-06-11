//nav
let showMenu = $('.btnmenu');
let showNav = $('.nav');
showMenu.on('click', function() {
    $(this).toggleClass('active');
    showNav.toggleClass('active');
})
//scroll to section
// let menuSect = $('header .menu li a');
// let removeMenu = function() {
//     menuSect.removeClass('active');
// }
// menuSect.on('click', function(e) {
//     e.preventDefault();
//     let className = $(this).attr('href').replace('#','');
//     let getSect = $('.' + className);
//     window.scrollTo({
//         top: getSect.offset().top - heightHeader + 1,
//         behavior: 'smooth'
//     })
//     removeMenu();
//     $(this).addClass('active');
// })

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

//nav mobile show section
let menuList = $('nav ul li a')
menuList.on('click',function(e) {
    e.preventDefault();
    let className = $(this).attr('href').replace('#','');
    let getSect = $('.' + className);
    showMenu.removeClass('active');
    showNav.removeClass('active');
    window.scrollTo({
        top: getSect.offset().top - heightHeader,
        behavior: 'smooth'
    })
})

//header background
let heightSlider = $('.slider').innerHeight();
let heightHeader = $('header').outerHeight();
$(document).ready(function() {
    $(window).on('scroll', function() {
        let scrollY = window.pageYOffset;
        if (scrollY > heightSlider - heightHeader) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    })
})

//language
let showLang = $('.lang');
let langOpt = $('.lang .lang__option a');
let langCurrent = $('.lang .lang__current span');
showLang.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
})
langOpt.on('click',function(item) {
    let langOptText = $(this).text();
    let langCurrText = langCurrent.text();
    langCurrent.text(langOptText);
    $(this).text(langCurrText);
})
// $(window).on('click', function(e) {
//     e.stopPropagation();
//     showLang.removeClass('active');
// })

//back to top
let scrollTop = function() {
    window.scrollTo( {
        top:0,
        behavior: 'smooth'
    })
}
let toTopBtn = $('.back-to-top');
let toTopSpan = $('footer .container .totop');
toTopBtn.on('click',function() {
    scrollTop();
})
toTopSpan.on('click',function(e) {
    e.preventDefault();
    scrollTop();
})
let heightSectionProduct = $('.products').offset().top
$(document).ready(function() {
    $(window).on('scroll', function() {
        let scrollY = window.pageYOffset;
        if (scrollY > heightSectionProduct) {
            toTopBtn.show();
        } else {
            toTopBtn.hide();
        }
    })
})

// $(window).on('scroll',function() {
//     sections.forEach(function(section, index) {
//         if(window.pageYOffset > section.offset().top -heightHeader && window.pageYOffset < section.offset().top + section.outerHeight) {
//             menuSect.index().addClass('active');
//         } else {
//             menuSect.index().removeClass('active');
//         }
//     })
// })

// popup video
let clickPlay = $('.circle');
let showVid = $('.popup-video');
let closeVid = $('.popup-close');
let iframeVid = $('.popup-video .iframe-wrap iframe');
clickPlay.on('click',function() {
    let idVid = $(this).attr('data-video-id');
    iframeVid.attr('src', 'https://www.youtube.com/embed/' + `${idVid}` +'?autoplay=1')
    showVid.css('display','flex')
})
closeVid.on('click',function() {
    iframeVid.attr('src', '');
    showVid.hide();
})
showVid.on('click',function() {
    iframeVid.attr('src', '');
    showVid.hide();
})

// slider
let sliderList = $('.slider__list .slider__item');
let currentSlider =  $('.slider__list .slider__item.active').index();
let pageNo = $('.slider__bottom__page .page__number');
let pageDot = $('.slider__bottom__page .page__dot .dot');
$('.ctrl__button.--next').on('click',function() {
    currentSlider.removeClass('active');
    sliderList.next().addClass('active');
})
$('.ctrl__button.--prev').on('click',function() {
    currentSlider.removeClass('active');
    sliderList.prev().addClass('active');
})

//news link
let changeGroup = $('.news__btn span');
let linkInternal = $('.group__link.internal');
let linkExternal = $('.group__link.external');
changeGroup.on('click', function() {
    $(this).addClass('active');
    if($(this).index() == 0) {
        $(this).next().removeClass('active');
        linkInternal.show();
        linkExternal.hide();
    } else {
        $(this).prev().removeClass('active');
        linkInternal.hide();
        linkExternal.show();
    }
})