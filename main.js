// Header
const titleInput = document.getElementById("title");
const editInput = document.getElementById("editInput");

const nameInput = document.getElementById("name-input");
const surnameInput = document.getElementById("surname-input");

// Identity
const identityLabels = document.getElementsByClassName("identity-label");
const identityInputs = document.getElementsByClassName("identity-input");
const identityUnits = document.getElementsByClassName("identity-unit");

const financeLabels = document.getElementsByClassName("finance-label");
const financeInputs = document.getElementsByClassName("finance-input");
const financeUnits = document.getElementsByClassName("finance-unit");

// Caracteristics
const characteristicLabels = document.getElementsByClassName("characteristic-label");
const characteristicModifiers = document.getElementsByClassName("characteristic-modifier");
const characteristicInitials = document.getElementsByClassName("characteristic-initial");
const characteristicCurrents = document.getElementsByClassName("characteristic-current");
const characteristicMinusPlus = document.getElementsByClassName("characteristic-minus-plus");

// Skills
const skillLabels = document.getElementsByClassName("skill-label");
const skillSublabels = document.getElementsByClassName("skill-sublabel");
const skillModifiers = document.getElementsByClassName("skill-modifier");
const skillLevels = document.getElementsByClassName("skill-level");
const skillXps = document.getElementsByClassName("skill-xp");
const skillMinusPlus = document.getElementsByClassName("skill-minus-plus");

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
        this.strengthInitial = 2
        this.dexterityInitial = 9
        this.constitutionInitial = 6
        this.intellectInitial = 8
        this.educationInitial = 13
        this.socialInitial = 4

        this.strength = 2
        this.dexterity = 9
        this.constitution = 6
        this.intellect = 8
        this.education = 13
        this.social = 4

        // Skills
        this.adminLevel = 0
        this.advocateLevel = 1

        this.adminXp = 3
        this.advocateXp = 5
    }
}
var character = new Character()

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

function addPlusIfPositive(value) {
    var strModifier = value.toString()
    if (value >= 0)
        strModifier = "+" + strModifier
    return strModifier
}

function makeModifierString(value) {
    var modifier = calcModifier(value)
    return addPlusIfPositive(modifier)
}

function displayTitle(character) {
    titleInput.innerHTML = character.name + " " + character.surname;
}

function setReadOnly(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('readonly', true)
    }
}

function setEditable(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].removeAttribute('readonly')
    }
}

function setDisabled(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('disabled', true)
    }
}

function setEnabled(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].removeAttribute('disabled')
    }
}

function displayIdentity(character) {
    for (var i = 0; i < identityInputs.length; i++) {
        var field = identityInputs[i].dataset['field']
        identityInputs[i].value = character[field]
    }
}

function setIdentityReadOnly() {
    setReadOnly(identityInputs)
    setDisabled(identityUnits)
}

function setIdentityEditable() {
    setEditable(identityInputs)
    setEnabled(identityUnits)
}

function setFinanceReadOnly() {
    setReadOnly(financeInputs)
    setDisabled(financeUnits)
}

function setFinanceEditable() {
    setEditable(financeInputs)
    setEnabled(financeUnits)
}

function displayCharacteristics(character) {
    for (var i = 0; i < characteristicInitials.length; i++) {
        var field = characteristicInitials[i].dataset['field']
        characteristicInitials[i].value = character[field]
    }
    for (var i = 0; i < characteristicCurrents.length; i++) {
        var field = characteristicCurrents[i].dataset['field']
        characteristicCurrents[i].value = character[field]
    }
    for (var i = 0; i < characteristicModifiers.length; i++) {
        var field = characteristicModifiers[i].dataset['field']
        characteristicModifiers[i].value = makeModifierString(character[field])
    }
}

function setInitialCharacteristicsReadOnly() {
    setReadOnly(characteristicInitials)
}

function setInitialCharacteristicsEditable() {
    setEditable(characteristicInitials)
}

function setCurrentCharacteristicsReadOnly() {
    setReadOnly(characteristicCurrents)
}

function setCurrentCharacteristicsEditable() {
    setEditable(characteristicCurrents)
}

function displaySkills(character) {
    for (var i = 0; i < skillLevels.length; i++) {
        var field = skillLevels[i].dataset['field']
        skillLevels[i].value = (character[field] == undefined) ? '-' : character[field]
    }
    for (var i = 0; i < skillXps.length; i++) {
        var field = skillXps[i].dataset['field']
        skillXps[i].value = (character[field] == undefined) ? 0 : character[field]
    }
    for (var i = 0; i < skillModifiers.length; i++) {
        var field = skillModifiers[i].dataset['field']
        skillModifiers[i].value = addPlusIfPositive((character[field] == undefined) ? '-3' : character[field])
    }
}

function setSkillLevelsReadOnly() {
    setReadOnly(skillLevels)
}

function setSkillLevelsEditable() {
    setEditable(skillLevels)
}

function setSkillXpsReadOnly() {
    setReadOnly(skillXps)
}

function setSkillXpsEditable() {
    setEditable(skillXps)
}

function setEditionMode() {
    editionActivated = true
    setIdentityEditable()
    setFinanceEditable()
    setInitialCharacteristicsEditable()
    setCurrentCharacteristicsReadOnly()
    setSkillLevelsEditable()
    setSkillXpsReadOnly()
}

function setRunningMode() {
    editionActivated = false
    setIdentityReadOnly()
    setFinanceReadOnly()
    setInitialCharacteristicsReadOnly()
    setCurrentCharacteristicsEditable()
    setSkillLevelsReadOnly()
    setSkillXpsEditable()
}

editInput.addEventListener("change", function () {
    if (this.checked) {
        console.log("You are now in edition mode");
        setEditionMode()
    } else {
        console.log("You are now in running mode");
        setRunningMode()
    }
})

for (var i = 0; i < characteristicMinusPlus.length; i++) {
    characteristicMinusPlus[i].addEventListener("click", changeCharacteristic)
}

function changeCharacteristic(event) {
    var fieldname = this.dataset.field
    var type = this.dataset.type

    if (editionActivated) {
        var initialFieldname = fieldname + "Initial"
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

for (var i = 0; i < skillMinusPlus.length; i++) {
    skillMinusPlus[i].addEventListener("click", changeSkill)
}

function changeSkill(event) {
    var fieldname = this.dataset.field
    var type = this.dataset.type

    if (editionActivated) {
        var levelFieldName = fieldname + "Level"
        var levelValue = character[levelFieldName]
        if (type == 'minus') {
            if ((levelValue == 0) || (levelValue == undefined)) {
                character[levelFieldName] = undefined
            } else {
                character[levelFieldName] = levelValue - 1
            }
        } else if (type == 'plus') {
            if (levelValue == undefined) {
                character[levelFieldName] = 0
            } else {
                character[levelFieldName] = levelValue + 1
            }
        }
    } else {
        var xpFieldName = fieldname + "Xp"
        var xpValue = character[xpFieldName]
        if (type == 'minus') {
            character[xpFieldName] = xpValue - 1
        } else if (type == 'plus') {
            character[xpFieldName] = xpValue + 1
        }
    }
    displaySkills(character)
}

nameInput.addEventListener("change", function () {
    character.name = this.value
    displayTitle(character)
})

surnameInput.addEventListener("change", function () {
    character.surname = this.value
    displayTitle(character)
})

displayTitle(character)
displayIdentity(character)
displayCharacteristics(character)
displaySkills(character)
editInput.checked = false
setRunningMode()
