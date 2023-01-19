import { useEffect, useState } from "react";
import "./App.css";
import Recipes from "./Recipes";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [finalS, setFinalS] = useState("fish");

  const API_ID = "947d1048";
  const API_KEY = "9f3acd16c247affa97ef5c75a927f927";

  const getRecipes = async () => {
    const resp = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${finalS}&app_id=${API_ID}&app_key=${API_KEY}&diet=high-protein&health=alcohol-free&cuisineType=American&imageSize=REGULAR&random=true`
    );
    const data = await resp.json();
    setRecipe(data.hits);
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, [finalS]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };

  const handleSearch = () => {
    setFinalS(search);
    setSearch('')
  };

  return (
    <div className="main-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Recipe For"
          className="input-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button"> Search </button>
      </form>

      {recipe.map((r) => (
        <Recipes
          key={r.recipe.calories}
          title={r.recipe.label}
          image={r.recipe.image}
          calories={r.recipe.calories}
          ingredients={r.recipe.ingredientLines}
        />
      ))}
    </div>
  );
}

export default App;
