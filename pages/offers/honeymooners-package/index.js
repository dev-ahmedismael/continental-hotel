import { Container } from "react-bootstrap";
import HoneyMooners from "../../../src/assets/images/honeymooners.jpg";
import Image from "next/image";

export default function honeymooners() {
  return (
    <section id="honeymooners" className="my-5">
      <Container>
        <Image
          src={HoneyMooners}
          alt="HoneyMooners"
          priority
          width="100%"
        ></Image>
        <div className="bg-light py-5 px-4">
          <h3>HONEYMOONERS PACKAGE</h3>
          <hr className="custom" />
          <p>
            Spend your perfect honeymoon with us 4 Days / 3 nights - Deluxe Room
            Sea View
          </p>
          <h3>OFFER DESCRIPTION</h3>
          <hr className="custom" />
          <p>
            Make unforgettable memories with your soulmate in a romantic getaway
            and experience a beach holiday like never before. We offer you
            lively vibes, a fabulous destination, and the best honeymoon
            vacation packages in town!
          </p>
          <h3>OFFER INCLUDE</h3>
          <hr className="custom" />
          <ul>
            <li>VIP Treatment.</li>
            <li>Free Room Service Breakfast.</li>
            <li>Honeymoon welcome drink to be served at the room.</li>
            <li>Honeymoon cake to be served at the room.</li>
            <li>
              One romantic candle light dinner at the Italian restaurant (à la
              carte / Set Menu).
            </li>
            <li>Two dinner at the Main restaurant.</li>
            <li>15% discount on à la carte restaurants (Dabka – Al dente)</li>
            <li>
              Complimentary late check-out till 15:00 p.m. (upon availability).
            </li>
            <li>Free access to the Fitness Room.</li>
            <li>30 Minutes Table tennis or billiard.</li>
            <li>10% discount on water sports activities.</li>
          </ul>
          <h3>OFFER TERMS</h3>
          <hr className="custom" />
          <p>
            The offer will be valid for the Egyptian & Foreign residents during
            the entire season except the period of high demand / Public
            holidays, the Birim periods, Xmas, New Year & Peak periods.
          </p>
          <h3>OFFER START DATE</h3>
          <hr className="custom" />
          <p>1 Jan 2022</p>
          <h3>OFFER FINISH DATE</h3>
          <hr className="custom" />
          <p>30 December 2022</p>

          <a
            href="https://www.book-secure.com/index.php?s=results&amp;property=eghur28217"
            target="_blank"
            rel="noreferrer"
          >
            <button>BOOK NOW</button>
          </a>
        </div>
      </Container>
    </section>
  );
}
