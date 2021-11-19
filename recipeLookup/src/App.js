import "./App.css";
import Axios from "axios";
import {useState} from "react";
import RecipeTile from "./RecipeTile";
function App() {
  const [query, setQuery] = useState("")
  const [recipe, setRecipe] = useState([])
  const [healthLabel, setHealthLabel] = useState("vegan");
  const YOUR_APP_ID = "5d915c5d";
  const YOUR_APP_KEY = "f241f802b1887ceb0ed9ec25a264218a";

  var url =
    `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipe(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
      <h1>Food Recipe Plaza</h1>
      <form  onSubmit={onSubmit} className="app__searchForm"> 
      <input 
      type="text" 
      className="app__input"
      placeholder="enter ingridient"
      value={query} onChange={(e) => setQuery(e.target.value)} />
      <input className="app__submit" type="submit" value="Search" />

      <select className="app__healthLabels">
      <option onClick={() => {setHealthLabel("vegan")}}>Vegan</option>
      <option onClick={() => {setHealthLabel("Vegetarian")}}>Vegetarian</option>
      <option onClick={() => {setHealthLabel("Pescatarian")}}>Pescatarian</option>
      <option onClick={() => {setHealthLabel("Paleo")}}>Paleo</option>
      <option onClick={() => {setHealthLabel("Mediterranean")}}>Mediterranean</option>
      <option onClick={() => {setHealthLabel("DASH")}}>DASH</option>
      <option onClick={() => {setHealthLabel("Dairy-Free")}}>Dairy-Free</option>
      <option onClick={() => {setHealthLabel("Gluten-Free")}}>Gluten-Free</option>
      <option onClick={() => {setHealthLabel("Wheat-Free")}}>Wheat-Free</option>
      <option onClick={() => {setHealthLabel("Egg-Free")}}>Egg-Free</option>
      <option onClick={() => {setHealthLabel("Peanut-Free")}}>Peanut-Free</option>
      <option onClick={() => {setHealthLabel("Tree-Nut-Free")}}>Tree-Nut-Free</option>
      <option onClick={() => {setHealthLabel("Soy-Free")}}>Soy-Free</option>
      <option onClick={() => {setHealthLabel("Fish-Free")}}>Fish-Free</option>
      <option onClick={() => {setHealthLabel("Pork-Free")}}>Pork-Free</option>
      <option onClick={() => {setHealthLabel("Red-Meat-Free")}}>Red-Meat-Free</option>
      <option onClick={() => {setHealthLabel("Crustacean-Free")}}>Crustacean-Free</option>
      <option onClick={() => {setHealthLabel("Celery-Free")}}>Celery-Free</option>
      <option onClick={() => {setHealthLabel("Mustard-Free")}}>Mustard-Free</option>
      <option onClick={() => {setHealthLabel("Sesame-Free")}}>Sesame-Free</option>
      <option onClick={() => {setHealthLabel("Lupine-Free")}}>Lupine-Free</option>
      <option onClick={() => {setHealthLabel("Mollusk-Free")}}>Mollusk-Free</option>
      <option onClick={() => {setHealthLabel("Alcohol-Free")}}>Alcohol-Free</option>
      <option onClick={() => {setHealthLabel("No oil added")}}>No oil added</option>
      <option onClick={() => {setHealthLabel("Kosher")}}>Kosher</option>
      <option onClick={() => {setHealthLabel("Immuno-Supportive")}}>Immuno-Supportive</option>
      

      
      </select>
      </form>
      <div className="app__recipes">
        {recipe.map((recipe) => {
          return <RecipeTile recipeProp ={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
