const PLAYER = new Map([
    ["CPUName", "CPU"]
]);
const URL_PARAMS = new URLSearchParams(window.location.search);
const CHOICES = ["rock", "paper", "scissor"];
const RULES = {
    "paper": {
        "rock": "win",
        "scissor": "lose",
    },
    "rock": {
        "paper": "lose",
        "scissor": "win",
    },
    "scissor": {
        "rock": "lose",
        "paper": "win",
    }
}
const SCORES = {
    "playerOne": 0,
    "CPU": 0
};

let cpuHand = () => {
    return CHOICES[Math.floor(Math.random()*3)]
};
let calcMatch = (playerOne, playerTwo) => {
    let result = RULES[playerOne][playerTwo];
    $("#playerHand").text(playerOne+" ("+PLAYER.get("playerName")+")");
    $("#cpuHand").text(playerTwo+" (CPU)");
    if (result == "win") {
        SCORES["playerOne"] += 1;
        $("#result").text("You Won! :)");
        $("#result").css("color", "#4285f4");
    } else if (result == "lose") {
        SCORES["CPU"] += 1;
        $("#result").text("You Lost! :(");
        $("#result").css("color", "#ea4335");
    } else {
        $("#result").text("Draw!");
        $("#result").css("color", "#073763");
    }
    updateResults();
};
let updateResults = () => {
    $("#playerScore").text(PLAYER.get("playerName") + " " + SCORES["playerOne"]);
    $("#cpuScore").text("CPU " + SCORES["CPU"]);
};

PLAYER.set("playerName", URL_PARAMS.get("player"));
$("#playerHand").text(PLAYER.get("playerName"));
updateResults()

$("#choiceRock").click(() => {calcMatch("rock", cpuHand())});
$("#choicePaper").click(() => {calcMatch("paper", cpuHand())});
$("#choiceScissor").click(() => {calcMatch("scissor", cpuHand())});