import Gallery from "../src/components/Gallery";

export default function gallery({ images }) {
  return <Gallery images={images} />;
}
export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { gallery } = res;
  return {
    props: { images: gallery },
  };
}
