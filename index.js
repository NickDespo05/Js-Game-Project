let mainDiv = document.getElementById("main");
let fighter = null;
let playableArea = document.getElementById("playable_area");

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
    let selectedCharacter = document.getElementById("john");
    console.log(selectedCharacter);
    console.log(character);
    selectedCharacter.addEventListener("click", function (character) {
        // var characterSelected = selectedCharacter;
        // if ((characterSelected = "lisa")) {
        //     console.log(selectedCharacter);
        // } else if ((characterSelected = "john")) {
        //     console.log(selectedCharacter);
        // } else {
        //     console.log("else");
        // }

        //  switch (characterSelected) {
        //      case "lisa":
        //          console.log("lisa");
        //          return characterSelected;
        //      case "john":
        //          console.log("john");
        //          return characterSelected;
        //     default:
        //        break;
        //  }
        if ((character.id = "john")) {
            placeCharacter("john");
            selectionDisappear();
        } else if ((character.id = "lisa")) {
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

johnSelected.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if (key.keyCode == "87") {
        movingThing.style.bottom += "10px";
        console.log("w pressed");
    }
}

//https://www.youtube.com/watch?v=VBVOXTgXX2U

const lisa_selection = createSelection("lisa");

const john_selection = createSelection("john");
