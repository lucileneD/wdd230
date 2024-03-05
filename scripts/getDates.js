//Last modified

document.addEventListener("DOMContentLoaded", function () {
    // Get the last modified timestamp
    var lastModified = document.lastModified;

    // Update the last modified span element with the timestamp
    var lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }
});

//hamburger menu
function toggleNav() {
    var navList = document.querySelector('.nav-list');
    navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'block' : 'none';
}

//Dark mode

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
