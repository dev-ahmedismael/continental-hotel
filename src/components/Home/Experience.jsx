import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

const Experience = (props) => {
  const experience = props.experience;

  return (
    <section className="py-5">
      <div className="text-center py-5 bg-light">
        <h5>CONTINENTAL HOTEL HURGHADA</h5>
        <h2 className="pb-3">Experience</h2>
        <p>
          Combined with the warmth of true Egyptian hospitality. The hotel has
          every possible <br /> feature to make your stay enjoyable with a
          peaceful and relaxing atmosphere.
        </p>
      </div>
      <Container>
        <Row className="g-4">
          {experience.map((e) => (
            <Col key={e.id} lg={6} style={{ overflow: "hidden" }}>
              <Link href={e.url}>
                <div className={`${styles.imgWrapper}  bg-light`}>
                  <img src={e.img} alt={e.title} width="100%" />
                  <div className={`${styles.imgCaption} px-3`}>
                    <h3>{e.title}</h3>
                    <p>{e.description}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
