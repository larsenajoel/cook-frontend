import React from "react";

const SearchRecipe = ({ title, calories, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories.toFixed()}</p>
    </div>
  );
};

export default SearchRecipe;
