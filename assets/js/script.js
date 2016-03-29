new WOW().init();


$(function(){
    $(".element").typed({
        strings: ["designer.", "dreamer.","developer.", "little of everything :)"],
        backDelay: 2400,
        typeSpeed: 0
    });

    $(".current-year").html(new Date().getFullYear())
});
