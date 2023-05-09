import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
// import carousal_2 from '../images/carousImages/carousal_2.jpg';
import Bussiness_Meet from '../images/ProductImages/Bussiness_Meet.jpg';
import teamWork from '../images/ProductImages/teamWork.jpg';
import { Card, CardBody, CardText, Col, Row } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import Carousal from '../components/Carousal';
import * as Icon from 'react-bootstrap-icons';
import AuctusTechnologies from '../images/carousImages/AuctusTechnologies.jpg';
import Mission from '../images/ProductImages/mission.jpg';
import Vision from '../images/ProductImages/vision.jpg';

const AllProducts = () => {
    let navigate = useNavigate();

    const aboutUs = () => {
        let path = `/about-us`;
        navigate(path);
    }

    const contactUs = () => {
        let path = `/contact-us`;
        navigate(path);
    }


    return (
        <>
            <div><Nav /></div>


            <div className="container-fluid" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <Carousal />
            </div>

            <div className='container-fluid' >
                <div className='row' >

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center' }}>
                        <img src={Bussiness_Meet} alt="New York" className="d-block"
                            style={{ width: '100%', height: '500px' }} />
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                        <h1 style={{ marginBottom: '50px' }}>Who we Are</h1>
                        <p >Auctus Technologies is a skilled and dynamic company engaged in Human Resource Consulting services,
                            primarily concentrating on Information Technology, ITES, BPO services.
                            Auctus Technologies is serving some of the world’s finest organizations. Committed to achieve maximum customer satisfaction,
                            we offer personalized executive recruitment services with the objective of meeting the individual specific requirements of our
                            clients in a most efficient manner. Our team adheres to the norms, work culture and the code of ethics of our clients.</p>
                        <button className="shopnow" onClick={aboutUs} type="submit">About Us</button>
                    </div>

                </div>
            </div>


            <div className='container-fluid'>
                <div className='row' >

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center', paddingLeft: '50px', paddingRight: '50px' }}>
                        <h1 style={{ marginBottom: '50px' }}>Our Mission</h1>
                        <p >Committed to sustainability from the ground up.<br></br>
                            From recycled packaging, fibers, and even earth-inspired prints.<br></br>
                            Because we think swimwear should help clean up our waters, not pollute them.</p>
                        <button className="shopnow" onClick={contactUs} type="submit">Contact US</button>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id="ads_1" style={{ textAlign: 'center' }}>
                        <img src={teamWork} alt="New York" className="d-block"
                            style={{ width: '100%', height: '500px' }} />
                    </div>

                </div>
            </div>

            <div className='container' style={{ marginTop: '150px' }}>
                <Row>
                    <Col style={{textAlign:'center'}}>
                        <img src={Mission} className='image-fluid' height={500} width={500} />
                    </Col>
                    <Col style={{textAlign:'center'}}>
                        <img src={Vision} height={500} width={500} />
                    </Col>
                </Row>
            </div>

            <div className='container-fluid' style={{ marginTop: '50px' }}>
                <Row>
                    <img src={AuctusTechnologies} />
                </Row>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default AllProducts;