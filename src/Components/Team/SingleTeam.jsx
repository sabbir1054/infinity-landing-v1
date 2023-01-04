import React from "react";
import { Card } from "react-bootstrap";
import styles from "./Team.module.css";

const SingleTeam = ({ data }) => {
  return (
    <>
      <Card
        className={`${styles.teamCard} text-center ms-5`}
        style={{ width: "320px" }}
      >
        <Card.Body className="d-flex justify-content-center rounded">
          <img src={`${data.memberPhoto}`} alt="" width={300} height={350} />
        </Card.Body>
        <div className={`{styles.details}`}>
          <h4 className={`${styles.colored_text}`}>{data.memberName}</h4>
          <p className="fs-5">{data.memberPosition}</p>
        </div>
        <Card.Footer className={styles.cardFooter}>
          {/* <p className="d-inline-block g-0 py-0 me-3">Contact: </p> */}
          <a href={`${data.fid}`} target="blank">
            {" "}
            <img
              src="/images/facebook.png"
              alt=""
              srcset=""
              // className="d-inline-block mx-2 "
              width={30}
            />
          </a>
          <a href={`${data.git}`} target="blank">
            {" "}
            <img
              src="/images/git.png"
              alt=""
              srcset=""
              // className="d-inline-block mx-2 "
              width={40}
            />
          </a>
          <a href={`${data.linked}`} target="blank">
            {" "}
            <img
              src="/images/linkedin.png"
              alt=""
              srcset=""
              // className="d-inline-block mx-2 "
              width={35}
            />
          </a>
          <a href={`https://wa.me/${data.wts}`} target="blank">
            <img
              src="/images/wtsap.png"
              alt=""
              srcset=""
              // className="d-inline-block mx-2"
              width={40}
            />
          </a>
        </Card.Footer>
      </Card>
    </>
  );
};

export default SingleTeam;
