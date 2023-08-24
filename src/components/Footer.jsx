import React from "react";
import { Container } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaTelegramPlane } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import FooterLogo from "../assets/images/logo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useRouter } from "next/router";

const Footer = () => {
  const SubscribeSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const contactInfo = [
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
  return (
    <footer>
      <div id="footer-top">
        <Container>
          <div className="py-5">
            <p>SOCIAL MEDIA</p>
            <p>FOLLOW CONTINENTAL HOTEL HURGHADA</p>
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
          </div>
          <div id="footer-splitter" style={{ width: "1px" }}></div>
          <div className="py-5 text-lg-end">
            <p>NEWSLETTER</p>
            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={SubscribeSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form action="">
                  <div className="d-flex">
                    <Field
                      name="email"
                      type="text"
                      placeholder="ENTER YOUR E-MAIL ADDRESS"
                      className="px-4"
                    ></Field>
                    <button type="submit" style={{ width: "30px" }}>
                      <FaTelegramPlane style={{ color: "white" }} />
                    </button>
                  </div>

                  {errors.email && touched.email ? (
                    <div className="text-start">{errors.email}</div>
                  ) : null}
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </div>
      <div className="py-5 text-center" style={{ color: "#818A9C" }}>
        <Image
          priority
          src={FooterLogo}
          alt="Logo"
          width={220}
          height={50}
        ></Image>
        <p className="py-4">
          Copyright 2022. Continental Hotel Hurghada. All Rights Reserved.
        </p>
        <div className="d-flex justify-content-center flex-wrap">
          <a
            className="me-lg-3"
            target="_blank"
            rel="noreferrer"
            href="https://goo.gl/maps/dWndz4MYUGMJULj4A"
          >
            <FaTelegramPlane />
            El Fareek Yousef Affify St PO Box 36 Hurghada, Egypt 84511
          </a>
          <a
            className="me-lg-3"
            target="_blank"
            rel="noreferrer"
            href="tel:+20653465100"
          >
            <MdCall />
            +20 65-346-5100
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto: reservation@continental-hurghada.com"
          >
            <HiLocationMarker />
            reservation@continental-hurghada.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
