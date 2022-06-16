function changeCoords(character) {
    if (direction == "north") {
        y += 10;
    }
    if (direction == "west") {
        x -= 10;
    }
    if (direction == "south") {
        y -= 10;
    }
    if (direction == "east") {
        x += 10;
    }
    character.style.bottom = y + "px";
    character.style.left = x + "px";
}
function moveCharacter(element) {
    document.addEventListener("keydown", function (e) {
        if (e.key == "w") {
            direction = "north";
            changeCoords(element);
            checkPosition();
        } else if (e.key == "a") {
            direction = "west";
            changeCoords(element);
            checkPosition();
        } else if (e.key == "s") {
            direction = "south";
            changeCoords(element);
            checkPosition();
        } else if (e.key == "d") {
            direction = "east";
            changeCoords(element);
            checkPosition();
        }
        console.log(x);
        console.log(y);
    });
}
//thirdHouse coords: (-580,620)
//firstHouse coords: (-500, 560)
//secondHouse coords (-510, 800)
//fifthHouse coords: (-150, 790)
//fourthHouse coords (-110, 530)
//sixthHouse coords (-120, 1050)

function checkPosition() {
    if (x <= -120 && x >= -200 && y >= 600 && y <= 690) {
        nearHouse = true;
        houseNumber = 6;
        questionPlayer();
    } else if (x <= -580 && x >= -650 && y >= 620 && y <= 670) {
        nearhouse = true;
        houseNumber = 3;
        questionPlayer();
    } else if (x >= -500 && x <= -450 && y >= 560 && y <= 610) {
        nearHouse = true;
        houseNumber = 1;
        questionPlayer();
    } else if (x >= -510 && x <= -460 && y >= 800 && y <= 850) {
        nearhouse = true;
        houseNumber = 2;
        questionPlayer();
    } else if (x >= -110 && x <= -160 && y >= 530 && y <= 580) {
        houseNumber = 4;
        nearHouse = true;
        questionPlayer();
    } else if (x >= -150 && x <= -100 && y >= 790 && y <= 740) {
        houseNumber = 5;
        nearHouse = true;
        questionPlayer();
    } else {
        houseNumber = null;
        nearHouse = false;
    }
}
function questionPlayer(element) {
    if (nearHouse == true) {
        let answer = window.prompt(questions[i]);
        let answerCheck = checkanswer(answer, i);

        i++;
        nearHouse = false;
    } else {
    }
}
let i = 0;
function checkanswer(answer, iteration) {
    if (question[iteration] == 0 && answer == answers[iteration]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        return true;
    } else if (question[iteration] == 1 && answer == answers[iteration]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        return true;
    } else if (question[iteration] == 2 && answer == answers[iteration]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        return true;
    } else if (question[iteration] == 3 && answer == answers[iteration]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        return true;
    } else if (question[iteration] == 4 && answer == answers[iteration]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        return true;
    } else if (question[iteration] == 5 && answer == answers[iteration]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        return true;
    } else if (question[iteration] == 6 && answer == answers[iteration]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        return true;
    } else if (question[iteration] == 7 && answer == answers[iteration]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        return true;
    } else if (question[iteration] == 8 && answer == answers[iteration]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        return true;
    } else if (question[iteration] == 9 && answer == answers[iteration]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        return true;
    } else {
        window.alert(`Incorrect the correct answer was ${answers[iteration]}`);
        return false;
    }
}
function placeCharacter(character) {
    playableArea.append(document.getElementById(character));
    document.getElementById(character).style.width = "5vw";
    document.getElementById(character).style.height = "5vw";
    document.getElementById(character).style.position = "relative";
    document.getElementById(character).style.bottom = "0";
    document.getElementById(character).style.left = "0";
    document.getElementById(character).style.zIndex = "99999999";
}
function createSelection(character) {
    let selectedCharacter = document.getElementById(character);
    console.log(selectedCharacter);
    console.log(character);
    selectedCharacter.addEventListener("click", function (character) {
        if ((character.id = "john")) {
            placeCharacter("john");
            selectionDisappear();
            moveCharacter(johnSelected);
            currentCharacter = johnSelected;
            selectedCharacter.style.left = x + "px";
            selectedCharacter.style.bottom = y + "px";
        } else if ((character.id = "lisa")) {
            placeCharacter("lisa");
            selectionDisappear();
            selectedCharacter.style.left = x + "px";
            selectedCharacter.style.bottom = y + "px";
        } else if ((character.id = "phil")) {
            placeCharacter("phil");
            selectionDisappear();
            selectedCharacter.style.left = x + "px";
            selectedCharacter.style.bottom = y + "px";
        } else if ((character.id = "jen")) {
            placeCharacter("lisa");
            selectionDisappear();
            selectedCharacter.style.left = x + "px";
            selectedCharacter.style.bottom = y + "px";
        }
        return fighter;
    });
}
function selectionDisappear() {
    let mainDiv = document.getElementById("mainDiv");
    mainDiv.style.opacity = "0";
    // let timer = document.getElementById("time");
    // timer.append(`${seconds}`);
}

function timeFunc() {
    setTimeout(function () {
        for (let i = 0; i <= 120; i++) {
            seconds += 1;
        }
    }, 1000);
}

// window.alert(
//     "Welcome to FireFighter, the game that combines the rush or fighting fires with trivia! To start, select a character that you see on screen now. Once you have selected a character, use WASD to walk towards any houses on fire."
// );
// window.alert(
//     "Once you walk towards a house that is on fire you will be prompted to answer a question via the top of your screen. Please use capital letters when neccesary and as fast as possible! Time limit will be 2 minutes and your score will be recoreded!"
// );
let mainDiv = document.getElementById("main");
let fighter = null;
let playableArea = document.getElementById("playable_area");
var direction = null,
    x = -710,
    y = 1200;
var nearHouse, houseNumber;
var johnSelected = document.querySelector("#john");
let lisaSelected = document.querySelector("#lisa");
let philSelected = document.querySelector("#phil");
let jenSelected = document.querySelector("#jen");
var currentCharacter;
var pointCount = 0;
var seconds = 0;

const lisa_selection = createSelection("lisa");
const john_selection = createSelection("john");
const phil_selection = createSelection("phil");
const jen_selection = createSelection("jen");

let questions = [
    "Who was the first American President?",
    "What is the capital of The US",
    "What is the capital of Pennsylvania",
    "How old is the creator of this game?",
    `What state’s electoral votes ultimately decided the 2000 presidential election? `,
    "Who was the 35th president of the U.S?",
    "How many terms can a president serve in the U.S?",
    "What number of electoral votes would solidify a win during an election in the U.S?",
    "Who was the first man on the moon?",
    "What was the name of the first satellite sent into space?",
];
let answer = [
    "George Washington",
    "Washington",
    "Harrisburg",
    "16",
    "Florida",
    "John F Kennedy",
    "2",
    "270",
    "Neil Armstrong",
    "Sputnik",
];
//https://github.com/NickDespo05/JS-Web-Game-Part-7.git
//https://www.youtube.com/watch?v=VBVOXTgXX2U
