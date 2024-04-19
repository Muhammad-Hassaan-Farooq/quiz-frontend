import React, { useEffect, useState } from "react";
import axios from "axios";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get("http://localhost:3000/recipe", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setRecipes(response.data.data);
      console.log(response.data.data);
    };

    fetchRecipes();
  }, []);
  console.log(recipes);
  return (
    <div>
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <ul>
              {recipe.ingredients.map((ingredient) => {
                return <li>{ingredient.name}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Recipe;
