import React, {useState} from 'react'
import Board from './Board'
import Sidebar from '../Sidebar/Sidebar';
import{calculateWinner} from './Helper'
import './Game.css'

const Game =() => {
    <Sidebar/>
    const[board, setBoard] = useState(Array(9).fill(null))
    const[xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)
    const handleClick = (index) => {
        const boardCopy = [...board]
        //был ли клик по ичейке или игра окончена
        if (winner || boardCopy[index]) return
        //чей ход
        boardCopy[index] = xIsNext ? 'X' : '0'
        //обновить
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return(
            <button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}>Почисти за собой</button>
        )
    }

  return (
    <div className='wrapper'>
        {startNewGame()}
        <Board squares={board} click = {handleClick} />
        <p className='game_info'>
            {winner ? ('Победитель ' +  winner) : 'Сейчас ходит ' + (xIsNext ? 'X' : '0' )}
        </p>
    </div>
  )
}

export default Game