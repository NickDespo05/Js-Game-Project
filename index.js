function changeCoords(character) {
    if (direction == "north") {
        y += 10;
        checkPosition();
    }
    if (direction == "west") {
        x -= 10;
        checkPosition();
    }
    if (direction == "south") {
        y -= 10;
        checkPosition();
    }
    if (direction == "east") {
        x += 10;
        checkPosition();
    }
    character.style.bottom = y + "px";
    character.style.left = x + "px";
}
function moveCharacter(element) {
    document.addEventListener("keydown", function (e) {
        if (e.key == "w") {
            direction = "north";
            changeCoords(element);
        } else if (e.key == "a") {
            direction = "west";
            changeCoords(element);
        } else if (e.key == "s") {
            direction = "south";
            changeCoords(element);
        } else if (e.key == "d") {
            direction = "east";
            changeCoords(element);
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
    if (x >= 1170 && x <= 2000 && y >= 1940 && y <= 1970) {
        nearHouse = true;
        houseNumber = 6;
        questionPlayer();
        console.log(houseNumber);
    } else if (x >= 680 && x <= 700 && y >= 1470 && y <= 1500) {
        nearHouse = true;
        houseNumber = 3;
        questionPlayer();
        console.log(houseNumber);
    } else if (x >= 730 && x <= 750 && y >= 1470 && y <= 1500) {
        nearHouse = true;
        houseNumber = 1;
        questionPlayer();
        console.log(houseNumber);
    } else if (x >= 800 && x <= 830 && y >= 1650 && y <= 1700) {
        nearHouse = true;
        houseNumber = 2;
        questionPlayer();
        console.log(houseNumber);
    } else if (x >= 1170 && x <= 1200 && y >= 1390 && y <= 1400) {
        houseNumber = 4;
        nearHouse = true;
        questionPlayer();
        console.log(houseNumber);
    } else if (x >= 1170 && x <= 1200 && y >= 1620 && y <= 1650) {
        houseNumber = 5;
        nearHouse = true;
        questionPlayer();
        console.log(houseNumber);
    } else {
        houseNumber = null;
        nearHouse = false;
    }
}
function questionPlayer() {
    if (nearHouse === true) {
        answer = window.prompt(questions[i]);
        checkanswer(answer, i);
        nearHouse = false;
    } else {
        nearHouse = false;
    }
    i++;
}
var answer;
let i = 0;
function checkanswer(answer, iteration) {
    if (questions[iteration] == 0 && answer === answers[0]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        fireDissapear(iteration);
    } else if (questions[iteration] == 1 && answer === answers[1]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        fireDissapear(iteration);
    } else if (questions[iteration] == 2 && answer === answers[2]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        fireDissapear(iteration);
    } else if (questions[iteration] == 3 && answer === answers[3]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        fireDissapear(iteration);
    } else if (questions[iteration] == 4 && answer === answers[4]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        fireDissapear(iteration);
    } else if (questions[iteration] == 5 && answer === answers[5]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        fireDissapear(iteration);
    } else if (questions[iteration] == 6 && answer === answers[6]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        fireDissapear(iteration);
    } else if (questions[iteration] == 7 && answer === answers[7]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        fireDissapear(iteration);
    } else if (questions[iteration] == 8 && answer === answers[8]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        fireDissapear(iteration);
    } else if (questions[iteration] == 9 && answer === answers[9]) {
        pointCount++;
        window.alert("Correct! Plus 1 Point");
        fireDissapear(iteration);
    } else if (answer != answers[iteration]) {
        window.alert(`Incorrect, the correct answer was ${answers[iteration]}`);
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
    timer.innerHTML = `Time: ${seconds}`;
    // timeFunc();
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
}
function fireDissapear(i) {
    fires[i].style.zIndex = "-5";
}
let timer = document.getElementById("time");
// function timeFunc() {
//     while (seconds < 121) {
//         setTimeout(function () {
//             seconds += 1;

//             console.log(seconds);
//         }, 1000);
//     }
// }

window.alert(
    "Welcome to FireFighter, the game that combines the rush or fighting fires with trivia! To start, select a character that you see on screen now. Once you have selected a character, use WASD to walk towards any houses on fire."
);
window.alert(
    "Once you walk towards a house that is on fire you will be prompted to answer a question via the top of your screen. Please use capital letters when neccesary and as fast as possible! Time limit will be 2 minutes and your score will be recoreded!"
);
let mainDiv = document.getElementById("main");
let fighter = null;
let playableArea = document.getElementById("playable_area");
var direction = null;
var x = 480;
var y = 2000;
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
const answers = [
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
let fires = [
    document.getElementById("fire1"),
    document.getElementById("fire2"),
    document.getElementById("fire3"),
    document.getElementById("fire4"),
    document.getElementById("fire5"),
    document.getElementById("fire6"),
];
//https://github.com/NickDespo05/JS-Web-Game-Part-7.git
//https://www.youtube.com/watch?v=VBVOXTgXX2U
