import Restaurants from "../src/components/Restaurants";

export default function restaurantsandbars({ data }) {
  return <Restaurants data={data} />;
}
export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { restaurantsandbars } = res;
  return {
    props: { data: restaurantsandbars },
  };
}
