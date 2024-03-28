/*********************************************************************
* Read 'members.json' file and place qualified members into an array *
*********************************************************************/
const spotlighturl = 'data/members.json'
const membersList = [];

async function getLinkData() {
    const response = await fetch(spotlighturl);
    const data = await response.json();
	buildArray(data.members); 
}

const buildArray = (members) => {
    members.forEach((member) => {
        if (member.level == "Gold" || member.level == "Silver") {
            membersList.push(member);
        }
    });
    buildRandomList();
}
getLinkData();

/************************************************************************************
* Choose three members from array *
************************************************************************************/
const card = document.querySelector('#cards');

function buildRandomList() {
    for (i=0; i<3; i++) { // choose three cards from array
        let indexNumber = Math.floor(Math.random()*membersList.length); // random select an array index
        let currentMember = membersList[indexNumber]; // get value at index
        membersList.splice(indexNumber, 1); // remove just selected item from array to prevent duplicates
        let newCard = document.createElement('article');
        newCard.setAttribute('class', 'member');
        newCard.innerHTML = `<img src="${currentMember.pic}" alt="${currentMember.alt}"><p>${currentMember.slug}<br><a href="${currentMember.web}" target="_blank">${currentMember.name}</a></p>`;
        card.appendChild(newCard);
    }
}
