const BTN_ANIMATION_DURATION = "200";
let lastScrollPos = window.scrollY;

$(window).scroll(() => {
    if (window.scrollY > lastScrollPos) {
        if (window.scrollY > $("header").height()) {
            $("header").css("opacity", "0");
        }
        else {
            $("header").css("opacity", "1");
        }
    } else {
        $("header").css("opacity", "1");
        if (window.scrollY > $("#pageOne").height()) {
            $("header").css("box-shadow", "inset 0 100px 0 0 black");
        } else {
            console.log(window.scrollY);
            $("header").css("background-color", "");
            $("header").css("box-shadow", "inset 0 0 0 0 black");
        }
    }
    lastScrollPos = window.scrollY;
});



[...document.getElementsByClassName("btn_container")].forEach((element)=>{
    element.addEventListener("mouseover", ()=>{
        const btn_bg = element.getElementsByClassName("btn_bg")[0];
        const a = element.getElementsByTagName("a")[0];
        a.style.color = "black"
        btn_bg.style.top = "1px";
    });
});
[...document.getElementsByClassName("btn_container")].forEach((element)=>{
    element.addEventListener("mouseleave", ()=>{
        const btn_bg = element.getElementsByClassName("btn_bg")[0];
        const a = element.getElementsByTagName("a")[0];
        a.style.color = "white"
        btn_bg.style.bottom = "100%";
        // to reset
        const interval = setInterval(()=>{
            btn_bg.setAttribute("transition", "all 0s");
            btn_bg.style.bottom = "1px";
            btn_bg.style.top = "100%";
            clearInterval(interval);
        },400);
    });
});


// $(".btn_container").mouseover( ()=>{
//     $(".btn_container").css("box-shadow", "inset 0 -55px 0 0 #ffffff");
// });
// $(".btn_container").mouseleave( ()=>{
//     $(".btn_container").css("box-shadow", "inset 0 -55px 0 0 #ffffff00");
// });