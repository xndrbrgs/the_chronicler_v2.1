import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import defaultImage from "../../../assets/images/pexels-max-rahubovskiy-6969866.webp";

import localFont from "next/font/local";

const bigilla = localFont({
  src: [
    {
      path: "../../../assets/fonts/Bigilla-Bold.otf",
      display: "normal",
    },
    {
      path: "../../../assets/fonts/Bigilla.otf",
      display: "normal",
    },
  ],
});

async function bookPage({ params: { id } }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("books").select().match({ id }).single();

  if (!data) {
    notFound();
  }
  // return <pre>{JSON.stringify(data, null, 2)}</pre>

  return (
    <>
      <NavBar />

      <section className="bg-hero-pattern">
        <div className="max-w-7xl mx-auto flex py-12">
          <div className="w-[40%]">
            <div
              className="relative h-20 w-20 md:h-[460px] md:w-[310px] shadow-md hover:shadow-xl hover:scale-95 transition"
              key={id}
            >
              <Image
                src={data?.image_url ? data?.image_url : defaultImage}
                fill
                style={{ objectFit: "cover" }}
                alt="photo"
              />
            </div>
          </div>
          <div className="w-[60%] py-2">
            <div>
              <h1 className="text-4xl font-bold">{data.title}</h1>
              <h2 className="text-md pt-2">By {data.author}</h2>
              <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default bookPage;
