import React from 'react';
import './/style.css';
import {
    Col,
    Row
} from 'react-bootstrap';
// import SkillsLeft from '../skillsLeft';
// import EducationRight from '../EducationRight'

function SkillsEducation() {
    return (
        <Row style={{height : 800}}>
            <Col xl={7} >
                <p>Skills</p>
                {/*< SkillsLeft/>*/}
            </Col>
            <Col xl={5}>
                <p>Education</p>
                {/*< EducationRight />*/}
            </Col>
        </Row>
    );
}

export default SkillsEducation;