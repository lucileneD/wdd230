
/**********************************
*Last modified*
**********************************/

document.addEventListener("DOMContentLoaded", function () {
    // Get the last modified timestamp
    var lastModified = document.lastModified;

    // Update the last modified span element with the timestamp
    var lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }
});


/**********************************
* Dark Mode *
**********************************/

const darkModeButton = document.querySelector("#dark-mode-btn");
const body = document.body;

darkModeButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        darkModeButton.textContent = "⚙️ Dark Mode";
    } else {
        body.classList.add("dark-mode");
        darkModeButton.textContent = "☀️ Light Mode";
    }
});




/**********************************
*Side Bar*
**********************************/
const sidebar = document.querySelector('.sidebar');

function showSidebar() {
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    sidebar.style.display = 'none';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('menu-button')) {
            showSidebar();
        } else if (activeElement.classList.contains('sidebar') || activeElement.parentElement.classList.contains('sidebar')) {
            hideSidebar();
        }
    }
});

/**********************************
*visit counter*
**********************************/

// get the date right now in ms
const currDateInMs = Date.now();
let lastVisit = 0;
let msSinceVisit = 0;

// retrieve visit count from localStorage
let numOfVisits = Number(window.localStorage.getItem('visits')) || 0;

// calculate ms since last visit
if (localStorage.getItem('lastVisitDate') !== null) {
    lastVisit = JSON.parse(localStorage.getItem('lastVisitDate'));
    msSinceVisit = currDateInMs - lastVisit;
}

// update visit count
numOfVisits++;

// store the new number of visits value and the current visit date
localStorage.setItem("visits", numOfVisits);
localStorage.setItem("lastVisitDate", JSON.stringify(currDateInMs));

// display visit count
let visitCounter = document.querySelector('#pageVisitCounter');
visitCounter.textContent = `Visit Count: ${numOfVisits}`;
