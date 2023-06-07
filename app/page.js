import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import NavBar from "@/components/NavBar";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("books").select();
  // return <pre>{JSON.stringify(data, null, 2)}</pre>;

  return (
    <>
      <NavBar />

      <section>
        <div>
          {data?.map(({ title }) => (
            <div>
              <ul>
                <p>{title}</p>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
