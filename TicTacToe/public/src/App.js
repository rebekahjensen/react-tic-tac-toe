import { useState } from "react";
//store current state

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

//resuable component
//we use props to make each unique instead of all the same value inside

export default function Board() {
  //stored as an array
  //add new state!! for 0=
  const [xIsNext, setXIsNext] = useState(true);
  //export makes accessible outside of file
  //default tells other files this is the main func

  //same name because we want all div to be styled the same
  //no more value bc Square no longer accpepts props

  //time for shared parent state??
  const [squares, setSquares] = useState(Array(9).fill(null));
  //9 creates array w/ 9 elements & sets each to null
  //useState decalres squares state variable initially set to array
  //each entry in arr corresponds to value of square

  function handleClick(i) {
    if (squares[i]) {
      //saves if square is already marked
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    //handleClick updates nextSquares to add X to first square
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
//component is reusable code that shows part of user interface
//used to render, manage, update UI elements in app
