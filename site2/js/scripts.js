function scrollTop(){
    $(".scrollup").on("click",function(){
        $("html,body").animate({
            scrollTop:0,
        }, 500)
    });
}

function navigationMenu(){
    $(document).on("click",".c-menu", function(){
        $(".c-nav-list").slideToggle();
    })
}



$(function(){
    scrollTop();
    navigationMenu();

})