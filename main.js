const About = document.getElementById("AboutWindow");
const topbar = document.getElementById("topbar");
const aboutbtn = document.getElementById("aboutbtn");
const background = document.getElementById("background");
const projects = document.getElementById("ProjectWindow");
const skills = document.getElementById("SkillsWindow");


function OpenAbout() {
    About.style.display = "block";
    topbar.style.display = "none";
    projects.style.display = "none";
    skills.style.display = "none";
    window. scrollTo(0,0);
}

function closebtn() {
    window.location.reload();
}

function OpenProjects() {
    projects.style.display = "block";
    topbar.style.display = "none";
    About.style.display = "none";
    skills.style.display = "none";
    window. scrollTo(0,0);
}

function openSkills() {
    skills.style.display = "block";
    topbar.style.display = "none";
    About.style.display = "none";
    projects.style.display = "none";
    window. scrollTo(0,0);
}

