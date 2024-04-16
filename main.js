// Header
const titleInput = document.getElementById("title");
const editInput = document.getElementById("editInput");

// Identity
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const ageInput = document.getElementById("age");
const raceInput = document.getElementById("race");
const traitsInput = document.getElementById("traits");
const homeworldInput = document.getElementById("homeworld");
const radsInput = document.getElementById("rads");

// Characteristics
const modifierStrengthInput = document.getElementById("ModifierStrength");
const modifierDexterityInput = document.getElementById("ModifierDexterity");
const modifierConstitutionInput = document.getElementById("ModifierConstitution");
const modifierIntellectInput = document.getElementById("ModifierIntellect");
const modifierEducationInput = document.getElementById("ModifierEducation");
const modifierSocialInput = document.getElementById("ModifierSocial");

const initialStrengthInput = document.getElementById("InitialStrength");
const initialDexterityInput = document.getElementById("InitialDexterity");
const initialConstitutionInput = document.getElementById("InitialConstitution");
const initialIntellectInput = document.getElementById("InitialIntellect");
const initialEducationInput = document.getElementById("InitialEducation");
const initialSocialInput = document.getElementById("InitialSocial");

const currentStrengthInput = document.getElementById("CurrentStrength");
const currentDexterityInput = document.getElementById("CurrentDexterity");
const currentConstitutionInput = document.getElementById("CurrentConstitution");
const currentIntellectInput = document.getElementById("CurrentIntellect");
const currentEducationInput = document.getElementById("CurrentEducation");
const currentSocialInput = document.getElementById("CurrentSocial");

const adminInput = document.getElementById("Admin");
const advocateInput = document.getElementById("Advocate");

const xpAdminInput = document.getElementById("xpAdmin");
const xpAdvocateInput = document.getElementById("xpAdvocate");


let editionActivated = false

class Character {
    constructor() {
        // Identity
        this.name = "LAWSON"
        this.surname = "Angus"
        this.age = "30 years"
        this.race = "Humaniti Vilany"
        this.traits = "Xenophob"
        this.homeworld = "Maltherton/Salbari"
        this.rads = "0"

        // Characteristics
        this.initialStrength = 2
        this.initialDexterity = 9
        this.initialConstitution = 6
        this.initialIntellect = 8
        this.initialEducation = 13
        this.initialSocial = 4

        this.strength = 2
        this.dexterity = 9
        this.constitution = 6
        this.intellect = 8
        this.education = 13
        this.social = 4

        this.admin = 0
        this.advocate = 1

        this.xpAdmin = 3
        this.xpAdvocate = 5
    }
}
var character = new Character()


function displayTitle(character) {
    titleInput.innerHTML = character.name + " " + character.surname;
}

function displayIdentity(character) {
    nameInput.value = character.name
    surnameInput.value = character.surname
    ageInput.value = character.age
    raceInput.value = character.race
    traitsInput.value = character.traits
    homeworldInput.value = character.homeworld
    radsInput.value = character.rads
}

function calcModifier(value) {
    var modifier = 0
    if (value < 1)
        modifier = -3
    else if (value < 3)
        modifier = -2
    else if (value < 6)
        modifier = -1
    else if (value < 9)
        modifier = 0
    else if (value < 12)
        modifier = 1
    else if (value < 15)
        modifier = 2
    else
        modifier = 3

    return modifier
}

function makeModifierString(value) {
    var modifier = calcModifier(value)
    var strModifier = modifier.toString()
    if (modifier >= 0)
        strModifier = "+" + strModifier
    return strModifier
}

function displayCharacteristics(character) {

    modifierStrengthInput.value = makeModifierString(character.strength)
    modifierDexterityInput.value = makeModifierString(character.dexterity)
    modifierConstitutionInput.value = makeModifierString(character.constitution)
    modifierIntellectInput.value = makeModifierString(character.intellect)
    modifierEducationInput.value = makeModifierString(character.education)
    modifierSocialInput.value = makeModifierString(character.social)

    initialStrengthInput.value = character.initialStrength.toString()
    initialDexterityInput.value = character.initialDexterity.toString()
    initialConstitutionInput.value = character.initialConstitution.toString()
    initialIntellectInput.value = character.initialIntellect.toString()
    initialEducationInput.value = character.initialEducation.toString()
    initialSocialInput.value = character.initialSocial.toString()

    currentStrengthInput.value = character.strength.toString()
    currentDexterityInput.value = character.dexterity.toString()
    currentConstitutionInput.value = character.constitution.toString()
    currentIntellectInput.value = character.intellect.toString()
    currentEducationInput.value = character.education.toString()
    currentSocialInput.value = character.social.toString()
}


function displaySkills(character) {
    adminInput.value = character.admin.toString()
    advocateInput.value = character.advocate.toString()

    xpAdminInput.value = character.xpAdmin.toString()
    xpAdvocateInput.value = character.xpAdvocate.toString()
}


displayTitle(character);
displayIdentity(character);
displayCharacteristics(character);
displaySkills(character);

function setInitialCharacteristicsEditable() {
    initialStrengthInput.removeAttribute('readonly')
    initialStrengthInput.removeAttribute('readonly')
    initialDexterityInput.removeAttribute('readonly')
    initialConstitutionInput.removeAttribute('readonly')
    initialIntellectInput.removeAttribute('readonly')
    initialEducationInput.removeAttribute('readonly')
    initialSocialInput.removeAttribute('readonly') 
}

function setCurrentCharacteristicsEditable() {
    currentStrengthInput.removeAttribute('readonly')
    currentStrengthInput.removeAttribute('readonly')
    currentDexterityInput.removeAttribute('readonly')
    currentConstitutionInput.removeAttribute('readonly')
    currentIntellectInput.removeAttribute('readonly')
    currentEducationInput.removeAttribute('readonly')
    currentSocialInput.removeAttribute('readonly') 
}

function setInitialCharacteristicsReadOnly() {
    initialStrengthInput.setAttribute('readonly', true)
    initialStrengthInput.setAttribute('readonly', true)
    initialDexterityInput.setAttribute('readonly', true)
    initialConstitutionInput.setAttribute('readonly', true)
    initialIntellectInput.setAttribute('readonly', true)
    initialEducationInput.setAttribute('readonly', true)
    initialSocialInput.setAttribute('readonly', true) 
}

function setCurrentCharacteristicsReadOnly() {
    currentStrengthInput.setAttribute('readonly', true)
    currentStrengthInput.setAttribute('readonly', true)
    currentDexterityInput.setAttribute('readonly', true)
    currentConstitutionInput.setAttribute('readonly', true)
    currentIntellectInput.setAttribute('readonly', true)
    currentEducationInput.setAttribute('readonly', true)
    currentSocialInput.setAttribute('readonly', true) 
}

function setSkillsEditable() {
    adminInput.removeAttribute('readonly')
    advocateInput.removeAttribute('readonly')
}

function setXpSkillsEditable() {
    xpAdminInput.removeAttribute('readonly')
    xpAdvocateInput.removeAttribute('readonly')
}

function setSkillsReadOnly() {
    adminInput.setAttribute('readonly', true)
    advocateInput.setAttribute('readonly', true)
}

function setXpSkillsReadOnly() {
    xpAdminInput.setAttribute('readonly', true)
    xpAdvocateInput.setAttribute('readonly', true)
}

setInitialCharacteristicsReadOnly();
setCurrentCharacteristicsEditable();
setXpSkillsEditable();
setSkillsReadOnly();

editInput.checked = false

editInput.addEventListener("change", function () {
    if (this.checked) {
        console.log("You are now in edition mode");
        editionActivated = true
        setInitialCharacteristicsEditable()
        setCurrentCharacteristicsReadOnly()
        setSkillsEditable()
        setXpSkillsReadOnly()

    } else {
        console.log("You are now in running mode");
        editionActivated = false
        setInitialCharacteristicsReadOnly()
        setCurrentCharacteristicsEditable()
        setXpSkillsEditable()
        setSkillsReadOnly()
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

const skillList = document.querySelectorAll("button.skillminusplus");
for (var i = 0; i < skillList.length; i++) {
    skillList[i].addEventListener("click", changeSkill);
}

function changeCharacteristic(event) {
    var fieldname = this.dataset.field
    var type = this.dataset.type

    if (editionActivated) {
        var initialFieldname = "initial" + fieldname.charAt(0).toUpperCase() + fieldname.slice(1)
        var initialValue = character[initialFieldname]
        if (type == 'minus') {
            character[initialFieldname] = initialValue - 1
            character[fieldname] = initialValue - 1
        } else if (type == 'plus') {
            character[initialFieldname] = initialValue + 1
            character[fieldname] = initialValue + 1
        }
    } else {
        var currentValue = character[fieldname]
        if (type == 'minus') {
            character[fieldname] = currentValue - 1
        } else if (type == 'plus') {
            character[fieldname] = currentValue + 1
        }
    }
    displayCharacteristics(character)
}

function changeSkill(event) {
    var fieldname = this.dataset.field
    var type = this.dataset.type

    if (editionActivated) {
        var currentValue = character[fieldname]
        if (type == 'minus') {
            character[fieldname] = currentValue - 1
        } else if (type == 'plus') {
            character[fieldname] = currentValue + 1
        }
    } else {
        var xpFieldname = "xp" + fieldname.charAt(0).toUpperCase() + fieldname.slice(1)
        var currentValue = character[xpFieldname]
        if (type == 'minus') {
            character[xpFieldname] = currentValue - 1
        } else if (type == 'plus') {
            character[xpFieldname] = currentValue + 1
        }
    }
    displaySkills(character)
}