import View from './view.js';
// import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from '../../../node_modules/lodash-es/cloneDeep.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _submitHandler;
  _message = 'Recipe was uploaded successfully';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');

  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerToggleWindow();
    this._saveInitialForm();
  }

  _saveInitialForm() {
    // this._initialForm = document.createElement('div');
    // this._initialForm = cloneDeep(this._parentElement);
    // console.log(this._initialForm);

    this._cloneParentElement = this._parentElement.cloneNode(true);
    // console.log(this._parentElement, 'Parent');
    // console.log(this._cloneParentElement, 'Cloned');
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerToggleWindow() {
    [this._btnClose, this._overlay, this._btnOpen].forEach(el => {
      el.addEventListener('click', this.toggleWindow.bind(this));
    });
  }

  displayDefaultForm() {
    console.log('Changing to default Form');
    this._parentElement.innerHTML = this._generateMarkup();
  }

  addHandlerUpload(handler) {
    document.querySelector('.upload').addEventListener('submit', e => {
      e.preventDefault();
      console.log('Submit event emitted');

      const dataArr = [...new FormData(this._parentElement)];
      const data = Object.fromEntries(dataArr);

      if (!this._submitHandler) this._submitHandler = handler;

      handler(data);
    });
  }

  _generateMarkup() {
    return `<button class="btn--close-modal">&times;</button>
    <form class="upload">
      <div class="upload__column">
        <h3 class="upload__heading">Recipe data</h3>
        <label>Title</label>
        <input value="pongal " required name="title" type="text" />
        <label>URL</label>
        <input value="TESTS" required name="sourceUrl" type="text" />
        <label>Image URL</label>
        <input value="TESTS" required name="image" type="text" />
        <label>Publisher</label>
        <input value="TESTS" required name="publisher" type="text" />
        <label>Prep time</label>
        <input value="23" required name="cookingTime" type="number" />
        <label>Servings</label>
        <input value="23" required name="servings" type="number" />
      </div>

      <div class="upload__column">
        <h3 class="upload__heading">Ingredients</h3>
        <label>Ingredient 1</label>
        <input
          value=",,description"
          type="text"
          required
          name="ingredient-1"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 2</label>
        <input
          value=""
          type="text"
          name="ingredient-2"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 3</label>
        <input
          value=""
          type="text"
          name="ingredient-3"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 4</label>
        <input
          type="text"
          name="ingredient-4"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 5</label>
        <input
          type="text"
          name="ingredient-5"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 6</label>
        <input
          type="text"
          name="ingredient-6"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
      </div>

      <button class="btn upload__btn">
        <svg>
          <use href="src/img/icons.svg#icon-upload-cloud"></use>
        </svg>
        <span>Upload</span>
      </button>
    </form>`;
  }
}

export default new AddRecipeView();
