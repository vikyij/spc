import React from 'react'
import { FiSearch } from "react-icons/fi";

import './Header.css'


function Header() {    

    return (
            <div className='header-nav'>
                <nav className="navbar navbar-expand-sm navbar-dark">
                    <a className="navbar-brand" href="#">SPC</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mr-auto" id="collapsibleNavbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Eyes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Lips</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Face</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nails</a>
                            </li>
                        </ul>
                        <form class="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn header-btn" type="submit"><FiSearch className='header-s' /></button>
                        </form>
                    </div>
                </nav>
            </div>           

    )
}

export default Header