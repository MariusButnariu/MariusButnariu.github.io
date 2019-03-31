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




function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display = 'none';
}
function showPage(page) {
    document.getElementById(page).style.display = 'block';
}

function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = clickOnMenuItem;
    }
}

function clickOnMenuItem () {
     hideAllPages();
     var pageId = this.getAttribute('data-page');
     showPage(pageId);
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
}


initMenu();

function showSkills() {
    var skills = [
        {name: 'js', endorsements: 20, endorsedBy: 'Andrei I'}, 
        {name: 'html', endorsements: 8}, 
        {name: 'css', endorsements: 12, endorsedBy: 'Vasile I'}, 
        {name: 'nodejs', endorsements: 3}
    ];

    skills.sort(function(a, b){
        return b.endorsements - a.endorsements;
    });
    
    var htmlSkills = skills.map(function(skill, index) {
        var endorsedBy = skill.endorsedBy? ' - ' + endorsedBy : '';
        var endorsements = ` <span class="endorsement">(${skill.endorsements}${endorsedBy})</span>`;
        return '<li>' + skill.name.toUpperCase() + endorsement + '</li>';
    });

    var ul = document.querySelector('#skills-page ul');
    ul.innerHTML = htmlSkills.join('');
}

hideAllPages();
showPage('skills-page');

showSkills();