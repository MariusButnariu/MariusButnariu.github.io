console.info("my first js file")

var name = "Marius";
var employed = true;

console.warn("employed");
console.warn(employed);

console.info("Name:");
console.info(name);

name = "Butnariu"

console.info("Name:");
console.info(name);

function getWelcomeMsg() {
    return "Wellcome tu my site!";
}

function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 18) {
        return "green"
    }
    return "red"
}
var wellcome = getWelcomeMsg();
console.info(wellcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);

var color = getColor();
summaryElement.style.color = color;

// first example
function hideHomePage() {
    var el = document.getElementById('home-page');
    el.style.display = 'none';
}
function showSkillsPage() {
    document.getElementById('skills-page').style.display = 'block';
}
function clickOnSkills() {
    hideHomePage();
    showSkillsPage();
    hidePage('home-page');
    hidePage('languages-page');
    hidePage('about-page');
    showPage('skills-page');
    
}
// first example -end 

function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display ='none';
} 
function showPage(page) {
    document.getElementById(page).style.display = 'block';
}