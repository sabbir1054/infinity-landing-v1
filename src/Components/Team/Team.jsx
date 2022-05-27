import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import SingleTeam from "./SingleTeam";
import styles from "./Team.module.css";
const Team = () => {
    const member = [
      {
        memberId: "01",
        memberName: "Atiqul Ansari",
        memberPhoto: "/images/photo1.jpeg",
        memberPosition: "Principal & Creative Director (CEO)",
      },

      {
        memberId: "02",
        memberName: "Muhammad Sabbir",
        memberPhoto: "/images/photo2.png",
        memberPosition: "Senior MERN  Stack Developer (Project Manager)",
      },
      {
        memberId: "03",
        memberName: "Ebrahim Rhaman",
        memberPhoto: "/images/photo3.jpeg",
        memberPosition: "Senior Mobile App (Android) Developer",
      },
      {
        memberId: "04",
        memberName: "Nur Hossain",
        memberPhoto: "/images/photo4.JPG",
        memberPosition: "Senior Frontend Developer (MERN)",
      },
      {
        memberId: "05",
        memberName: "Tareque Ahmed",
        memberPhoto: "/images/photo5.JPG",
        memberPosition: "Senior Web Designer and Developer",
      },
    ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={`${styles.team_wrapper} position-relative py-5 bg-light`}>
      <Container className="py-5">
        <div className={`${styles.team_text}`}>
          <h2 className="text-center fw-bold pb-4">
            Our <span className={styles.colored_text}>Team</span>
          </h2>
        </div>
          {" "}
          <Slider {...settings}>
            {member.map((data) => (
              <SingleTeam data={data} key={data.memberId}></SingleTeam>
            ))}
          </Slider>
       
      </Container>
    </div>
  );
};

export default Team;
