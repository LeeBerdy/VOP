const maintanence = document.querySelector(".Maintanence")
const textMaintanence = document.querySelector(".text-Maintanence")

const repair = document.querySelector(".Repair")
const textRepair = document.querySelector(".text-Repair")

const installation = document.querySelector(".Installation")
const textInstallation = document.querySelector(".text-Installation")

const replacement = document.querySelector(".Replacement")
const textReplacement = document.querySelector(".text-Replacement")


// Function definition (given)

function removeGivenClass() {
    textMaintanence.classList.remove('given');
    textRepair.classList.remove('given');
    textInstallation.classList.remove('given');
    textReplacement.classList.remove('given');
}

function toggleClassGiven(element, textElement) {
    
    if (textElement.classList.contains('given')) {
        textElement.classList.remove('given');
    } else {
        removeGivenClass();
        textElement.classList.add('given'); 
    }
}

// Function application (given)

maintanence.addEventListener('click', function (event) {
    toggleClassGiven(maintanence, textMaintanence);
    event.stopPropagation(); 
});

repair.addEventListener('click', function (event) {
    toggleClassGiven(repair, textRepair);
    event.stopPropagation();
});

installation.addEventListener('click', function (event) {
    toggleClassGiven(installation, textInstallation);
    event.stopPropagation();
});

replacement.addEventListener('click', function (event) {
    toggleClassGiven(replacement, textReplacement);
    event.stopPropagation();
});


document.addEventListener('click', function () {
    removeGivenClass();
});


// Function definition (hover)

function removeHoverClass() {
    maintanence.classList.remove('hover');
    repair.classList.remove('hover');
    installation.classList.remove('hover');
    replacement.classList.remove('hover');
}

function toggleClassHover(element, textElement) {
    
    if (textElement.classList.contains('hover')) {
        textElement.classList.remove('hover');
    } else {
        removeHoverClass();
        textElement.classList.add('hover'); 
    }
}

// Function application (hover)

maintanence.addEventListener('click', function (event) {
    toggleClassHover(maintanence, maintanence);
    event.stopPropagation(); 
});

repair.addEventListener('click', function (event) {
    toggleClassHover(repair, repair);
    event.stopPropagation();
});

installation.addEventListener('click', function (event) {
    toggleClassHover(installation, installation);
    event.stopPropagation();
});

replacement.addEventListener('click', function (event) {
    toggleClassHover(replacement, replacement);
    event.stopPropagation();
});


document.addEventListener('click', function () {
    removeHoverClass();
});
