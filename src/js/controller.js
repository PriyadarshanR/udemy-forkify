//Both works
// import icons from 'url:../img/icons.svg';
// import icons from '../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import recipeView from './views/recipeView.js';
import { API_URL, MODAL_CLOSE_SEC } from './config.js';
import searchView from './views/searchView.js';

import * as model from './model';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    //Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    //Update bookmarks view to mark selected search result
    // debugger;
    bookmarksView.update(model.state.bookmarks);
    // console.log(model.state.bookmarks);

    //Load Recipe
    await model.loadRecipe(`${API_URL}/${id}`);

    // Rendering the recipe
    recipeView.render(model.state.recipe);

    //Test
    // controlServings(8);
  } catch (err) {
    console.error('💥💥💥', err);
    recipeView.renderError();
  }
};

const controlPagination = function (goToPage) {
  const resultsOfPage = model.getSearchResultsPage(goToPage);
  resultsView.render(resultsOfPage);
  paginationView.render(model.state.search);
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();

    //Quit when user searches empty query
    if (!query) return;

    resultsView.renderSpinner();

    await model.loadSearchResulst(query);
    const resultsOfPage = model.getSearchResultsPage();
    resultsView.render(resultsOfPage);
    paginationView.render(model.state.search);
    searchView.clearInputField();
  } catch (err) {
    console.error('💥💥💥', err);
    resultsView.renderError();
  }
};

const controlServings = function (newServings) {
  //Update the recipe servings(in the state)
  model.updateServings(newServings);
  //Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

// if (module.hot) {
//   module.hot.accept();
// }

const controlAddBookmark = function () {
  //Add/Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  //Update the recipe view
  recipeView.update(model.state.recipe);
  //Render the bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const clearBookmarks = function () {
  try {
    model.clearBookmarks();
    bookmarksView.render(model.state.bookmarks);
    recipeView.update(model.state.recipe);
  } catch (err) {
    console.log('💥💥 No Bookmarks Yet');
  }
};

const controlUserGeneratedRecipe = async function (newRecipe) {
  try {
    //Show loading spinner
    addRecipeView.renderSpinner();

    //Upload new Recipe
    await model.uploadRecipe(newRecipe);
    // console.log(model.state.recipe);

    //Render Recipe
    recipeView.render(model.state.recipe);

    //Success message
    addRecipeView.renderMessage();

    //Change ID in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    //Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
      setTimeout(_ => {
        addRecipeView.displayDefaultForm();
      }, 1500);
    }, MODAL_CLOSE_SEC * 1000);
    //Display initial form for adding next recipe
  } catch (err) {
    console.error('💥💥', err);
    addRecipeView.renderError(err.message);

    setTimeout(function () {
      addRecipeView.toggleWindow();
      //Display initial form for adding next recipe
      addRecipeView.displayDefaultForm();
    }, MODAL_CLOSE_SEC * 1000);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  bookmarksView.addHandlerClearBookmarks(clearBookmarks);

  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);

  searchView.addHandlerSearch(controlSearchResults);

  paginationView.addHandlerClick(controlPagination);

  addRecipeView.addHandlerUpload(controlUserGeneratedRecipe);
};

init();
