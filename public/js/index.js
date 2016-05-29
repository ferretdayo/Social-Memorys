$(document).ready(function(){
    $('a[href*=#]').click(function(){
        var target = $(this.hash);
        if(target){
            var position = target.offset().top;
            console.log(position);
            $('body,html').animate({    
                scrollTop: position
            }, {
                queue: false
            });
            return false;
        }
    });
});