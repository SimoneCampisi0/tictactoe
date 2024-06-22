import './App.css'
import GridPlay from "./components/grid-play/GridPlay.tsx";
import StoricoPartite from "./components/storico-partite/StoricoPartite.tsx";
import {Match} from "./components/models/Match.ts";
import {useState} from "react";

function App() {
  const [matches, setMatches] = useState<Match[]>([]);

  function onEndPlay(match: Match) {
    setMatches([...matches, match]);
  }

  return (
      <>
        <div className="h-screen fixed top-0 left-0 w-screen bg-sky-950">

          <div className="flex flex-col items-center justify-center">
            <div className="p-2 rounded-2xl">
              <GridPlay endPlay={onEndPlay}></GridPlay>
            </div>

            <StoricoPartite matches={matches}></StoricoPartite>
          </div>
        </div>

      </>
  )
}

export default App
