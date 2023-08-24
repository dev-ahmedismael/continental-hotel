import HealthClub from "../src/components/HealthClub";

export default function healthclub({ data }) {
  return <HealthClub data={data} />;
}
export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { health_club } = res;
  return {
    props: { data: health_club },
  };
}
