import { chessBoardState } from "./ChessBoardState";
import { useState } from 'react';

function ChessBoardSquare({row,column,handleClickFactory}){
    const [chess,setChess]=useState('\u00A0');
    let reRenderCallback=()=> setChess(chessBoardState[row][column]);
    const handleClick=handleClickFactory(row,column,reRenderCallback);

    return <button className='square' onClick={handleClick}>
        {chess}
    </button>
}



export default ChessBoardSquare;