import {recipesContainer1, recipesContainer2} from "../data/recipes.js";

export function recipeSearch() {
const firstRecipeOgject = recipesContainer1[0];
const firstKeywords = firstRecipeOgject.keywords
const searchWord = document.querySelector('.search-input');
const newSearchWord = searchWord.value.toLowerCase(); 


 if (firstKeywords.includes(newSearchWord)) {
  document.querySelector('.search-result').innerHTML =
  `
  <p class="Result-header">Results of Search.</p>
  <div class="card searchable" id="recipe1" class="recipe1">
      <img src="${firstRecipeOgject .image}" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">${firstRecipeOgject .name}</h5>
        <p class="card-text">
          ${firstRecipeOgject .about}
        </p>
        <ul class="ull">
          ${firstRecipeOgject .otherInfo}
        </ul>

        <h6>Ingredients</h6>
        <ul class="ul2">
          ${firstRecipeOgject .ingredients}
        </ul>

        <h6>Instructions:</h6>
        <ol>
          ${firstRecipeOgject .instructions}
        </ol>

        <h6>Tips and Variations:</h6>
        <ul class="ul2">
          ${firstRecipeOgject .tips}
        </ul>

        <h6>Nutrition Information (per serving):</h6>
        <ul class="ul2">
          ${firstRecipeOgject .nutrition}
        </ul>
      </div>
    </div>
  `
  document.querySelector('.recipe-section').classList.add('remove-recipes');
  document.querySelector('.recipe-section2').classList.add('remove-recipes');
  document.querySelector('.search-result').classList.add('card0')
}

if (!document.querySelector('.search-input').value) {
  document.querySelector('.search-result').innerHTML =
  `
  <p class="Result-header-error">Invalid search.</p>
  `
} else if (!firstKeywords.includes(newSearchWord)) {
  document.querySelector('.search-result').innerHTML =
  `
  <p class="Result-header-error">No recipe found.</p>
  `
}




const RecipeObject2 = recipesContainer1[1];
const Keywords2 = RecipeObject2.keywords
console.log(Keywords2)
if (Keywords2.includes(newSearchWord)) {
  document.querySelector('.search-result').innerHTML =
  `
  <p class="Result-header">Results of Search.</p>
  <div class="card searchable" id="recipe1" class="recipe1">
      <img src="${RecipeObject2.image}" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">${RecipeObject2.name}</h5>
        <p class="card-text">
          ${RecipeObject2.about}
        </p>
        <ul class="ull">
          ${RecipeObject2.otherInfo}
        </ul>

        <h6>Ingredients</h6>
        <ul class="ul2">
          ${RecipeObject2.ingredients}
        </ul>

        <h6>Instructions:</h6>
        <ol>
          ${RecipeObject2.instructions}
        </ol>

        <h6>Tips and Variations:</h6>
        <ul class="ul2">
          ${RecipeObject2.tips}
        </ul>

        <h6>Nutrition Information (per serving):</h6>
        <ul class="ul2">
          ${RecipeObject2.nutrition}
        </ul>
      </div>
    </div>
  `
  document.querySelector('.recipe-section').classList.add('remove-recipes');
  document.querySelector('.recipe-section2').classList.add('remove-recipes');
}



const RecipeObject3 = recipesContainer2[0];
const Keywords3 = RecipeObject3.keywords
if (Keywords3.includes(newSearchWord)) {
  document.querySelector('.search-result').innerHTML =
  `
  <p class="Result-header">Results of Search.</p>
  <div class="card searchable" id="recipe1" class="recipe1">
      <img src="${RecipeObject3.image}" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">${RecipeObject3.name}</h5>
        <p class="card-text">
          ${RecipeObject3.about}
        </p>
        <ul class="ull">
          ${RecipeObject3.otherInfo}
        </ul>

        <h6>Ingredients</h6>
        <ul class="ul2">
          ${RecipeObject3.ingredients}
        </ul>

        <h6>Instructions:</h6>
        <ol>
          ${RecipeObject3.instructions}
        </ol>

        <h6>Tips and Variations:</h6>
        <ul class="ul2">
          ${RecipeObject3.tips}
        </ul>

        <h6>Nutrition Information (per serving):</h6>
        <ul class="ul2">
          ${RecipeObject3.nutrition}
        </ul>
      </div>
    </div>
  `
  document.querySelector('.recipe-section').classList.add('remove-recipes');
  document.querySelector('.recipe-section2').classList.add('remove-recipes');
}


const RecipeObject4 = recipesContainer2[1];
const Keywords4 = RecipeObject4.keywords
if (Keywords4.includes(newSearchWord)) {
  document.querySelector('.search-result').innerHTML =
  `
  <p class="Result-header">Results of Search.</p>
  <div class="card searchable" id="recipe1" class="recipe1">
      <img src="${RecipeObject4.image}" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">${RecipeObject4.name}</h5>
        <p class="card-text">
          ${RecipeObject4.about}
        </p>
        <ul class="ull">
          ${RecipeObject4.otherInfo}
        </ul>

        <h6>Ingredients</h6>
        <ul class="ul2">
          ${RecipeObject4.ingredients}
        </ul>

        <h6>Instructions:</h6>
        <ol>
          ${RecipeObject4.instructions}
        </ol>

        <h6>Tips and Variations:</h6>
        <ul class="ul2">
          ${RecipeObject4.tips}
        </ul>

        <h6>Nutrition Information (per serving):</h6>
        <ul class="ul2">
          ${RecipeObject4.nutrition}
        </ul>
      </div>
    </div>
  `
  document.querySelector('.recipe-section').classList.add('remove-recipes');
  document.querySelector('.recipe-section2').classList.add('remove-recipes');
}

}
