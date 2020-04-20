import React from 'react';
import '../Footer/style.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

function Footer() {
    return (
        <Container className="footer" fluid={true}>
            <Row >
                <Col xl={12}>
                    2019-{(new Date().getFullYear())} <strong>Carlos San Juan Martin</strong>,  <small>release 1.03</small>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
