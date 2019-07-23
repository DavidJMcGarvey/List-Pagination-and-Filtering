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
  for (let i = 0; i <= list.length ; i++) {
    if (i >= indexStart && i < indexEnd) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

// Generates, appends, and adds funcitonality to pagination buttons
function appendPageLinks() {
  const pageButton = document.createElement('button');
  // for (let i = 0; i < (list.length/10) ; i++)
}

// Function calls
showPage(listItems, 1);
