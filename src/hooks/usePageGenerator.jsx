import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/PageGenerator.module.css";
import Carousel from "../components/Carousel";

const usePageGenerator = (data) => {
  return data.map((e) => (
    <Container key={e.id} className={`${styles.container} my-5`}>
      <Row>
        {e.sn % 2 !== 0 ? (
          <Col lg={6} className={styles.content}>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <p>{e.text2}</p>
            <p>{e.text3}</p>
            <p>{e.text4}</p>
            <p>{e.text5}</p>
            <p>{e.text6}</p>
          </Col>
        ) : null}
        <Col lg={6} className="p-0">
          <Carousel images={e.images} />
        </Col>
        {e.sn % 2 === 0 ? (
          <Col lg={6} className={styles.content}>
            <h2>{e.title}</h2>
            <p>{e.description}</p>
            <p>{e.text2}</p>
            <p>{e.text3}</p>
            <p>{e.text4}</p>
            <p>{e.text5}</p>
            <p>{e.text6}</p>
          </Col>
        ) : null}
      </Row>
    </Container>
  ));
};

export default usePageGenerator;
