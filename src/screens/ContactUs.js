import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import contact from '../images/ProductImages/Contact-us.png';
import { Col, Row } from 'reactstrap';


const contactUs = () => {
    return (
        <>
            <div>
                <Nav />
            </div>

            <div className='container'>
                <div className='row' >
                    <div></div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center' }}>
                        <img src={contact} alt="New York" class="img-fluid"
                            style={{ width: 'auto', height: '500px' }} />
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                        <h3 style={{ marginBottom: '50px' }}>Contact US</h3>

                        <Row>
                            <Col xs={12} md={4}>
                                <div>
                                    <h5>We Are Located @</h5>
                                    <p >Dwarakanagar<br />
                                        No.39,Chandana <br />
                                        near PESIT College <br />
                                        Banashankari 3rd Stage <br />
                                        Bengaluru, Karnataka 560085 <br />
                                        India<br></br>
                                    </p>
                                </div>
                            </Col>

                            <Col xs={12} md={4}>
                                <div>
                                    <h5>Get In Touch @</h5>
                                    <p>9743958588</p>
                                </div>
                            </Col>

                            <Col xs={12} md={4}>
                                <div>
                                    <h5>Write to Us @</h5>
                                    <p>auctustech.hr@gmail.com</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default contactUs