import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeAccommodation = (props) => {
  const accommodation = props.accommodation;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 2,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
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
      <div className="text-center py-5">
        <h5>EXPLORE</h5>
        <h2 className="pb-3">Accommodation</h2>
        <p>
          Continental Hotel Hurghada offers 252 air-conditioned accommodations
          with <br /> private pools and safes. Rooms open to balconies. Beds
          feature pillowtop mattresses. <br /> LCD televisions come with cable
          channels. Bathrooms include slippers, <br /> complimentary toiletries
          and hair dryers. Guests can surf the web using the <br />{" "}
          complimentary wired Internet access. Additionally, rooms include
          complimentary <br /> bottled water and coffee/tea makers. Housekeeping
          is provided daily.
        </p>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        ssr={true}
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        renderButtonGroupOutside={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {accommodation.map((e) => (
          <div className="px-4" key={e.id}>
            <img src={e.images[0]} alt={e.title} width="100%" />
            <div
              className="bg-light p-4 text-center d-flex flex-column justify-content-between"
              style={{ height: "250px" }}
            >
              <div>
                <h5>{e.title}</h5>
                <p>{e.description}</p>
              </div>
              <div>
                <Link href={`/accommodation/${e.id}`}>
                  <button>VIEW DETAILS</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HomeAccommodation;
