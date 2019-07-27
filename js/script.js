/******************************************
Full Stack JavaScript Techdegree Project 2
-----------------------------------------
##    List Pagination and Filtering    ##
-----------------------------------------
******************************************/

// Global variables

//
const listItems = document.querySelectorAll('.student-item');
const pageItems = 10;

// Generate search components
const pageHeader = document.querySelector('.page-header');
const searchDiv = document.createElement('div');
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');
const searchNames = document.querySelectorAll('li');
const searchList = [];
searchDiv.className = 'student-search';
searchInput.placeholder = 'Search for students...';
searchButton.textContent = 'Search';
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchButton);
pageHeader.appendChild(searchDiv);
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

// Search functionality, adds class of 'match' to matching students
function searchFunction(input, names) {
  for (let i = 0; i < names.length; i++) {
    names[i].className = 'student-item cf';
    if (input.value.length !== 0 && names[i].textContent.toLowerCase().includes(input.value)) {
      names[i].className = 'student-item cf match';
    }
  }
}

// Event listener for search button
searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  searchFunction(searchInput, searchNames);
  function appendSearchPageLinks(list) {
    const oldDiv = document.querySelectorAll('.searchButton');
    for (let i = 0; i < oldDiv.length; i++) {
      oldDiv[i].parentNode.removeChild(oldDiv[i]);
    }
    const pageDiv = document.querySelector('.page');
    const pages = Math.round(Math.ceil(list.length/pageItems));
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    div.className = 'pagination searchButton';
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
  function showSearchPage(list, page) {
    const indexStart = (page * pageItems) - pageItems;
    const indexEnd = page * pageItems;
    const matches = document.getElementsByClassName('student-item cf match');
    const nonMatches = document.getElementsByClassName('student-item cf');
    for (let i = 0; i <= list.length - 1 ; i++) {
      const student = list[i];
      if (student.className === 'student-item cf match') {
        appendSearchPageLinks(matches);
        if (i >= indexStart && i < indexEnd) {
          student.style.display = 'block';
        }
      } else if (matches.length === 0) {
        const message = document.createElement('div')
        message.innerHTML = "<h3>--> Search Yielded No Results</h3>";
        pageHeader.appendChild(message);
        break;
      } else {
        student.style.display = 'none';
      }
    }
  }
  const matches = document.getElementsByClassName('student-item cf match');
  for (let i = 0; i < matches.length; i++) {
    searchList.push(matches[i]);
  }
  showSearchPage(listItems, 1);

});

// On load - function calls
showPage(listItems, 1);
appendPageLinks(listItems);
