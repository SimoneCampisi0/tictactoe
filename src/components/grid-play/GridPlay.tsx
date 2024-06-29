import {useState} from "react";
import './GridPlay.css'
import Grid from "../shared/Grid.tsx";

// @ts-ignore
function GridPlay({onEndPlay}) {
  const [matrix, setMatrix] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ]);

  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);

  function isWinner(newMatrix: string[][], p: string) {
    if (winner !== 1 && winner !== 2 && winner !== 9) {
      let localWinner: number = 0;

      if (newMatrix[0][0] === p && newMatrix[0][1] === p && newMatrix[0][2] === p) {
        localWinner = p === "X" ? 1 : 2;
      } else if (newMatrix[1][0] == p && newMatrix[1][1] == p && newMatrix[1][2] == p) {
        localWinner = p === "X" ? 1 : 2;
      } else if (newMatrix[2][0] == p && newMatrix[2][1] == p && newMatrix[2][2] == p) {
        localWinner = p === "X" ? 1 : 2;
      } else if (newMatrix[0][0] == p && newMatrix[1][0] == p && newMatrix[2][0] == p) {
        localWinner = p === "X" ? 1 : 2;
      } else if (newMatrix[0][1] == p && newMatrix[1][1] == p && newMatrix[2][1] == p) {
        localWinner = p === "X" ? 1 : 2;
      } else if (newMatrix[0][2] == p && newMatrix[1][2] == p && newMatrix[2][2] == p) {
        localWinner = p === "X" ? 1 : 2;
      } else if (newMatrix[0][0] == p && newMatrix[1][1] == p && newMatrix[2][2] == p) {
        localWinner = p === "X" ? 1 : 2;
      } else if (newMatrix[0][2] == p && newMatrix[1][1] == p && newMatrix[2][0] == p) {
        console.log("case")
        localWinner = p === "X" ? 1 : 2;
      }

      if (localWinner === (p === "X" ? 1 : 2)) {
        setWinner(localWinner);
        onEndPlay({winner: localWinner, matrix: newMatrix});
        return true;
      }

      let emptyCell = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (newMatrix[i][j] === " " || newMatrix[i][j] === null) {
            emptyCell++;
          }
        }
      }

      // Caso di pareggio
      if (emptyCell === 0) {
        setWinner(9);
        onEndPlay({winner: 9, matrix: newMatrix});
        return true;
      }

      return false;
    }
  }

  function resetMatrix() {
    const temp: string[][] = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "]
    ];

    setPlayer(1);
    setWinner(0);
    setMatrix(temp);
  }

  function handleClick(i: number, j: number) {
    if (matrix[i][j] !== " ") return;

    const newMatrix = [...matrix.map(row => [...row])];
    newMatrix[i][j] = player === 1 ? 'X' : 'O';

    setMatrix(newMatrix);
    setPlayer(player === 1 ? 2 : 1);

    if (!isWinner(newMatrix, 'X')) {
      isWinner(newMatrix, 'O');
    }
  }

  return (
      <>
        <div className="flex flex-row justify-between items-center p-5">
          <div className="text-4xl text-white">Tris</div>
          {/*<div>Play Again</div>*/}
          <div className="flex flex-col justify-between">
            {(winner == 0 || winner == 9) && <button
                className="bg-gray-300 hover:bg-gray-100 text-black mt-1 py-2 px-4 rounded h-1/2"
                onClick={() => resetMatrix()}>Reset
            </button>}

            {(winner == 1 || winner == 2) && <button
                className="bg-gray-300 hover:bg-gray-100 text-black mt-1 py-2 px-4 rounded h-1/2 w-1/2 self-end"
                onClick={() => resetMatrix()}>Reset
            </button>}

            {winner === 1 && <div className="text-white">Ha vinto il giocatore 1</div>}
            {winner === 2 && <div className="text-white">Ha vinto il giocatore 2</div>}
            {winner === 9 && <div className="text-white">Pareggio</div>}
          </div>
        </div>

        <Grid onCellClick={handleClick} matrix={matrix}></Grid>
      </>
  )
}

export default GridPlay