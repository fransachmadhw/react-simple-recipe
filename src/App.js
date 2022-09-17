import React from 'react';
import { db } from './firebase.config';
import { collection, onSnapshot } from "firebase/firestore";

function App() {
  const [recipes, setRecipes] = React.useState([]);
  const [form, setForm] = React.useState({
    title: "",
    desc: "",
    ingredients: [],
    steps: []
  });
  const [popupActive, setPopupActive] = React.useState(false);

  const recipesCollectionRef = collection(db, "recipes");

  React.useEffect(() => {
    onSnapshot(recipesCollectionRef, snapshot => {
      setRecipes(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data()
        }
      }))
      console.log(snapshot);
    })
  }, [])

  return (
    <div className="App">
      <h1>My Recipes</h1>
      <button>Add a recipe</button>

      <div className='recipes'>
        {recipes.map((recipe, index) => (
          <div className='recipe' key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: recipe.desc }}></p>

            <div>
              <h4>Ingredients</h4>
              <ul>
                { recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                )) }
              </ul>

              <h4>Steps</h4>
              <ol>
                { recipe.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                )) }
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
