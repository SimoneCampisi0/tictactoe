import './Grid.css'

// @ts-ignore
export function Grid( { onCellClick, matrix } ) {
  const handleClick = (i: number, j: number) => {
    if(onCellClick) {
      onCellClick(i, j);
    }
  }

  return (
      <>
        <div className="grid grid-cols-3 p-5 text-center text-white border-black rounded-2xl">
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
      </>
  )
}

export default Grid