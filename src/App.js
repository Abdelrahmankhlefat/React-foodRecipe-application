import { React, useEffect, useState } from 'react'
import Recipe from './Recipe'

function App() {
  const APP_ID = '7c3b610e'
  const App_KEY = '37feffe4a1b0caede9b8ec8e63c42b67'
  const exampleRequest = `https://api.edamam.com/api/recipes/v2?type=public&app_id=7c3b610e&app_key=37feffe4a1b0caede9b8ec8e63c42b67`

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')
  useEffect(() => {
    getRecipes()
  }, [query])

  const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=7c3b610e&app_key=37feffe4a1b0caede9b8ec8e63c42b67`
    )
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className='App'>
      <form action='' className='search-form' onSubmit={getSearch}>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe) => (
          <Recipe
            label='default'
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )
}

export default App
