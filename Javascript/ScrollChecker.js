window.addEventListener('scroll', handleScrollBottom);
const maintenancePic = document.querySelector('.Maintenance-pic');
const repairPic = document.querySelector('.Repair-pic');
const installPic = document.querySelector('.Install-pic');
const replacePic = document.querySelector('.Replace-pic');
const maintenanceText = document.querySelector('.Maintenance-text');
const repairText = document.querySelector('.Repair-text');
const installText = document.querySelector('.Install-text');
const replaceText = document.querySelector('.Replace-text');
const ownerStoryBox = document.querySelector(".Owner-story-box")
const ownerPic = document.querySelector(".Owner-pic")
const ownerText = document.querySelector(".Owner-text")

function handleScrollBottom() {
    const windowHeight = window.innerHeight;

    if (maintenancePic.getBoundingClientRect().top <= windowHeight - 300) {
        maintenancePic.classList.add("Pic-new");
        maintenanceText.classList.add("Text-new");
    } 
    if (repairPic.getBoundingClientRect().top <= windowHeight - 300) {
        repairPic.classList.add("Pic-new");
        repairText.classList.add("Text-new");
    } 
    if (installPic.getBoundingClientRect().top <= windowHeight - 300) {
        installPic.classList.add("Pic-new");
        installText.classList.add("Text-new");
    } 
    if (replacePic.getBoundingClientRect().top <= windowHeight - 300) {
        replacePic.classList.add("Pic-new");
        replaceText.classList.add("Text-new");
    } 

    if (ownerStoryBox.getBoundingClientRect().top <= windowHeight - 300) {
        ownerStoryBox.classList.add("Owner-story-box-new");
        ownerPic.classList.add("Owner-pic-new");
        ownerText.classList.add("Owner-text-new")
    } 
    
}