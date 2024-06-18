import './App.css'
import {useState} from "react";

function App() {
  const [matrix, setMatrix] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ]);

  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);

  function checkWin(p: string) {
    if (matrix[0][0] == p && matrix[0][1] == p && matrix[0][2] == p) {
      p == "X" ? setWinner(1) : setWinner(2);
      return;
    }

    if (matrix[1][0] == p && matrix[1][1] == p && matrix[1][2] == p) {
      p == "X" ? setWinner(1) : setWinner(2);
      return;
    }

    if (matrix[2][0] == p && matrix[2][1] == p && matrix[2][2] == p) {
      p == "X" ? setWinner(1) : setWinner(2);
      return;
    }

    if (matrix[0][0] == p && matrix[1][0] == p && matrix[2][0] == p) {
      p == "X" ? setWinner(1) : setWinner(2);
    }

    if (matrix[0][1] == p && matrix[1][1] == p && matrix[2][1] == p) {
      p == "X" ? setWinner(1) : setWinner(2);
    }

    if (matrix[0][2] == p && matrix[1][2] == p && matrix[2][2] == p) {
      p == "X" ? setWinner(1) : setWinner(2);
    }

    if (matrix[0][0] == p && matrix[1][1] == p && matrix[2][2] == p) {
      p == "X" ? setWinner(1) : setWinner(2);
    }

    console.log("matrix: ", matrix)
    if (matrix[0][2] == p && matrix[1][1] == p && matrix[2][0] == p) {
      console.log("entro")
      p == "X" ? setWinner(1) : setWinner(2);
      console.log("winner: ", winner)
    }

    let emptyCell = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if(matrix[i][j] === " " || matrix[i][j] === null) {
          emptyCell++;
        }
      }
    }

    if(emptyCell == 0) {
      setWinner(9);
    }

  }

  function handleClick(i: number, j: number) {
    checkWin('X');
    checkWin('O');

    if (matrix[i][j] === " " || matrix[i][j] === null) {
      let temp = [...matrix];

      temp[i][j] = player === 1 ? 'X' : 'O';

      setMatrix(temp);
      setPlayer(player === 1 ? 2 : 1);
    }

    checkWin('X');
    checkWin('O');
  }

  function resetMatrix() {
    const temp: string[][] = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "]
    ];

    setWinner(0);
    setMatrix(temp);
  }

  return (
      <>
        <div className="h-screen bg-sky-950 flex flex-col items-center justify-center">
          <div className="p-2 rounded-2xl border-2 border-zinc-800">

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

            <div className="grid grid-cols-3 p-5 text-center text-white rounded-2xl">
              {/* utilizzo la funzione anonima per far eseguire il metodo handleClick alla pressione del button e NON al caricamento del DOM */}
              <div className="grid-item rounded-tl-2xl" onClick={() => handleClick(0, 0)}>{matrix[0][0]}</div>
              <div className="grid-item" onClick={() => handleClick(0, 1)}>{matrix[0][1]}</div>
              <div className="grid-item rounded-tr-2xl" onClick={() => handleClick(0, 2)}>{matrix[0][2]}</div>

              <div className="grid-item" onClick={() => handleClick(1, 0)}>{matrix[1][0]}</div>
              <div className="grid-item" onClick={() => handleClick(1, 1)}>{matrix[1][1]}</div>
              <div className="grid-item" onClick={() => handleClick(1, 2)}>{matrix[1][2]}</div>

              <div className="grid-item rounded-bl-2xl" onClick={() => handleClick(2, 0)}>{matrix[2][0]}</div>
              <div className="grid-item" onClick={() => handleClick(2, 1)}>{matrix[2][1]}</div>
              <div className="grid-item rounded-br-2xl" onClick={() => handleClick(2, 2)}>{matrix[2][2]}</div>
            </div>
          </div>
        </div>
      </>
  )
}

export default App