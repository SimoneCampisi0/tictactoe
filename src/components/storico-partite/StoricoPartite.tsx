import Grid from "../shared/Grid.tsx";
import {Match} from "../models/Match.ts";

// @ts-ignore
function StoricoPartite({matches}) {
  function onCellClick() {

  }

  return (
      <>
        {matches.length > 0 &&
            <div className="flex flex-col items-center justify-center">
                <div className="text-white text-4xl">Storico Partite</div>

                <div className="mt-7 p-2 rounded-2xl flex flex-row flex-wrap justify-center">
                  {matches.map((match: Match, index: number) => {
                    return (
                        <div key={index} className="flex flex-col">
                          {match.winner !== 9 && <div className="text-white pl-6">Ha vinto {match.winner.username}</div>}
                          {match.winner === 9 && <div className="text-white pl-6">Pareggio</div>}
                          {match.matrix && <Grid onCellClick={onCellClick} matrix={match.matrix}></Grid>}
                        </div>
                    );
                  })}
                </div>
            </div>}
      </>
  );
}

export default StoricoPartite