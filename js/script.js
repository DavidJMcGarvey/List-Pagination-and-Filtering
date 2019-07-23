/******************************************
Full Stack JavaScript Techdegree Project 2
-----------------------------------------
##    List Pagination and Filtering    ##
-----------------------------------------
******************************************/

// Global variables
const listItem = document.querySelectorAll('.student-item');
const pageMax = 10;


// Hides all but first 10 students in list
function showPage(list, page) {
  for (let i = 0;i < list.length;i++) {
    if (i < page) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}


// Generates, appends, and adds funcitonality to pagination buttons
function appendPageLinks() {

}


// Function calls
showPage(listItem, pageMax);
