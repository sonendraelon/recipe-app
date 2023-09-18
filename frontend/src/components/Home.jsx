import React, { useEffect } from 'react'

function Home() {
  useEffect(() =>{
    axios.get('http://localhost:3001/recipe/recipes').then(recipes =>{
      setRecipes(recipes.data)
    }).catch(er => console.log(er))
  },[])


  return (
    <div className='d-flex justify-content-cnter'>
      <div>
        <h2>Recipes</h2>{
          recipes.map(recipe => (
            <div key={recipe-_id} className='mt-4 p3 border'>
              <Link to = {`/read-recipe/${recipe._id}`} className = 'text-decoration-none'>
              <h3>{recipe.name}</h3>
              </Link>
              <img src="recipe.imageUrl" alt="Recipe" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
