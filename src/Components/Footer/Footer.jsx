import React from 'react';
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <div className='position-relative pt-5 mt-5'>
            <div className={`${styles.footer_wrapper} text-center`}>
                <div className="footer-img d-flex justify-content-center">
                    <img src="/images/logo.png" alt="" width={100}/>
                </div>
                <h3 className='text-white text-center'>Infinity Algo Station</h3>
                <p className="fs-5 text-white">
                    Copyright @ 2022-2024 infinityalgostation.com . All Rights Reserved | <span className='fw-bold'>Privacy Policy</span>
                </p>
            </div>
        </div>
    );
};

export default Footer;