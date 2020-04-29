import React from 'react';
import '../HomeRight/style.css';
import HomeImg from '../../assets/img/home_unedited.png';
import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';
import SocialIcons from '../../atoms/SocialIcons';

function HomeRight() {
    return (
        <Container className="home-right">
            <Row className="home-right-main">
                <Col className="home-right-main-container" xl={12}>
                    <br />
                    <Image src={HomeImg} className="home-right-main-container-img" alt="Image of Carlos San Juan Martin"/>
                </Col>
                <Row className="home-right-footer" >
                    <SocialIcons />
                </Row>
            </Row>
        </Container>
    );
}

export default HomeRight;