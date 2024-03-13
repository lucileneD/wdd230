/**********************************
*Lazy Loading for the Discover page*
**********************************/
document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(function (img) {
        img.addEventListener('load', function () {
            img.classList.add('loaded');
        });
    });
});


/**********************************
*number of visits the Discover page*
**********************************/

// get the date right now in ms
const theDateToday = new Date();
const currDateInMs = Date.now();
let lastVisit = 0;
let msSinceVisit = 0;

// calculate ms since last visit
if (localStorage.getItem('lastVisitDate') == null) {
    msSinceVisit = 0;
} else {
    lastVisit = JSON.parse(localStorage.getItem('lastVisitDate'));
    msSinceVisit = currDateInMs - lastVisit;
}

// display one of three possible messages based on how many times they have visited
let daysOfVisit = document.querySelector('.daysOfVisit');

if (msSinceVisit < 600) {
    daysOfVisit.textContent = `Welcome! Let us know if you have any questions.`;
} else if (msSinceVisit < (24 * 3600000)) {
    daysOfVisit.textContent = `Back so soon! Awesome!`;
} else {
    // calculate days since last visit
    let daysSince = Math.round(msSinceVisit / 60 / 60 / 24);

    if (daysSince === 1) {
        daysOfVisit.textContent = `You last visited 1 day ago.`;
    } else if (daysSince > 1) {
        daysOfVisit.textContent = `You last visited ${daysSince} days ago.`;
    } else {
        daysOfVisit.textContent = `This is your first visit. Welcome!`;
    }
}

// update the last visit date in local storage
localStorage.setItem('lastVisitDate', JSON.stringify(currDateInMs));
