export default class PaginationService {
    constructor() {
      this.currentPage = 1;
      this.paginationLimit = window.screen.width >= 768 ? 3 : 4;;
      this.pageCount;
      this.listItems;
      this.paginationNumbers = document.getElementById('pagination-numbers');
      this.paginatedList = document.getElementById('paginated-list');
      this.nextButton = document.getElementById('next-button');
      this.prevButton = document.getElementById('prev-button');
      this.paginationContainer = document.getElementById('pagination-container');
    }

     setPagination(page) {
        this.listItems = this.paginatedList.querySelectorAll('li');
        this.pageCount = Math.ceil(this.listItems.length / this.paginationLimit);
      
        if (this.pageCount < 2) {
          this.hidePaginationContainer();
          return;
        }
      
        if (page > this.pageCount) {
          page = this.pageCount;
        }
      
        this.getPaginationNumbers();
        this.setCurrentPage(page);
        this.setNextAndPreviousButtons();
      
        document.querySelectorAll('.pagination-number').forEach(button => {
          const pageIndex = Number(button.getAttribute('page-index'));
          if (pageIndex) {
            button.addEventListener('click', () => {
                this.setCurrentPage(pageIndex);
            });
          }
        });
      }
      
       hidePaginationContainer = () => {
        this.paginationContainer.style.display = 'none';
      }
      
       getPaginationNumbers = () => {
        for (let i = 1; i <= this.pageCount; i++) {
            this.appendPageNumber(i);
        }
      };
      
       appendPageNumber = index => {
        const pageNumber = document.createElement('button');
        pageNumber.className = 'pagination-number';
        pageNumber.innerHTML = index;
        pageNumber.setAttribute('page-index', index);
        pageNumber.setAttribute('aria-label', 'Page ' + index);
        this.paginationNumbers.appendChild(pageNumber);
      };
      
       setCurrentPage = pageNum => {
        this.currentPage = pageNum;
      
        this.handleActivePageNumber();
        this.handlePageButtonsStatus();
      
        const prevRange = (pageNum - 1) * this.paginationLimit;
        const currRange = pageNum * this.paginationLimit;
      
        this.listItems.forEach((item, index) => {
          item.style.display = 'none';
          if (index >= prevRange && index < currRange) {
            item.style.display = 'flex';
          }
        });
      };
      
       setNextAndPreviousButtons() {
        this.prevButton.addEventListener('click', () => {
            this.setCurrentPage(this.currentPage - 1);
        });
        this.nextButton.addEventListener('click', () => {
            this.setCurrentPage(this.currentPage + 1);
        });
      }
      
       handleActivePageNumber = () => {
        document.querySelectorAll('.pagination-number').forEach(button => {
          button.classList.remove('active');
      
          const pageIndex = Number(button.getAttribute('page-index'));
          if (pageIndex == this.currentPage) {
            button.classList.add('active');
          }
        });
      };
      
       disableButton = button => {
        button.classList.add('disabled');
        button.setAttribute('disabled', true);
      };
      
       enableButton = button => {
        button.classList.remove('disabled');
        button.removeAttribute('disabled');
      };
      
       handlePageButtonsStatus = () => {
        if (this.currentPage === 1) {
            this.disableButton(this.prevButton);
        } else {
            this.enableButton(this.prevButton);
        }
        if (this.pageCount === this.currentPage) {
            this.disableButton(this.nextButton);
        } else {
            this.enableButton(this.nextButton);
        }
      };   
      
      clearPaginationButtons = () => {
        this.paginationNumbers.innerHTML = '';
      };
  }
