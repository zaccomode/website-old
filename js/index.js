function openNav() {
    document.getElementById("fullPageNav").style.width = "100%";
    document.getElementById("navContent").style.display = "flex";
}

function closeNav() {
    document.getElementById("fullPageNav").style.width = "0%";
    document.getElementById("navContent").style.display = "none";
}

function projectsDropdown() {
    document.getElementById("projectsDropdownButton").classList.toggle("active");
    document.getElementById("projectsSubnav").classList.toggle("active");
    
    document.getElementById("newsDropdownButton").classList.remove("active");
    document.getElementById("newsSubnav").classList.remove("active");
}

function newsDropdown() {
    document.getElementById("newsDropdownButton").classList.toggle("active");
    document.getElementById("newsSubnav").classList.toggle("active");
    
    document.getElementById("projectsDropdownButton").classList.remove("active");
    document.getElementById("projectsSubnav").classList.remove("active");
}