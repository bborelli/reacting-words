import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const { text, audio } = props.phonetic || {};

  if (!text && !audio) return null;

  return (
    <div className="Phonetic">
      {audio && (
        <a href={audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      )}
      {text && <span className="text">{text}</span>}
    </div>
  );
}
