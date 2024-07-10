import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useDictionary } from "@/context/DictionaryProvider";
import Lottie from "react-lottie";
import animationData from "@/public/Animation.json";

const ExpandableCard: React.FC = () => {
  const { dictionary } = useDictionary();
  const [wordData, setWordData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const LoadingAnimation = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      <radialGradient
        id="a10"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop offset="0" stopColor="#09080A"></stop>
        <stop offset=".3" stopColor="#09080A" stopOpacity=".9"></stop>
        <stop offset=".6" stopColor="#09080A" stopOpacity=".6"></stop>
        <stop offset=".8" stopColor="#09080A" stopOpacity=".3"></stop>
        <stop offset="1" stopColor="#09080A" stopOpacity="0"></stop>
      </radialGradient>
      <circle
        transform-origin="center"
        fill="none"
        stroke="url(#a10)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="50 200"
        strokeDashoffset="0"
        cx="50"
        cy="50"
        r="40"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="2"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
      <circle
        transform-origin="center"
        fill="none"
        opacity=".2"
        stroke="#09080A"
        strokeWidth="3"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
      ></circle>
    </svg>
  );

  useEffect(() => {
    // Load the Temenos Unified UX Web component script
    const script = document.createElement("script");
    script.src = "https://developer.temenos.com/uux/unified-ux-web.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (dictionary) {
      setLoading(true);
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${dictionary}`)
        .then((response) => response.json())
        .then((data) => {
          setWordData(data[0]);
          setLoading(false);
          // console.log(data);
        })
        .catch((err) => {
          setError("Failed to fetch data");
          setLoading(false);
        });
    }
  }, [dictionary]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <LoadingAnimation />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!wordData) {
    return (
      <div>
        <Lottie
          options={{ animationData: animationData, loop: true, autoplay: true }}
          height={400}
          width={400}
        />
        <h1 className="font-bold text-3xl flex items-center justify-center">
          Word not found😔.
        </h1>
      </div>
    );
  }

  const { meanings } = wordData;

  return (
    <div>
      <link
        href="https://developer.temenos.com/uux/base.css"
        rel="stylesheet"
      />
      <uwc-expandable-card heading="Part of speech | Definitions | Examples">
        <uwc-text variant="body">
          {meanings.map((meaning: any, index: number) => (
            <div key={index} className="mb-6">
              <Badge variant="outline">Part of speech</Badge> &nbsp;{" "}
              {meaning.partOfSpeech || "No data available"}
              <hr className="my-2" />
              {meaning.definitions.map((def: any, defIndex: number) => (
                <div key={defIndex} className="mb-4">
                  <p className="font-bold">Definition {defIndex + 1}</p>
                  <p className="ml-4">
                    {def.definition || "No data available"}
                  </p>
                  {def.example && (
                    <>
                      <p className="font-bold mt-2">Example:</p>
                      <p className="ml-4">{def.example}</p>
                    </>
                  )}
                  <hr className="my-2" />
                </div>
              ))}
            </div>
          ))}
        </uwc-text>
      </uwc-expandable-card>
    </div>
  );
};

export default ExpandableCard;
