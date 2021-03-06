import React from 'react';
import '../SocialIcons/style.css';
import {
    Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

/*Refactorizar a una funcion por icono para escalar mejor*/
function SocialIcons() {
    return (
        <Col xl={12} className="social-icons">
            &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="http://localhost:3000/home" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="fb" icon={faFacebook} />
            </a>
            <a href="http://localhost:3000/home" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="git" icon={faGithub} />
            </a>
            <a href="http://localhost:3000/home" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="twitter" icon={faTwitter} />
            </a>
            <a href="http://localhost:3000/home" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="insta" icon={faInstagram} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
            </a>
        </Col>
    );
}

export default SocialIcons;