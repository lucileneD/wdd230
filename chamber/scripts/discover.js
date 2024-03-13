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

let numVisits = document.querySelector('.daysOfVisit');

//Script for displaying the number of days on Discover page

let numOfVisits = Number(window.localStorage.getItem('visits'));
let lastVisit= Number(window.localStorage.getItem('lastVisits'));

const FACTOR = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisit;

let numOfDays = Math.ceil(daysBetween / FACTOR);

localStorage.setItem('lastVisits', Date.now());

if (numOfVisits != 0) {

    numVisits.textContent = 'It\'s been ' + numOfDays + ' day(s) since your last visit.'

} else {
    numVisits.textContent = 'This is your first page visit.'
}

numOfVisits++;
// store the new number of visits value
localStorage.setItem("visits", numOfVisits);

