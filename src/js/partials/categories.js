import { listenerCount } from 'process';
import { categoryRequest } from '../requests/apiRequests';
import { apiInstance } from '../services/api';

import { topBooksRequest } from '../requests/apiRequests';
import { changeColorStyleInTitle, createAllCategoryList, createTopBookCardList } from './bestsellers';


const list = document.querySelector('.category-list');
const categoryTitle = document.querySelector('.bestsellers-title');
const bestSellersGalery = document.querySelector('.bestsellers');

//================================================================
import Notiflix from 'notiflix';

// export async function topBooksRequest() {

//   const response = await fetch(`https://books-backend.p.goit.global/books/top-books`);

// if (!response.ok) {
//   throw new Error(
// console.log('Oops, there is no country with that name'));
// }
// return await response.json();
// }

//============================================================================================

export function category() {
  fetch('https://books-backend.p.goit.global/books/category-list')
    .then(response => response.json())
    .then(data => {
      const arr = [];
      for (const item of data) {
        const values = item.list_name;
        arr.push(values);
      }

      const markup = arr
        .map(item => {
          return `<li class="category-item">
        <a class="category-link" href="#">${item}</a>
        </li>`;
        })
        .join('');

      list.insertAdjacentHTML('beforeend', markup);
      categoryListener();
     
    })
    .catch(error => {
      console.error('Сталася помилка при запиті:', error);
    });
}

function categoryListener() {
  list.addEventListener('click', handleCategoryClick);
}

// function handleCategoryClick(event) {
//   event.preventDefault();
//   const target = event.target;
//   console.log(target)
//   if (target.classList.contains('category-link')) {
//     const categoryName = target.textContent;
//     console.log(categoryName)

//     if (target.textContent === 'All categories') {
//       categoryTitle.innerHTML = `Best Sellers Books`;
//       loadTopBooksOnClick();
//     } 
  
//     else {
//       categoryTitle.innerHTML = `${changeColorStyleInTitle(categoryName)}`;
//       try {
//         categoryRequest(categoryName)
//           .then(data => {
//             if (data.length === 0 || data === undefined) {
//               Notiflix.Notify.failure(
//                 "Sorry, we didn't find anything according to your request."
//               );
//               return;
//             }

//             bestSellersGalery.innerHTML = '';
//             createAllCategoryList(data, categoryName);
//           })
//           .catch(err => console.log(err));
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//   }
// }

//==============================
// =======================================================


const categoryAll = document.getElementById('category-all');

categoryAll.addEventListener('click', onTitleClick)

function onTitleClick (){
  
  try {
    topBooksRequest()
      .then(data => {
        if (data.length === 0 || data === undefined) {
          Notiflix.Notify.failure(
            "Sorry, we didn't find anything according to your request."
          );
          return;
        }
        // bestSellersGalery.innerHTML = '';
      
        bestSellersGalery.innerHTML = ` <h1 class="bestsellers-title bestsellers-title-color">
        Best Sellers
        <span class="bestsellers-title bestsellers-title-span">Books</span>`;
        categoryTitle.textContent = `Best Sellers Books`;
        bestSellersGalery.insertAdjacentHTML(
          'beforeend',
          createTopBookCardList(data)
        );
      })
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error.message);
  }
}
// ========================================================
function handleCategoryClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains('category-link')) {

    const categoryName = target.textContent;

    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
      item.classList.remove('active');
    });

    // Добавление класса 'active' к текущему пункту меню
    target.parentNode.classList.add('active');
    if (target.textContent == 'All categories') {
      //location.reload();
      // categoryTitle.innerHTML = `Best Sellers Books`;
      // loadTopBooksOnClick();
    } else {

      
      categoryTitle.innerHTML = `${changeColorStyleInTitle(categoryName)}`;
      try {
        categoryRequest(categoryName)
          .then(data => {
            if (data.length === 0 || data === undefined) {
              Notiflix.Notify.failure(
                "Sorry, we didn't find anything according to your request."
              );
              return;
            }

            bestSellersGalery.innerHTML = '';
            createAllCategoryList(data, categoryName);
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.log(error.message);
      }
    
  }
}
