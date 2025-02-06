import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './mainmanu.css'

const MainMenu = () => {
    const [data, setData] = useState([
        {
            id: 1,
            category: "South Indian",
            description: "Discover authentic South Indian flavors"
        },
        {
            id: 2,
            category: "North Indian",
            description: "Experience rich North Indian cuisine"
        },
        {
            id: 3,
            category: "Chinese",
            description: "Explore delicious Chinese dishes"
        }
    ]);

    const navigate = useNavigate();

    return (
        <div className="menu-container">
            <h1 className="menu-title">Main Menu</h1>
            <div className="menu-grid">
                {data.map((category) => (
                    <div 
                        key={category.id}
                        onClick={() => navigate(`/dish/${category.category}`)}
                        className="category-card"
                    >
                        <img 
                            src={`https://via.placeholder.com/400x300`}
                            alt={category.category}
                            className="category-image"
                        />
                        <div className="category-content">
                            <h2 className="category-title">{category.category}</h2>
                            <p className="category-description">{category.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainMenu;