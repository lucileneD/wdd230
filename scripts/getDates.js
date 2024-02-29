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
