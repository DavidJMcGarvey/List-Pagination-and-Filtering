/******************************************
Full Stack JavaScript Techdegree Project 2
-----------------------------------------
##    List Pagination and Filtering    ##
-----------------------------------------
******************************************/

// Global variables
const listItems = document.querySelectorAll('.student-item');
const pageItems = 10;

// Hides all but 10 students between START and END indexes
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
  const pageDiv = document.querySelector('.page');
  const pages = Math.round(Math.ceil(list.length/pageItems));
  const div = document.createElement('div');
  const ul = document.createElement('ul');
  div.className = 'pagination';
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

// Generate search component
const pageHeader = document.querySelector('.page-header');
const searchDiv = document.createElement('div');
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');
searchDiv.className = 'student-search';
searchInput.placeholder = 'Search for students...';
searchButton.textContent = 'Search';
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchButton);
pageHeader.appendChild(searchDiv);

// Function calls
showPage(listItems, 1);
appendPageLinks(listItems);
