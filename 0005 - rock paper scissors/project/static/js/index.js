const COLOR_RED = "#ea4335";
const COLOR_TXT = "#073763";

$("#name").keyup((event) => {
    if ($("#name").val().length > 0) {
        $("#formSubmit").css("color", COLOR_TXT);
    } else {
        $("#formSubmit").css("color", COLOR_RED);
    }
});
$("#formSubmit").mouseover((envet) => {
    if ($("#name").val().length > 0) {
        $("#formSubmit").css("cursor", "pointer");
    } else {
        $(envet.target).css("opacity", "0.2") ;
        $("#name").css("border-color", COLOR_RED);
    }
});
$("#formSubmit").mouseleave((envet) => {
    $(envet.target).css("opacity", "1") ;
    $("#name").css("border-color", COLOR_TXT);
});
$("#formSubmit").click(() => {
    let player = $("#name").val();
    if (player) {
        window.location.assign("./match.html"+"?player="+player);
    }
    return false
});