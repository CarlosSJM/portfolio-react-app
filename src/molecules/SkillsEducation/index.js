import React, { Component } from 'react';
import './/style.css';
import {
    Col,
    Row
} from 'react-bootstrap';
// import SkillsLeft from '../skillsLeft';
// import EducationRight from '../EducationRight'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import {Modal, Button} from 'react-bootstrap';

// CLC
class SkillsEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openExperience : false,
            openSkills: false,
            openEducation : false,
        };
    }
 render(){
    const { openSkills, openEducation, openExperience} = this.state;
    return (
        <Row style={{height : 800}}>
            <Col xl={12} >
                        <div className="clc_main">
                            <div className="clc_container">

                                    <div className="AboutBtnContainer">
                                        <div className="left">
                                            <FontAwesomeIcon onClick={() => this.setState({ openSkills: true })} icon={faTools} className="left_icon" />
                                            <br/><br/>
                                            <span>Skills</span>
                                        </div>
                                        <div className="left">
                                            <FontAwesomeIcon onClick={() => this.setState({ openEducation: true })} icon={faUserGraduate} className="left_icon" />
                                            <br/><br/>
                                            <span>Education</span>
                                        </div>
                                        <div className="right"><
                                            FontAwesomeIcon onClick={() => this.setState({ openEducation: true })} icon={faBriefcase} className="left_icon" />
                                            <br/><br/>
                                            <span>Experience</span>
                                        </div>
                                        {/*<div className="right"><FontAwesomeIcon onClick={() => this.setState({ show: true })} icon={faGitAlt} className="right_icon"/><br/><br/>Projects</div>*/}
                                    </div>
                            </div>
                            <Modal show={openSkills} size="xl" centered>
                                <p>skills</p>

                                <Button onClick={() => this.setState({ openSkills: false })} variant="outline-light" size="lg" className="modal-exit-btn about_modal">
                                    Close
                                </Button>
                            </Modal>
                            <Modal show={openEducation} size="xl" centered>
                                <p>Education</p>

                                <Button onClick={() => this.setState({ openEducation: false })} variant="outline-light" size="lg" className="modal-exit-btn about_modal">
                                    Close
                                </Button>
                            </Modal>
                            <Modal show={openExperience} size="xl" centered>
                                <p>Esperience</p>

                                <Button onClick={() => this.setState({ openExperience: false })} variant="outline-light" size="lg" className="modal-exit-btn about_modal">
                                    Close
                                </Button>
                            </Modal>
                        </div>

                {/*<p>Skills</p>*/}
                {/*/!*< SkillsLeft/>*!/*/}
            </Col>
            {/*<Col xl={5}>*/}
            {/*    <p>Education</p>*/}
            {/*    /!*< EducationRight />*!/*/}
            {/*</Col>*/}
        </Row>
    );
 }
}
export default SkillsEducation;