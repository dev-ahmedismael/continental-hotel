import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowsFullscreen } from "react-icons/bs";
import { ImEye } from "react-icons/im";
import { FaBed } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Link from "next/link";

const Villas = (props) => {
  const accommodation = props.accommodation;
  return (
    <section className="py-5">
      <Container>
        {accommodation
          .filter((e) => {
            return e.type === "villa";
          })
          .map((villa) =>
            villa.sn % 2 !== 0 ? (
              <div className="py-5" key={villa.id}>
                <div className="bg-light">
                  <Row>
                    <Col lg={5}>
                      <div
                        className="bg-light p-3 shadow"
                        style={{ height: "100%" }}
                      >
                        <img
                          src={villa.images[0]}
                          alt={villa.title}
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </Col>
                    <Col lg={7} className="p-5">
                      <div className="px-5">
                        <h2 className="pb-3">{villa.title}</h2>
                        <div style={{ lineHeight: "0.5" }}>
                          <p>
                            <BsArrowsFullscreen /> {villa.size}
                          </p>
                          <p>
                            <ImEye /> {""}
                            {villa.seaview}
                          </p>
                          <p>
                            <FaBed /> {villa.bed}
                          </p>
                          <p>
                            <IoIosPeople /> {villa.guests}
                          </p>
                        </div>
                        <p>{villa.description}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="d-flex villas-subsection">
                  <div
                    style={{ width: "50%", position: "relative" }}
                    className="d-flex justify-content-end  villas-subsection"
                  >
                    <img
                      className=" villas-subsection"
                      src={villa.images[1]}
                      alt={villa.title}
                      width={200}
                      height={200}
                      style={{
                        position: "absolute",
                        bottom: "0",
                        border: "10px solid white",
                      }}
                    />
                  </div>
                  <div style={{ width: "50%" }} className=" villas-subsection">
                    <Link href={`/accommodation/${villa.id}`}>
                      <button>VIEW DETAILS</button>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-5" key={villa.id}>
                <div className="bg-light">
                  <Row>
                    <Col lg={7} className="p-5">
                      <div className="px-5">
                        <h2 className="pb-3">{villa.title}</h2>
                        <div style={{ lineHeight: "0.5" }}>
                          <p>
                            <BsArrowsFullscreen /> {villa.size}
                          </p>
                          <p>
                            <ImEye /> {""}
                            {villa.seaview}
                          </p>
                          <p>
                            <FaBed /> {villa.bed}
                          </p>
                          <p>
                            <IoIosPeople /> {villa.guests}
                          </p>
                        </div>
                        <p>{villa.description}</p>
                      </div>
                    </Col>
                    <Col lg={5}>
                      <div
                        className="bg-light p-3 shadow"
                        style={{ height: "100%" }}
                      >
                        <img
                          src={villa.images[0]}
                          alt={villa.title}
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="d-flex villas-subsection">
                  <div
                    style={{ width: "50%" }}
                    className="d-flex justify-content-end  villas-subsection"
                  >
                    <Link href={`/accommodation/${villa.id}`}>
                      <button className=" villas-subsection">
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                  <div
                    style={{ width: "50%", position: "relative" }}
                    className=" villas-subsection"
                  >
                    <img
                      src={villa.images[1]}
                      alt={villa.title}
                      width={200}
                      height={200}
                      style={{
                        position: "absolute",
                        bottom: "0",
                        border: "10px solid white",
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          )}
      </Container>
    </section>
  );
};

export default Villas;
