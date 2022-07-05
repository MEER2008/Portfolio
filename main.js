const About = document.getElementById("AboutWindow");
const topbar = document.getElementById("topbar");
const aboutbtn = document.getElementById("aboutbtn");
const background = document.getElementById("background");
const projects = document.getElementById("ProjectWindow");
const skills = document.getElementById("SkillsWindow");
const Contacts = document.getElementById("ContactsWindow");
const shortcuts = document.getElementById("shortcuts");
const Quoteboard = document.getElementById("Quoteboard");

function OpenAbout() {
    About.style.display = "block";
    topbar.style.display = "none";
    projects.style.display = "none";
    skills.style.display = "none";
    Contacts.style.display = "none";
    Quoteboard.style.display = "none";
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
    Contacts.style.display = "none";
    Quoteboard.style.display = "none";
    window. scrollTo(0,0);
}

function openSkills() {
    skills.style.display = "block";
    topbar.style.display = "none";
    About.style.display = "none";
    projects.style.display = "none";
    Contacts.style.display = "none";
    Quoteboard.style.display = "none";
    window. scrollTo(0,0);
}

function openContacts() {
    Contacts.style.display = "block";
    topbar.style.display = "none";
    About.style.display = "none";
    projects.style.display = "none";
    skills.style.display = "none";
    Quoteboard.style.display = "none";
    window. scrollTo(0,0);
}

