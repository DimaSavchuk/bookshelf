const list = document.querySelector('.category-list');

export function category() {
  fetch('https://books-backend.p.goit.global/books/category-list')
    .then(response => response.json())
    .then(data => {
      const arr = [];
      for (const item of data) {
        const values = item.list_name;
        arr.push(values);
      }

      console.log(arr);

      const markup = arr
        .map(item => {
          return `<li class="category-item">
        <a class="category-link" href="#">${item}</a>
        </li>`;
        })
        .join('');

      list.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(error => {
      console.error('Сталася помилка при запиті:', error);
    });
}
