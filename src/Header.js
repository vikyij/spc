import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

import './Header.css'


function Header() {

    return (
        <div className='header-nav'>
            <nav className="navbar navbar-expand-sm navbar-dark">
                <Link className="navbar-brand" to='/'>SPC</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mr-auto" id="collapsibleNavbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/eyes'>Eyes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/lips'>Lips</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/face'>Face</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/nails'>Nails</Link>
                        </li>
                    </ul>
                    <form class="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn header-btn" type="submit"><FiSearch className='header-s' /></button>
                    </form>
                    <Link to='/cart'>
                        <button className='btn m-2 '>< FaShoppingCart className='my-cart' /></button>
                    </Link>
                </div>
            </nav>
        </div>

    )
}

export default Header