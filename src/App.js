import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import movies from "./data/movies";

function App() {
  // state für wie wird sortiert ? --> sortBy (verschieden werte)

  // movies array soll basierend auf "sortBy" sortiert werden

  // sorties array anzeigen

  // Sortier-Strategie:
  // yearAsc
  // yearDesc
  // titleAsc
  // titleDesc
  // rateAsc
  // rateDesc

  const [sortBy, setSortBy] = useState("yearAsc");

  // === Option 1 ===
  // const sortedMovies =
  //   sortBy === "yearAsc"
  //     ? [...movies].sort((a, b) => Number(a.year) - Number(b.year))
  //     : sortBy === "yearDesc"
  //     ? [...movies].sort((a, b) => Number(b.year) - Number(a.year))
  //     : sortBy === "titleAsc"
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : sortBy === "titleDesc"
  //     ? [...movies].sort((a, b) => b.title.localeCompare(a.title))
  //     : sortBy === "rateAsc"
  //     ? [...movies].sort((a, b) => Number(a.rate) - Number(b.rate))
  //     : [...movies].sort((a, b) => Number(b.rate) - Number(a.rate));

  // === Option 2 ===
  function getCompareFn() {
    if (sortBy === "yearAsc") {
      return (a, b) => Number(a.year) - Number(b.year);
    } else if (sortBy === "yearDesc") {
      return (a, b) => Number(b.year) - Number(a.year);
    } else if (sortBy === "titleAsc") {
      return (a, b) => a.title.localeCompare(b.title);
    } else if (sortBy === "titleDesc") {
      return (a, b) => b.title.localeCompare(a.title);
    } else if (sortBy === "rateAsc") {
      return (a, b) => Number(a.rate) - Number(b.rate);
    } else {
      // sortBy is "rateDesc"
      return (a, b) => Number(b.rate) - Number(a.rate);
    }
  }

  const sortedMovies = [...movies].sort(getCompareFn());

  // // === Option 3 ===
  // const compareFn = {
  //   yearAsc: (a, b) => Number(a.year) - Number(b.year),
  //   yearDesc: (a, b) => Number(b.year) - Number(a.year),
  //   titleAsc: (a, b) => a.title.localeCompare(b.title),
  //   titleDesc: (a, b) => b.title.localeCompare(a.title),
  //   rateAsc: (a, b) => Number(a.rate) - Number(b.rate),
  //   rateDesc: (a, b) => Number(b.rate) - Number(a.rate),
  // }[sortBy];

  // const sortedMovies = [...movies].sort(compareFn);

  return (
    <div className="App">
      <button onClick={() => setSortBy("yearAsc")}>
        Sort by Year Ascending
      </button>
      <br />
      <button onClick={() => setSortBy("yearDesc")}>
        Sort by Year Descending
      </button>
      <br />
      <button onClick={() => setSortBy("titleAsc")}>
        Sort by Title Ascending
      </button>
      <br />
      <button onClick={() => setSortBy("titleDesc")}>
        Sort by Title Descending
      </button>
      <br />
      <button onClick={() => setSortBy("rateAsc")}>
        Sort by Rate Ascending
      </button>
      <br />
      <button onClick={() => setSortBy("rateDesc")}>
        Sort by Rate Descending
      </button>
      <br />

      {sortedMovies.map((movie) => (
        /* {...movie} heißt: "Übergib jedes einzelne Feld von movie als prop an die Movie-Component." */
        <Movie {...movie} />
      ))}
    </div>
  );
}

export default App;
