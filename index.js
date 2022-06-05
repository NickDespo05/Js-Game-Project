let mainDiv = document.getElementById("main");
let fighter = null;
function createSelection(character) {
    const selectedCharacter = document.getElementById(character);
    selectedCharacter.addEventListener("click", function () {
        var characterSelected = selectedCharacter;
        if ((characterSelected = "lisa")) {
            console.log(selectedCharacter);
        } else if ((characterSelected = "john")) {
            console.log(selectedCharacter);
        } else {
            console.log("else");
        }

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
        if ((selectedCharacter.id = "john")) {
            fighter = "john";
        } else if ((selectedCharacter.id = "lisa")) {
            fighter = "lisa";
        } else {
            mainDiv.innerHTML("Error");
        }

        return fighter;
    });
}
const lisa_selection = createSelection("lisa");

const john_selection = createSelection("john");
