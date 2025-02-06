/*const recipeContainer = document.querySelector('.detail-recipe-container');

      
      const urlParams = new URLSearchParams(window.location.search);
      const recipeId = urlParams.get('id');

      const storedRecipes = localStorage.getItem('recipes');
      const recipes = JSON.parse(storedRecipes);


      let matchingRecipe;

      recipes.forEach((recipeContainer) => {
        recipeContainer.forEach((recipe) => {
          if (recipeId === recipe.id) {
            matchingRecipe = recipe
          }
        });
      });


      document.querySelector('.detail-recipe-container').innerHTML = 
      `
        <div class="card" id="recipe1" class="recipe1">
          <img src="${matchingRecipe.image}" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">${matchingRecipe.name}</h5>
            <p class="card-text">
              ${matchingRecipe.about}
            </p>
            <ul class="ull">
              ${matchingRecipe.otherInfo}
            </ul>

            <h6>Ingredients</h6>
            <ul class="ul2">
              ${matchingRecipe.ingredients}
            </ul>

            <h6>Instructions:</h6>
            <ol>
              ${matchingRecipe.instructions}
            </ol>

            <h6>Tips and Variations:</h6>
            <ul class="ul2">
              ${matchingRecipe.tips}
            </ul>

            <h6>Nutrition Information (per serving):</h6>
            <ul class="ul2">
              ${matchingRecipe.nutrition}
            </ul>
          </div>

          <button class="btn btn1 go-back-btn js-go-back-btn">Go back</button>
        </div>
      `
document.querySelectorAll('.js-go-back-btn')
      .forEach((button) => {
        button.addEventListener('click', () => {
          window.location.href = './index.html#section1';
        });
      });*/



















/*const recipeContainer = document.querySelector('.detail-recipe-container');


const apiKey = '93bd0a57af814557b396561089326fcd';  
const randomRecipesUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`; 
  

  
  async function fetchRandomRecipes() {
      try {
        let response = await fetch(randomRecipesUrl);
        let data = await response.json();
        // getMatchingRecipe(data.recipes);
        const recipes = data.recipes
        console.log("Fetched new recipes:", recipes);


        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id');
        let matchingRecipe;

        recipes.forEach((recipe) => {
          if (recipeId === recipe.id) {
            matchingRecipe = recipe
          }
        })
  
  
        console.log(matchingRecipe)


      } catch (error) {
        console.error('Error fetching random recipes:', error);
      }
  }*/





const apiKey = '93bd0a57af814557b396561089326fcd';
const urlParams = new URLSearchParams(window.location.search);
const recipeIdInfo = urlParams.get('id');  


/*async function fetchRecipeDetail() {
let cachedRecipesDetails = localStorage.getItem('cachedRecipesDetails');

 if (cachedRecipesDetails) {
    let recipes = JSON.parse(cachedRecipesDetails);
    displayRecipeDetails(recipes);
    console.log("Using cached recipes:", recipes);}
  else {
    try {
      let response = await fetch(`https://api.spoonacular.com/recipes/${recipeIdInfo}/information?apiKey=${apiKey}`);
      let data = await response.json();
      localStorage.setItem('cachedRecipesDetails', JSON.stringify(data.recipes));
      displayRecipeDetails(data.recipes);
      console.log("Fetched new recipes:", data.recipes);
    } catch (error) {
      console.error('Error fetching random recipes:', error);
    }
  }
}*/



async function fetchRecipeDetails() {
  const recipeId = recipeIdInfo;
  console.log(recipeId)
  let cachedRecipeDetails = localStorage.getItem('cachedRecipesDetails');
  
  if (cachedRecipeDetails) {
    let fullRecipe = JSON.parse(cachedRecipeDetails);
    displayRecipeDetails(fullRecipe);
    console.log("Using cached recipes:", fullRecipe);
  } 

 
  else {
    try {
      let response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
      let data = await response.json();
      localStorage.setItem('cachedRecipesDeails', JSON.stringify(data));
      displayRecipeDetails(data);
      console.log("Fetched new recipes:", data);
    } catch (error) {
      console.error('Error fetching random recipes:', error);
    }
    }
}


function stripHtmlTags(text) {
  return text.replace(/<[^>]*>/g, '').trim();
}


function displayRecipeDetails(recipe) {
  const cleanSummary = stripHtmlTags(recipe.summary); 

  document.querySelector('.detail-recipe-container').innerHTML = 
      `
      <div class="row recipe-card">
        <img src="${recipe.image}" class="card-img-top"/>
        <div class="recipe-body">
          <h5 class="recipe-title">${recipe.title}</h5>
          <p class="recipe-text">
            ${cleanSummary}
          </p>
          <ul class="ull">
            <li class="bold-text">Ready in: ${recipe.readyInMinutes} mins</li>
            <li class="bold-text">Servings: ${recipe.servings}</li>
          </ul>

          <h6 class="sh">Ingredients</h6>
          <ul class="ul2">
          ${recipe.extendedIngredients.map(ing => `<li>${ing.original}</li>`).join('')}
          </ul>

          <h6 class="sh">Instructions:</h6>
          <ol class="instructions">
          ${recipe.instructions || "No instructions available"}
          </ol>

        </div>

  

      </div>
    <a href="./recipes.html" class="btn btn1 go-back-btn js-go-back-btn">Explore other recipes</a>
      `


      document.querySelector('.review-form-section').innerHTML =
      `
      <h2>Submit Your Review</h2>
  
      <form id="reviewForm" class="review-form">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name">
        </div>
    
        <div class="form-group">
          <label for="email">Your Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email">
        </div>
  
        <div class="form-group">
          <label for="rating">Rating:</label>
          <select id="rating" name="rating" class="form-control">
            <option value="" disabled selected>Select your rating</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <div class="form-group">
          <label for="review">Your Review:</label>
        <textarea id="review" name="review" rows="4" placeholder="Write your review here..."></textarea>
        </div>
    
        <div class="form-group">
          <button type="submit" class="btn btn1">Submit Review</button>
        </div>
      </form>
      `


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
}




document.addEventListener('DOMContentLoaded', fetchRecipeDetails);

// review from`

