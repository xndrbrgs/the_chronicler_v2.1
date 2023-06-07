"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, UsersIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { supabase } from "@/utils/supabaseClient";

function NavBar(placeholder) {
  const [searchInput, setSearchInput] = useState("");

  const resetInput = () => {
    setSearchInput("");
  };

  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 items-center">
      <div className="relative flex items-center my-auto">
        <Link href={"/"}>
          <Image
            src="https://i.ibb.co/PMgmb5d/logo.png"
            width={200}
            height={200}
            alt=""
          />
        </Link>
      </div>

      {/* Input Field  */}
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder.placeholder || "Start your search"}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
        />

        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-[#EAD2AB] text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right Side */}
      <div className="flex space-x-4 justify-end text-gray-500 items-center">
        <div className="flex space-x-2 border-2 rounded-full p-2 items-center cursor-pointer hover:shadow-lg transition">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
        <button
          className="border p-2 rounded-lg shadow-sm hover:shadow-lg transition"
          onClick={() => signout()}
        >
          <h1 className="text-md">Log Out</h1>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
