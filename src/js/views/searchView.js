import View from './view';

class SearchView extends View {
  _parentElement = document.querySelector('.search');
  _errorMessage = 'No recipe found for your query. Try Again!';

  getQuery() {
    return document.querySelector('.search__field').value;
  }

  addHandlerSearch(handler) {
    document.querySelector('.search').addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  clearInputField() {
    document.querySelector('.search__field').value = '';
  }
}

export default new SearchView();
