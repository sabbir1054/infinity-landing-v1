import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./WhatWe.module.css";
const WhatWe = () => {
  const whatWe = [
    {
      cardId: "1",
      cardImg: "/images/what1.png",
      cardTitle: "Creative Design",
      cardText:
        " In this present world everything needs unique identity for show its power or beauty. For the unique identity we need creativity.Good creative design will help you create a strong impression, build a brand identity, convey key information, and build consumer trust.",
    },
    {
      cardId: "2",
      cardImg: "/images/what2.png",
      cardTitle: "Web App Development",
      cardText:
        "  Web app is like an application or software which run into the browser and perform with many interactivity. It reduces costs for both the end-user and the business. It is always up to date so all users can access the same version so it eliminates any compatibility issues.",
    },
    {
      cardId: "3",
      cardImg: "/images/what3.png",
      cardTitle: "App Development",
      cardText:
        " For make a huge amount of users a company must need a mobile application to give user better experience.Mobile devices are now a highly integral part of our everyday lives, seeing a high amount of usage time. App owners can leverage this channel to their brand's benefit.",
    },
  ];
  return (
    <div className="position-relative pt-5">
      <div className={`${styles.whatWe_wrapper} text-center `}>
        <Container className="w-50">
          <small className={`${styles.colored_text} fs-5`}>What We Do</small>
          <div className="title_text ">
            <h2 className="text-center pb-5">
              In a World of Technology, People Make the Difference
            </h2>
          </div>
        </Container>
      </div>
      <div className={`${styles.card_wrapper} pb-5`}>
        <Container>
          <Row>
            {whatWe.map((data) => (
              <Col md={4}>
                <Container className="d-flex justify-content-center">
                  <div className={`${styles.whatCard}`}>
                    <Card className={`${styles.card} text-center bg-light`}>
                      <Card.Body className="w-100">
                        <div className={`${styles.cardImg} py-3`}>
                          <img src={`${data.cardImg}`} alt="" width={60} />
                        </div>
                        <div className={`${styles.cardText} pt-4`}>
                          <h4 className=""> {data.cardTitle} </h4>
                          <p className="fs-5 ">{data.cardText}</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </Container>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WhatWe;
