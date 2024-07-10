import { createContext, useContext, useState, ReactNode } from "react";

interface DictionaryContextProps {
  dictionary: string;
  setDictionary: (value: string) => void;
}

const DictionaryContext = createContext<DictionaryContextProps | undefined>(undefined);

export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
};

export const DictionaryProvider = ({ children }: { children: ReactNode }) => {
  const [dictionary, setDictionary] = useState<string>("Hello");

  return (
    <DictionaryContext.Provider value={{ dictionary, setDictionary }}>
      {children}
    </DictionaryContext.Provider>
  );
};
