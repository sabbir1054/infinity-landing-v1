import React from 'react';
import { Card } from 'react-bootstrap';
import styles from "./Team.module.css"

const SingleTeam = ({data}) => {
    return (
      <>
        <Card className={`${styles.teamCard} text-center ms-5`} style={{ width: "300px" }}>
          <Card.Body className="d-flex justify-content-center rounded">
            <img src={`${data.memberPhoto}`} alt="" width={240} height={350} />
          </Card.Body>
          <div className={`{styles.details}`}>
                    <h4 className={`${styles.colored_text}`}>{data.memberName}</h4>
                    <p className="fs-5">{data.memberPosition }</p>
          </div>
        </Card>
      </>
    );
};

export default SingleTeam;