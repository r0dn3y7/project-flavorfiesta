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
    then(response => response.json())
    .then(recipes => {
        recipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
                <h3>${recipe.name}</h3>
            `;

        // Open modal when recipe is clicked
         recipeCard.addEventListener("click", () => {
            openModal(recipe);
            });
            // Append the recipe card to the container
            recipeContainer.appendChild(recipeCard);
        });
    })
    .catch(error => console.error("Error fetching recipes:", error));

     // Function to open the modal
     function openModal(recipe) {
        modalTitle.textContent = recipe.name; // Set the recipe name
        modalImage.src = recipe.image; // Set the recipe image
        modalIngredients.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join(""); // List ingredients
        modalInstructions.textContent = recipe.instructions; // Set the instructions
        modal.style.display = "block"; // Show the modal
     }

      // Event listener to close modal when close button is clicked
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
});
