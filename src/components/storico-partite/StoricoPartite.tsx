import Grid from "../shared/Grid.tsx";
import {Matches} from "../models/Matches.ts";

// @ts-ignore
function StoricoPartite({matches}) {
  function onCellClick() {

  }

  return (
      <>
        <div className="text-white text-4xl">Storico Partite</div>

        <div className="mt-7 p-2 rounded-2xl flex flex-row flex-wrap">
          {matches.length}

          {matches.map((match: Matches, index: number) => {
            return <div className="flex flex-col">
              {match.winner === 1 && <div className="text-white pl-6">Ha vinto il giocatore 1</div>}
              {match.winner === 2 && <div className="text-white pl-6">Ha vinto il giocatore 2</div>}
              {match.winner === 9 && <div className="text-white pl-6">Pareggio</div>}
              <Grid key={index} onCellClick={onCellClick} matrix={match.matrix}></Grid>
            </div>
          })}
        </div>
      </>
  )
}

export default StoricoPartite