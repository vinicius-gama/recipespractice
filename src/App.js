import React, {useEffect, useState} from "react";
import Recipe from "./Recipe"
import './App.css';


const App = () => {

  const APP_ID ="1b553c6a";
  const APP_KEY = "38040ee82cf97d7a3f1eb13df09f839e";

const [recipes, setRecipes] = useState([])
const [search, setSearch] = useState("");
const [query, setQuery] = useState('chicken')

   useEffect(() => {
   getRecipes(); 
   }, [query]);
 const getRecipes = async () => {
   const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=1b553c6a&app_key=38040ee82cf97d7a3f1eb13df09f839e&imageSize=REGULAR&random=true`)
const data =  await response.json();
setRecipes(data.hits)
console.log(data.hits)
  

//  fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
//   .then(response => {
//     response.json
//   })
//   .then()
 }
const updateSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e =>
{
  e.preventDefault();
  setQuery(search)
  setSearch('')

}


  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" 
        type= "text" 
        value = {search} 
        onChange= {updateSearch}/>
        <button className ="search-button" type ="submit">
          Search 
          </button>
        </form>
  {recipes.map(recipe => (
    <Recipe key={recipe.recipe.label} label = {recipe.recipe.label} calories = {
    recipe.recipe.calories} image ={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
    />
  ))}
    </div>
  );
}

export default App;