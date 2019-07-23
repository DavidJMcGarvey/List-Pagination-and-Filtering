/******************************************
Full Stack JavaScript Techdegree Project 2
-----------------------------------------
##    List Pagination and Filtering    ##
-----------------------------------------
******************************************/

// Global variables
const listItems = document.querySelectorAll('.student-item');
const pageItems = 10;


// Hides all but 10 students beween START and END indexes
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

// Generates, appends, and adds funcitonality to pagination buttons
function appendPageLinks(list) {
  const ul = document.querySelector('.student-list');
  const pages = Math.round(Math.ceil(list.length/10));
  for (let i = 1; i < pages.length ; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    ul.appendChild(pageButton);
  }
}

// Function calls
showPage(listItems, 6);
appendPageLinks(listItems);
