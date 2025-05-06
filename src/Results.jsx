import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  const { results } = props;

  if (!results) return null;

  return (
    <div className="Results">
      <section>
        <h2>{results.word}</h2>
        {(results.phonetics?.length > 0 || results.audio) && (
          <Phonetic
            phonetic={{
              text: results.phonetics?.[0] || "",
              audio: results.audio || "",
            }}
          />
        )}
      </section>

      {Array.isArray(results.meanings) &&
        results.meanings.map((meaning, index) => (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        ))}
    </div>
  );
}
