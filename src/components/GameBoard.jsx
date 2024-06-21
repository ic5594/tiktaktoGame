export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((x, xIndex) => (
        <li key={xIndex}>
          <ol>
            {x.map((playerSymbol, vIndex) => (
              <li key={vIndex}>
                <button
                  onClick={() => onSelectSquare(xIndex, vIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
