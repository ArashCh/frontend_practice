const DATA = {
    "motorsports": {
        "title": "Motorsports",
        "img": {
            "src": "./static/media/motorsports.jpg",
            "alt": "pic of motorsports"
        },
        "content": "Motorsport, motorsports or motor sport is a global term \
         used to encompass the group of competitive sporting events which \
         primarily involve the use of motorized vehicles. The terminology can \
         also be used to describe forms of competition of two-wheeled motorised \
         vehicles under the banner of motorcycle racing, and includes off-road racing such as motocross."
    },
    "fighter": {
        "title": "Fighter Aircraft",
        "img": {
            "src": "./static/media/fighter_aircraft.jpg",
            "alt": "pic of F-22 Raptor"
        },
        "content": "Fighter aircraft are fixed-wing military aircraft \
        designed primarily for air-to-air combat. In military conflict, the \
        role of fighter aircraft is to establish air superiority of the battlespace. \
        Domination of the airspace above a battlefield permits bombers and attack \
        aircraft to engage in tactical and strategic bombing of enemy targets."
    },
    "programming": {
        "title": "Programming",
        "img": {
            "src": "./static/media/programming.jpg",
            "alt": "pic of a programmer"
        },
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
        case "tabMotorsports":
            tabId = "tabMotorsports";
            break;
        case "tabFighter":
            tabId = "tabFighter";
            break;
        case "tabProgramming":
            tabId = "tabProgramming";
            break;
        default:
            break;
    }
    setTabContent(tabId);
    setTabsStyle(tabId);
});
function setTabContent(tabId) {
    $("#descTitle").text(DATA[tabId.slice(3).toLowerCase()]["title"]);
    $("#descContent").text(DATA[tabId.slice(3).toLowerCase()]["content"])
    $("#img").attr("src", DATA[tabId.slice(3).toLowerCase()]["img"]["src"]);
    $("#img").attr("alt", DATA[tabId.slice(3).toLowerCase()]["img"]["alt"]);
}
function setTabsStyle(tabId) {
    $(".tab").attr("class", "tab deactive title")
    if (tabId != "tabMotorsports") {
        $("#tabMotorsports").css("border-top-left-radius", "10px");
    }
    if (tabId != "tabProgramming") {
        $("#tabProgramming").css("border-top-right-radius", "10px");
    }
    $("#"+tabId).attr("class", "tab active title")
}