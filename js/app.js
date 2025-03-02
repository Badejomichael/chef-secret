function active() {
  let blogs = document.querySelector('.blogs');
  blogs.classList.add('active');
}



const apiKey = '93bd0a57af814557b396561089326fcd';  
const randomRecipesUrl = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=100`;  
const allRecipesUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100`;

let recipePageHTML = '';

async function fetchRandomRecipes() {
  let cachedRecipes = localStorage.getItem('cachedRecipes3');
  
  if (cachedRecipes) {
    let recipes = JSON.parse(cachedRecipes);
    displayRecipes(recipes);
    console.log("Using cached recipes:", recipes);
  } else {
    try {
      let response = await fetch(randomRecipesUrl);
      let data3 = await response.json();
      localStorage.setItem('cachedRecipes3', JSON.stringify(data3.recipes));
      displayRecipes(data3.recipes);
      console.log("Fetched new recipes:", data3.recipes);
    } catch (error) {
      console.error('Error fetching random recipes:', error);
    }
  }
}


function displayRecipes(recipes) {
  recipes.forEach(recipe => {
    recipePageHTML += 
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
  });

  
  document.querySelector('.js-recipe-row').innerHTML = recipePageHTML;

  document.querySelectorAll('.js-recipe-btn')
  .forEach((button) => {
    button.addEventListener('click', () => {
     const recipeId = button.dataset.recipeId;
      
      window.location.href = `./detailed-recipe.html?id=${recipeId}`;

      
    });
  });
}

document.addEventListener('DOMContentLoaded', fetchRandomRecipes);


const searchInput = document.querySelector(".search-input");
const searchResultsDiv = document.querySelector(".js-search-result-row");
let searchResultHTML = '';

async function searchRecipes(query) {
  document.querySelector('.js-positive-result-header').classList.add('positive-result-header');
  searchResultsDiv.innerHTML = "<p>Searching...</p>";
  const newSearchInput = searchInput.value.toLowerCase();

  let storedRecipes = JSON.parse(localStorage.getItem("cachedRecipes3")) || [];

  let filteredRecipes = storedRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(newSearchInput)
  );

  if (filteredRecipes.length > 0) {
    document.querySelector('.js-positive-result-header').classList.remove('positive-result-header');
    displaySearchResults(filteredRecipes);
    return;
  }

  // If no matches in localStorage, fetch from Spoonacular API
  else {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query.value}&number=5`
      );
      const data = await response.json();
  
      if (data.results && data.results.length > 0) {
        document.querySelector('.js-positive-result-header').classList.remove('positive-result-header');
        displaySearchResults(data.results);
      } else {
        searchResultsDiv.innerHTML = "<p>No recipes found</p>";
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      searchResultsDiv.innerHTML = "<p>Error fetching recipes. Try again later.</p>";
    }
  }
}




function displaySearchResults(recipes) {
  searchResultHTML = " ";
  recipes.forEach(recipe => {
    searchResultHTML+= `
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
    `;
  });

  searchResultsDiv.innerHTML = searchResultHTML;



  document.querySelectorAll('.js-recipe-btn')
  .forEach((button) => {
    button.addEventListener('click', () => {
     const recipeId = button.dataset.recipeId;
      
      window.location.href = `./detailed-recipe.html?id=${recipeId}`;

      
    });
  });
}


document.querySelector('.js-search-form-btn')
  .addEventListener('click', () => {
    searchRecipes(searchInput);
});



// functionality for seraching with special keys
document.querySelector('.search-input')
.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    searchRecipes(searchInput);
  } else if (event.key === 'Return') {
    searchRecipes(searchInput);
  } 
});