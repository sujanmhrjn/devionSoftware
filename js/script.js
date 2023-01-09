

function accordion(){
    $(document).on("click",".expandable_wrapper .expandable-item .expandable-header", function(){

        var parent = $(this).parent(".expandable-item");
        var next =  $(this).next(".expandable-content");

        if(next.is(":visible")){
            parent.removeClass("active");
            next.slideUp('200');
        }else{
            parent.addClass("active");
            next.slideDown('200');
        }
    })
}


function modal(){
    //login modal
    $(document).on("click","#login_lnk", function(e){
        e.preventDefault();
        if($("#login-modal").length > 0){
           $("#login-modal").addClass("modal-active");
        }
    });

    $(document).on("click", ".modal-close", function(){
        $("#login-modal").removeClass("modal-active");
    })
}

$(function(){
    accordion();
    modal();
});