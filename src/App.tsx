import './App.css'
import GridPlay from "./components/grid-play/GridPlay.tsx";
import StoricoPartite from "./components/storico-partite/StoricoPartite.tsx";
import {Match} from "./components/models/Match.ts";
import {useState} from "react";
import LoginForm from "./components/login-form/LoginForm.tsx";

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [showLogin, setShowLogin] = useState(false);

  function onEndPlay(match: Match) {
    setMatches([...matches, match]);
  }

  return (
      <>
        <div className="min-h-screen top-0 left-0 w-screen bg-sky-950">
          <div className="pt-5 pr-40 flex flex-row justify-end text-white">
            <div className="cursor-pointer hover:text-sky-200 transition" onClick={() => setShowLogin(!showLogin)}>Login</div>
          </div>
          {!showLogin && <div className="pt-28 flex flex-col items-center justify-center">
              <div className="p-2 rounded-2xl">
                  <GridPlay onEndPlay={onEndPlay}></GridPlay>
              </div>
              <StoricoPartite matches={matches}></StoricoPartite>
          </div>}
          {showLogin && <div className="pt-28 flex flex-col items-center justify-center"><LoginForm></LoginForm></div>}
        </div>
      </>
  )
}

export default App
