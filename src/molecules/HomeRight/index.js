import React from 'react';
import '../HomeRight/style.css';
//import Foad from '../../assets/img/foad.png';
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
                <Col xl={12}>
                    <br />
                    {/*<Image src={Foad} className="home-right-main-img" alt="Image of Carlos San Juan Martin"/>*/}
                </Col>
                <Row className="home-right-footer" >
                    <SocialIcons />
                </Row>
            </Row>
        </Container>
    );
}

export default HomeRight;