document.addEventListener("DOMContentLoaded", () => {

    const BaseUrl = "http://localhost:3000/recipes";


    const recipeContainer = document.getElementById("recipe-container");
    const modal = document.getElementById("recipe-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalIngredients = document.getElementById("modal-ingredients");
    const modalInstructions = document.getElementById("modal-instructions");
    const closeButton = document.querySelector(".close-btn");


    // Fetch recipes from db.json
    fetch(BaseUrl)
        .then(response => response.json())
        .then(recipes => {
            recipes.forEach(recipe => {
                const recipeCard = document.createElement("div");
                recipeCard.classList.add("recipe-card");
                recipeCard.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
                    <h3>${recipe.name}</h3>
            

                `
});
        
