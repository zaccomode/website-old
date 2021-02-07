document.addEventListener('DOMContentLoaded', function() {
    
    // PROJECTS SUBNAV
    
    // Project 1
    var project1 = document.getElementById("project-1");
    var project1Img = document.getElementById("project-1-img");
    var project1Title = document.getElementById("project-1-title");
    var project1Desc = document.getElementById("project-1-desc");
    
    project1.href = "../projects/gravity.html";
    project1Img.src = "../content/images/gravity/gravity-thumbnail.png";
    project1Title.innerHTML = "Gravity";
    project1Desc.innerHTML = "I spent two years working on a mobile game and passion project - here’s how.";
    
    // Project 2
    var project2 = document.getElementById("project-2");
    var project2Img = document.getElementById("project-2-img");
    var project2Title = document.getElementById("project-2-title");
    var project2Desc = document.getElementById("project-2-desc");
    
    project2.href = "../projects/morgann.html";
    project2Img.src = "../content/images/morgann-avatar.png";
    project2Title.innerHTML = "Morgann";
    project2Desc.innerHTML = "I designed a bot to ruthlessly roast my friends - and so can you.";
    
    // Project 3
    var project3 = document.getElementById("project-3");
    var project3Img = document.getElementById("project-3-img");
    var project3Title = document.getElementById("project-3-title");
    var project3Desc = document.getElementById("project-3-desc");
    
    project3.href = "../projects/adrodex.html";
    project3Img.src = "../content/images/adrodex.png";
    project3Title.innerHTML = "Adrodex";
    project3Desc.innerHTML = "I dove deep into full stack development to make a site to sell my artwork.";

    
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
    news1Img.src = "../content/images/2021-image.png";
    news1Title.innerHTML = "Moving Into 2021";
    news1Desc.innerHTML = "Wrapping up this  year and beginning the next with some news about my projects.";
    
    // News 2
    var news2 = document.getElementById("news-2");
    var news2Img = document.getElementById("news-2-img");
    var news2Title = document.getElementById("news-2-title");
    var news2Desc = document.getElementById("news-2-desc");
    
    news2.href = "../news/adrodex-release.html";
    news2Img.src = "../content/images/adrodex.png";
    news2Title.innerHTML = "Entering E-Commerce";
    news2Desc.innerHTML = "An online marketplace for high-quality, handmade digital design and artwork.";
    
    // News 3
    var news3 = document.getElementById("news-3");
    
    news3.style.display = "none";
    
    // News 4
    var news4 = document.getElementById("news-4");
    
    news4.style.display = "none";
    
    
    
}, false);