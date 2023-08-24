import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import React, { Fragment } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Head from "next/head";

export default function contactus() {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const socialMedia = [
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
    <Fragment>
      <Head>
        <title>Contact Us</title>
      </Head>
      <section id="contact-us">
        <Container>
          <Row>
            <Col lg={6} className="py-5">
              <h5>FRONT DESK</h5>
              <p>El Fareek Yousef Affify St PO Box 36 Hurghada, Egypt 84511</p>
              <p>Phone : +20 65-346-5100</p>
              <p>Fax : +20 65-346-5101</p>
              <p>EMAIL : reservation@continental-hurghada.com</p>
              {socialMedia.map((e) => (
                <a
                  key={e.id}
                  href={e.link}
                  target="_blank"
                  rel="noreferrer"
                  className="me-2"
                >
                  {e.content}
                </a>
              ))}
            </Col>
            <Col lg={6} className="p-5 bg-light shadow">
              <Container>
                <Formik
                  initialValues={{
                    firstName: "",
                    email: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="d-flex flex-column">
                      <h5>KEEP IN TOUCH WITH US</h5>
                      <p>
                        We are eager to hear from you, please fill in your
                        contact information and one of our staff members will
                        contact you shortly.
                      </p>
                      <Field name="firstName" placeholder="NAME" />
                      {errors.firstName && touched.firstName ? (
                        <div>{errors.firstName}</div>
                      ) : null}

                      <span className="d-flex justify-content-between">
                        <Field
                          name="phone"
                          placeholder="PHONE"
                          style={{ width: "100%" }}
                          className="me-1"
                        />
                        <Field
                          name="email"
                          placeholder="EMAIL"
                          style={{ width: "100%" }}
                          className="ms-1"
                        />
                      </span>
                      <span className="d-flex justify-content-between">
                        <div style={{ width: "100%" }}></div>
                        {errors.email && touched.email ? (
                          <div style={{ width: "100%" }} className="ms-2">
                            {errors.email}
                          </div>
                        ) : null}
                      </span>

                      <textarea placeholder="MESSAGE" rows={5}></textarea>
                      <span className="d-flex justify-content-between">
                        <span>* Please fill in all of the required fields</span>
                        <button type="submit">Submit</button>
                      </span>
                    </Form>
                  )}
                </Formik>
              </Container>
            </Col>
          </Row>
        </Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33771.522209652256!2d33.83173521930455!3d27.16277110816446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6c0c82b597202ad4!2sContinental%20Hotel%20Hurghada!5e0!3m2!1sen!2seg!4v1673030483322!5m2!1sen!2seg"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="my-5"
        ></iframe>
      </section>
    </Fragment>
  );
}
