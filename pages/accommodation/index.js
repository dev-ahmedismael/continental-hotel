import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { BsArrowsFullscreen } from "react-icons/bs";
import { ImEye } from "react-icons/im";
import { FaBed } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";

export default function accommodation({ data }) {
  return (
    <Fragment>
      <Head>
        <title>Accommodation</title>
      </Head>
      <section className="my-5">
        <Container>
          <Row className="g-4">
            {data.map((e) => (
              <Col key={e.id} lg={6}>
                <div className="bg-light p-4 rounded-4">
                  <img
                    src={e.images[0]}
                    alt={e.title}
                    width={"100%"}
                    height={400}
                  />
                  <div className="text-center">
                    <h2>{e.title}</h2>
                    <p>
                      <span className="starting-from--text">
                        Starting From{" "}
                      </span>
                      <span className="starting-from--price">
                        US${e.price} Per Night
                      </span>
                    </p>
                  </div>
                  <hr className="custom" />
                  <div>
                    <p>
                      <BsArrowsFullscreen /> {e.size}
                    </p>
                    <p>
                      <ImEye /> {e.seaview}
                    </p>
                    <p>
                      <FaBed /> {e.bed}
                    </p>
                    <p>
                      <IoIosPeople /> {e.guests}
                    </p>
                  </div>
                  <hr className="custom" />
                  <div className="pb-5">
                    <p>{e.description}</p>
                  </div>

                  <Link href={`/accommodation/${e.id}`}>
                    <button>VIEW DETAILS</button>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await import("../data/data.json");
  const { accommodation } = res;
  return {
    props: { data: accommodation },
  };
}
