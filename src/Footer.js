import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='row footer-row'>
                <div className='col-sm-6'>
                    <p>Receive email updates on products, launches, events etc.</p>
                    <input className="footer-input" type="email" placeholder="Your Email" />
                    <button className="btn footer-btn" type="submit">Subscribe</button>
                </div>


                <div className='col-sm-2'>
                    <p className='footer-p'>ABOUT SPC</p>
                    <p><a href='#' className='footer-a'>ABOUT US</a></p>
                    <p><a href='#' className='footer-a'>CONTACT</a></p>
                </div>

                <div className='col-sm-2'>
                    <p className='footer-p'>HELP</p>
                    <p><a href='#' className='footer-a'>BLOG</a></p>
                    <p><a href='#' className='footer-a'>HELP & FAQ</a></p>
                </div>

                <div className='col-sm-2'>
                    <p className='footer-p'>FOLLOW US</p>
                    <p><a href='#' className='footer-a1'><FaInstagram /> Instagram </a></p>
                    <p><a href='#' className='footer-a1'><FaFacebookF /> Facebook </a></p>
                    <p><a href='#' className='footer-a1'><FaTwitter /> Twitter </a></p>
                </div>
            </div>
        
        <hr className='footer-hr'/>
        
        <p className='copy'> &copy; 2020 SPC. All rights reserved.</p>

        </div>
    )
}

export default Footer