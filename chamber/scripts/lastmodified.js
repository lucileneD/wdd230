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

/**********************************
*number of visits*
**********************************/


/// 1️⃣ Initialize display element variable
const visitsDisplay = document.getElementById("pageVisitCounter");

// 2️⃣ Get the stored VALUE for the visitCount KEY in localStorage if it exists. If the visitCount KEY is missing, then assign 0 to the visitCount variable.
let visitCount = Number(localStorage.getItem("visitCount")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits.
if (visitCount !== 0) {
  visitsDisplay.textContent = `Page Visits: ${visitCount}`;
} else {
  visitsDisplay.textContent = "Page Visits: 0";
}

// 4️⃣ Increment the number of visits by one.
visitCount++;

// 5️⃣ Store the new visit total into localStorage, key=visitCount
localStorage.setItem("visitCount", visitCount);

// 6️⃣ Add class for additional styling if needed
visitsDisplay.classList.add("counter-value");
