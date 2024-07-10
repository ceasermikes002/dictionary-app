"use client";
import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui2/placeholders-and-vanish-input";
import { useDictionary } from "@/context/DictionaryProvider";
import { GitHubLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons';
import Link from "next/link";

const Banner = () => {
  const { setDictionary } = useDictionary();
  const [value, setValue] = useState("");

  return (
    <div className="relative bg-gradient-to-r p-6 from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[40vh] flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4 flex space-x-4 sm:absolute sm:top-4 sm:right-4 sm:space-x-4 sm:flex-row sm:justify-between sm:z-10">
        <Link href="https://github.com/ceasermikes002" target="_blank" rel="noopener noreferrer">
          <GitHubLogoIcon className="w-6 h-6 text-black hover:text-gray-300 hover:translate-x-2.5 transform transition" />
        </Link>
        <Link href="https://www.instagram.com/_.ctech_/" target="_blank" rel="noopener noreferrer">
          <InstagramLogoIcon className="w-6 h-6 text-black hover:text-gray-300 hover:translate-x-2.5 transform transition" />
        </Link>
      </div>
      <div className="mt-0 sm:mt-0 w-full mb-5"> {/* Adjust margin for mobile view */}
        <PlaceholdersAndVanishInput
          placeholders={[
            "What word would you like to look up the meaning?",
            "Type any word to get look up the meaning.",
            "You can search for something like obnoxious.",
            "follow the developer on github @ceasermikes002.",
          ]}
          onChange={(event) => setValue(event.target.value)}
          onSubmit={() => setDictionary(value)}
        />
      </div>
    </div>
  );
};

export default Banner;
