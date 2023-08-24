import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/Home.module.css";

const LatestNews = (props) => {
  const latestNews = props.latestNews;
  return (
    <section className="py-5">
      <h2 className="pb-5 text-center">Latest News</h2>
      <Container>
        <Row className="gx-2">
          {latestNews.map((e) => (
            <Col key={e.id} lg={3} className="bg-light">
              <div className={styles.newsWrapper}>
                <img src={e.img} alt="news" width="100%" />
                <div className={`${styles.newsDate} p-2`}>{e.date}</div>
              </div>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LatestNews;
