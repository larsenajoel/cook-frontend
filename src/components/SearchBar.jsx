import { useState, useEffect } from "react";

import "../styles/SearchBar.css";
import SearchRecipe from "./SearchRecipe";

export const SearchBar = ({ setResults }) => {
  const APP_ID = "e276a28a";
  const APP_KEY = "70e14ea92b6a59171f96bf62289a73b9";

  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [search]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&q=${search}&type=public&from=0&to=5`
    );
    const data = await response.json();
    setrecipes(data.hits);
    console.log(data);
  };

  const updateSearch = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div>
      <form onSubmit={getRecipes}>
        <input
          placeholder="Type to search..."
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="form-button" type="submit">
          Search
        </button>
      </form>
      <div>
        {recipes.map((recipe) => (
          <SearchRecipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
