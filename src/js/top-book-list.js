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