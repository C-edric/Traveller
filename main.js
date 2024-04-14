
var titleInput = document.getElementById("title");
var editInput = document.getElementById("editInput");

var nameInput = document.getElementById("name");
var surnameInput = document.getElementById("surname");
var ageInput = document.getElementById("age");
var speciesInput = document.getElementById("species");
var traitsInput = document.getElementById("traits");
var homeworldInput = document.getElementById("homeworld");
var radsInput = document.getElementById("rads");

class Character {
    constructor() {
      this.name = "LAWSON";
      this.surname = "Angus";
      this.age = "30 years";
      this.species = "Human"
      this.traits = "Xenophob"
      this.homeworld = "Maltherton/Salbari"
      this.rads = "0"
    }
}
var character = new Character()


function displayTitle(character) {
    titleInput.innerHTML = character.name + " " + character.surname
}

function displayIdentity(character) {
    nameInput.value = character.name
    surnameInput.value = character.surname
    ageInput.value = character.age
    speciesInput.value = character.species
    traitsInput.value = character.traits
    homeworldInput.value = character.homeworld
    radsInput.value = character.rads
}

displayTitle(character);
displayIdentity(character);

editInput.addEventListener("change", function () {
    if(this.checked) {    
        console.log("You are now in edition mode");    
    } else {
        console.log("You are now in running mode");
    }
})

nameInput.addEventListener("change", function () {
    character.name = this.value
    displayTitle(character)
})

surnameInput.addEventListener("change", function () {
    character.surname = this.value
    displayTitle(character)
})

const nodeList = document.querySelectorAll("button.minusplus");
for (var i = 0; i < nodeList.length; i++) {
  nodeList[i].addEventListener("click", changeCharacteristic);
}

function changeCharacteristic(event) {
    var fieldname = this.dataset.field
    var type = this.dataset.type

    var input = document.getElementById(fieldname)
    var currentVal = parseInt(input.value);
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            input.value = currentVal - 1
        } else if(type == 'plus') {
            input.value = currentVal + 1
        }     
    } else {
        input.value = 0;
    }

}

