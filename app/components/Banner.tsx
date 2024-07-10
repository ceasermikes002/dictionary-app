// /components/Banner.tsx
"use client";
import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui2/placeholders-and-vanish-input";
import { useDictionary } from "@/context/DictionaryProvider";

const Banner = () => {
  const { setDictionary } = useDictionary();
  const [value, setValue] = useState("");

  return (
    <div className="bg-gradient-to-r p-6 from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[40vh]">
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
  );
};

export default Banner;

