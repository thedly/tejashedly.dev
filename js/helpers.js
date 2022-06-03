$(function(){
    $(".switch #switch-theme").change(function(){
        if($(this).prop("checked")){
            $("body").css({"background-color": "rgba(255,255,255, 0.3)"})
            $(".content .profile-header h1,.content .profile-header .sub-heading, .content .learn p").css({"color": "#000000"})
        }
        else
        {
            $("body").css({"background-color": "rgba(0,27,58, 0.7)"})
            $(".content .profile-header h1,.content .profile-header .sub-heading, .content .learn p").css({"color": "#FFFFFF"})
        }
    })
})

