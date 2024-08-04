import './App.css'
import React, {useState} from "react";
import {Match} from "./components/models/Match.ts";
import {PlayerResponse} from "./components/dto/PlayerResponse.ts";
import GridPlay from "./components/grid-play/GridPlay.tsx";
import StoricoPartite from "./components/storico-partite/StoricoPartite.tsx";
import {GameResponse} from "./components/dto/GameResponse.ts";

function App() {

  const [matches, setMatches] = useState<Match[]>([]);
  const [startToPlay, setStartToPlay] = useState<boolean>(false);
  const [viewForm, setViewForm] = useState<boolean>(false);

  const [form, setForm] = useState({
    namePlayer1: '',
    namePlayer2: ''
  });

  const [players, setPlayers] = useState<PlayerResponse[]>([]);


  function gioca() {
    console.log("gioca page")
    setViewForm(true);
  }

  function storicoPartite() {
    console.log("storicoPartite page")
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }

  async function onSubmit() {
    /* Implementare chiamata API al BE per salvare i nomi dei giocatori. Realizzare quindi una versione lite,
    in cui non è necessaria l'autenticazione. Si salverà nel DB soltanto il nome del player e la relazione con il match giocato.
    Salvare i giocatori soltanto se il match è stato confermato.

    Finita una partita, il BE esporrà una get per cui, inserito un nome giocatore, si vedrà la cronologia delle sue partite.
     */
    const username: string[] = [form.namePlayer1, form.namePlayer2];
    const request = {
      username: username
    };

    console.log("request: ", request);

    try {
      const resp = await fetch("http://localhost:8080/player/save-players-lite", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      if (!resp.ok) {
        throw new Error(`Error: ${resp.status} ${resp.statusText}`);
      }

      const data: PlayerResponse[] = await resp.json();

      setStartToPlay(true);
      setViewForm(false);
      setPlayers(data);
    } catch (e) {
      console.error("Errore durante la chiamata: ", e);
    }
  }

  async function onEndPlay(match: Match) {
    console.log("match: ", match)
    setMatches([...matches, match]);

    const request = {
      matrix_json: JSON.stringify(match.matrix),
      player_one_username: match.player_one.username,
      player_two_username: match.player_two.username,
      winner_username: match.winner.username,
    };

    // Fixare problema 406 su questa chiamata
    try {
      const resp = await fetch("http://localhost:8080/game/save-match-lite", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      if (!resp.ok) {
        throw new Error(`Error: ${resp.status} ${resp.statusText}`);
      }

      const response: GameResponse = await resp.json();
    } catch (e) {
      console.error("Errore durante la chiamata: ", e);
    }
  }

  return (
      <>
        <div className="min-h-screen top-0 left-0 w-screen bg-sky-950">
          <div className="header">
            <div className="header-title">
              Tris
            </div>

            <div className="menu">
              <div className="menu-link" onClick={gioca}>
                Gioca
              </div>
              <div className="menu-link" onClick={storicoPartite}>
                Storico Partite
              </div>
            </div>
          </div>

          {viewForm && !startToPlay &&
              <div className="pt-28 flex flex-col gap-4 items-center justify-center h-screen">
                  <div>
                      <label htmlFor="namePlayer1"
                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome giocatore
                          1</label>
                      <input value={form.namePlayer1} onChange={handleInputChange} name="namePlayer1" type="text"
                             id="namePlayer1"
                             className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>

                  <div>
                      <label htmlFor="namePlayer2"
                             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome giocatore
                          2</label>
                      <input value={form.namePlayer2} onChange={handleInputChange} name="namePlayer2" type="text"
                             id="namePlayer2"
                             className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>

                  <button className="p-2 border-sky-500 bg-white rounded-lg text-4xl"
                          onClick={onSubmit}>Play
                  </button>
              </div>
          }

          {startToPlay && <div className="pt-28 flex flex-col items-center justify-center">
              <div className="p-2 rounded-2xl">
                  <GridPlay onEndPlay={onEndPlay} players={players}></GridPlay>
              </div>
              <StoricoPartite matches={matches}></StoricoPartite>
          </div>}

        </div>
      </>
  )
}

export default App