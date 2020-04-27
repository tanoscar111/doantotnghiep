$(document).ready(function () {
    $('.nav-toggle').click(function () {
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
                toggle_switch.html('Đọc thêm');
            } else {
                toggle_switch.html('ẩn đi');
            }
        });
    });

});
$(document).ready(function () {
    $(window).scroll(function(event){
        var pos_body = $('html,body').scrollTop();
        if(pos_body>20){
            $('.index').addClass('co-dinh-menu');
         }
         else {
            $('.index').removeClass('co-dinh-menu');
         }
    });
    
});