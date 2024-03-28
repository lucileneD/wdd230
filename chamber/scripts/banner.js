const bannerElement = document.querySelector('#banner');
const bannerPara = document.querySelector('#banner-text');
const bannerX = document.querySelector('#banner-close');

const dt = new Date();
let day = dt.getDay();

if (day > 0 && day <= 3) {
    console.log(day);
    insertBanner();
    bannerX.addEventListener('click', function() {
        console.log('running function 2');
        bannerElement.classList.add('closed');
        bannerElement.classList.remove('show-banner');
    });
}

function insertBanner() {
    console.log('running function 1');
    bannerPara.innerHTML = 'Please join us for a meet-up this Wednesday at 7:00 p.m. RSVP to Taylor@Hanson.com';
    bannerX.innerHTML = '×';
    bannerElement.classList.add('show-banner');
    bannerElement.classList.remove('closed');
}