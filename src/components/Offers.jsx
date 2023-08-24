import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OffersBanner from "../assets/images/offers-banner.jpg";
import HoneyMooners from "../assets/images/honeymooners.jpg";
import Image from "next/image";
import Link from "next/link";

const Offers = () => {
  return (
    <section id="offers">
      <Container>
        <div>
          <a
            href="https://www.book-secure.com/index.php?s=results&amp;property=eghur28217"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={OffersBanner}
              alt="Offers Banner"
              className="offers-banner"
              priority
            ></Image>
          </a>
        </div>
        <div className="bg-light">
          <Row className="my-5">
            <Col lg={4}>
              <div className="p-3 shadow">
                <Link href="/offers/honeymooners-package">
                  <Image
                    src={HoneyMooners}
                    alt="Honeymooners Package"
                    width={"100%"}
                    height={200}
                    priority
                  ></Image>
                </Link>
              </div>
            </Col>
            <Col lg={8} className="d-flex flex-column justify-content-center">
              <h2>
                <Link href="/offers/honeymooners-package">
                  Honeymooners Package
                </Link>{" "}
              </h2>
              <p>
                Spend your perfect honeymoon with us 4 Days / 3 nights - Deluxe
                Room Sea View
              </p>
              <span>
                <Link href="/offers/honeymooners-package">
                  <button>VIEW DETAILS</button>
                </Link>
              </span>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Offers;
