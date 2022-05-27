import React from 'react';
import { NavLink } from 'react-bootstrap';
import styles from './Contact.module.css'
const SocialContact = () => {
    return (
      <>
        <div className={`${styles.left} py-5`}>
          <div className="img p-5 d-flex justify-content-center">
            <img
              src="/images/logo.png"
              width={150}
              className="img-fluid"
              alt=""
            />
          </div>
          <h4 className="text-center text-light">Follow Us On</h4>
          <div className="icons d-md-flex justify-content-around px-5">
            <NavLink
              target="blank"
              href="https://www.facebook.com/profile.php?id=100081074061098"
            >
              <img src="/images/facebook.png" alt="" width={40} />
            </NavLink>
            <NavLink
              target="blank"
              href="https://www.instagram.com/infinityalgo/"
            >
              <img src="/images/instagram.png" alt="" width={40} />
            </NavLink>
            <NavLink
              target="blank"
              href="https://www.linkedin.com/in/infinity-algo-station-b82181240/"
            >
              <img src="/images/linkedin.png" alt="" width={40} />
            </NavLink>
            <NavLink
              target="blank"
              href="https://github.com/InfinityAlgoStation"
            >
              <img src="/images/github.png" alt="" width={40} />
            </NavLink>
          </div>
        </div>
      </>
    );
};

export default SocialContact;