import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Logo from "../assets/images/logo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useRouter } from "next/router";

const Header = () => {
  // Define if the current page is home page or not to conditionally change header background color
  const [isHomePage, setIsHomePage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.pathname === "/" ? setIsHomePage(true) : setIsHomePage(false);
  }, [router]);

  const contactInfo = [
    { id: "link1", link: "tel:+20653465100", content: "+20 65-346-5100" },
    {
      id: "link2",
      link: "https://www.facebook.com/contin2017/",
      content: <FaFacebookF />,
    },
    {
      id: "link3",
      link: "https://twitter.com/ContinentalHrg",
      content: <FaTwitter />,
    },
    {
      id: "link4",
      link: "https://www.instagram.com/continentalhotelhurghada/",
      content: <FaInstagram />,
    },
    {
      id: "link5",
      link: "https://www.linkedin.com/company/continental-hotel-hurghada/?originalSubdomain=eg",
      content: <FaLinkedinIn />,
    },
    {
      id: "link6",
      link: "https://www.tripadvisor.com/UserReviewEdit-g297549-d299112-Continental_Hotel_Hurghada-Hurghada_Red_Sea_and_Sinai.html",
      content: <FaTripadvisor />,
    },
    {
      id: "link7",
      link: "https://www.youtube.com/channel/UCjgQOp-7UqjVN-crWVuvpjg",
      content: <FaYoutube />,
    },
  ];

  const navLinks = [
    { id: "navlink1", title: "Home", link: "/" },
    { id: "navlink2", title: "Accommodation", link: "/accommodation" },
    { id: "navlink3", title: "Restaurants & Bars", link: "/restaurants-bars" },
    { id: "navlink4", title: "Activities", link: "activities" },
    { id: "navlink5", title: "Meetings & Events", link: "/meetings-events" },
    { id: "navlink6", title: "Gallery", link: "/gallery" },
    { id: "navlink7", title: "Offers", link: "/offers" },
    { id: "navlink8", title: "Contact us", link: "/contact-us" },
  ];

  return (
    <header
      style={{ backgroundColor: isHomePage ? "transparent" : "#24324a" }}
      className="pt-lg-5"
    >
      <Container>
        <div id="topbar">
          <div>
            {contactInfo.map((e) => (
              <a
                key={e.id}
                href={e.link}
                target="_blank"
                rel="noreferrer"
                className="me-3"
              >
                {e.content}
              </a>
            ))}
          </div>
          <div>
            <span className="me-3" style={{ color: "white" }}>
              EN
            </span>
            <span className="me-3">FR</span>
            <span className="me-3">AR</span>
            <span className="me-3">RU</span>
            <span>DE</span>
          </div>
        </div>
        <Navbar bg="transparent" expand="lg">
          <Container className="flex-sm-row flex-md-row flex-lg-column">
            <Link href="/" className="my-lg-4">
              <Image
                priority
                src={Logo}
                alt="Logo"
                width={270}
                height={61}
              ></Image>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                {navLinks.map((navlink) => (
                  <Link key={navlink.id} href={navlink.link} className="me-4">
                    {navlink.title.toUpperCase()}
                  </Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
