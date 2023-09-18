import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function CreateRecipe() {
    const [recipe, setRecipe] = useState({
        name: '',
        description:'',
        ingredients: '',
        imageUrl:'',
        userId: window.localStorage.getItem('id')
    })
    const handleChange = (event) => {
        const {name,value} = event.target
        setRecipe({...recipe,[name]:value})
    }
    const navigate = useNavigate()
    const handleSubmit =(event)=>{
       event.preventDefault()
       axios.post('http://localhost:3001/recipe/create-recipe',recipe).then(result => {
        navigate('/')
        console.log(result.data)
        alert("recipe created")
       }).catch(err => console.log(err))
    }
  return (
    <div className='d-flex justify-content-center align-item-center vh-10'>
        <div className='p-3 border border-1 w-40'>
            <h3>Create Recipe</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' name='name' onChange={handleChange}/>
                </div>
                <div className='mt-3'>
                    <label htmlFor="desc">Description</label>
                    <input type="text" placeholder='Enter Description' className='form-control' name='description' onChange={handleChange}/>
                </div>
                <div className='mt-3'>
                    <label htmlFor="ingr">Ingredients</label>
                    <input type="text" placeholder='Enter Ingredients' className='form-control' name='ingredients' onChange={handleChange}/>
                </div>
                <div className='mt-3'>
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" placeholder='Enter URL' className='form-control' name='imageUrl' onChange={handleChange}/>
                </div>
                
                <button className='mt-1 btn btn-success w-100 mt-2 mb-3'>Submit</button>
                
          </form>
        </div>
      
    </div>
  )
}

export default CreateRecipe
