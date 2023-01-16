var lastKey = "";
const KEYBOARD_MAP = new Map([
    ["Q", "C3"],
    ["2", "CSharp3"],
    ["W", "D3"],
    ["3", "DSharp3"],
    ["E", "E3"],
    ["R", "F3"],
    ["5", "FSharp3"],
    ["T", "G3"],
    ["6", "GSharp3"],
    ["Y", "A3"],
    ["7", "ASharp3"],
    ["U", "B3"],
    ["I", "C4"]
]);

let play = (key) => {
    const audio = new Audio("./static/media/piano keys/"+key+".mp3");
    audio.play();
};

$(".key").click((event)=>{
    const key = $(event.target).attr("id");
    play(key);
});

$(this).keydown((event)=>{
    if (!KEYBOARD_MAP.has(String.fromCharCode(event.which))) return
    if (lastKey == event.which) return
    lastKey = event.which;
    const key = KEYBOARD_MAP.get(String.fromCharCode(event.which));
    play(key);
    $("#"+key).addClass("pressed_key");
});

$(this).keyup(() => {
    lastKey = "";
    $(".key").removeClass("pressed_key");
});