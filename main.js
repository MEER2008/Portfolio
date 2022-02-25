const About = document.getElementById("AboutWindow");
const topbar = document.getElementById("topbar");
const aboutbtn = document.getElementById("aboutbtn");
const background = document.getElementById("background");

aboutbtn.addEventListener("click", function() {
    About.style.display = "block";
    topbar.style.display = "none";
    background.style.backgroundColor = "#0f172a";

    });

function closebtn() {
    window.location.reload();
}

