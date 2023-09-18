import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


function Registration() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/auth/register',{username, password})
        .then(result => {
            navigate('/auth/login')
            console.log(result)
    }).catch(err => console.log(errs))
    }


  return (
    <div className='d-flex justify-content-center align-item-center vh-10'>
        <div className='p-3 border border-1 w-40'>
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='Enter Username' className='form-control'
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="username">Password</label>
                    <input type="text" placeholder='Enter Username' className='form-control'
                onChange={(e) => setPassword(e.target.value)}/>
                                         
                </div>
                <button className='btn btn-success w-100'>Submit</button>
                <span>Have an account?</span>
                <Link to='/auth/login'><button className='btn btn-success w-100 mt-2'>Login</button></Link>
            </form>

        </div>
      
    </div>
  )
}

export default Registration
