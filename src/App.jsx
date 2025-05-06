import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/bborelli"
              target="_blank"
              rel="noreferrer"
            >
              Bruna Borelli
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
