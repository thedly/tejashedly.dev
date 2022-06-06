$(function(){

    var theme = localStorage.getItem("theme");
    if(theme == "light") {
        $(".switch #switch-theme").prop("checked", false)
        set_light()
    }
    else {
        $(".switch #switch-theme").prop("checked", true)
        set_dark()
    }

    $(".switch #switch-theme").change(function(){
        if($(this).prop("checked")){
            set_dark()
            localStorage.setItem("theme", "dark");
        }
        else
        {
            set_light()
            localStorage.setItem("theme", "light");
        }
    })
})

function set_dark() {
    $("body, .navbar .logo, .navbar .logo img, .content .profile-header h1,.content .profile-header .sub-heading, .content .learn p, .content .resume-text, .copyrights, .navbar .logo-wrap,.content .avatar img").addClass("on")
}

function set_light(){
    $("body, .navbar .logo, .navbar .logo img, .content .profile-header h1,.content .profile-header .sub-heading, .content .learn p,.content .resume-text, .copyrights, .navbar .logo-wrap, .content .avatar img").removeClass("on")
}
