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
    });
}
//thirdHouse coords: (-580,620)
//firstHouse coords: (-500, 560)
//secondHouse coords (-510, 800)
//fifthHouse coords: (-150, 790)
//fourthHouse coords (-110, 530)
//sixthHouse coords (-120, 1050)

function checkPosition() {
    if (
        x >= 1170 &&
        x <= 2000 &&
        y >= 1940 &&
        y <= 1970 &&
        house6Fire == true
    ) {
        nearHouse = true;
        houseNumber = 6;
        checkFire();
    } else if (
        x >= 680 &&
        x <= 700 &&
        y >= 1470 &&
        y <= 1500 &&
        house3Fire == true
    ) {
        nearHouse = true;
        houseNumber = 3;
        checkFire();
    } else if (
        x >= 730 &&
        x <= 750 &&
        y >= 1470 &&
        y <= 1500 &&
        house1Fire == true
    ) {
        nearHouse = true;
        houseNumber = 1;
        checkFire();
    } else if (
        x >= 800 &&
        x <= 830 &&
        y >= 1650 &&
        y <= 1700 &&
        house2Fire == true
    ) {
        nearHouse = true;
        houseNumber = 2;
        checkFire();
    } else if (
        x >= 1170 &&
        x <= 1200 &&
        y >= 1390 &&
        y <= 1400 &&
        house4Fire == true
    ) {
        houseNumber = 4;
        nearHouse = true;
        checkFire();
    } else if (
        x >= 1170 &&
        x <= 1200 &&
        y >= 1620 &&
        y <= 1650 &&
        house5Fire == true
    ) {
        houseNumber = 5;
        nearHouse = true;
        checkFire();
    } else {
        houseNumber = null;
        nearHouse = false;
    }
}
function questionPlayer() {
    if (nearHouse === true) {
        answer = prompt(questions[i]);
        checkanswer(answer, i);
        nearHouse = false;
    } else {
        nearHouse = false;
    }
    i++;
    console.log(i);
    checkScore();
}

function checkanswer(answer, iteration) {
    if (iteration == 0 && answer == answers[0]) {
        pointCount++;
        score.innerHTML = `${pointCount}`;
        fireDissapear();
    }
    if (iteration == 1 && answer === answers[1]) {
        pointCount++;
        fireDissapear();
        score.innerHTML = `${pointCount}`;
    }
    if (iteration == 2 && answer === answers[2]) {
        pointCount++;
        fireDissapear();
        score.innerHTML = `${pointCount}`;
    }
    if (iteration == 3 && answer === answers[3]) {
        pointCount++;
        fireDissapear();
        score.innerHTML = `${pointCount}`;
    }
    if (iteration == 4 && answer === answers[4]) {
        pointCount++;
        fireDissapear();
        score.innerHTML = `${pointCount}`;
    }
    if (iteration == 5 && answer === answers[5]) {
        pointCount++;
        fireDissapear();

        score.innerHTML = `${pointCount}`;
    }
    if (iteration == 6 && answer === answers[6]) {
        pointCount++;
        fireDissapear();
        score.innerHTML = `${pointCount}`;
    }

    if (answer != answers[iteration]) {
        window.alert(`Incorrect, the correct answer was ${answers[iteration]}`);
        rubble();
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
        }
        if ((character.id = "lisa")) {
            placeCharacter("lisa");
            selectionDisappear();
            currentCharacter = lisaSelected;
            selectedCharacter.style.left = x + "px";
            selectedCharacter.style.bottom = y + "px";
        }
        if ((character.id = "phil")) {
            placeCharacter("phil");
            selectionDisappear();
            currentCharacter = philSelected;
            selectedCharacter.style.left = x + "px";
            selectedCharacter.style.bottom = y + "px";
        }
        if ((character.id = "jen")) {
            placeCharacter("jen");
            selectionDisappear();
            currentCharacter = jenSelected;
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
function fireDissapear() {
    if (houseNumber == 1) {
        fire1.style.opacity = "0";
        house1Fire = false;
    }
    if (houseNumber == 2) {
        fire2.style.opacity = "0";
        house2Fire = false;
    }
    if (houseNumber == 3) {
        fire3.style.opacity = "0";
        house3Fire = false;
    }
    if (houseNumber == 4) {
        fire4.style.opacity = "0";
        house4Fire = false;
    }
    if (houseNumber == 5) {
        fire5.style.opacity = "0";
        house5Fire = false;
    }
    if (houseNumber == 6) {
        fire6.style.opacity = "0";
        house6Fire = false;
    }
}
//prettier-ignore
function rubble() {
    if (houseNumber == 1) {
        fire1.src =
            "FireFight Game Scene and Items/rubble-game.jpg";
        house1Fire = false;
    }
    if (houseNumber == 2) {
        fire2.src =
            "FireFight Game Scene and Items/rubble-game.jpg";
        house2Fire = false;
    }
    if (houseNumber == 3) {
        fire3.src =
            "FireFight Game Scene and Items/rubble-game.jpg";
        house3Fire = false;
    }
    if (houseNumber == 4) {
        fire4.src =
            "FireFight Game Scene and Items/rubble-game.jpg";
        house4Fire = false;
    }
    if (houseNumber == 5) {
        fire5.src =
            "FireFight Game Scene and Items/rubble-game.jpg";
        house5Fire = false;
    }
    if (houseNumber == 6) {
        fire6.src =
            "FireFight Game Scene and Items/rubble-game.jpg";
        house6Fire = false;
    }
}
function checkFire() {
    if (houseNumber == 1 && house1Fire == true && nearHouse == true) {
        questionPlayer();
    }
    if (houseNumber == 2 && house2Fire == true && nearHouse == true) {
        questionPlayer();
    }
    if (houseNumber == 3 && house3Fire == true && nearHouse == true) {
        questionPlayer();
    }
    if (houseNumber == 4 && house4Fire == true && nearHouse == true) {
        questionPlayer();
    }
    if (houseNumber == 5 && house5Fire == true && nearHouse == true) {
        questionPlayer();
    }
    if (houseNumber == 6 && house6Fire == true && nearHouse == true) {
        questionPlayer();
    }
    if (nearHouse == true && house1Fire == false && houseNumber == 1) {
        window.alert(
            "That house has turned to rubble. Go to another one and answer its question"
        );
    }
    if (nearHouse == true && house2Fire == false && houseNumber == 2) {
        window.alert(
            "That house has turned to rubble. Go to another one and answer its question"
        );
    }
    if (nearHouse == true && house3Fire == false && houseNumber == 3) {
        window.alert(
            "That house has turned to rubble. Go to another one and answer its question"
        );
    }
    if (nearHouse == true && house4Fire == false && houseNumber == 4) {
        window.alert(
            "That house has turned to rubble. Go to another one and answer its question"
        );
    }
    if (nearHouse == true && house5Fire == false && houseNumber == 5) {
        window.alert(
            "That house has turned to rubble. Go to another one and answer its question"
        );
    }
    if (nearHouse == true && house6Fire == false && houseNumber == 6) {
        window.alert(
            "That house has turned to rubble. Go to another one and answer its question"
        );
    }
}

function checkScore() {
    if (pointCount > 3 && i == 6) {
        window.alert("You won!");
        console.log("Won");
        doscument.querySelector("h1").innerHTML = "You won";
    } else if (pointCount < 4 && i == 6) {
        window.alert("You lost! :( Refresh to try again!");
        console.log("Lost");
    } else {
        console.log("Error");
    }
    console.log("checked");
    console.log(pointCount);
}

window.alert(
    "Welcome to FireFighter, the game that combines the rush or fighting fires with trivia! To start, select a character that you see on screen now. Once you have selected a character, use WASD to walk towards any houses on fire."
);
window.alert(
    "Once you walk towards a house that is on fire you will be prompted to answer a question via the top of your screen. Please use capital letters when neccesary and as fast as possible! Time limit will be 2 minutes and your score will be recoreded!"
);
window.alert("To win, get at least 4 questions right! Good luck!");
let mainDiv = document.getElementById("main");
let fighter = null;
let playableArea = document.getElementById("playable_area");
var direction = null;
var x = 480;
var y = 2000;
var nearHouse, houseNumber;
var johnSelected = document.querySelector("#john");
var lisaSelected = document.querySelector("#lisa");
var philSelected = document.querySelector("#phil");
var jenSelected = document.querySelector("#jen");
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

var answer;
var i = 0;

var fire1 = document.querySelector("#fire1");
var fire2 = document.querySelector("#fire2");
var fire3 = document.querySelector("#fire3");
var fire4 = document.querySelector("#fire4");
var fire5 = document.querySelector("#fire5");
var fire6 = document.querySelector("#fire6");

let score = document.getElementById("scoreNumber");

let house1Fire = true;
let house2Fire = true;
let house3Fire = true;
let house4Fire = true;
let house5Fire = true;
let house6Fire = true;

//https://github.com/NickDespo05/JS-Web-Game-Part-7.git
//https://www.youtube.com/watch?v=VBVOXTgXX2U
