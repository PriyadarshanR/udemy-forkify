import View from './view.js';
import previewView from './previewView.js';
// import icons from 'url:../../img/icons.svg'; // Parcel 2

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a recipe and bookmark it ;(';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerClearBookmarks(handler) {
    document.querySelector('.clr_btn').addEventListener('click', _ => {
      handler();
    });
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
