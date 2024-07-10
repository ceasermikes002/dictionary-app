import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useDictionary } from "@/context/DictionaryProvider";

const ExpandableCard: React.FC = () => {
  const { dictionary } = useDictionary();
  const [wordData, setWordData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
          console.log(data);
        })
        .catch((err) => {
          setError("Failed to fetch data");
          setLoading(false);
        });
    }
  }, [dictionary]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!wordData) {
    return <p>No data available</p>;
  }

  const { meanings } = wordData;

  return (
    <div>
      <link
        href="https://developer.temenos.com/uux/base.css"
        rel="stylesheet"
      />
      <uwc-expandable-card heading="Meaning | Origin | Synonyms and more...">
        <uwc-text variant="body">
          {meanings.map((meaning: any, index: number) => (
            <div key={index} className="mb-6">
              <Badge variant="outline">Part of speech</Badge> &nbsp; {meaning.partOfSpeech || "No data available"}
              <hr className="my-2"/>
              {meaning.definitions.map((def: any, defIndex: number) => (
                <div key={defIndex} className="mb-4">
                  <p className="font-bold">Definition {defIndex + 1}</p>
                  <p className="ml-4">{def.definition || "No data available"}</p>
                  {def.example && (
                    <>
                      <p className="font-bold mt-2">Example:</p>
                      <p className="ml-4">{def.example}</p>
                    </>
                  )}
                  <hr className="my-2"/>
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
