//**************Local Sotorage in my Book Of Mormon chapter application *********

const input = document.querySelector('input');
const submit = document.querySelector('button');
const chapList = document.querySelector('#list');

// Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList
let chaptersArray = getChapterList() || [];

// Populate the displayed list of chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Button click event listener
submit.addEventListener('click', function () {
  if (input.value == '') {
    alert('Please enter a book and chapter');
    input.focus();
    return; // exit the function early
  }

  displayList(input.value);
  chaptersArray.push(input.value);
  setChapterList();
  input.value = ''; //clear input field
  input.focus();
});

// Define the displayList function
function displayList(item) {
  const listItem = document.createElement('li');
  const killButton = document.createElement('button');
  listItem.textContent = item;
  killButton.textContent = '❌';
  listItem.append(killButton);// add delete buttun to<li>
  chapList.append(listItem);

  killButton.addEventListener('click', function () {
    listItem.remove();
    deleteChapter(listItem.textContent);
    input.focus();
  });
}

// Define the setChapterList function
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Define the getChapterList function
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Define the deleteChapter function
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

