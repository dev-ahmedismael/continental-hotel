import Meetings from "../src/components/Meetings";

export default function meetingsandevents({ data }) {
  return <Meetings data={data} />;
}

export async function getStaticProps() {
  const res = await import("./data/data.json");
  const { meetingsandevents } = res;
  return {
    props: { data: meetingsandevents },
  };
}
