$(function () {
 
        var text = "A Freelance Web Developer",
            i = 0,
            incriz = '';
        var inic = setInterval( timing , 400);
        function timing() {
            incriz += text[i];
            $('.content p').text(incriz);
            i++;
            if (i > text.length - 1) {
                clearInterval(inic);
            }
        };
        function blinkWarning (){
            $('.content p').fadeOut(3000, function () {
            $(this).fadeIn(3000);
                });}
        blinkWarning();
        timing();
        $('.call img').on('click', function () {
            $('.forms').animate({
                top: '40' + '%',
                transitionTimingFunction: 'ease'
            }).animate({
                top: '50' + '%',
                transitionTimingFunction: 'ease'
            });
            $('.forms').toggleClass('active');
            $(this).toggleClass('active').delay(2000).fadeOut(500);
            $('.popup').css('display','block');
        });
        $('.forms .fa-times').on('click', function () {
            $('.forms').fadeOut(1000);
            $('.popup').fadeOut(500)
        });
        $(document).keydown(function(e){
        if(e.charCode || e.keyCode == 27){    //27 == Escape  ^^  13 == Enter
            $('.forms , .popup').fadeOut(500);
        }
        });
    
        $('.progress-bar span').each(function () {
                $(this).animate({
                    width: $(this).attr('data-progress') + '%'
                }, 2000, function () {
                    $(this).text($(this).attr('data-progress') + '%')
                });
        });
});