import React from 'react';
import './/style.css';
import HomeLeft from '../../molecules/HomeLeft';
import HomeRight from '../../molecules/HomeRight';
import Footer from '../../molecules/Footer';
import Hamburger from '../../atoms/Hamburger';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import {homeParticles} from '../../const/particle_desing.js';
// import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';

// function Analytics(){
//     ReactGa.initialize("UA-154721739-1")
//     ReactGa.pageview('Home Screen')
// }

function Home() {
    // Analytics()
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Carlos San Juan Martin</title>
                <link rel="canonical" href="http://www.google.com" />
                <meta name="description" content="Carlos san Juan Martin | Home - Full Stack Developer | Software Engineer" />
            </Helmet>
            <Animate to="1" from="0" attributeName="opacity">
                <Particles
                    params={homeParticles}
                    className="particle"
                />
                <Container className="App-header" fluid={true}>
                    <Hamburger />
                    <Row className="App-main">
                        <Col  xl={7}  className="App-left">
                            <HomeLeft />
                        </Col>
                        <Col  xl={5} className="App-right">
                            <HomeRight />
                        </Col>
                    </Row>
                    <Row className="App-footer">
                        <Footer />
                    </Row>
                </Container>
            </Animate>
        </div>
    );
}

export default Home;