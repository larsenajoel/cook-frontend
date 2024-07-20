import { useState, useEffect } from "react";
import api from "../api";
import Recipe from "../components/Recipe";
import "../styles/Home.css";
import Nav from "../components/Nav";

function Home() {
  const [recipes, setrecipes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getrecipes();
  }, []);

  const getrecipes = () => {
    api
      .get("/api/recipes/")
      .then((res) => res.data)
      .then((data) => {
        setrecipes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteRecipe = (id) => {
    api
      .delete(`/api/recipes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("recipe deleted!");
        else alert("Failed to delete recipe.");
        getrecipes();
      })
      .catch((error) => alert(error));
  };

  const createRecipe = (e) => {
    e.preventDefault();
    api
      .post("/api/recipes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("recipe created!");
        else alert("Failed to make recipe.");
        getrecipes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div>
        <h2>Recipes</h2>
        {recipes.map((recipe) => (
          <Recipe recipe={recipe} onDelete={deleteRecipe} key={recipe.id} />
        ))}
      </div>
      <hr />

      <h2>Create a recipe</h2>
      <form onSubmit={createRecipe}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default Home;
