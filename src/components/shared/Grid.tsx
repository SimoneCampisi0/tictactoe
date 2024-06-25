import './Grid.css'

// @ts-ignore
export function Grid({onCellClick, matrix}) {
  const handleClick = (i: number, j: number) => {
    if (onCellClick) {
      onCellClick(i, j);
    }
  }

  const getClassName = (value: string, i: number, j: number) => {
    let className = 'grid-item';

    if (value === 'X') {
      className = className + ' text-blue-500';
    } else {
      className = className + ' text-amber-300';
    }

    if(i === 0 && j === 0) {
      className = className + ' rounded-tl-xl';
    }

    if(i === 0 && j === 2) {
      className = className + ' rounded-tr-xl';
    }

    if(i === 2 && j === 0) {
      className = className + ' rounded-bl-xl';
    }

    if(i === 2 && j === 2) {
      className = className + ' rounded-br-xl';
    }

    return className;
  }

  return (
      <>
        <div className="grid grid-cols-3 p-5 text-center text-white border-black rounded-2xl">
          {/* utilizzo la funzione anonima per far eseguire il metodo handleClick alla pressione del button e NON al caricamento del DOM */}
          <div className={getClassName(matrix[0][0], 0, 0)} onClick={() => handleClick(0, 0)}>{matrix[0][0]}</div>
          <div className={getClassName(matrix[0][1], 0, 1)} onClick={() => handleClick(0, 1)}>{matrix[0][1]}</div>
          <div className={getClassName(matrix[0][2], 0, 2)} onClick={() => handleClick(0, 2)}>{matrix[0][2]}</div>

          <div className={getClassName(matrix[1][0], 1, 0)} onClick={() => handleClick(1, 0)}>{matrix[1][0]}</div>
          <div className={getClassName(matrix[1][1], 1, 1)} onClick={() => handleClick(1, 1)}>{matrix[1][1]}</div>
          <div className={getClassName(matrix[1][2], 1, 2)} onClick={() => handleClick(1, 2)}>{matrix[1][2]}</div>

          <div className={getClassName(matrix[2][0], 2, 0)} onClick={() => handleClick(2, 0)}>{matrix[2][0]}</div>
          <div className={getClassName(matrix[2][1], 2, 1)} onClick={() => handleClick(2, 1)}>{matrix[2][1]}</div>
          <div className={getClassName(matrix[2][2], 2, 2)} onClick={() => handleClick(2, 2)}>{matrix[2][2]}</div>
        </div>
      </>
  )
}

export default Grid