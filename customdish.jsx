import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import './CustomDish.css';
import askai from '../utils/askai';

const CustomDish = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  async function handleSubmit(e) {
    e.preventDefault();
    const ingredients = e.target[0].value;
    setIsLoading(true);
    try {
      let response = await askai(`I have a some ingredients ${ingredients} what can I make with them in 200 words`);
      setResult(response)
    } catch (error) {
      console.error('Error fetching recipe:', error);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <div className="recipe-container">
      <h2 className="recipe-title">Custom Dish Recipes</h2>
      
      <form onSubmit={handleSubmit} className="recipe-form">
        <div className="form-group">
          <input 
            type="text"
            placeholder="Enter a ingredient"
            className="recipe-input"
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? (
              <>
                <Loader2 className="loader" />
                Loading...
              </>
            ) : 'Get Recipe'}
          </button>
        </div>
      </form>
      
      {isLoading ? (
        <div className="loading-container">
          <Loader2 className="loader loader-large" />
        </div>
      ) : result ? (
        <div className="recipe-result">
          <p className="recipe-text">{result}</p>
        </div>
      ) : null}
    </div>
  );
};

export default CustomDish;