import { colors } from "@/constants/colors";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { useDictionary } from "@/context/DictionaryProvider";
import { useEffect, useState } from "react";
import ExpandableCard from "./ui2/expandableCard";

const ContentBody = () => {
  const { dictionary } = useDictionary();
  const [wordData, setWordData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    if (dictionary) {
      setLoading(true);
      setError(null);
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${dictionary}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setWordData(data[0]);
            setAudioUrl(data[0]?.phonetics[0]?.audio || `https://api.dictionaryapi.dev/media/pronunciations/en/${dictionary}-us.mp3`);
            setLoading(false);
          } else {
            setError("Word not found");
            setLoading(false);
          }
        })
        .catch((err) => {
          setError("Failed to fetch data");
          setLoading(false);
        });
    }
  }, [dictionary]);

  useEffect(() => {
    if (wordData) {
      setAudioUrl(wordData.phonetics[0]?.audio || `https://api.dictionaryapi.dev/media/pronunciations/en/${dictionary}-us.mp3`);
    }
  }, [wordData, dictionary]);

  const tracks = [
    {
      url: audioUrl,
      title: `${dictionary} Pronunciation`,
      tags: ["Phonetics"],
    },
  ];

  return (
    <section className="top-[25vh] absolute bg-white w-[80%] xl:w-[70%] lg:w-[75%] md:w-[80%] sm:w-[85%] xs:w-[90%] ml-[10%] shadow-2xl p-5 rounded-2xl">
      <div className="flex items-center justify-center">
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            position: "relative",
            display: "inline-block",
            letterSpacing: "-1px",
            backgroundImage:
              "linear-gradient(to right, #4F46E5, #8C5EFF, #C86DD7)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow:
              "1px 1px 2px rgba(255,255,255,0.5), -1px -1px 2px rgba(255,255,255,0.5)",
            zIndex: "1",
          }}
        >
          Micheal Dictionary
        </h1>
        <span className="text-3xl ml-2">📖</span>
      </div>

      {wordData && (
        <>
          <ExpandableCard />
          <div className="flex mt-9 flex-col lg:flex-row gap-2 justify-between">
            <span className="shadow-md px-6 py-2 rounded-lg bg-[#10b888] text-white">
              <span className="h-[10px] w-[10px] bg-yellow-400 rounded-full inline-block flex-col"></span>
              &nbsp; Word: {!wordData ? "Invalid word" : dictionary}
            </span>

            <span className="shadow-md px-6 py-2 rounded-lg bg-[#0ea5e8] text-white mt-4 lg:mt-0">
              <span className="h-[10px] w-[10px] bg-blue-800 rounded-full inline-block flex-col"></span>
              &nbsp; phonetic:{" "}
              {!wordData.phonetic ? "No phonetic data available " : wordData.phonetic}
            </span>
          </div>

          <div className="mt-5">
            <Player
              key={audioUrl} // This key will force re-rendering
              trackList={tracks}
              includeTags={false}
              includeSearch={false}
              showPlaylist={false}
              sortTracks={false}
              autoPlayNextTrack={false}
              customColorScheme={colors}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ContentBody;
