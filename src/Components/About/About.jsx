import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from "./About.module.css"
const About = () => {
    return (
        <div className={`${styles.about}`} id='about'>
            <Row>
                <Col md={6}>
                    <Container>
                     
                    </Container>
                </Col>
                <Col md={6}>
                    <Container></Container>
                </Col>
          </Row>
      </div>
    );
};

export default About;