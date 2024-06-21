import './App.css'
import GridPlay from "./components/grid-play/GridPlay.tsx";
import StoricoPartite from "./components/storico-partite/StoricoPartite.tsx";
import {Matches} from "./components/models/Matches.ts";

function App() {
  let matchesVar: Matches[] = [];

  function onEndPlay(matches: Matches[]) {
    matchesVar = matches;
    console.log("matchesVar: ", matchesVar)
  }

  return (
      <>
        <div className="h-screen fixed top-0 left-0 w-screen bg-sky-950">

          <div className="flex flex-col items-center justify-center">
            <div className="p-2 rounded-2xl">
              <GridPlay endPlay={onEndPlay}></GridPlay>
            </div>

            <StoricoPartite matches={matchesVar}></StoricoPartite>
          </div>
        </div>

      </>
  )
}

export default App
