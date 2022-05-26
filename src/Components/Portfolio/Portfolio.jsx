import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./Portfolio.module.css";
const Portfolio = () => {

  const projectName = [
    { imgId: "01", imgUrl: "/images/project01.png" },
    { imgId: "02", imgUrl: "/images/project02.png" },
    { imgId: "03", imgUrl: "/images/project03.png" },
    { imgId: "04", imgUrl: "/images/project04.png" },
    { imgId: "05", imgUrl: "/images/project05.png" },
    { imgId: "06", imgUrl: "/images/project06.png" },
    { imgId: "07", imgUrl: "/images/project07.png" },
    { imgId: "08", imgUrl: "/images/project08.png" },
  ];
  return (
    <div className="position-relative" id="portfolio">
      <Container>
        <h3 className={`${styles.portfolio_title} text-center py-5`}>
          Our <span className={`${styles.colored_text}`}>Portfolio</span>
        </h3>
        <Row xs={1} md={2} className="g-3 py-5">
          {projectName.map((data) => (
            <Col>
              <Card
                id="portCard"
                className={`${styles.card_wrapper} py-5 text-white bg-light`}
              >
                <Card.Img
                  src={`${data.imgUrl}`}
                  className={styles.cardImg}
                  alt="Card image"
                  width={100}
                />
                <div className={`${styles.overlay} text-center`}>
                  <div className={`${styles.text} btn btn-primary`}>
                    Click Here
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
