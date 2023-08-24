import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../../styles/Home.module.css";
import Header from "../Header";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className="d-flex flex-column " style={{ height: "100vh" }}>
        <Header />
        <div
          className="d-flex flex-column justify-content-around"
          style={{ height: "100%" }}
        >
          <div className={`${styles.heroContent} `}>
            <div className="text-center">
              <h5>WELCOME TO THE CONTINENTAL HOTEL</h5>
              <h1>Experience Luxury Hospitability</h1>
              <h3 style={{ fontWeight: "400px", fontStyle: "italic" }}>
                - in Hurghada -
              </h3>
            </div>
          </div>

          <div className={`${styles.booking} p-4`}>
            <Container>
              <form>
                <Row>
                  <Col lg={4} sm={12}>
                    <Row>
                      <Col className="d-flex flex-column">
                        <label htmlFor="checkin">CHECK IN</label>
                        <input
                          id="checkin"
                          type="date"
                          style={{ width: "100%" }}
                        />
                      </Col>
                      <Col className="d-flex flex-column">
                        <label htmlFor="checkout">CHECK OUT</label>
                        <input
                          id="checkin"
                          type="date"
                          style={{ width: "100%" }}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} sm={12}>
                    <Row>
                      <Col className="d-flex flex-column">
                        <label htmlFor="adults">ADULTS</label>
                        <select id="adults">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                        </select>
                      </Col>
                      <Col className="d-flex flex-column">
                        <label htmlFor="children">CHILDREN</label>
                        <select id="children">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4} sm={12}>
                    <Row>
                      <Col className="d-flex flex-column">
                        <label htmlFor="checkin">PROMO CODE</label>
                        <input
                          id="checkin"
                          type="text"
                          style={{ width: "100%" }}
                        />
                      </Col>
                      <Col className="d-flex flex-column justify-content-end">
                        <button
                          type="submit"
                          style={{ height: "40px", width: "100%" }}
                        >
                          BOOK NOW
                        </button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </form>
            </Container>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
