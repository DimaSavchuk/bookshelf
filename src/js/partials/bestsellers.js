
const bestSellersGalery = document.querySelector('.bestsellers');


// -------------------------------- Рішення 1------------
export async function topBooksRequest() {

    const response = await fetch(`https://books-backend.p.goit.global/books/top-books`);

  if (!response.ok) {
    throw new Error(
console.log('Oops, there is no country with that name'));
  }
  return await response.json();
  
  }
 
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
                books.map(({ book_image, title, author, book_image_width, book_image_height }) => {
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
                                 
                         </li>`
                }).join('')
              
            }
                </ul>
                <button class="bestsellers-btn" type="button" data-action="click">See more</button>
            </div>`
        
    }).join('');
} 