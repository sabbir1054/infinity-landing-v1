import React from 'react';
import styles from './Features.module.css'
import Slider from "react-slick";
import { Container } from 'react-bootstrap';
import SingleFeature from './SingleFeature';

const Features = () => {
  const featureData = [
    {
      fName: "Drag & Drop",
      fText:
        "Its a very popular and effective functionality for build any kind of software.",
      fImg: "/images/feature1.png",
    },
    {
      fName: "Fully Customizable",
      fText:
        "To get client satisfaction software or application need huge customization,",
      fImg: "/images/feature2.png",
    },
    {
      fName: "App Integration",
      fText:
        "Its a process of enabling independently design applications to work together",
      fImg: "/images/feature3.png",
    },
    {
      fName: "Color Scheme",
      fText:
        "Its a set of color use for build a better software.There should follow a single color scheme",
      fImg: "/images/feature4.png",
    },
    {
      fName: "High Resolution",
      fText:
        "For smooth and clear picture view every software should maintain good resolution for good user experience.",
      fImg: "/images/feature5.png",
    },
    {
      fName: "Perfect Showcase",
      fText:
        "For present a software or app or its documentation we need perfect showcase. ",
      fImg: "/images/feature6.png",
    },
    {
      fName: "User Analytics",
      fText:
        "User analytics is very much useful to analysis user and predict that what should software need to day by day",
      fImg: "/images/feature7.png",
    },
    {
      fName: "Multiple Layouts",
      fText:
        "For a best software we need to pay attention for multiple layouts that deals the software structure.",
      fImg: "/images/feature8.png",
    },
    {
      fName: "Responsive Design",
      fText:
        "Responsive design helps website to adapt any screen size. Website layouts vary for screen size ",
      fImg: "/images/feature9.png",
    },
    {
      fName: "24/7 Best Support",
      fText:
        "Our main strength is our live technical support. We can join any time to support our clients",
      fImg: "/images/feature10.png",
    },
    {
      fName: "App Integration",
      fText:
        "Its a process of enabling independently design applications to work together",
      fImg: "/images/feature3.png",
    },
    {
      fName: "Color Scheme",
      fText:
        "Its a set of color use for build a better software.There should follow a single color scheme",
      fImg: "/images/feature4.png",
    },
  ];
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        rows: 2,
        slidesPerRow: 1,
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
      <div className="position-relative text-center py-5 ">
        <div className={`${styles.colored_text} pt-5`}>
          <small className="fw-bold fs-5">Awesome Feature</small>
        </div>
        <Container className="w-50">
          <h1 className={`${styles.features_heading}  `}>
            Sometimes the best way to envision the future is to invent it.
          </h1>
        </Container>
        <div className={`${styles.slider_wrapper} bg-light`}>
          <Container className='py-5'>
            <Slider {...settings}>
              {featureData.map((data) => (<SingleFeature data={data} key={data.fName}></SingleFeature>))}
            </Slider>
          </Container>
        </div>
      </div>
    );
};

export default Features;