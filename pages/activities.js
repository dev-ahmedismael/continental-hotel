import Activities from "../src/components/Activities";

export default function activities({ data }) {
  return <Activities data={data} />;
}

export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { activities } = res;
  return {
    props: { data: activities },
  };
}
