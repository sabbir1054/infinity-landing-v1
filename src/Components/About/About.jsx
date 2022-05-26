import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={`${styles.about}`} id="about">
      <Row className="w-100 g-0 d-flex align-items-center bg-light">
        <Col md={6} className=" px-5">
          <Container className={`${styles.about_left} py-5`}>
            <h1 className="display-5">
              About{" "}
              <span className={`${styles.colored_text}`}>
                Infinity Algo Station
              </span>
            </h1>
            <p className="text-justify fs-5">
              Infinity Algo Station is a kind of software firm. We provide any
              kind of software solution as you need. Our first goal is achieved
              client satisfaction . We make our software with all update
              technology. We serve our client any kind of Web App, Website amd
              Android App.Soon we will also provide you web security and app
              security. We have a dedicated hard working team to make sure
              fullfil client need.
            </p>
          </Container>
        </Col>
        <Col md={6} className={`${styles.about_right_bg}`}>
          <Container
            className={`${styles.about_right} d-flex flex-column align-items-center justify-content-center py-5`}
          >
            <img src="/images/logo.png" width={300} alt="" />
            <h2 className="text-white">Infinity Algo Station</h2>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default About;
