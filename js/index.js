document.addEventListener("DOMContentLoaded", () => {
    fetchRecipes();
    const baseUrl = "http://localhost:3000/recipes";
  });

  function fetchRecipes() {
    fetch("http://localhost:3000/recipes") 
      .then(response => response.json())
      .then(data => displayRecipes(data))
      .catch(error => console.error("Error fetching recipes:", error));
  }

