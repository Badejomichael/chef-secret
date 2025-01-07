import { recipesContainer1, recipesContainer2, recipesContainer3, recipesContainer4, recipesContainer5 } from "../data/recipes.js";
import { recipeSearch } from "./search.js";


 
 
function active() {
  let blogs = document.querySelector('.blogs');
  blogs.classList.add('active');
}

// review from`
document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const review = document.getElementById('review').value;

  if (!name || !email || !review) {
    alert('Please fill out all fields.');
  } else {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('review').value = '';
  document.getElementById('rating').value = '';

  alert('Thank you for your review!');
  }
});




let recipes1HTML = '';

recipesContainer1.forEach((recipe1) => {
  recipes1HTML += `
  <div class="card searchable" id="recipe1" class="recipe1">
        <img src="${recipe1.image}" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${recipe1.name}</h5>
          <p class="card-text">
            ${recipe1.about}
          </p>
          <ul class="ull">
            ${recipe1.otherInfo}
          </ul>

          <h6>Ingredients</h6>
          <ul class="ul2">
            ${recipe1.ingredients}
          </ul>

          <h6>Instructions:</h6>
          <ol>
            ${recipe1.instructions}
          </ol>

          <h6>Tips and Variations:</h6>
          <ul class="ul2">
            ${recipe1.tips}
          </ul>

          <h6>Nutrition Information (per serving):</h6>
          <ul class="ul2">
            ${recipe1.nutrition}
          </ul>
        </div>
      </div>
  `
});

document.querySelector('.js-recipe-container1').innerHTML = recipes1HTML;


let recipes2HTML = '';

recipesContainer2.forEach((recipe2) => {
  recipes2HTML += `
  <div class="card searchable" id="recipe1" class="recipe1">
        <img src="${recipe2.image}" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${recipe2.name}</h5>
          <p class="card-text">
            ${recipe2.about}
          </p>
          <ul class="ull">
            ${recipe2.otherInfo}
          </ul>

          <h6>Ingredients</h6>
          <ul class="ul2">
            ${recipe2.ingredients}
          </ul>

          <h6>Instructions:</h6>
          <ol>
            ${recipe2.instructions}
          </ol>

          <h6>Tips and Variations:</h6>
          <ul class="ul2">
            ${recipe2.tips}
          </ul>

          <h6>Nutrition Information (per serving):</h6>
          <ul class="ul2">
            ${recipe2.nutrition}
          </ul>
        </div>
      </div>
  `
});

document.querySelector('.js-recipe-container2').innerHTML = recipes2HTML;



let recipes3HTML = '';

recipesContainer3.forEach((recipe3) => {
  recipes3HTML += `
  <div class="card searchable" id="recipe1" class="recipe1">
        <img src="${recipe3.image}" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${recipe3.name}</h5>
          <p class="card-text">
            ${recipe3.about}
          </p>
          <ul class="ull">
            ${recipe3.otherInfo}
          </ul>

          <h6>Ingredients</h6>
          <ul class="ul2">
            ${recipe3.ingredients}
          </ul>

          <h6>Instructions:</h6>
          <ol>
            ${recipe3.instructions}
          </ol>

          <h6>Tips and Variations:</h6>
          <ul class="ul2">
            ${recipe3.tips}
          </ul>

          <h6>Nutrition Information (per serving):</h6>
          <ul class="ul2">
            ${recipe3.nutrition}
          </ul>
        </div>
      </div>
  `
});

document.querySelector('.js-recipe-container3').innerHTML = recipes3HTML;




let recipes4HTML = '';
recipesContainer4.forEach((recipe4) => {
  recipes4HTML += `
  <div class="card searchable" id="recipe1" class="recipe1">
        <img src="${recipe4.image}" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${recipe4.name}</h5>
          <p class="card-text">
            ${recipe4.about}
          </p>
          <ul class="ull">
            ${recipe4.otherInfo}
          </ul>

          <h6>Ingredients</h6>
          <ul class="ul2">
            ${recipe4.ingredients}
          </ul>

          <h6>Instructions:</h6>
          <ol>
            ${recipe4.instructions}
          </ol>

          <h6>Tips and Variations:</h6>
          <ul class="ul2">
            ${recipe4.tips}
          </ul>

          <h6>Nutrition Information (per serving):</h6>
          <ul class="ul2">
            ${recipe4.nutrition}
          </ul>
        </div>
      </div>
  `
});

document.querySelector('.js-recipe-container4').innerHTML = recipes4HTML;



let recipes5HTML = '';
recipesContainer5.forEach((recipe5) => {
  recipes5HTML += `
  <div class="card searchable" id="recipe1" class="recipe1">
        <img src="${recipe5.image}" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${recipe5.name}</h5>
          <p class="card-text">
            ${recipe5.about}
          </p>
          <ul class="ull">
            ${recipe5.otherInfo}
          </ul>

          <h6>Ingredients</h6>
          <ul class="ul2">
            ${recipe5.ingredients}
          </ul>

          <h6>Instructions:</h6>
          <ol>
            ${recipe5.instructions}
          </ol>

          <h6>Tips and Variations:</h6>
          <ul class="ul2">
            ${recipe5.tips}
          </ul>

          <h6>Nutrition Information (per serving):</h6>
          <ul class="ul2">
            ${recipe5.nutrition}
          </ul>
        </div>
      </div>
  `
});

document.querySelector('.js-recipe-container5').innerHTML = recipes5HTML;






document.querySelector('.search-form-btn').addEventListener
('click', () => {
  
  recipeSearch()

});








