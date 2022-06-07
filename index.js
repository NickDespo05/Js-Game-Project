let mainDiv = document.getElementById("main");
let fighter = null;
let playableArea = document.getElementById("playable_area");
let character1 = document.getElementById("john");
function placeCharacter(character) {
    playableArea.append(document.getElementById(character));
}

let johnSelected = document.querySelector("#john");
let lisaSelected = document.querySelector("#lisa");
let philSelected = document.querySelector("#phil");
let jenSelected = document.querySelector("#jen");

function createSelection(character) {
    character.addEventListener("click", function (character) {
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
            fighter = "john";
            window.location.href = "gamescreen.html";
            //prettier-ignore
            document.playableArea.appendChild("Pixel-Art JS-Game/John/John-Nuetral.png");
            character1.style.width("10vw");
            character1.style.height("10vh");
            character1.style.zIndex("1");
        } else if ((character.id = "lisa")) {
            fighter = "lisa";
            window.location.href = "gamescreen.html";
        } else {
            mainDiv.innerHTML("Error");
        }

        return fighter;
    });
}
const lisa_selection = createSelection(lisaSelected);

const john_selection = createSelection(johnSelected);
