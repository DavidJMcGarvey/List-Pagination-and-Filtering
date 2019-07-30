/******************************************
Full Stack JavaScript Techdegree Project 2
-----------------------------------------
##    List Pagination and Filtering    ##
-----------------------------------------
******************************************/

// Global variables
const listItems = document.querySelectorAll('.student-item');
const messageDiv = document.createElement('div');
const pageItems = 10;
const pageHeader = document.querySelector('.page-header');
const pageDiv = document.querySelector('.page');
const searchDiv = document.createElement('div');
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');
const searchArray = [];

// Remove pagination links so others can replace them
function removePageLinks() {
  // messageDiv.parentNode.removeChild(messageDiv);
  const listDiv = document.querySelectorAll('div.pagination, div.list');
  for (let i = 0; i < listDiv.length; i++) {
    listDiv[i].parentNode.removeChild(listDiv[i]);
  }
}

// Hide all but 10 students between START and END indexes
function showPage(list, page) {
  const indexStart = (page * pageItems) - pageItems;
  const indexEnd = page * pageItems;
  for (let i = 0; i <= list.length - 1 ; i++) {
    if (i >= indexStart && i < indexEnd) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

// Generate, append, and add funcitonality to pagination links
function appendPageLinks(list) {
  const pages = Math.round(Math.ceil(list.length/pageItems));
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  div.className = 'pagination list';
  pageDiv.appendChild(div);
  for (let i = 1; i < pages + 1; i++) {
    const pageLi = document.createElement('li');
    const pageLink = document.createElement('a');
    pageLi.appendChild(pageLink);
    ul.appendChild(pageLi);
    pageLink.textContent = i;
    pageLink.href = '#';
    div.appendChild(ul);
    const current = document.querySelectorAll('a');
    current[0].className = 'active';
    pageLink.addEventListener('click', (e) => {
      showPage(list, i);
      const current = document.querySelectorAll('a');
      for (let i = 0; i < current.length; i++) {
        e.target.className = 'active';
        if (e.target.className === 'active') {
          current[i].className = current[i].className.replace('active', '');
          e.target.className = 'active';
        }
      }
    });
  }
}

// Search functionality, adds class of 'match' to matching students, also handles no results
function searchFunction(input, names) {
  const searchArray = [];
  removePageLinks();
  function noResults() {
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    const pageLi = document.createElement('li');
    const pageLink = document.createElement('a');
    div.className = 'pagination list';
    pageLink.innerHTML = "No search results. Click here to refresh student list.";;
    pageLink.href = 'javascript:window.location.reload(true)';
    pageDiv.appendChild(div);
    div.appendChild(ul);
    ul.appendChild(pageLi);
    pageLi.appendChild(pageLink);
  }
  for (let i = 0; i < names.length; i++) {
    names[i].className = 'student-item cf';
    names[i].style.display = 'none';
    if (input.value.length !== 0 && names[i].textContent.toLowerCase().includes(input.value)) {
      names[i].className = 'student-item cf match';
      searchArray.push(names[i]);
      if (names[i].className !== 'student-item cf match') {
        searchArray.pop(names[i]);
      }
    }
  }
  if (searchArray.length === 0) {
    noResults();
  } else {
    showPage(searchArray, 1);
    appendPageLinks(searchArray);
  }

}

// Classify search components
searchDiv.className = 'student-search';
searchInput.placeholder = 'Search for students...';
searchButton.textContent = 'Search';
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchButton);
pageHeader.appendChild(searchDiv);

// Event listener for search button
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  searchFunction(searchInput, listItems);
});

// On load - function calls
showPage(listItems, 1);
appendPageLinks(listItems);


// Author: David J McGarvey
// Date Created: 2019-07-23
// Date Updated: 2019-07-29
