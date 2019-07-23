/******************************************
Full Stack JavaScript Techdegree Project 2
-----------------------------------------
##    List Pagination and Filtering    ##
-----------------------------------------
******************************************/

// Global variables
const listItem = document.querySelectorAll('.student-item');
const page = 10;


// Hides all but first 10 students in list
function showPage(list, page) {
  for (let i = 0;i < list.length;i++) {
    if (i < 10) {
      const shownItems = list[i].style.display = 'block';
    } else {
      const hiddenItems = list[i].style.display = 'none';
    }
  }
  return shownItems;
}


// Generates, appends, and adds funcitonality to pagination buttons
function appendPageLinks() {

}


// Function calls
showPage(listItem, page);
