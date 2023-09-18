import { useState } from 'react'
import './App.css'
import Registration from './components/Registration'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import CreateRecipe from './components/CreateRecipe'
import SavedRecipe from './components/SavedRecipe'


function App() {

  return (
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/auth/register' element={<Registration/>}></Route>
    <Route path='/auth/login' element={<Login/>}></Route>
    <Route path='/recipe/create-recipe' element={<CreateRecipe/>}></Route>
    <Route path='/recipe/saved-recipe' element={<SavedRecipe/>}></Route>
  </Routes>
  </BrowserRouter> 
  )
}

export default App
