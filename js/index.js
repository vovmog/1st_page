$(function(){
var el = $("#wrap_slide");


var sliderFirst = el.children('div').slice(0, 4);
var tmp = '';
sliderFirst.each(function(){
    tmp = tmp + '<div>' + $(this).html() + '</div>';
});
sliderFirst = tmp;
var sliderLast = el.children('div').slice(-4);
tmp = '';
sliderLast.each(function(){
    tmp = tmp + '<div>' + $(this).html() + '</div>';
});
sliderLast = tmp;

el.append(sliderFirst);
el.prepend(sliderLast);


});


$(document).on("click",".left_but a",function(){

    $("#wrap_slide").animate({left: '-='+224+'px'},300,
        function(){
            if ($(this).css('left') == '-2700px') {$(this).css('left', '-' +908 + 'px');}

        });


        return false;
});
$(document).on("click",".right_but a",function(){

    $("#wrap_slide").animate({left: '+='+224+'px'},300,
        function(){
            if ($(this).css('left') == '-12px') {$(this).css('left', '-' +1804 + 'px');}

        }
    );
    return false;
});