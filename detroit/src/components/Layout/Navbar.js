import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div id="Navbar">
            <nav className="navbar navbar-expand-sm bg-dark" Style='Color:white;'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <h1>                         
                        <Link to='/' className='Nav_link'>Ashish Alhat</Link>
                        </h1>
                    </li>
                   
                </ul>

            </nav>

        </div>
    )
}
