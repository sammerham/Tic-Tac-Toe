import React, { useState}from 'react'
import Cell from './Cell'
import './TicTacToe.css'


function TicTacToe() {
  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null);

  const checkForWinner = board => {
    const winningCombos = {
      side: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [2, 4, 6],
        [0, 4, 8],
      ]
    }

    for (let combo in winningCombos) {
      winningCombos[combo].forEach(pattern => {
        if (board[pattern[0]] === "" || board[pattern[1]] === "" || board[pattern[2]] === "") {
          // do nothing
        } else if (board[pattern[0]] === board[pattern[1]] && board[pattern[1]] === board[pattern[2]]){
        setWinner(board[pattern[0]])
        }
      })
    }
  }

  const handleCellClick = num => {
    const squares = [...board];
    // stop clicking the same cell twice
    if (squares[num] !== '') {
      alert('Already Clicked');
      return
    }
    if(!winner)
    if (turn === 'X') {
      squares[num] = 'X'
      setTurn('O')
    } else {
      squares[num] = 'O'
      setTurn('X')
    }
    checkForWinner(squares);
    setBoard(squares);
  }

  const restart = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
    setTurn('X')
  }

  // check if board is full
  const isBoardFull = board => {
    return board.every(cell => cell !== "")
  };

  const checkStatus = () => {
    if (winner) {
      return `Winner is ${winner}`
    } else if (isBoardFull(board)) {
      return `Draw`
    } else {
      return `Next Player is ${turn}`
    }
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <table className='container'>
        <tbody>
          <tr>
            <Cell num = {0} board={board} handleCellClick={handleCellClick}/>
            <Cell num = {1} board={board} handleCellClick={handleCellClick}/>
            <Cell num = {2} board={board} handleCellClick={handleCellClick}/>
          </tr>
          <tr>
            <Cell num = {3}board ={board} handleCellClick={handleCellClick}/>
            <Cell num = {4}board ={board} handleCellClick={handleCellClick}/>
            <Cell num = {5}board ={board} handleCellClick={handleCellClick}/>
          </tr>
          <tr>
            <Cell num = {6} board={board} handleCellClick={handleCellClick}/>
            <Cell num = {7} board={board} handleCellClick={handleCellClick}/>
            <Cell num = {8} board={board} handleCellClick={handleCellClick}/>
          </tr>
        </tbody>
      </table>
      <div>{checkStatus()}</div>
      <br />
      <button onClick={restart}>Restart</button>
    </div>
  )
}

export default TicTacToe