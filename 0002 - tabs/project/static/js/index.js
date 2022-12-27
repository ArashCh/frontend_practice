const DATA = {
    "motorsports": {
        "title": "Motorsports",
        "img_src": "./static/media/motorsports.jpg",
        "content": "Motorsport, motorsports or motor sport is a global term \
         used to encompass the group of competitive sporting events which \
         primarily involve the use of motorized vehicles. The terminology can \
         also be used to describe forms of competition of two-wheeled motorised \
         vehicles under the banner of motorcycle racing, and includes off-road racing such as motocross."
    },
    "fighter": {
        "title": "Fighter Aircraft",
        "img_src": "./static/media/fighter_aircraft.jpg",
        "content": "Fighter aircraft are fixed-wing military aircraft \
        designed primarily for air-to-air combat. In military conflict, the \
        role of fighter aircraft is to establish air superiority of the battlespace. \
        Domination of the airspace above a battlefield permits bombers and attack \
        aircraft to engage in tactical and strategic bombing of enemy targets."
    },
    "programming": {
        "title": "Programming",
        "img_src": "./static/media/programming.jpg",
        "content": "Computer programming is the process of performing a \
        particular computation (or more generally, accomplishing a specific \
            computing result), usually by designing and building an executable \
            computer program. Programming involves tasks such as analysis, \
            generating algorithms, profiling algorithms' accuracy and resource \
            consumption, and the implementation of algorithms (usually in a chosen \
            programming language, commonly referred to as coding).[1][2] \
            The source code of a program is written in one or more languages \
            that are intelligible to programmers, rather than machine code, \
            which is directly executed by the central processing unit. The \
            purpose of programming is to find a sequence of instructions that \
            will automate the performance of a task (which can be as complex \
            as an operating system) on a computer, often for solving a \
            given problem."
    }
}
$(".tab").click(event => {
    let tabId = "";
    switch (event.target.id) {
        case "tab_motorsports":
            tabId = "tab_motorsports";
            break;
        case "tab_fighter":
            tabId = "tab_fighter";
            break;
        case "tab_programming":
            tabId = "tab_programming";
            break;
        default:
            break;
    }
    $("#desc_title").text(DATA[tabId.slice(4)]["title"]);
    $("#desc_content").text(DATA[tabId.slice(4)]["content"])
    $("#img").attr("src", DATA[tabId.slice(4)]["img_src"]);
    setTabsStyle(tabId);
});
function setTabsStyle(tabId) {
    $(".tab").css("background-color", "#d9e3ed");
    $(".tab").css("border-color", "#d9e3ed");
    $(".tab").css("border-radius", "0");
    if (tabId != "tab_motorsports") {
        $("#tab_motorsports").css("border-top-left-radius", "10px");
    }
    if (tabId != "tab_programming") {
        $("#tab_programming").css("border-top-right-radius", "10px");
    }
    $("#"+tabId).css("background-color", "#ffffff");
    $("#"+tabId).css("border", "solid 2px #4e6d9c");
    $("#"+tabId).css("border-radius", "5px");
}