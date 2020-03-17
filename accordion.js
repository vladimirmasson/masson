$(window).on("load", function () {
    var sum=0;
    $('.accordion li img').each(function(){ 
        sum += $(this).width();
    });
    $('.accordion ul').width(sum);
});
$(function(){
    var winWidth = $(".accordion").width();
    var ulWidthCount = 0;
    ulWidthCount = $('.accordion li').length;
    $(".accordion li").width(winWidth/ulWidthCount);
    $(".accordion li").hover(function(){            
        ulWidthCount = $('.accordion li').length;
        var imgWidth = $(this).find("img").width();
        var bannerLi = winWidth - imgWidth;
        var remWidth = ulWidthCount - 1;
        var appWidth = bannerLi/remWidth;
        $(".accordion li").stop(true, false).animate({width: appWidth},700);
        $(this).stop(true, false).animate({width: imgWidth},700);
        $(this).find("span.accord").stop(true, false).fadeOut();
        }, function(){
        $(this).animate({width: winWidth/ulWidthCount},700);
        $(".accordion li").animate({width:winWidth/ulWidthCount},700);
        $(this).find("span.accord").fadeIn();
    });    
});    