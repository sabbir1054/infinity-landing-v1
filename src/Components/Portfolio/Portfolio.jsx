import React from "react";
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";
import styles from "./Portfolio.module.css";
const Portfolio = () => {
  const projectName = [
    {
      imgId: "01",
      imgUrl: "/images/project00.png",
      webLink:
        "https://play.google.com/store/apps/details?id=com.infinityalgostation.niketonbd",
    },

    {
      imgId: "02",
      imgUrl: "/images/project001.png",
      webLink: "https://doctorsfinderbd1.web.app/",
    },

    {
      imgId: "03",
      imgUrl: "/images/project003.png",
      webLink: "https://infinity-event-organizer-4747.web.app/",
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
                    <NavLink
                      href={`${data.webLink}`}
                      target="blank"
                      className="text-white"
                    >
                      Click Here
                    </NavLink>
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
