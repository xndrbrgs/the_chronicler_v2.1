import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import defaultImage from "../assets/images/pexels-max-rahubovskiy-6969866.webp";
import BooksCarousel from "@/components/BooksCarousel";

import localFont from "next/font/local";

const brier = localFont({
  src: [
    {
      path: "../assets/fonts/Brier-Bold.otf",
      display: "normal",
    },
    {
      path: "../assets/fonts/Brier-Regular.otf",
      display: "normal",
    },
  ],
});

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("books").select().limit(20);

  return (
    <>
      <NavBar />

      <main className="bg-hero-pattern">
        <div className={brier.className}>
          <div className="flex items-center justify-center">
            <h1 className="text-7xl font-bold">Choose the books YOU want to read</h1>
          </div>
        </div>
        <section className="min-h-screen flex justify-center items-center">
          <div className="w-full">
            <BooksCarousel data={data} />
          </div>
        </section>
      </main>
    </>
  );
}
