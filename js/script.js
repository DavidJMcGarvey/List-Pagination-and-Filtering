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

// OLD - Generate, append, and add funcitonality to pagination buttons
// function appendPageLinks(list) {
//   const div = document.querySelector('.page');
//   const pages = Math.round(Math.ceil(list.length/pageItems));
//   for (let i = 1; i < pages + 1; i++) {
//     const pageButton = document.createElement('button');
//     pageButton.className = 'pagination';
//     pageButton.innerHTML = '<a>' + i + '</a>';
//     div.appendChild(pageButton);
//     pageButton.addEventListener('click', () => {
//       showPage(list, i);
//     });
//   }
// }

// NEW -  Generate, append, and add funcitonality to pagination links
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
    pageLink.addEventListener('click', () => {
      showPage(list, i);
      const current = document.querySelectorAll('a');
      for (let i = 0; i < current.length; i++) {
        pageLink.className = 'active';
        if (current.length > 0) {
          current[i].className = current[i].className.replace('active', '');
          this.className += 'active';
        }
      }

    });
  }
}

// Function calls
showPage(listItems, 1);
appendPageLinks(listItems);
