const About = document.getElementById("AboutWindow");
const topbar = document.getElementById("topbar");
const aboutbtn = document.getElementById("aboutbtn");

aboutbtn.addEventListener("click", function() {
    About.style.display = "block";
    topbar.style.display = "none";
    });

function closeAbout() {
    About.style.display = "none";
    topbar.style.display = "block";
    window.location.reload();
}

