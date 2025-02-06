import React from 'react'
import Navbar from './componentes/NavBar/navbar'
import Sidebar from './componentes/sidebar/sidebar'
import Home from './pages/home'
import CustomDish from './pages/customdish'
import Dish from './pages/dish'
import MainMenu from './pages/mainmanu'
import Recipes from './pages/recipes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/mainmanu' element={<MainMenu/>}/>
            <Route path='/customdish' element={<CustomDish/>}/>
            <Route path='/recipes/:dishname' element={<Recipes/>}/>
            <Route path='/dish/:category' element={<Dish/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;