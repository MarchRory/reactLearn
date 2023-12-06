import { useState } from "react";
interface SqureProps {
  value: string | null;
  onSquareClick: () => void;
}

interface BoardProps {
  xIsNext: boolean;
  squares: any[];
  onPlay: (squares: any[]) => void;
}

const findWinner = (squares: any[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Square = ({ value, onSquareClick }: SqureProps) => {
  return (
    <>
      <div
        onClick={onSquareClick}
        b="solid 3 cyan-3"
        rd-4
        text="5xl center blueGray"
        m-0
        cursor-pointer
        bg-gray-1
        flex
        items-center
        justify-center
      >
        <span className="absolute">{value}</span>
      </div>
    </>
  );
};

const CheckerBoard = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const winner = findWinner(squares);
  let tooltip: string;
  tooltip = winner
    ? "Winner is " + winner
    : "Next Player is " + `${xIsNext ? "X" : "O"}`;

  function handleClick(index: number) {
    if (findWinner(squares) || squares[index]) return;
    let squareCopy = squares.slice();
    squareCopy[index] = xIsNext ? "X" : "O";
    onPlay(squareCopy);
  }
  return (
    <>
      <p font-bold text-indigo text-xl>
        {tooltip}
      </p>
      <ul grid grid-cols-3 gap-0 w-md h-md border-cyan rd-4 overflow-hidden p-0>
        {[...Array(9)].map((_, index) => (
          <Square
            key={index}
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </ul>
    </>
  );
};

const Game = () => {
  // history - 每一步的历史记录
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [curMove, setCurmove] = useState(0);
  const xIsNext = curMove % 2 == 0;
  // 显示的squares是历史记录的最后一条
  let curSquares = history[curMove];

  function handlePlay(squaresCopy: any[]) {
    let historyCopy = history;
    historyCopy.push(squaresCopy);
    setHistory(historyCopy);
    setCurmove(history.length - 1);
  }

  const moves = history.map((square, moveIndex) => {
    let desc: string;
    desc = moveIndex ? "Go to move " + moveIndex : "return to game start";
    return (
      <li mb-3 px-5 text-left key={moveIndex}>
        <button onClick={() => jumpTo(moveIndex)}>{desc}</button>
      </li>
    );
  });

  function jumpTo(moveIndex: number) {
    setCurmove(moveIndex);
  }

  return (
    <>
      <div flex flex-row w-5xl>
        <div>
          <CheckerBoard
            xIsNext={xIsNext}
            squares={curSquares}
            onPlay={handlePlay}
          />
        </div>
        <div w-fit mt-5 ml-24>
          <div text="center indigo xl" font-bold>
            show History
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
};

export default Game;
