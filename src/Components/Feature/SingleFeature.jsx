import React from "react";
import styles from "./Features.module.css";
const SingleFeature = ({ data }) => {
  console.log(data);
    return (
      <div className={`${styles.singleFeature_wrap} mx-2 my-2`}>
        <div className={`${styles.feature_img} d-flex justify-content-center py-4`}>
          <img src={`${data.fImg}`} alt="" width={60} />
            </div>
            <div className={`${styles.feature_body} pb-5`}>
                <h4 className="text-white feature_title">
                    {data.fName}
                </h4>
                <p className="fs3 text-white ">
                    {data.fText}
                </p>
            </div>
      </div>
    );
};

export default SingleFeature;
