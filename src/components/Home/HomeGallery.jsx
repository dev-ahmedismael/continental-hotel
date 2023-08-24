import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeGallery = (props) => {
  const gallery = props.gallery;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 1,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="py-5">
      <div className="text-center py-5 bg-light">
        <h5>GALLERY</h5>
        <h2>Discover The Hotel</h2>
      </div>
      <div id="home-gallery-carousel">
        <Carousel
          responsive={responsive}
          infinite={true}
          ssr={true}
          swipeable={true}
          draggable={true}
          keyBoardControl={true}
          renderButtonGroupOutside={true}
          centerMode={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {gallery.map((e, index) => (
            <div key={index}>
              <Link href="/gallery">
                <img src={e} alt="gallery-image" width="100%" height={400} />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default HomeGallery;
