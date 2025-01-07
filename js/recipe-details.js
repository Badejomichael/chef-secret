const recipeContainer = document.querySelector('.detail-recipe-container');

      
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
        })
      })
      