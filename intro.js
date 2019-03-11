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
    el.style.display ='none';
} 
function showPage(page) {
    document.getElementById(page).style.display = 'block';
}