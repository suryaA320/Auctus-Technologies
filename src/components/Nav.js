/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';
import '../App.css';
import { useNavigate } from "react-router-dom";
import UserToggle from './UserToggle';


const Nav = () => {

    const [showprofileToggle, setShowProfileToggle] = useState(false);

    let navigate = useNavigate();

    const homePage = () => {
        let path = `/`;
        navigate(path);
    }

    const aboutUs = () => {
        let path = '/about-us';
        navigate(path);
    }

    const contactUs = () => {
        let path = '/contact-us';
        navigate(path);
    }

    return (
        <div className="container-fluid" style={{paddingLeft:'0px', paddingRight:'0px'}}>
            <div className='top-navbar'>
                <nav className="navbar navbar-default" role="navigation">

                    <a className="navbar-brand" type='button' onClick={homePage}>Auctus Technologies</a>

                    <ul className="nav">
                        <li className="nav-item">
                            <a type='button' className="links" onClick={homePage}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a type='button' className="links">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a type='button' onClick={aboutUs} className="links">About us</a>
                        </li>
                        <li className="nav-item">
                            <a type='button' onClick={contactUs} className="links">Contact us</a>
                        </li>
                    </ul>


                    <div className='icons'>

                    </div>
                </nav>
            </div>

        </div>

    )
}

export default Nav;