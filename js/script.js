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

// Generate, append, and add funcitonality to pagination buttons
function appendPageLinks(list) {
  const div = document.querySelector('.page');
  const pages = Math.round(Math.ceil(list.length/pageItems));
  for (let i = 1; i < pages + 1; i++) {
    const pageButton = document.createElement('button');
    pageButton.className = 'pagination';
    pageButton.innerHTML = '<a>' + i + '</a>';
    div.appendChild(pageButton);
    pageButton.addEventListener('click', () => {
      showPage(list, i);
    });
  }
}

// Function calls
showPage(listItems, 1);
appendPageLinks(listItems);
