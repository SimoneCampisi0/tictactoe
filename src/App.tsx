import './App.css'
import GridPlay from "./components/grid-play/GridPlay.tsx";
import StoricoPartite from "./components/storico-partite/StoricoPartite.tsx";
import {Match} from "./components/models/Match.ts";
import {useState} from "react";
import RegisterForm from "./components/register-form/RegisterForm.tsx";
import {Player} from "./components/models/Player.ts";

function App() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [showRegister, setShowRegister] = useState(false);
  const [player, setPlayer] = useState<Player | null>(null);

  function onEndPlay(match: Match) {
    setMatches([...matches, match]);
  }

  function onRegister(player: Player) {
    setPlayer(player);
  }

  return (
      <>
        <div className="min-h-screen top-0 left-0 w-screen bg-sky-950">
          <div className="pt-5 pr-40 flex flex-row justify-end text-white">
            <div className="cursor-pointer hover:text-sky-200 transition" onClick={() => setShowRegister(!showRegister)}>Register</div>
          </div>
          {!showRegister && <div className="pt-28 flex flex-col items-center justify-center">
              <div className="p-2 rounded-2xl">
                  <GridPlay onEndPlay={onEndPlay}></GridPlay>
              </div>
              <StoricoPartite matches={matches}></StoricoPartite>
          </div>}
          {showRegister && <div className="pt-28 flex flex-col items-center justify-center"><RegisterForm onRegister={onRegister}></RegisterForm></div>}
        </div>
      </>
  )
}

export default App
