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
    if (x >= -120 && x <= -200 && y >= 600 && y <= 690) {
        nearHouse = true;
        houseNumber = 6;
    } else if (x <= -580 && x >= -650 && y >= 620 && y <= 670) {
        nearhouse = true;
        houseNumber = 3;
    } else if (x >= -500 && x <= -450 && y >= 560 && y <= 610) {
        nearHouse = true;
        houseNumber = 1;
    } else if (x >= -510 && x <= -460 && y >= 800 && y <= 850) {
        nearhouse = true;
        houseNumber = 2;
    } else if (x >= -110 && x <= -160 && y >= 530 && y <= 580) {
        houseNumber = 4;
        nearHouse = true;
    } else if (x >= -150 && x <= -100 && y >= 790 && y <= 740) {
        houseNumber = 6;
        nearHouse = true;
    } else {
        houseNumber = null;
        nearHouse = false;
    }
}
function waterSpray(element) {
    document.addEventListener("keydown", function (e) {
        if (e.key == "f") {
            window.prompt();
        }
    });
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
}

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

const lisa_selection = createSelection("lisa");
const john_selection = createSelection("john");
const phil_selection = createSelection("phil");
const jen_selection = createSelection("jen");
//https://github.com/NickDespo05/JS-Web-Game-Part-7.git
//https://www.youtube.com/watch?v=VBVOXTgXX2U

//thirdHouse coords: (-580,620)
//firstHouse coords: (-500, 560)
//secondHouse coords (-510, 800)
//fifthHouse coords: (-150, 790)
//fourthHouse coords (-110, 530)
//sixthHouse coords (-120, 1050)
