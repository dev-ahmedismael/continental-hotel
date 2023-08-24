import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Awards = (props) => {
  const awards = props.awards;
  return (
    <section className="py-5">
      <h2 className="pb-5 text-center">Awards and Achievements</h2>
      <Container>
        <Row className="g-3">
          {awards.map((award) => (
            <Col key={award.id} lg={3}>
              <img
                src={award.img}
                alt="award"
                width="100%"
                className="p-5 rounded-5 bg-light"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Awards;
