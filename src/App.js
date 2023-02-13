import { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard";
import "./App.css";
import SearchBar from "./components/SearchBar";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  //Function to fetch data from the api
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = event  =>{
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className='container'>
      <h1>My Recipes </h1>
      < SearchBar
      handleSubmit={handleSubmit}
      value={query}
      onChange={event => setQuery(event.target.value)} isLoading={isLoading}
      />
      <div className="recipes">
        { recipes ? recipes.map(recipe =>(
          <RecipeCard
          key={recipe.idMeal}
          recipe={recipe} />
        )) : 'No Recipe found for your search term!'}
      </div>
    </div>
  );
}

export default App;
