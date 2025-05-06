import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  if (!meaning) return null;

  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <div className="definition">{meaning.definition}</div>

      {meaning.example && <div className="example">"{meaning.example}"</div>}

      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <Synonyms synonyms={meaning.synonyms} />
      )}
    </div>
  );
}
