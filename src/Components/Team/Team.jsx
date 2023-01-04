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
        fid: "https://facebook.com/atiqul.ansari.75",
        wts: "01717865265",
        git: "https://github.com/atiqul123",
        linked: "",
      },
      {
        memberId: "00",
        memberName: "Md. Masum Billah",
        memberPhoto: "/images/11.JPG",
        memberPosition: "Project Advisor  and Lecturer Department of (ITM) DIU",
        fid: "https://facebook.com/mdmasumbillahswe",
        wts: "01708611106",
        git: "",
        linked: "https://www.linkedin.com/in/md-masum-billah-78a185175/",
      },

      {
        memberId: "02",
        memberName: "Muhammad Sabbir",
        memberPhoto: "/images/photo2.png",
        memberPosition: "Senior MERN  Stack Developer (Project Manager)",
        fid: "https://facebook.com/sabbir.1054/",
        wts: "01733208221",
        git: "https://github.com/sabbir1054",
        linked: "https://www.linkedin.com/in/md-sabbir-hossain-1054/",
      },
      {
        memberId: "03",
        memberName: "Ebrahim Rhaman",
        memberPhoto: "/images/photo3.png",
        memberPosition: "Senior Mobile App (Android) Developer",
        fid: "https://facebook.com/profile.php?id=100087952092677",
        wts: "01749989506",
        git: "https://github.com/Ebrahim683",
        linked: "https://www.linkedin.com/in/md-ebrahim-rahman-345620185/",
      },
      {
        memberId: "04",
        memberName: "Nur Hossain",
        memberPhoto: "/images/pcf.png",
        memberPosition: "Senior Frontend Developer (MERN)",
        fid: "https://facebook.com/nurhossainfarid221",
        wts: "01841268946",
        git: "https://github.com/nurhossainfarid",
        linked: "https://www.linkedin.com/in/nur-hossain-farid-58725522a/",
      },
      {
        memberId: "05",
        memberName: "Tareque Ahmed",
        memberPhoto: "/images/photo5.png",
        memberPosition: "Senior Web Designer and Developer",
        fid: "https://facebook.com/mdtareque.ahmed.77",
        wts: "01712418146",
        git: "https://github.com/TAREQUE-AHMED",
        linked: "https://www.linkedin.com/in/mdtarequeahmed146/",
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
    <div className={`${styles.team_wrapper} position-relative py-5 bg-light`} id='team'>
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
