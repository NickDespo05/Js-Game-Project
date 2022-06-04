const john_selection = document.getElementById("john");
const lisa_selection = document.getElementById("lisa");

function createSelection(character) {
    const selectedCharacter = character;
    //prettier-ignore
    selectedCharacter.addEventListener("click", function (character) {
      var characterSelected = selectedCharacter;
       if (characterSelected = "lisa") {
          console.log(characterSelected);
          return characterSelected;
       }
       
      if (characterSelected = 'john') {
           console.log(characterSelected);
          return characterSelected;
       }
       else {
          console.log('else');
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

    });
}
createSelection(lisa_selection);

createSelection(john_selection);
