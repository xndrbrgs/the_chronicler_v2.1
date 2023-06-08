import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import defaultImage from "../../../assets/images/pexels-max-rahubovskiy-6969866.webp";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import localFont from "next/font/local";
import RecommendedBooks from "@/components/RecommendedBooks";

const brier = localFont({
  src: [
    {
      path: "../../../assets/fonts/Brier-Bold.otf",
      display: "normal",
    },
    {
      path: "../../../assets/fonts/Brier-Regular.otf",
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
  return <pre>{JSON.stringify(data, null, 2)}</pre>

  return (
    <>
      <NavBar />

      <section className="bg-hero-pattern">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row py-12">
          <div className="md:w-[40%]">
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
          <div className="md:w-[60%] py-2">
            <div>
              <h1 className="text-5xl font-bold">{data.title}</h1>
              <h2 className="text-xl font-bold py-2">By {data.author}</h2>
              <div className="flex space-x-3 items-center">
                <StarIcon className="h-6 w-6 text-[#EAD2AB]" />
                <p>{data.rating}</p>
              </div>
              <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Overview</h2>
              <p className="text-sm py-2">{data.description}</p>
            </div>
            <div>
              <Link href={data.goodreads_url}>
                <button className="border-2 p-3 my-2 bg-white rounded-sm shadow-md hover:shadow-xl hover:scale-105 transition">
                  Click here for more information from GoodReads
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RecommendedBooks />
    </>
  );
}

export default bookPage;
