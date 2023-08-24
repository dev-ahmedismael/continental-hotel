import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/Home.module.css";

const Hospitality = () => {
  return (
    <section className={styles.hospitality}>
      <div className={styles.layer}>
        <Container>
          <Row>
            <Col lg={6}>
              <h5>REDEFINES THE</h5>
              <h2>Luxury Hospitality Experience.</h2>
              <p>
                Nestled in Hurghada, on the west coast of the Red Sea, the
                Continental Hotel Hurghada spans a total of 135,000 sq. meters,
                surrounded by large gardens, situated on its own wide pristine
                sandy beach, offering spectacular views over the turquoise water
                and an amazing experience of a luxury life style, combined with
                the warmth of true Egyptian hospitality. The hotel has every
                possible feature to make your stay enjoyable with a peaceful and
                relaxing atmosphere.
              </p>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hospitality;
