import View from './view.js';
// import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const button = e.target.closest('.btn--inline');
      if (!button) return;
      const goToPage = +button.dataset.goToPage;
      //   console.log(typeof goToPage);
      //   console.log(goToPage);
      //   console.log(button.dataset.goToPage);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const { page, totalPage } = this._data;
    //First page only
    if (page === 1 && page === totalPage) return ``;
    //Last page
    if (page === totalPage && page !== 1)
      return `<button class="btn--inline pagination__btn--prev" 
                data-go-to-page="${page - 1}">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
            <span>Page ${page - 1}</span>
            </button>
            <div class="pagination-page_display">
            <span>${page} / ${totalPage}</span>
            </div>
            `;
    //Other pages
    if (page !== 1 && page !== totalPage)
      return `<button class="btn--inline pagination__btn--prev" 
                data-go-to-page="${page - 1}">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${page - 1}</span>
               </button>
               <div class="pagination-page_display">
              <span>${page} / ${totalPage}</span>
              </div>
               <button class="btn--inline pagination__btn--next"  
               data-go-to-page="${page + 1}">
               <span>Page ${page + 1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
               </button>`;
    //First of many pages
    if (page === 1 && page !== totalPage)
      return `<div class="pagination-page_display">
              <span>${page} / ${totalPage}</span>
              </div>
              <button class="btn--inline pagination__btn--next" 
                        data-go-to-page="${page + 1}">
                        <span>Page ${page + 1}</span>
                         <svg class="search__icon">
                         <use href="${icons}#icon-arrow-right"></use>
                         </svg>
              </button>`;
  }
}

export default new PaginationView();
