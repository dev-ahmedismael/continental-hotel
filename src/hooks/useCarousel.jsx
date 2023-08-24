import React, { Fragment } from "react";
import Image from "next/image";
import styles from "../../styles/Carousel.module.css";

const useCarousel = (images) => {
  return (
    <div className="p-3 bg-light shadow">
      <div
        id={images[0].carousel}
        className={`${styles.carousel} carousel slide`}
      >
        <div className={styles.buttonsWrapper}>
          <button
            className={`${styles.buttons} carousel-control-prev py-2 px-4`}
            type="button"
            data-bs-target={`#${images[0].carousel}`}
            data-bs-slide="prev"
          >
            <span
              className={`${styles.prevButtonIcon} carousel-control-prev-icon`}
              aria-hidden="true"
              style={{ width: "5px" }}
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className={`${styles.buttons} carousel-control-next py-2 px-4`}
            type="button"
            data-bs-target={`#${images[0].carousel}`}
            data-bs-slide="next"
          >
            <span
              className={`${styles.nextButtonIcon} carousel-control-next-icon`}
              aria-hidden="true"
              style={{ width: "5px" }}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="carousel-inner">
          {images.map((image) => (
            <Fragment key={image.id}>
              {image.id === images[0].id ? (
                <Fragment key={image.id}>
                  <div className="carousel-item active ">
                    <img
                      src={image.src}
                      className="d-block w-100"
                      alt="carousel-image"
                      width={300}
                      height={350}
                    />
                  </div>
                </Fragment>
              ) : (
                <Fragment key={image.id}>
                  <div className="carousel-item  ">
                    <Image
                      src={image.src}
                      className="d-block w-100"
                      alt="carousel-image"
                      width={300}
                      height={350}
                      priority
                    ></Image>
                  </div>
                </Fragment>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default useCarousel;
