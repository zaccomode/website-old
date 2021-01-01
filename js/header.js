document.addEventListener('DOMContentLoaded', function() {
    
    // PROJECTS SUBNAV
    
    // Project 1
    var project1 = document.getElementById("project-1");
    var project1Img = document.getElementById("project-1-img");
    var project1Title = document.getElementById("project-1-title");
    var project1Desc = document.getElementById("project-1-desc");
    
    project1.href = "../projects/gravity.html";
    project1Img.src = "../assets/images/gravity/gravity-thumbnail.png";
    project1Title.innerHTML = "Gravity";
    project1Desc.innerHTML = "I spent two years working on a mobile game and passion project - here’s how.";
    
    // Project 2
    var project2 = document.getElementById("project-2");
    var project2Img = document.getElementById("project-2-img");
    var project2Title = document.getElementById("project-2-title");
    var project2Desc = document.getElementById("project-2-desc");
    
    project2.href = "../projects/morgann.html";
    project2Img.src = "../assets/images/morgann-avatar.png";
    project2Title.innerHTML = "Morgann";
    project2Desc.innerHTML = "I designed a bot to ruthlessly roast my friends - and so can you.";
    
    // Project 3
    var project3 = document.getElementById("project-3");
    
    project3.style.display = "none";
    
    // Project 4
    var project4 = document.getElementById("project-4");
    
    project4.style.display = "none";
    
    
    
    // NEWS SUBNAV
    
    // News 1
    var news1 = document.getElementById("news-1");
    var news1Img = document.getElementById("news-1-img");
    var news1Title = document.getElementById("news-1-title");
    var news1Desc = document.getElementById("news-1-desc");
    
    news1.href = "../news/2021-updates.html";
    news1Img.src = "../assets/images/2021-image.png";
    news1Title.innerHTML = "Moving Into 2021";
    news1Desc.innerHTML = "Wrapping up this  year and beginning the next with some news about my projects.";
    
    // News 2
    var news2 = document.getElementById("news-2");
    
    news2.style.display = "none";
    
    // News 3
    var news3 = document.getElementById("news-3");
    
    news3.style.display = "none";
    
    // News 4
    var news4 = document.getElementById("news-4");
    
    news4.style.display = "none";
    
    
    
}, false);