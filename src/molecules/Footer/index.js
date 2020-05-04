import React from 'react';
import '../Footer/style.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import logoReact from '../../assets/icon/react_logo.svg';
import logoRedux from '../../assets/icon/redux.svg'

function Footer() {
    return (
        <Container className="footer" fluid={true}>
            <Row >
                <Col xl={12}>
                    <span>2019-{(new Date().getFullYear())} <strong>Carlos San Juan Martin</strong>,  <small>Unreleased 0.5.0</small></span>
                    <img src={logoReact} className="App-logo" alt="logo" />
                    <img src={logoRedux} className="App-logo-redux" alt="logo" />
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
