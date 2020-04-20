import React, { Component } from 'react';
import '../About/style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../../molecules/Footer';
import Animate from 'react-smooth';
//import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
//import CV from '../../components/cv';
import Hamburger from '../../atoms/Hamburger';
import {aboutParticles} from '../../const/particle_desing.js';
import Particles from 'react-particles-js';

class About extends Component {

    componentDidMount() {
        /*ReactGa.initialize("UA-154721739-1");
        ReactGa.pageview('About Screen');*/
    }

    render() {
        return (
            <Container className="About-header" fluid={true}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Carlos San Juan Martin</title>
                    <link rel="canonical" href="http://www.google.com/" />
                    <meta name="description" content="Carlos San Juan Martin - FullStack Developer | | Software Engineer -> Experienced Project" />
                </Helmet>
                <Animate to="1" from="0" attributeName="opacity">
                    <Particles
                        params={aboutParticles}
                        className="particle"
                    />
                    <Row className="About-main">
                        <Hamburger />
                        <div className="d1">
                            imagen CV fdfsadgfsagsag falta envoltorio de imagenes
                            {/*<CV />*/}
                        </div>
                    </Row>
                    <Row className="About-footer">
                        <Footer />
                    </Row>
                </Animate>
            </Container>
        );
    }
}

export default About;