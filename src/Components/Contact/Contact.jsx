import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Contact.module.css";
import SendEmail from "./SendEmail";
import SocialContact from "./SocialContact";
const Contact = () => {
  return (
    <div className="position-relative bg-light" id="contact">
      <div className={`${styles.contact_wrapper} py-5`}>
        <div className={`${styles.colored_text} text-center pt-5`}>
          <h3 className="fw-bold pb-5">Get in to Touch</h3>
        </div>
        <div className={``}>
          <Container>
            <Row className={`${styles.left} g-0`}>
              <Col md={5}>
                <SocialContact></SocialContact>
              </Col>
              <Col md={7}>
                <SendEmail></SendEmail>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Contact;
