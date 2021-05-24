var enterButton = document.getElementsByClassName("enter-btn")[0];
var intro = document.getElementsByClassName("intro")[0];
var main = document.getElementsByClassName("main")[0];
var bannerOptions = document.getElementsByClassName("banner-options")[0];
var techstackbtn = document.getElementById("tech-stack-btn");
var bannerHeading = document.getElementsByClassName("banner-message")[0].getElementsByTagName("h1")[0];
var teckStackMsg1 = document.getElementsByClassName("tc-st1")[0];
var teckStackMsg2 = document.getElementsByClassName("tc-st2")[0];
var skillscube = document.getElementsByClassName("skills")[0];
var backBtn = document.getElementsByClassName("back-btn")[0];
var banner = document.getElementsByClassName("banner")[0];
var contactbtn = document.getElementsByClassName("contact")[0];
var skillssection = document.getElementsByClassName("skills")[0];
var workexsection = document.getElementsByClassName("workex")[0];
var gitsection = document.getElementsByClassName("git")[0];
var allsections = [ skillssection,gitsection, workexsection]
var contactcard = document.getElementsByClassName("contact-card")[0];
var contactflag = false
enterButton.addEventListener("click", function () {
    intro.className += " hidden"
    main.className += "reveal"
    main.className = main.className.replace("hidden", " ")
})

techstackbtn.addEventListener('click', function () {
    bannerHeading.className += " hidden"
    bannerOptions.className += " hidden"
    teckStackMsg1.className = teckStackMsg1.className.replace("hidden", "")
    setTimeout(function () {
        teckStackMsg1.className += " hidden"
        teckStackMsg2.className = teckStackMsg2.className.replace("hidden", "")
        setTimeout(function () {
            banner.className += " hidden"
            skillscube.className += " reveal"
            skillscube.setAttribute("style", "display:flex;")
            backBtn.setAttribute("style", "display: block")
        }, 4000)
    }, 4000)
})

backBtn.addEventListener('click', function () {
    bannerHeading.className = bannerHeading.className.replace("hidden", "")
    bannerOptions.className = bannerOptions.className.replace("hidden", "")
    teckStackMsg2.className += teckStackMsg2.className.indexOf("hidden") == -1 ? "hidden" : ""
    banner.className = banner.className.replace("hidden", "")
    skillscube.className = skillscube.className.replace("hidden", "")
    skillscube.setAttribute("style", "display:none")
    backBtn.setAttribute("style", "display: none")
})

