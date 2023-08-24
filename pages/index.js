import Head from "next/head";
import Awards from "../src/components/Home/Awards";
import Experience from "../src/components/Home/Experience";
import Hero from "../src/components/Home/Hero";
import HomeAccommodation from "../src/components/Home/HomeAccommodation";
import HomeGallery from "../src/components/Home/HomeGallery";
import HomeOffers from "../src/components/Home/HomeOffers";
import Hospitality from "../src/components/Home/Hospitality";
import LatestNews from "../src/components/Home/LatestNews";
import Villas from "../src/components/Home/Villas";
import Offers from "../src/components/Offers";

export default function Home({
  gallery,
  awards,
  latestNews,
  experience,
  accommodation,
}) {
  return (
    <>
      <Head>
        <title>Continental Hotel Hurghada</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Nestled in Hurghada, on the west coast of the Red Sea, the Continental Hotel Hurghada spans a total of 135,000 sq. meters, surrounded by large gardens"
        ></meta>
        <meta
          name="keywords"
          content="hurghada,red,red sea,egypt,egypt beach,hurghada hotel,hurghada beach,sharm el sheikh,africa,exotic,exotic holiday,safe,fun,activities,esaad younes,famous,reservation,reservations,snorkeling,diving,dive,wakeboard,water ski,surf,surfing,windsurfing,volleyball,volley,food,beach food,restaurant,all inclusive"
        ></meta>
        <meta itemprop="name" content="Continental Hotel Hurghada"></meta>
        <meta
          itemprop="description"
          content="Nestled in Hurghada, on the west coast of the Red Sea, the Continental Hotel Hurghada spans a total of 135,000 sq. meters, surrounded by large gardens"
        ></meta>
        <meta
          itemprop="image"
          content="https://continental-hurghada.com/public/frontend/google.jpg"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="Continental Hotel Hurghada"></meta>
        <meta name="twitter:title" content="Continental Hotel Hurghada"></meta>
        <meta
          name="twitter:description"
          content="Nestled in Hurghada, on the west coast of the Red Sea, the Continental Hotel Hurghada spans a total of 135,000 sq. meters, surrounded by large gardens"
        ></meta>
        <meta
          name="twitter:image:src"
          content="https://continental-hurghada.com/public/frontend/twitter.jpg"
        ></meta>
        <meta property="og:title" content="Continental Hotel Hurghada"></meta>
        <meta property="og:type" content="hotel"></meta>
        <meta
          property="og:image"
          content="https://continental-hurghada.com/public/frontend/facebook.jpg"
        ></meta>
        <meta
          property="og:description"
          content="Nestled in Hurghada, on the west coast of the Red Sea, the Continental Hotel Hurghada spans a total of 135,000 sq. meters, surrounded by large gardens"
        ></meta>
        <meta
          property="og:site_name"
          content="Continental Hotel Hurghada"
        ></meta>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://continental-hurghada.com/public/frontend/img/favicon.png"
        ></link>
        {/* Google Fonts */}
      </Head>
      <section>
        <Hero />
        <Hospitality />
        <HomeAccommodation accommodation={accommodation} />
        <Villas accommodation={accommodation} />
        <Experience experience={experience} />
        <HomeGallery gallery={gallery} />
        <HomeOffers />
        <Offers />
        <LatestNews latestNews={latestNews} />
        <Awards awards={awards} />
      </section>
    </>
  );
}
export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { gallery_carousel } = res;
  const { awards } = res;
  const { latest_news } = res;
  const { experience } = res;
  const { accommodation } = res;
  return {
    props: {
      gallery: gallery_carousel,
      awards,
      latestNews: latest_news,
      experience,
      accommodation,
    },
  };
}
