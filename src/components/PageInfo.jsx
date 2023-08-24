import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import Link from "next/link";

const PageInfo = () => {
  const pages = [
    {
      path: "/accommodation",
      title: "Accommodation",
      description:
        "Continental Hotel Hurghada offers 252 air-conditioned accommodations with private pools and safes. Rooms open to balconies. Beds feature pillowtop mattresses. LCD televisions come with cable channels. Bathrooms include slippers, complimentary toiletries and hair dryers. Guests can surf the web using the complimentary wired Internet access. Additionally, rooms include complimentary bottled water and coffee/tea makers. Housekeeping is provided daily.",
    },
    {
      path: "/restaurants-bars",
      title: "Restaurants & Bars",
      description:
        "A wide range of culinary delights awaits our guests in six different restaurants and bars, including daily buffets restaurant and as well Italian and Oriental à la carte specialty restaurants.",
    },
    {
      path: "/activities",
      title: "Activities",
      description:
        "Extensive leisure and sports options are available including a private sandy beach and marina, large swimming pool, diving and water sports, Health Club and Kids Club with playground.",
    },
    {
      path: "/meetings-events",
      title: "Meetings & Events",
      description:
        "We mix business with pleasure! Plan your event with ease with expert advice from our professional events team. Our stylish meeting and wedding rooms are the ideal venues for your next event. Creating a perfect atmosphere for more intimate and memorable occasions.",
    },
    {
      path: "/health-club",
      title: "Health Club",
      description:
        "Keep your health maintained with our Health Club. The best place to achieve your fitness goals, where you can relax and where you can feel confident knowing a staff of highly-trained professionals is there to guide you. The Health Club has the amenities you deserve.",
    },
    {
      path: "/gallery",
      title: "Gallery",
      description: "",
    },
    {
      path: "/offers",
      title: "Offers",
      description: "",
    },
    {
      path: "/contact-us",
      title: "Contact us",
      description: "",
    },
  ];

  const [page, setPage] = useState("");

  const router = useRouter();

  useEffect(() => {
    const page = pages.find((page) => {
      return page.path === router.pathname;
    });
    setPage(page);
  }, [router]);

  return (
    <div id="page-info" className="py-5">
      <Container>
        <h1>{page?.title}</h1>
        <p>{page?.description}</p>
        <div>
          <h5>
            <IoHome style={{ color: "#818A9C", fontSize: "16px" }} />{" "}
            <Link href="/" className="home-btn px-2">
              HOME
            </Link>{" "}
            <span style={{ color: "#818A9C" }}> {`>`} </span>{" "}
            <span className="px-2">{page?.title}</span>
          </h5>
        </div>
      </Container>
    </div>
  );
};

export default PageInfo;
