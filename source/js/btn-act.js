$('.recall').mouseup(function () {
    $(".modal-content").css('display', 'block') && $(".success-message").css('display', 'block') && $(".modal-background").css('display', 'block') && $('.name').focus();
});

$('.work-path__btn').mouseup(function () {
    $(".modal-content").css('display', 'block') && $(".success-message").css('display', 'block') && $(".modal-background").css('display', 'block') && $('.name').focus();
});

$('.discount__btn').mouseup(function () {
    $(".modal-content").css('display', 'block') && $(".success-message").css('display', 'block') && $(".modal-background").css('display', 'block') && $('.name').focus();
});

$('.modal-content-close').mouseup(function () {
    $(".modal-content").css('display', 'none') && $(".success-message").css('display', 'none') && $(".modal-background").css('display', 'none') && $('#modal-header').text("Мы обязательно Вам ответим!");
});

$('.success-content-close').mouseup(function () {
    $(".modal-content").css('display', 'none') && $(".success-message").css('display', 'none') && $(".modal-background").css('display', 'none');
});

//Всплывающее модальное окно по таймеру

var modalEmergence = function () {
    $(".modal-content").css('display', 'block') && $(".success-message").css('display', 'block') && $(".modal-background").css('display', 'block') && $('.name').focus() && $('#modal-header').text("Получите консультацию бесплатно!");
}

setTimeout(modalEmergence, 18000);

//Всплывающее модальное окно по таймеру

$(document).ready(function () {
    $(".nav").on("click", ".navbar__link", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".intro__slide").on("click", ".intro__btn", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".advantages").on("click", ".advantages__btn", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".select-price__btn-container").on("click", ".select-price-btn", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".gallery").on("click", ".gallery__btn", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".navbar").on("click", ".nav__logo", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function () {
    $(".page-footer__menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});