import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    setResults(null);
    setPhotos(null);
    setError(null);

    let shecodesApiKey = "4fbe9b2c44d0f8a0833d1te403cbb78o";
    let shecodesApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${shecodesApiKey}`;

    axios
      .get(shecodesApiUrl)
      .then(handleDictionResponse)
      .catch((error) => {
        console.error("Dictionary API error:", error);
        setError("Sorry, we couldn't find that word.");
      });

    let pexelsApiKey =
      "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, { headers })
      .then(handlePexelsResponse)
      .catch((error) => {
        console.error("Pexels API error:", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  useEffect(() => {
    setLoaded(true);
    search();
  }, []);

  if (!loaded) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
          />
        </form>
        <div className="hint">
          suggested words: sunset, wine, yoga, plant...
        </div>
      </section>

      {error ? (
        <section className="error-message">
          <p>{error}</p>
        </section>
      ) : (
        <>
          <Results results={results} />
          <Photos photos={photos} />
        </>
      )}
    </div>
  );
}
