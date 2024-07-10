"use client"
import { useState } from "react";
import Banner from "./components/Banner";
import ContentBody from "./components/Content";
import { DictionaryProvider } from "@/context/DictionaryProvider";

export default function Home() {
  const [input, setInput] = useState<any>("Hello")
  return (
    <DictionaryProvider>
      <main className="min-h-screen">
      <Banner/>
     <ContentBody/>
    </main>
    </DictionaryProvider>
  );
}
