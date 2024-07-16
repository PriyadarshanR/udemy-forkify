function e(e){return e&&e.__esModule?e.default:e}var t,r,n=globalThis,a={},i={},s=n.parcelRequire3a11;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},n.parcelRequire3a11=s),(0,s.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.a3639866.js","hfd23","icons.c14567a0.svg","eyyUD","icons.c14567a0.svg"]'));var o={};o=new URL("icons.c14567a0.svg",import.meta.url).toString();class l{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];!e.isEqualNode(r)&&e.firstChild?.nodeValue.trim()&&(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderError(t=this._errorMessage){let r=`<div class="error">
                       <div>
                         <svg>
                          <use href="${e(o)}icons.svg#icon-alert-triangle"></use>
                         </svg>
                       </div>
                      <p>${t}</p>
                    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderMessage(t=this._message){let r=`<div class="message">
                      <div>
                       <svg>
                        <use href="${e(o)}#icon-smile"></use>
                       </svg>
                      </div>
                      <p>${t}</p>
                   </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderSpinner(){this._clear();let t=`<div class="spinner">
    <svg>
    <use href="${e(o)}g#icon-loader"></use>
    </svg>
    </div>`;this._parentElement.insertAdjacentHTML("afterbegin",t)}}class c extends l{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe please try another one";_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmarks")&&e()})}_generateMarkup(){return`<figure class="recipe__fig">
    <img src='${this._data.image}' alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
                <span>${this._data.title}</span>
                </h1>
            </figure>

            <div class="recipe__details">
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${e(o)}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
                </div>
                <div class="recipe__info">
                <svg class="recipe__info-icon">
                    <use href="${e(o)}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                    <svg>
                        <use href="${e(o)}#icon-minus-circle"></use>
                    </svg>
                    </button>
                    <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                    <svg>
                        <use href="${e(o)}#icon-plus-circle"></use>
                    </svg>
                    </button>
                </div>
                </div>

                <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
                <svg>
                    <use href="${e(o)}#icon-user"></use>
                </svg>
                </div>
                <button class="btn--round btn--bookmarks">
                <svg class="">
                    <use href="${e(o)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
                </svg>
                </button>
            </div>

            <div class="recipe__ingredients">
                <h2 class="heading--2">Recipe ingredients</h2>
                <ul class="recipe__ingredient-list">
                ${this._data.ingredients.map(t=>` <li class="recipe__ingredient">
                            <svg class="recipe__icon">
                                <use href="${e(o)}#icon-check"></use>
                            </svg>
                            <div class="recipe__quantity">${t.quantity?new Fraction(t.quantity).toString():""}</div>
                            <div class="recipe__description">
                                <span class="recipe__unit">${t.unit}</span>
                                ${t.description}
                            </div>
                            </li>`).join("")}
                </ul>
            </div>

            <div class="recipe__directions">
                <h2 class="heading--2">How to cook it</h2>
                <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                directions at their website.
                </p>
                <a
                class="btn--small recipe__btn"
                href=${this._data.sourceUrl}
                target="_blank"
                >
                <span>Directions</span>
                <svg class="search__icon">
                    <use href="${e(o)}#icon-arrow-right"></use>
                </svg>
                </a>
            </div>`}}var d=new c;const u="https://forkify-api.herokuapp.com/api/v2/recipes",p="9af9d384-0384-462a-a8ec-5cbeb44f505d";class m extends l{_parentElement=document.querySelector(".search");_errorMessage="No recipe found for your query. Try Again!";getQuery(){return document.querySelector(".search__field").value}addHandlerSearch(e){document.querySelector(".search").addEventListener("submit",function(t){t.preventDefault(),e()})}clearInputField(){document.querySelector(".search__field").value=""}}var h=new m;const g=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise((e,t)=>{setTimeout(t,11e3,Error("Request took too long! Timeout after 11 second"))})]),a=await n.json();if(!n.ok)throw Error(`${a.message} (${n.status})`);return a}catch(e){throw e}};(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,a=num.split(" ");if(a[0]&&(r=a[0]),a[1]&&(n=a[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(t=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(t(this.denominator)){var e=r(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(t(this.numerator)){var e=r(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var a=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=a,this.denominator/=a,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),a=Fraction.primeFactors(t);return(n.forEach(function(e){var t=a.indexOf(e);t>=0&&(r.push(e),a.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},Fraction;const _={recipe:{},search:{results:[],page:1,query:"",resultsPerPage:10,totalPage:1},bookmarks:[]},f=function(e){let{recipe:t}=e.data;return{id:t.id,image:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,sourceUrl:t.source_url,title:t.title,cookingTime:t.cooking_time,...t.key&&{key:t.key}}},v=async function(e){try{let t=await g(`${e}?key=${p}`);_.recipe=f(t),_.bookmarks.some(e=>e.id===_.recipe.id)?_.recipe.bookmarked=!0:_.recipe.bookmarked=!1}catch(e){throw e}},b=async function(e){try{_.search.query=e;let t=await g(`${u}?search=${e}&key=${p}`);_.search.results=t.data.recipes.map(e=>({id:e.id,image:e.image_url,publisher:e.publisher,title:e.title,...e.key&&{key:e.key}})),_.search.page=1,_.search.totalPage=Math.ceil(_.search.results.length/10)}catch(e){throw e}},y=function(e=_.search.page){_.search.page=e;let t=(e-1)*_.search.resultsPerPage,r=e*_.search.resultsPerPage;return _.search.results.slice(t,r)},k=function(e){_.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/_.recipe.servings}),_.recipe.servings=e},w=function(){localStorage.setItem("bookmarks",JSON.stringify(_.bookmarks))},$=function(e){_.bookmarks.push(e),_.recipe.bookmarked=!0,w()},F=function(e){let t=_.bookmarks.findIndex(t=>t.id===e);_.bookmarks.splice(t,1),_.recipe.bookmarked=!1,w()};!function(){let e=localStorage.getItem("bookmarks");e&&(_.bookmarks=JSON.parse(e))}();const E=function(){_.bookmarks=[],_.recipe.bookmarked=!1,localStorage.clear("bookmarks")},S=async function(e){let t=Object.entries(e).filter(([e,t])=>e.startsWith("ingredient")&&t).map(([,e],t)=>{let r=e.replaceAll(" ","").split(",").map(e=>e.trim());if(3!==r.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[n,a,i]=r;return{quantity:n?+n:null,unit:a,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await g(`${u}?key=${p}`,r);_.recipe=f(n),$(_.recipe)};var D={};D=new URL("icons.c14567a0.svg",import.meta.url).toString();var q=new class extends l{_parentElement="";_generateMarkup(){let t=window.location.hash.slice(1);return` <li class="preview">
                <a class="preview__link ${this._data.id===t?"preview__link--active":""}" href="#${this._data.id}">
                    <figure class="preview__fig">
                    <img src="${this._data.image}" alt="Test" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${this._data.title}</h4>
                        <p class="preview__publisher">${this._data.publisher}</p>
                        <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                          <svg>
                           <use href="${e(D)}#icon-user"></use>
                          </svg>
                        </div>
                     </div>
                </a>
            </li>`}};class H extends l{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>q.render(e,!1)).join("")}}var M=new H;class x extends l{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goToPage)})}_generateMarkup(){let{page:t,totalPage:r}=this._data;return 1===t&&t===r?"":t===r&&1!==t?`<button class="btn--inline pagination__btn--prev" 
                data-go-to-page="${t-1}">
                <svg class="search__icon">
                <use href="${e(D)}#icon-arrow-left"></use>
                </svg>
            <span>Page ${t-1}</span>
            </button>
            <div class="pagination-page_display">
            <span>${t} / ${r}</span>
            </div>
            `:1!==t&&t!==r?`<button class="btn--inline pagination__btn--prev" 
                data-go-to-page="${t-1}">
                <svg class="search__icon">
                <use href="${e(D)}#icon-arrow-left"></use>
                </svg>
                <span>Page ${t-1}</span>
               </button>
               <div class="pagination-page_display">
              <span>${t} / ${r}</span>
              </div>
               <button class="btn--inline pagination__btn--next"  
               data-go-to-page="${t+1}">
               <span>Page ${t+1}</span>
                <svg class="search__icon">
                <use href="${e(D)}#icon-arrow-right"></use>
                </svg>
               </button>`:1===t&&t!==r?`<div class="pagination-page_display">
              <span>${t} / ${r}</span>
              </div>
              <button class="btn--inline pagination__btn--next" 
                        data-go-to-page="${t+1}">
                        <span>Page ${t+1}</span>
                         <svg class="search__icon">
                         <use href="${e(D)}#icon-arrow-right"></use>
                         </svg>
              </button>`:void 0}}var T=new x;class A extends l{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a recipe and bookmark it ;(";_message="";addHandlerRender(e){window.addEventListener("load",e)}addHandlerClearBookmarks(e){document.querySelector(".clr_btn").addEventListener("click",t=>{e()})}_generateMarkup(){return this._data.map(e=>q.render(e,!1)).join("")}}var L=new A;class P extends l{_parentElement=document.querySelector(".upload");_submitHandler;_message="Recipe was uploaded successfully";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerToggleWindow(),this._saveInitialForm()}_saveInitialForm(){this._cloneParentElement=this._parentElement.cloneNode(!0)}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerToggleWindow(){[this._btnClose,this._overlay,this._btnOpen].forEach(e=>{e.addEventListener("click",this.toggleWindow.bind(this))})}displayDefaultForm(){console.log("Changing to default Form"),this._parentElement.innerHTML=this._generateMarkup()}addHandlerUpload(e){document.querySelector(".upload").addEventListener("submit",t=>{t.preventDefault(),console.log("Submit event emitted");let r=Object.fromEntries([...new FormData(this._parentElement)]);this._submitHandler||(this._submitHandler=e),e(r)})}_generateMarkup(){return`<button class="btn--close-modal">&times;</button>
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
    </form>`}}var U=new P;document.querySelector(".recipe");const C=async function(){try{let e=window.location.hash.slice(1);if(!e)return;d.renderSpinner(),M.update(y()),L.update(_.bookmarks),await v(`${u}/${e}`),d.render(_.recipe)}catch(e){console.error("\uD83D\uDCA5\uD83D\uDCA5\uD83D\uDCA5",e),d.renderError()}},R=async function(){try{let e=h.getQuery();if(!e)return;M.renderSpinner(),await b(e);let t=y();M.render(t),T.render(_.search),h.clearInputField()}catch(e){console.error("\uD83D\uDCA5\uD83D\uDCA5\uD83D\uDCA5",e),M.renderError()}},I=async function(e){try{U.renderSpinner(),await S(e),d.render(_.recipe),U.renderMessage(),window.history.pushState(null,"",`#${_.recipe.id}`),L.render(_.bookmarks),setTimeout(function(){U.toggleWindow(),setTimeout(e=>{U.displayDefaultForm()},1500)},2500)}catch(e){console.error("\uD83D\uDCA5\uD83D\uDCA5",e),U.renderError(e.message),setTimeout(function(){U.toggleWindow(),U.displayDefaultForm()},2500)}};L.addHandlerRender(function(){L.render(_.bookmarks)}),L.addHandlerClearBookmarks(function(){try{E(),L.render(_.bookmarks),d.update(_.recipe)}catch(e){console.log("\uD83D\uDCA5\uD83D\uDCA5 No Bookmarks Yet")}}),d.addHandlerRender(C),d.addHandlerUpdateServings(function(e){k(e),d.update(_.recipe)}),d.addHandlerAddBookmark(function(){_.recipe.bookmarked?F(_.recipe.id):$(_.recipe),d.update(_.recipe),L.render(_.bookmarks)}),h.addHandlerSearch(R),T.addHandlerClick(function(e){let t=y(e);M.render(t),T.render(_.search)}),U.addHandlerUpload(I);
//# sourceMappingURL=index.a3639866.js.map
