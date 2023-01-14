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