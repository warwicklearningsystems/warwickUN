var topics=document.getElementsByClassName('topics');
var left_navbar=document.getElementById('nav-drawer');

var course_activity_page=document.getElementsByClassName('course-name ml-auto mr-auto');
if(course_activity_page.length != 0){
    document.getElementsByClassName('fixed-top navbar navbar-bootswatch navbar-dark navbar-expand moodle-has-zindex')[0].setAttribute('style','top:0');
}

/*handle Jump to top arrow  hide and display*/
document.getElementById('page-wrapper').onscroll = function() {
        var jump_toTop=document.getElementById('scrolltoToplink');
        if (document.getElementById('page-wrapper').scrollTop > 200 || document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            jump_toTop.style.display = "block";
        } else {
            jump_toTop.style.display = "none";
        }
    }

 
/*handle the top bar search action */
require(['jquery'], function($) {
    $('#topsearchicon').click(function() {
        $('.search-box-input-wrapper').addClass('show');
        $('#id_search_box').focus();
    });
    $(document).click(function(event) {
        if((!$(event.target).is('#topsearchicon'))&&(!$(event.target).is('#id_search_box')))
        {
            $('.search-box-input-wrapper').removeClass('show');
        }
    });

    /*handle the top custom menu action */
    $('.navbar-nav.custom-menus > *:nth-child(1)').click(function() {
        $('nav.navbar ul.navbar-nav li, nav.navbar ul.navbar-nav .nav-item').css('display', 'list-item');
        //$('.search-box-input-wrapper').addClass('show');
    });
    $(document).click(function(event) {
        if(!$(event.target).is('nav.navbar ul.navbar-nav li, nav.navbar ul.navbar-nav *'))
        {
            $('nav.navbar ul.navbar-nav.custom-menus li, nav.navbar ul.navbar-nav .nav-item').css('display', 'none')
        }
    });
});
