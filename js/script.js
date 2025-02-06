import { homepageRecipes } from "../data/recipes.js";
import { allRecipes } from "../data/recipes.js";


 // Homepage

 /*let homepageRecipeHTML = '';

 homepageRecipes.forEach((recipe) => {
   homepageRecipeHTML += 
   `
    <div class="card js-card" style="width: 16rem">
     <img src="${recipe.image}" class="card-img-top" alt="..." height="150px"/>
     <div class="card-body">
       <h5 class="card-title">${recipe.name}</h5>
       <p class="card-text">
         ${recipe.about}
       </p>
       <button class="btn btn-outline-dark btn2 js-recipe-btn" data-recipe-id="${recipe.id}">See Full Details</button>
     </div>
   </div>
   `
 });


 document.querySelector('.js-recipe-row').innerHTML = homepageRecipeHTML;


 localStorage.setItem('recipes', JSON.stringify(allRecipes));

 document.querySelectorAll('.js-recipe-btn')
  .forEach((button) => {
    button.addEventListener('click', () => {
     const recipeId = button.dataset.recipeId;
      
      window.location.href = `./detailed-recipe.html?id=${recipeId}`;

      
    });
  });*/



















  
const apiKey = '93bd0a57af814557b396561089326fcd';  
const randomRecipesUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=4`;  
const allRecipesUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=4`;

let homepageRecipeHTML = '';

async function fetchRandomRecipes() {
  let cachedRecipes = localStorage.getItem('cachedRecipes');
  
  if (cachedRecipes) {
    let recipes = JSON.parse(cachedRecipes);
    displayRecipes(recipes);
    console.log("Using cached recipes:", recipes);
  } else {
    try {
      let response = await fetch(randomRecipesUrl);
      let data = await response.json();
      localStorage.setItem('cachedRecipes', JSON.stringify(data.recipes));
      displayRecipes(data.recipes);
      console.log("Fetched new recipes:", data.recipes);
    } catch (error) {
      console.error('Error fetching random recipes:', error);
    }
  }
}


function displayRecipes(recipes) {
  recipes.forEach(recipe => {
    homepageRecipeHTML += 
   `
    <div class="card js-card" style="width: 16rem">
     <img src="${recipe.image}" class="card-img-top" alt="..." height="150px"/>
     <div class="card-body">
       <h5 class="card-title">${recipe.title}</h5>
       <p class="card-text">
         Ready in ${recipe.readyInMinutes} mins | Servings: ${recipe.servings}
         Rating:</strong> ⭐ ${Math.round(recipe.spoonacularScore / 20)} / 5
       </p>
       <button class="btn btn-outline-dark btn2 js-recipe-btn" data-recipe-id="${recipe.id}">See Full Details</button>
     </div>
   </div>
   `
  });

  
  document.querySelector('.js-recipe-row').innerHTML = homepageRecipeHTML;

  document.querySelectorAll('.js-recipe-btn')
  .forEach((button) => {
    button.addEventListener('click', () => {
     const recipeId = button.dataset.recipeId;
      
      window.location.href = `./detailed-recipe.html?id=${recipeId}`;

      
    });
  });
}

document.addEventListener('DOMContentLoaded', fetchRandomRecipes);














const randomRecipesUrl2 = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=8`;  

let homepageRecipeHTML2 = '';

async function fetchRandomRecipes2() {
  let cachedRecipes2 = localStorage.getItem('cachedRecipes2');
  
  if (cachedRecipes2) {
    let recipes = JSON.parse(cachedRecipes2);
    displayRecipes2(recipes);
    console.log("Using cached recipes:", recipes);
  } else {
    try {
      let response = await fetch(randomRecipesUrl2);
      let data2 = await response.json();
      localStorage.setItem('cachedRecipes2', JSON.stringify(data2.recipes));
      displayRecipes2(data2.recipes);
      console.log("Fetched new recipes:", data2.recipes);
    } catch (error) {
      console.error('Error fetching random recipes:', error);
    }
  }
}



function displayRecipes2(recipes) {
  recipes.forEach(recipe => {

    homepageRecipeHTML2 += 
   `
   <div class="slide">
      <div class="card" style="width: 16rem">
        <img src="${recipe.image}" class="card-img-top" alt="..." height="150px"/>
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text">
            Ready in ${recipe.readyInMinutes} mins | Servings: ${recipe.servings}
            Rating:</strong> ⭐ ${Math.round(recipe.spoonacularScore / 20)} / 5
          </p>
        </div>
      </div>
    </div>
   `
  });

  
  document.querySelector('.js-recipe-slider').innerHTML = homepageRecipeHTML2;
}

document.addEventListener('DOMContentLoaded', fetchRandomRecipes2);