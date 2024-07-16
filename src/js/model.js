import { API_URL, RES_PER_PAGE, KEY } from './config';
// import { getJSON } from './helper';
// import { sendJSON } from './helper';
import { AJAX } from './helper.js';

import Fraction from 'fractional';
// const Fraction = require('fractional').Fraction;

export const state = {
  recipe: {},
  search: {
    results: [],
    page: 1,
    query: '',
    resultsPerPage: RES_PER_PAGE,
    totalPage: 1,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    title: recipe.title,
    cookingTime: recipe.cooking_time,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (url) {
  try {
    // const res = await fetch(
    //   // `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    //   `${url}`
    // );

    // const data = await res.json();

    // if (!res.ok) throw new Error(`${data.message} status: ${res.status}`);

    const data = await AJAX(`${url}?key=${KEY}`);
    // console.log(data);

    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === state.recipe.id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    throw err;
  }
};

export const loadSearchResulst = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    // console.log(data.data);

    state.search.results = data.data.recipes.map(e => {
      return {
        id: e.id,
        image: e.image_url,
        publisher: e.publisher,
        title: e.title,
        ...(e.key && { key: e.key }),
      };
    });

    state.search.page = 1;

    state.search.totalPage = Math.ceil(
      state.search.results.length / RES_PER_PAGE
    );
  } catch (err) {
    throw err;
  }
};

// const getSearchResultsPage2 = function (page = state.search.resultsPerPage) {
//   // const totalPage = Math.ceil(state.search.results.length / RES_PER_PAGE);
// state.search.page = page;
//   const start = page * RES_PER_PAGE - RES_PER_PAGE;
//   const end =
//     start + RES_PER_PAGE > state.search.results.length
//       ? state.search.results.length
//       : start + RES_PER_PAGE;

//   console.log(start, end);

//   return state.search.results.slice(start, end);
// };

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0
  const end = page * state.search.resultsPerPage; // 9

  return state.search.results.slice(start, end);
};

// loadSearchResulst('hummus').then(_ => {
//   console.log(getSearchResultsPage2(2));
//   console.log(state.search.results);
// });

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    //newQt = oldQt * newServings /oldServings
  });
  state.recipe.servings = newServings;
};

const persistBookmark = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  //Mark current recipe as bookmark
  state.recipe.bookmarked = true;
  persistBookmark();
};

export const deleteBookmark = function (id) {
  //Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);

  state.bookmarks.splice(index, 1);
  //Mark current recipe as bookmark
  state.recipe.bookmarked = false;
  persistBookmark();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

export const clearBookmarks = function () {
  state.bookmarks = [];
  state.recipe.bookmarked = false;
  localStorage.clear('bookmarks');
};

export const uploadRecipe = async function (newRecipe) {
  const ingredients = Object.entries(newRecipe)
    .filter(([propName, propValue]) => {
      return propName.startsWith('ingredient') && propValue;
    })
    .map(([, ing], i) => {
      // const ingArrayFoo = ing.replaceAll(' ', '').split(',');
      const ingArray = ing
        .replaceAll(' ', '')
        .split(',')
        .map(el => el.trim());

      if (ingArray.length !== 3)
        throw new Error(
          'Wrong ingredient format! Please use the correct format :)'
        );
      const [quantity, unit, description] = ingArray;
      return { quantity: quantity ? +quantity : null, unit, description };
    });

  const recipe = {
    title: newRecipe.title,
    source_url: newRecipe.sourceUrl,
    image_url: newRecipe.image,
    publisher: newRecipe.publisher,
    cooking_time: +newRecipe.cookingTime,
    servings: +newRecipe.servings,
    ingredients,
  };

  const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
  state.recipe = createRecipeObject(data);
  addBookmark(state.recipe);
};
