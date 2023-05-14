 const refs = {
    bestSellersGalery: document.querySelector('.bestsellers'),
   };


   import {topBooksRequest, categoryRequest} from "../requests/apiRequests";
    // import { createTopBookCardList } from './top-book-list';
    // import { makeMarkupBook } from './make-markup-book';

  // ===========================================================================

window.addEventListener('DOMContentLoaded', loadTopBooksOnClick);
  async function loadTopBooksOnClick(event) {
    try {
  topBooksRequest()
    .then(data => {  
        if (data.length === 0 || data === undefined) {
            Notiflix.Notify.failure(
              "Sorry, we didn't find anything according to your request."
            );
            return;
          } 
        
          refs.bestSellersGalery.insertAdjacentHTML('beforeend', createTopBookCardList(data))
       
    }).catch(err => console.log(err));

    } catch (error) {
      console.log(error.message);
    }
   
  }

  // ===========================================================================

refs.bestSellersGalery.addEventListener('click', onCattegoryButtonElClick);

  async function onCattegoryButtonElClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }

    const cattegoryName = event.target.name;

    try {
        categoryRequest(cattegoryName)
        .then(data => {  
            if (data.length === 0 || data === undefined) {
                Notiflix.Notify.failure(
                  "Sorry, we didn't find anything according to your request."
                );
                return;
              } 
             
              refs.bestSellersGalery.innerHTML = '';
            createAllCategoryList(data, cattegoryName);
                 
        }).catch(err => console.log(err));
    } catch (error) {
      console.log(error.message);
    }
  }
    // =========================================================================== 
    window.addEventListener('resize', hideBooks);
      function hideBooks() {
        const listCategoriesEl = Array.from(
          document.querySelectorAll('.bestsellers-list'));
        if (window.innerWidth < 768) {
          listCategoriesEl.forEach(item => {
            for (let i = 0; i < item.children.length; i += 1) {
              if (i === 0) {
                item.children[i].hidden = false;
                continue;
              }
              item.children[i].hidden = true;
            }
          });
        }
        if (window.innerWidth >= 768 && window.innerWidth < 1440) {
          listCategoriesEl.forEach(item => {
            for (let i = 0; i < item.children.length; i += 1) {
              if (i <= 2) {
                item.children[i].hidden = false;
                continue;
              }
              item.children[i].hidden = true;
            }
          });
        }
        if (window.innerWidth >= 1440) {
          listCategoriesEl.forEach(item => {
            for (let i = 0; i < item.children.length; i += 1) {
              item.children[i].hidden = false;
            }
          });
        }
      }

// ===========================================================================

export function createTopBookCardList(arr) {
    return arr.map(({ list_name, books }) => {
    return `<div class="bestsellers-card">
            <h2 class="bestsellers-title-book">${list_name}</h2>
            <ul class="bestsellers-list">
            ${makeMarkupBook(books)}
                </ul>
                <button class="bestsellers-btn" name="${list_name}" type="button">See more</button>
            </div>`      
    }).join('');
};

export function makeMarkupBook(books) {
    const markup = books.map(( { _id, book_image, title, author }) => {
        return ` <li class="bestsellers-card-item" id="${_id}">
        <a href="" class="bestsellers-link project-transit"> 
        <!-- box-menu -->
        <div class="box">
            <p class = "overlay">Quick View</p>  
            <img class="gallery__image" src="${book_image}" >
            </div>
         <!-- box-menu -->
         <div class="text-box">
          <h3 class="book-name">${title}</h3>
          <p class="author">${author}</p>
          </div>
          </a>
         </li>`
         
}).join('');
    return markup;
}

  // ===========================================================================

 function createAllCategoryList(data, cattegoryName) {
    refs.bestSellersGalery.innerHTML = 
    `<h2 class="bestsellers-title">${changeColorStyleInTitle(cattegoryName)}</h2>
                  <div class="bestsellers-category-item" name="${cattegoryName}">
                  <ul class="category-book-list">
                 ${makeMarkupBook(data)}
                  </ul>
                  </div>`
}
 // ===========================================================================
  function changeColorStyleInTitle(category) {
    const titleToArray = category.trim().split(' ');
    const lastWord = titleToArray[titleToArray.length - 1];
    const stringExceptLastWord = titleToArray.slice(0, titleToArray.length - 1).join(' ');
    const stringFinal = stringExceptLastWord +` <span class="bestsellers-title-span">${lastWord}</span>`;
    return stringFinal;
  }
