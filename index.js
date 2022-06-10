let mainDiv = document.getElementById("main");
let fighter = null;
let playableArea = document.getElementById("playable_area");
var direction = null,
    x = 680,
    y = -250;

function placeCharacter(character) {
    playableArea.append(document.getElementById(character));
    document.getElementById(character).style.width = "5vw";
    document.getElementById(character).style.height = "5vw";
    document.getElementById(character).style.position = "relative";
    document.getElementById(character).style.bottom = "680px";
    document.getElementById(character).style.left = "-250px";
    document.getElementById(character).style.zIndex = "99999999";
}

var johnSelected = document.querySelector("#john");
let lisaSelected = document.querySelector("#lisa");
let philSelected = document.querySelector("#phil");
let jenSelected = document.querySelector("#jen");

function createSelection(character) {
    let selectedCharacter = document.getElementById(character);
    console.log(selectedCharacter);
    console.log(character);
    selectedCharacter.addEventListener("click", function (character) {
        if (character.id == "john") {
            placeCharacter("john");
            selectionDisappear();
            selectedCharacter.style.left = x + "px";
            selectedCharacter.style.bottom = y + "px";
        } else if (character.id == "lisa") {
            placeCharacter("lisa");
            selectionDisappear();
            selectedCharacter.style.left = x + "px";
            selectedCharacter.style.bottom = y + "px";
        } else if (character.id == "phil") {
            placeCharacter("phil");
            selectionDisappear();
            selectedCharacter.style.left = x + "px";
            selectedCharacter.style.bottom = y + "px";
        } else if (character.id == "jen") {
            placeCharacter("lisa");
            selectionDisappear();
            selectedCharacter.style.left = x + "px";
            selectedCharacter.style.bottom = y + "px";
        } else {
            mainDiv.innerHTML("Error");
        }

        return fighter;
    });
}
function selectionDisappear() {
    let mainDiv = document.getElementById("mainDiv");
    mainDiv.style.opacity = "0";
}

// johnSelected.addEventListener("keydown", checkKeyPress, false);
// function checkKeyPress(key) {
//     if (key.keyCode == "87") {
//         movingThing.style.bottom += "10px";
//         console.log("w pressed");
//     }
// }

johnSelected.addEventListener("keydown", function (e) {
    if (e.repeat) return;
    if (e.keycode === "87") {
        direction = "north";
        y += 10;
    }
    if (e.keycode === "65") {
        direction = "west";
        x -= 10;
    }
    if (e.keycode === "83") {
        direction = "south";
        y -= 10;
    }
    if (e.keycode === "68") {
        direction = "east";
        x += 10;
    }
});

//https://github.com/NickDespo05/JS-Web-Game-Part-7.git
//https://www.youtube.com/watch?v=VBVOXTgXX2U

const lisa_selection = createSelection("lisa");

const john_selection = createSelection("john");
