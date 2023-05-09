/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Col, Row } from 'reactstrap'
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import AboutUs from '../screens/AboutUs';

const Footer = () => {

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

    const privacyPolicy = () => {
        let path = '/privacy-policy';
        navigate(path);
    }

    return (
        <div className="container-fluid mt-5" id="footer" style={{ height: 'auto' }}>
            <Row style={{ marginTop: '50px', textAlign: 'center', paddingTop: '100px', paddingBottom: '100px' }}>
                <Col className='my-auto' xs={12} md={4} >
                    <p>Auctus Technologies is a skilled and dynamic company engaged in Human Resource Consulting services, 
                        primarily concentrating on Information Technology, ITES, BPO services. </p>



                </Col>
                <Col className='my-auto' xs={12} md={4}>
                    <p>Auctus Technologies</p>
                    <div className='socialMedia-icons'>
                        <ul className="nav" >
                            <li className="nav-item">
                                <a type='button' href='https://www.facebook.com/profile.php?id=100091064176070' className="links"><Icon.Facebook style={{ color: 'white' }} /></a>
                            </li>
                            <li className="nav-item">
                                <a type='button' className="links"><Icon.Instagram style={{ color: 'white' }} /></a>
                            </li>
                            <li className="nav-item">
                                <a type='button' className="links"><Icon.Youtube style={{ color: 'white' }} /></a>
                            </li>
                            <li className="nav-item">
                                <a type='button' href='https://www.linkedin.com/in/auctus-tech-a01a6926b' className="links"><Icon.Linkedin style={{ color: 'white' }} /></a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col className='my-auto' xs={12} md={2}>
                    <ul style={{ listStyleType: 'none', lineHeight: '50px' }}>
                        <li><a onClick={aboutUs} type='button'>About us</a></li>
                        <li><a onClick={contactUs} type='button'>Contact us</a></li>
                        <li><a onClick={privacyPolicy} type='button'>Privacy Policy</a></li>
                    </ul>
                </Col>
                <Col className='my-auto' xs={12} md={2}>
                    <ul style={{ listStyleType: 'none', lineHeight: '50px' }}>
                        <li><a onClick={privacyPolicy} type='button'>Privacy Policy</a></li>
                        <li>Terms Of Service</li>
                        <li>Blog</li>
                    </ul>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <p style={{ textAlign: 'center' }}>Copyright @ Auctus Technologies</p>
            </Row>
        </div>
    )
}

export default Footer