import React, { useState } from "react";
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";
import styles from "./Portfolio.module.css";
const Portfolio = () => {

  const projectName = [
    {
      imgId: "01",
      imgUrl: "/images/project01.png",
      webLink: "https://medicare-c15c1.web.app/",
    },
    {
      imgId: "02",
      imgUrl: "/images/project02.png",
      webLink: "https://food-sender-muhammadsabbir.web.app/",
    },
    {
      imgId: "03",
      imgUrl: "/images/project03.png",
      webLink: "https://drone-galaxy-muhammad.web.app/",
    },
    {
      imgId: "04",
      imgUrl: "/images/project04.png",
      webLink: "https://car-bro-4747.firebaseapp.com/",
    },
    {
      imgId: "05",
      imgUrl: "/images/project05.png",
      webLink: "https://project-pi-b18db.web.app/login",
    },
    {
      imgId: "06",
      imgUrl: "/images/project06.png",
      webLink: "https://incredible-tulumba-e22a3c.netlify.app/",
    },
    {
      imgId: "07",
      imgUrl: "/images/project07.png",
      webLink: "https://sabbir1054.github.io/Practice-Project-19/",
    },
    {
      imgId: "08",
      imgUrl: "/images/project08.png",
      webLink: "https://sabbir1054.github.io/caravana-pizza-restaurant/",
    },
  ];
  return (
    <div className="position-relative pt-5 mt-5" id="portfolio">
      <Container>
        <h2 className={`${styles.portfolio_title} text-center py-5`}>
          Our <span className={`${styles.colored_text}`}>Portfolio</span>
        </h2>
        <Row xs={1} md={2} className="g-3 pb-5">
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
                    <NavLink href={`${data.webLink}`} target='blank' className='text-white'>Click Here</NavLink>
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
