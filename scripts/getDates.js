
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
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display= 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display= 'none'
}