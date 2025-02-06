import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './recipes.css'
import askai from '../utils/askai'
import { Link } from 'react-router-dom'

const Recipes = () => {
  const [airis, setAiris] = useState("");
  const [loading, setLoading] = useState(false);
  const { dishname } = useParams();
  
  async function recipeFinder() {
    setLoading(true);
    try {
      const res = await askai(`Give me a recipe for ${dishname} in simple and dotted points with clear ingredients in 200 words`);
      // Convert asterisks to bold tags
      const formattedRes = res.replace(/\*(.*?)\*/g, '<b>$1</b>');
      setAiris(formattedRes);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="recipe-container">
      <div className="recipe-header">
        <h1>Recipe</h1>
        <p>Here is the recipe for the selected dish</p>
        <Link to="/mainmanu">to main manu</Link>
        <div className="dish-name">{dishname}</div>
      </div>
      
      <section className="recipe-section">
        <h1>Recipe</h1>
        <button onClick={recipeFinder} disabled={loading}>
          {loading ? 'Loading...' : 'Get Recipe'}
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div 
            className="recipe-content"
            dangerouslySetInnerHTML={{ __html: airis }}
          />
        )}
      </section>
    </div>
  )
}

export default Recipes