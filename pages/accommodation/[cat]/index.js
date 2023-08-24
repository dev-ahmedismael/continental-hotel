import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { Col, Container, Row } from "react-bootstrap";
import { PrevIcon } from "../../../src/assets/images/prev-light.png";

export default function categories({ unit }) {
  const images = unit.images.map((img) => {
    return { src: img };
  });
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="carousel-container">
              <div className="from-banner p-3">
                From US${unit.price} Per Night
              </div>
              <Carousel
                images={images}
                thumbnailWidth={"33%"}
                thumbnailHeight={"20%"}
                isAutoPlaying={false}
                hasIndexBoard={false}
                hasMediaButton={false}
              />
            </div>
            <div className="py-3">
              <h3>{unit.title}</h3>
              <p>{unit.description}</p>
            </div>
            <div className="py-3">
              {" "}
              <h5>Amenities:</h5>
              <p>
                All rooms are very spacious with comfortable furnishing, air
                conditioning, electronic door locks, and smoke detector,
                satellite TV, international direct dial telephone, minibar ,
                in-room safe, hairdryer, bathtub, tea and coffee making
                facilities. Extra bed and iron board available upon request.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <form id="book-form" className="bg-light d-flex flex-column p-5">
              <p>
                From <span style={{ color: "#fc8f00" }}>US${unit.price}</span>{" "}
                Per Night{" "}
              </p>
              <label htmlFor="checkin">CHECK IN</label>
              <input id="checkin" name="arrival" type="date" />
              <label htmlFor="checkout">CHECK Out</label>
              <input id="checkout" name="departure" type="date" />
              <label htmlFor="adults">Adults</label>
              <select id="adults" name="adults1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <label htmlFor="children">Children</label>
              <select id="children" name="children1">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <label htmlFor="CODE">PROMO CODE</label>
              <input type="text" className="mb-3" />
              <a
                href="https://www.book-secure.com/index.php?s=results&property=eghur28217"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button">BOOK NOW</button>
              </a>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export async function getStaticProps(context) {
  const id = context?.params.cat;
  const res = await import("../../data/data.json");
  const { accommodation } = res;
  const filteredUnit = accommodation.find((unit) => unit.id === id);
  return {
    props: { unit: filteredUnit },
  };
}
export async function getStaticPaths() {
  const res = await import("../../data/data.json");
  const { accommodation } = res;
  const paths = accommodation.map((path) => {
    return {
      params: {
        cat: path.id,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
