import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
/* Ts Particle */
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "./Hero.module.css";
import HeroText from "./HeroText/HeroText";
const Hero = () => {
  const [defNav,setDefNav] = useState(false);
//scrolling navbar
    const listenScrollEvent = () => {
      window.scrollY > 20 ? setDefNav(true) : setDefNav(false);
   
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);

console.log(defNav);
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <div id="hero" className={`${styles.hero_wrapper}`}>
      {/* Particle */}
      <Particles
        className={`${styles.tsparticles}`}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      >
        {" "}
      </Particles>
      <div className={`${styles.heroNav}`}>
        <Navbar expand="lg" fixed={defNav?"top":""} className={`${ defNav?styles.scroll_nav:styles.default_nav}`}>
          <Container>
            <Navbar.Brand
              href="#home"
              className="text-white d-flex justify-content-center align-items-center"
            >
              <img
                src="/images/logo.png"
                width="40"
                height="40"
                className="me-2 d-inline-block align-top"
                alt="React Bootstrap logo"
              />
              <h4>Infinity Algo Station</h4>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className={styles.navbar_toggler_icon}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className="text-white fs-5">
                  Home
                </Nav.Link>
                <Nav.Link href="#link" className="text-white fs-5">
                  About
                </Nav.Link>
                <Nav.Link href="#link" className="text-white fs-5">
                  Portfolio
                </Nav.Link>
                <Nav.Link href="#link" className="text-white fs-5">
                  Team
                </Nav.Link>
                <Nav.Link href="#link" className="text-white fs-5">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div
        className={`${styles.hero_text} d-flex flex-column align-items-center`}
      >
        {/* <img src="/images/logo.png" alt="" width={300} className='img-fluid'/> */}
        <HeroText></HeroText>
        <p className="text-white fs-5  w-75">
          Welcome to our universe.We provide you any kind of software solution
          as you need. Our experienced and hard working team is always ready to
          serve you .To see our services and know about us first explore our
          universe
        </p>
        <div>
          <button className={`${styles.heroBtn1} me-2`}>
            <Nav.Link href="#portfolio" className="text-white fw-bold">
              Portfolio
            </Nav.Link>
          </button>
          <button className={`${styles.heroBtn2} ms-2`}>
            <Nav.Link href="#portfolio" className="text-white fw-bold">
              Contact
            </Nav.Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
