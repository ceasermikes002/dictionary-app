"use client";
import Banner from "./components/Banner";
import Player from "@madzadev/audio-player";
import { tracks } from "../constants/tracks";
import { colors } from "../constants/colors";
import "@madzadev/audio-player/dist/index.css";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="top-[25vh] absolute bg-white w-[80%] ml-[10%] shadow-2xl p-5 rounded-2xl">
      <section className="mt-10 shadow-xl rounded-md mb-10 p-6">
<div className="flex flex-row  justify-between ">
<div className="flex flex-col items-center">
    <span className="shadow-md px-6 py-2 rounded-lg bg-[#10b888] mt-6 flex items-center">
      <span className="h-[10px] w-[10px] bg-yellow-400 rounded-full inline-block mr-2"></span>
      <span className="text-white">Origin</span>
    </span>
    <article className="prose prose-sm prose-indigo mt-6 mx-auto p-4 rounded-md shadow-md bg-white">
      <p className="mb-2">
        Early 19th century: variant of earlier hollo; related to holla.
      </p>
    </article>
  </div>
<div className="flex flex-col items-center">
    <span className="shadow-md px-6 py-2 rounded-lg bg-[#10b888] mt-6 flex items-center">
      <span className="h-[10px] w-[10px] bg-yellow-400 rounded-full inline-block mr-2"></span>
      <span className="text-white">Meaning</span>
    </span>
    <article className="prose prose-sm prose-indigo mt-6 mx-auto p-4 rounded-md shadow-md bg-white">
      <p className="mb-2">
        Early 19th century: variant of earlier hollo; related to holla.
      </p>
    </article>
  </div>
</div>
</section>


        <div className="flex flex-row gap-2 justify-between">
          <span className="shadow-md px-6 py-2 rounded-lg bg-[#10b888] text-white">
            <span className="h-[10px] w-[10px] bg-yellow-400  rounded-full inline-block flex-col"></span>
            &nbsp; Hello
          </span>

          <span className="shadow-md px-6 py-2 rounded-lg bg-[#0ea5e8] text-white">
            <span className="h-[10px] w-[10px] bg-blue-800 rounded-full  inline-block flex-col"></span>
            &nbsp; phonetic: &quot;hə&apos;ləʊ&quot;
          </span>
        </div>
        <div className="mt-5">
          <Player
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlaylist={false}
            sortTracks={false}
            autoPlayNextTrack={false}
            customColorScheme={colors}
          />
        </div>
      </section>
    </main>
  );
}
