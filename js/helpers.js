$(function(){

    var theme = localStorage.getItem("theme");
    if(theme == "light") {
        $(".switch #switch-theme").prop("checked", true)
        set_light()
    }
    else {
        $(".switch #switch-theme").prop("checked", false)
        set_dark()
    }

    $(".switch #switch-theme").change(function(){
        if($(this).prop("checked")){
            set_light()
            localStorage.setItem("theme", "light");
        }
        else
        {
            set_dark()
            localStorage.setItem("theme", "dark");
        }
    })
})

function set_dark() {
    $("body").css({"background-color": "rgba(0,27,58, 0.7)"})
    $(".content .profile-header h1,.content .profile-header .sub-heading, .content .learn p").css({"color": "#FFFFFF"})
    $(".navbar .logo").addClass("on")
}

function set_light(){
    $("body").css({"background-color": "rgba(255,255,255, 0.3)"})
    $(".content .profile-header h1,.content .profile-header .sub-heading, .content .learn p").css({"color": "#000000"})
    $(".navbar .logo").removeClass("on")
}