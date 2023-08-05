import react from 'react'

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className='recipe'>
      <h1 className='title'>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>calories: {calories}</p>

      <img className='rec-img' src={image} alt='' />
    </div>
  )
}

export default Recipe
