import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
                <Link className='navbar-brand' to='/'>Food Recipe</Link>
                <ul className='navbar-nav ms-2 me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link className='nav-link text-white' to='/recipe/create-recipe' aria-currents="page">Create</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-white' to='/recipe/saved-recipe' >Saved Recipe</Link>
                    </li>
                </ul>

            <button className='btn btn-outline-light' type='submit'> <Link to = '/auth/register' className='text-decoration-none'>Login/Register</Link></button>

            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
