function hide(){
    var name = document.getElementById("wlc_msg");
    var className = name.getAttribute("class");
    if(className == "wlc_msg"){
        document.getElementById("wlc_msg").classList.add("wlc_msg_active");
        document.getElementById("con").classList.add("con_active");
    }else{
        document.getElementById("wlc_msg").classList.remove("wlc_msg_active");
        document.getElementById("con").classList.remove("con_active");
        document.getElementById("logo_web").classList.remove("l_active");
        document.getElementById("list_web").classList.remove("list_active");
    }
}
function nav(){
 document.getElementById("logo_web").classList.add("l_active");
 document.getElementById("list_web").classList.add("list_active");
}
