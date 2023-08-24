import React, { useState, useCallback, Fragment } from "react";
import ImageViewer from "react-simple-image-viewer";
import { Col, Container, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import Head from "next/head";

const Gallery = (props) => {
  const images = props.images;
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const imagesSrc = [];
  images.map((img) => {
    imagesSrc.push(img.src);
  });

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const [active, setActive] = useState("ALL");

  const buttons = [
    "ALL",
    "OVERVIEW",
    "ACCOMMODATION",
    "RESTAURANTS & BARS",
    "ACTIVITIES",
    "MEETINGS & EVENTS",
  ];

  const [filteredImages, setFilteredImages] = useState(images);

  const filterImages = (category) => {
    const filteredImages = images.filter((img) => {
      return img.category === category;
    });
    category === "ALL"
      ? setFilteredImages(images)
      : setFilteredImages(filteredImages);
  };
  return (
    <Fragment>
      <Head>
        <title>Gallery</title>
      </Head>
      <section className="py-5">
        <Container>
          <div id="gallery-bar" className="my-5">
            {buttons.map((btn, index) => (
              <div
                key={index}
                className={`py-2 px-4 ${active === btn ? "active" : ""}  `}
                onClick={() => {
                  setActive(btn);
                  filterImages(btn);
                }}
              >
                {btn}
              </div>
            ))}
          </div>
          <Row>
            {filteredImages.map((image, index) => (
              <Col lg={4} key={index} className="py-3">
                <div className="gallery-item">
                  <img
                    src={image.src}
                    onClick={() => openImageViewer(index)}
                    width="100%"
                    height="250px"
                    alt="gallery image"
                  />
                  <span className="gallery-eye">
                    <FaEye className="eye-icon" />{" "}
                  </span>
                </div>
              </Col>
            ))}

            {isViewerOpen && (
              <ImageViewer
                src={imagesSrc}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
              />
            )}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Gallery;
