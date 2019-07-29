/******************************************
Full Stack JavaScript Techdegree Project 2
-----------------------------------------
##    List Pagination and Filtering    ##
-----------------------------------------
******************************************/

// Global variables
const listItems = document.querySelectorAll('.student-item');
const pageItems = 10;
const pageHeader = document.querySelector('.page-header');
const searchDiv = document.createElement('div');
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');
const searchList = [];

// Hover over "Students" heading to see message on how to refresh student list
const refreshList = document.querySelector('h2');
refreshList.innerHTML = '<h2><span title="Click this to refresh student list">Students</span></h2>';
refreshList.addEventListener('click', () => {
  showPage(listItems, 1);
  appendPageLinks(listItems);
});

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
  const pageDiv = document.querySelector('.page');
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

// Search functionality, adds class of 'match' to matching students
function searchFunction(input, names) {
  const listDiv = document.querySelectorAll('div.pagination, div.list');
  for (let i = 0; i < listDiv.length; i++) {
    listDiv[i].parentNode.removeChild(listDiv[i]);
  }
  for (let i = 0; i < names.length; i++) {
    names[i].className = 'student-item cf';
    names[i].style.display = 'none';
    if (input.value.length !== 0 && names[i].textContent.toLowerCase().includes(input.value)) {
      names[i].className = 'student-item cf match';
      searchList.push(names[i]);
      if (names[i].className !== 'student-item cf match') {
        searchList.pop(names[i]);
      }
    }
  }
  showPage(searchList, 1);
  appendPageLinks(searchList);
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

// OLD - Search Functions - Not Great
// // Shows first page of search results
// function showSearchPage(list, page) {
//   const indexStart = (page * pageItems) - pageItems;
//   const indexEnd = page * pageItems;
//   const matches = document.getElementsByClassName('student-item cf match');
//   const nonMatches = document.getElementsByClassName('student-item cf');
//   for (let i = 0; i <= list.length - 1 ; i++) {
//     const student = list[i];
//     if (student.className === 'student-item cf match') {
//       appendSearchPageLinks(matches);
//       const searchDiv = document.querySelector('.searchButton');
//       const searchMessage = document.createElement('div');
//       searchMessage.innerHTML = '<h4>Search Pages For -->  ' + searchInput.value + '</h4>';
//       searchMessage.className = 'pagination';
//       searchDiv.appendChild(searchMessage);
//
//       const listDiv = document.querySelector('.list');
//       const listMessage = document.createElement('div');
//       listMessage.innerHTML = '<h4>Pages For Entire Student Catalog</h4>';
//       listMessage.className = 'pagination';
//       listDiv.appendChild(listMessage);
//
//       if (i >= indexStart && i < indexEnd) {
//         student.style.display = 'block';
//       }
//     } else if (matches.length === 0) {
//       const message = document.createElement('div')
//       message.innerHTML = '<h3>--> Search Yielded No Results</h3>';
//       pageHeader.appendChild(message);
//       break;
//     } else {
//       student.style.display = 'none';
//     }
//   }
// }
//
// // Creates pagination for search results
// function appendSearchPageLinks(list) {
//   const oldDiv = document.querySelectorAll('.searchButton');
//   for (let i = 0; i < oldDiv.length; i++) {
//     oldDiv[i].parentNode.removeChild(oldDiv[i]);
//   }
//   const listDiv = document.getElementsByTagName('h4');
//   for (let i = 0; i < listDiv.length; i++) {
//     listDiv[i].parentNode.removeChild(listDiv[i]);
//   }
//   const pageDiv = document.querySelector('.page');
//   const pages = Math.round(Math.ceil(list.length/pageItems));
//   const div = document.createElement('div');
//   const ul = document.createElement('ul');
//   div.className = 'pagination searchButton';
//   pageDiv.appendChild(div);
//   for (let i = 1; i < pages + 1; i++) {
//     const pageLi = document.createElement('li');
//     const pageLink = document.createElement('a');
//     pageLi.appendChild(pageLink);
//     ul.appendChild(pageLi);
//     pageLink.textContent = i;
//     pageLink.href = '#';
//     div.appendChild(ul);
//     const current = document.querySelectorAll('a');
//     current[0].className = 'active';
//     pageLink.addEventListener('click', (e) => {
//       showPage(list, i);
//       const current = document.querySelectorAll('a');
//       for (let i = 0; i < current.length; i++) {
//         e.target.className = 'active';
//         if (e.target.className === 'active') {
//           current[i].className = current[i].className.replace('active', '');
//           e.target.className = 'active';
//         }
//       }
//     });
//   }
// }

// Author: David J McGarvey
// Date Created: 2019-07-23
// Date Updated: 2019-07-27
