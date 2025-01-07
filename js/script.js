import { homepageRecipes } from "../data/recipes.js";
import { allRecipes } from "../data/recipes.js";


 // Homepage

 let homepageRecipeHTML = '';

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
  });
  


 