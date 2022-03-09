import React from 'react'
import './Cell.css'
function Cell({ handleCellClick, num, board}) {
  return (
    <td onClick={()=> handleCellClick(num)}>
      {board[num]}
    </td>
  )
}

export default Cell