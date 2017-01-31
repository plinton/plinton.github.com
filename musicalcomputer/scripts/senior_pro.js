function changeTab(elem) {
    var ul = document.getElementById("nav");
    var oldElem = ul.getAttribute("vis");
    var shownTab = document.getElementById(oldElem);
    var tab = document.getElementById(elem);
    tab.setAttribute("class", "show-tab");
    if (shownTab != tab) { 
        shownTab.setAttribute("class", "hide-tab"); 
    }
    ul.setAttribute("vis", elem);
    ul.children[parseInt(oldElem.substring(4))].setAttribute("class", "unselected");
    ul.children[parseInt(elem.substring(4))].setAttribute("class", "selected");
}
