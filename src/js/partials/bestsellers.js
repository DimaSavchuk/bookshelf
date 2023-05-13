// import { apiInstance } from "../services/api";
import {topBooksRequest, categoryRequest} from "../requests/apiRequests";

const bestSellersGalery = document.querySelector('.bestsellers');
// const clear = elems => [...elems.children].forEach(div => div.remove());
// const clear = elems => [...elems].forEach(li => li.remove());
// =========================== Рішення 1 - перша сторінка з 5 книжками ===========================
// export async function topBooksRequest() {

//     const response = await fetch(`https://books-backend.p.goit.global/books/top-books`);
//   if (!response.ok) {
//     throw new Error(
//         console.log('Oops, there is no country with that name'));
//     }
//     return await response.json();
//   }
 
  topBooksRequest()
    .then(response => {   
        bestSellersGalery.insertAdjacentHTML('beforeend', createTopBookCardList(response))
   
    }).catch(err => console.log(err));


  
      
function createTopBookCardList(arr) {
    return arr.map(({ list_name, books }) => {
    return `<div class="bestsellers-card">
            <h2 class="bestsellers-title-book">${list_name}</h2>
            <ul class="bestsellers-list">
            ${
                books.map(({book_image, title, author, _id, book_image_width, book_image_height }) => {
                return       ` <li class="bestsellers-card-item" id="${_id}">
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
                }).join('')
              
            }
                </ul>
                <button class="bestsellers-btn" id="${list_name}" type="button">See more</button>
            </div>`      
    }).join('');
};
console.log(bestSellersGalery);
// ===========================  1 - перша сторінка з 5 книжками ===========================

      

// ===========================  2 - затримка щоб дістати кнопки ===========================

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(createBtn()), 6000)
    });
  
    let result = await promise; // будет ждать, пока промис не выполнится (*)
  
    // console.log(result); // "готово!"
  }
  f();
// ----------------------------------------------

  const nameCategory = [
    "Advice How-To and Miscellaneous",
         "Picture Books",
         "Mass Market Monthly",
      "Hardcover Fiction",
       "Young Adult Paperback Monthly",
       "Middle Grade Paperback Monthly",
    "Business Books",
   "Paperback Nonfiction",
           "Combined Print and E-Book Fiction",
       "Young Adult Hardcover",
           "Trade Fiction Paperback",
          "Audio Fiction",
           "Combined Print and E-Book Nonfiction",
         "Series Books", "Hardcover Nonfiction",
           "Audio Nonfiction",
        "Graphic Books and Manga",
      "Childrens Middle Grade Hardcover"
    ]

// ----------------------------------------------
function createBtn () {
    
    const divBestsellersCard = document.querySelector('.bestsellers-card');
    const bestsellersTitleBook = document.querySelector('.bestsellers-title-book');
    const boxes = document.querySelectorAll('.bestsellers-btn');// дастаємо кнопки
  
    const ulList = document.querySelector('.list-bestsetters'); // дістаємо список куди додаємо інші картки

    boxes.forEach(box => {
  
        const boxId = box;
        // console.log(boxId);
       
          for(let i = 0; i < nameCategory.length; i++) {
              if(box.id === nameCategory[i]){
             
                    // console.log(nameCategory[i])
                    // console.log(box.id)
                    box.addEventListener('click', () => {

                         const pageTitle = document.createElement('h1');
                        divSecond.appendChild(pageTitle);
    
                        pageTitle.textContent = `${box.id}`
                    categoryRequest(box.id)
                    .then(response => {   
                        bestSellersGalery.innerHTML = '';
                        // divSecond.insertAdjacentHTML('beforeend', createName(response))
                        ulList.insertAdjacentHTML('beforeend', createAllCategoryList(response))
                     
                        
                    }).catch(err => console.log(err));
                })
                  
                 }
                 
              }
           
     });
    
     } 
// ===========================  3 - створюємо додаткові картки ===========================


// export async function categoryRequest(category) {
//     const response = await fetch(`https://books-backend.p.goit.global/books/category?category=${category}`);
//     const books = await response.json();
   
//     return books;
  
//   };

// import { apiInstance } from "../services/api";
// export async function categoryRequest(category) {

//     try {
//         const response = await apiInstance.get(`/books/category?category=${category}`);
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

//   export async function categoryRequest(category) {

//     const response = await fetch(`https://books-backend.p.goit.global/books/category?category=${category}`);
//   if (!response.ok) {
//     throw new Error(
//         console.log('Oops, there is no country with that name'));
//     }
//     return await response.json();
//   }

//   const categoryRequest = async () => {
//     const response = await fetch('https://books-backend.p.goit.global/books/category?category=Series%20Books');
//     const books = await response.json();
//     console.log(books)
//     return books;
   
  
//   };

//   categoryRequest()
//    .then(response => {   
//        bestSellersGalery.insertAdjacentHTML('beforeend', createAllCategoryList(response))
//    })


const divSecond = document.querySelector('.bestsellers-second');



 function createAllCategoryList(array) {
   
    const markup = array.map(({book_image, title, author, book_image_width, book_image_height }) => {
        
    return       ` <li class="bestsellers-card-item">
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
                 </li>
                 `
    }).join('')
    return markup;
}

// ===========================  3 - створюємо додаткові картки ===========================


// -----------------------------------

    
// ----------------------------------------------


// ==============================================
// fetchUsers()
// .then(response => {  
//     const find = findCategory(response);
  
// for(let i = 0; i < find.length; i++) {
//     if(find === btn){
//         console.log(find)
//     }
// }
//     // if(btn === response){
//     //     console.log('1')
//     // }
// }).catch(err => console.log(err));
    //     btn.addEventListener('click', onClick);
    // function onClick(){
    //     console.log('1');
    // }
 
  
// -----------------------------------

//   const fetchUsers = async () => {
//     const response = await fetch('https://books-backend.p.goit.global/books/category-list');
//     const users = await response.json();
//     return users;
//   };

//   function findCategory (arr){
//     return arr.map(({list_name})=>{
//         return list_name;
//     })
//   }
 
// function createBtn (arr) {
//     const btn = document.querySelector('.bestsellers-btn');
//     // const btnwait = arr.map(({ list_name }) => {
//     //     const btn = document.querySelector(`${list_name}`);
//     //     console.log(btn);
//     // })
 
//     // console.log(btn);
//     btn.addEventListener('click', onClick);
//     function onClick(){
//         console.log('1');
//     }
//   }



// -----------------------------------
