import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <div className='navigation'>

            <div className="logo">
                <h5>Record Shop</h5>
            </div>
            <div className="menu">
                <NavLink to='/' activeClassName="selected">
                    Home
                </NavLink>
                <NavLink to='/shop'>Shop</NavLink>
            </div>
        </div>
    )
}
