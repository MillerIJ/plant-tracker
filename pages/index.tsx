import { createClient } from "../utils/supabase/component";

export async function getServerSideProps() {
  const supabase = createClient();

  // Fetch data from external API
  const { data: plants, error } = await supabase.from("plants").select("*");
  if (error) {
    console.log(error);
  }

  // Pass data to the page via props
  return { props: { plants } };
}

export default function Page({ plants }) {
  return (
    <div>
      <h1>Home Page</h1>
      <p>plants:</p>
      <pre>{JSON.stringify(plants, null, 2)}</pre>
    </div>
  );
}
