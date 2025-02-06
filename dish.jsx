import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './dish.css';
import { Link } from 'react-router-dom';

const Dish = () => {
  const [fooditem, setfooditem] = useState([
    { id: 1, name: "Dosa", category: "South Indian" },
    { id: 2, name: "Idli", category: "South Indian" },
    { id: 3, name: "Uttapam", category: "South Indian" },
    { id: 4, name: "Medu Vada", category: "South Indian" },
    { id: 5, name: "Sambar", category: "South Indian" },
    { id: 6, name: "Chole Bhature", category: "North Indian" },
    { id: 7, name: "Butter Chicken", category: "North Indian" },
    { id: 8, name: "Palak Paneer", category: "North Indian" },
    { id: 9, name: "Rajma Chawal", category: "North Indian" },
    { id: 10, name: "Aloo Paratha", category: "North Indian" },
    { id: 11, name: "Manchurian", category: "Chinese" },
    { id: 12, name: "Chow Mein", category: "Chinese" },
    { id: 13, name: "Spring Rolls", category: "Chinese" },
    { id: 14, name: "Sweet and Sour Chicken", category: "Chinese" },
    { id: 15, name: "Fried Rice", category: "Chinese" },
    { id: 16, name: "Momos", category: "Chinese" },
    { id: 17, name: "Hyderabadi Biryani", category: "South Indian" },
    { id: 18, name: "Malai Kofta", category: "North Indian" },
    { id: 19, name: "Hakka Noodles", category: "Chinese" },
    { id: 20, name: "Pongal", category: "South Indian" },
  ]);

  const { category } = useParams();
  const filteredItems = fooditem.filter((item) => item.category === category);

  return (
    <div className="container">
      <h2>Food Items</h2>
      <div className="food-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="food-card">
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <Link to= {`/recipes/${item.name}`}> <button>Get Ai recipe</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dish;
