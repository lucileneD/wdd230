// display the current date to the page
const options = {
    year: "numeric"
};
const today = document.querySelector('#date').innerHTML = new Date().toLocaleDateString("en-US", options);


// display the date of last modification to the page
document.querySelector('#modified').innerHTML = `${document.lastModified}`;

// Add a script to mark images as loaded
document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(function (img) {
        img.addEventListener('load', function () {
            img.classList.add('loaded');
        });
    });
});