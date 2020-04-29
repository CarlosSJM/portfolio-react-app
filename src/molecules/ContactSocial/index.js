import React from 'react';
import '../ContactSocial/style.css';
import {Row, Col} from 'react-bootstrap';
import SocialIcons from '../../atoms/SocialIcons';

function ContactSocial() {
    return (
        <div>
            <Row className="Contact-text">
                <Col xl={12}>
                    <h1 className="p-heading1">Get In Touch</h1>
                    <p className="p-heading2">
                        Hi <strong>Visitor !!</strong><br />
                        First of all, thanks you for your visit. Maybe you have any <em>projects/queries/ideas/</em>,
                         if you want to see them come true, feel free to <strong>PING</strong> me.
                        I am always happy for a open and constructive discussion. You can contact me via the
                        Contact Form <strong>OR</strong> simply click on the social
                        network icon.
                    </p>
                </Col>
            </Row>

            <Row className="contact-left-footer" >
                <Col xl={12}>
                <SocialIcons />
                </Col>
            </Row>
        </div>
    );
}

export default ContactSocial;
