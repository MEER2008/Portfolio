let age = document.getElementById('age');
let edu = document.getElementById('edu');

// the innertext of the age will be the current year - 2008
age.innerText = new Date().getFullYear() - 2008;

// if the age is between 13-18 then the education will be highschool if it is 19-22 then it will be college and over 22 will be job
if (age.innerText >= 13 && age.innerText <= 18) {
    edu.innerText = 'Highschool';
}
else if (age.innerText >= 19 && age.innerText <= 22) {
    edu.innerText = 'College';
}
else {
    edu.innerText = 'Job';
}


// load the images if it is in the viewport
let images = document.querySelectorAll('img');

// make a function that will check if the image is in the viewport
function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight + 200 || document.documentElement.clientHeight + 200) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// make a function that will load the image if it is in the viewport
function loadImages() {
    images.forEach(image => {
        if (isInViewport(image)) {
            image.src = image.getAttribute('src');
        }
    });
}

// add an event listener to the window that will load the images if it is in the viewport
window.addEventListener('load', loadImages);
window.addEventListener('scroll', loadImages);
window.addEventListener('resize', loadImages);