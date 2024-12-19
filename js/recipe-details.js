import {recipesContainer1, recipesContainer2, recipesContainer3, recipesContainer4, recipesContainer5} from "../data/recipes.js";


  const firstRecipeOgjectDetail = recipesContainer1[0];
  document.querySelector('.recipe1-btn').addEventListener('click', () => {
    document.querySelector('.main-section').innerHTML = `
    <div class="card searchable" id="recipe1" class="recipe1">
        <img src="${firstRecipeOgjectDetail.image}" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${firstRecipeOgjectDetail.name}</h5>
          <p class="card-text">
            ${firstRecipeOgjectDetail.about}
          </p>
          <ul class="ull">
            ${firstRecipeOgjectDetail.otherInfo}
          </ul>

          <h6>Ingredients</h6>
          <ul class="ul2">
            ${firstRecipeOgjectDetail.ingredients}
          </ul>

          <h6>Instructions:</h6>
          <ol>
            ${firstRecipeOgjectDetail.instructions}
          </ol>

          <h6>Tips and Variations:</h6>
          <ul class="ul2">
            ${firstRecipeOgjectDetail.tips}
          </ul>

          <h6>Nutrition Information (per serving):</h6>
          <ul class="ul2">
            ${firstRecipeOgjectDetail.nutrition}
          </ul>
        </div>

        <a href="./index.html" class="btn btn1">
          Go back to Homepage
          </a>
      </div>



      <!-- review section -->
      <section class="review-form-section">
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
      </section>
    `

    document.querySelector('.section1').classList.add('remove-recipes');
    document.querySelector('.section3').classList.add('remove-recipes');
    document.querySelector('.section4').classList.add('remove-recipes');
    document.querySelector('.section5').classList.add('remove-recipes');
    document.querySelector('.main-section').classList.add('search-result');
    document.querySelector('.header').classList.add('rm');
  });


  const secondRecipeOgjectDetail = recipesContainer1[1];
  document.querySelector('.recipe2-btn').addEventListener('click', () => {
    document.querySelector('.main-section').innerHTML = `
    <div class="card searchable">
        <img src="${secondRecipeOgjectDetail.image}" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${secondRecipeOgjectDetail.name}</h5>
          <p class="card-text">
            ${secondRecipeOgjectDetail.about}
          </p>
          <ul class="ull">
            ${secondRecipeOgjectDetail.otherInfo}
          </ul>

          <h6>Ingredients</h6>
          <ul class="ul2">
            ${secondRecipeOgjectDetail.ingredients}
          </ul>

          <h6>Instructions:</h6>
          <ol>
            ${secondRecipeOgjectDetail.instructions}
          </ol>

          <h6>Tips and Variations:</h6>
          <ul class="ul2">
            ${secondRecipeOgjectDetail.tips}
          </ul>

          <h6>Nutrition Information (per serving):</h6>
          <ul class="ul2">
            ${secondRecipeOgjectDetail.nutrition}
          </ul>
        </div>

        <a href="./index.html" class="btn btn1">
          Go back to Homepage
          </a>
      </div>



      <!-- review section -->
      <section class="review-form-section">
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
      </section>
    `

    document.querySelector('.section1').classList.add('remove-recipes');
    document.querySelector('.section3').classList.add('remove-recipes');
    document.querySelector('.section4').classList.add('remove-recipes');
    document.querySelector('.section5').classList.add('remove-recipes');
    document.querySelector('.main-section').classList.add('search-result');
    document.querySelector('.header').classList.add('rm');
    
  });



  const thirdRecipeOgjectDetail = recipesContainer2[0];
  document.querySelector('.recipe3-btn').addEventListener('click', () => {
    document.querySelector('.main-section').innerHTML = `
    <div class="card searchable">
        <img src="${thirdRecipeOgjectDetail.image}" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${thirdRecipeOgjectDetail.name}</h5>
          <p class="card-text">
            ${thirdRecipeOgjectDetail.about}
          </p>
          <ul class="ull">
            ${thirdRecipeOgjectDetail.otherInfo}
          </ul>

          <h6>Ingredients</h6>
          <ul class="ul2">
            ${thirdRecipeOgjectDetail.ingredients}
          </ul>

          <h6>Instructions:</h6>
          <ol>
            ${thirdRecipeOgjectDetail.instructions}
          </ol>

          <h6>Tips and Variations:</h6>
          <ul class="ul2">
            ${thirdRecipeOgjectDetail.tips}
          </ul>

          <h6>Nutrition Information (per serving):</h6>
          <ul class="ul2  c3">
            ${thirdRecipeOgjectDetail.nutrition}
          </ul>
        </div>

        <a href="./index.html" class="btn btn1">
          Go back to Homepage
          </a>
      </div>



      <!-- review section -->
      <section class="review-form-section">
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
      </section>
    `

    document.querySelector('.section1').classList.add('remove-recipes');
    document.querySelector('.section3').classList.add('remove-recipes');
    document.querySelector('.section4').classList.add('remove-recipes');
    document.querySelector('.section5').classList.add('remove-recipes');
    document.querySelector('.main-section').classList.add('search-result');
    document.querySelector('.header').classList.add('rm');
    
  });


  const fourthRecipeOgjectDetail = recipesContainer2[1];
  document.querySelector('.recipe4-btn').addEventListener('click', () => {
    document.querySelector('.main-section').innerHTML = `
    <div class="card searchable">
        <img src="${fourthRecipeOgjectDetail.image}" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${fourthRecipeOgjectDetail.name}</h5>
          <p class="card-text">
            ${fourthRecipeOgjectDetail.about}
          </p>
          <ul class="ull">
            ${fourthRecipeOgjectDetail.otherInfo}
          </ul>

          <h6>Ingredients</h6>
          <ul class="ul2">
            ${fourthRecipeOgjectDetail.ingredients}
          </ul>

          <h6>Instructions:</h6>
          <ol>
            ${fourthRecipeOgjectDetail.instructions}
          </ol>

          <h6>Tips and Variations:</h6>
          <ul class="ul2">
            ${fourthRecipeOgjectDetail.tips}
          </ul>

          <h6>Nutrition Information (per serving):</h6>
          <ul class="ul2">
            ${fourthRecipeOgjectDetail.nutrition}
          </ul>
        </div>

        <a href="./index.html" class="btn btn1">
            Go back to Homepage
          </a>
      </div>



      <!-- review section -->
      <section class="review-form-section">
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
      </section>
    `

    document.querySelector('.section1').classList.add('remove-recipes');
    document.querySelector('.section3').classList.add('remove-recipes');
    document.querySelector('.section4').classList.add('remove-recipes');
    document.querySelector('.section5').classList.add('remove-recipes');
    document.querySelector('.main-section').classList.add('search-result');
    document.querySelector('.header').classList.add('rm');
    
  });