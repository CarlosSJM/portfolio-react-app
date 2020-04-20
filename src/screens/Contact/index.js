import React from 'react';
import '../Contact/style.css';
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../molecules/Footer';
import Animate from 'react-smooth';
import Hamburger from '../../atoms/Hamburger';
import ContactSocial from '../../molecules/ContactSocial';
import EmailForm from '../../molecules/EmailForm';
//import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import {contactParticles} from '../../const/particle_desing.js';
import Particles from 'react-particles-js';

class Contact extends React.Component {

    componentDidMount() {
        // ReactGa.initialize("UA-154721739-1");
        // ReactGa.pageview('Contact Screen');
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact | Carlos San Juan Martin</title>
                    <link rel="canonical" href="http://www.google.com" />
                    <meta name="description" content="Carlos San Juan Martin | Contact - Full Stack | Software Engineer" />
                </Helmet>
                <Animate to="1" from="0" attributeName="opacity">
                    <Particles
                        params={contactParticles}
                        className="particle"
                    />
                    <Container className="Contact-header" fluid={true}>
                        <Row className="Hamburger-menu">
                            <Hamburger />
                        </Row>
                        <Row className="Contact-main">
                            <Col  xl={6}  className="Contact-left">
                                <ContactSocial />
                            </Col>
                            <Col  xl={6}  className="Contact-right">
                                <EmailForm />
                            </Col>
                        </Row>
                        <Row className="Contact-footer">
                            <Footer />
                        </Row>
                    </Container>
                </Animate>
            </div>
        )
    }
}export default Contact