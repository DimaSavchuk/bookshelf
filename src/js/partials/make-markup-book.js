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