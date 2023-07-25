import { chessBoardState } from "./ChessBoardState";
import { useState } from 'react';

function ChessBoardSquare({row,column,handleClickFactory}){
    const [chess,setChess]=useState('\u00A0');
    const [clicked,setClicked]=useState(false);//To prevent the square from being clicked again
    let reRenderCallback=()=> setChess(chessBoardState[row][column]);
    const handleClick=handleClickFactory(row,column,reRenderCallback,clicked,setClicked);

    return <button className='square' onClick={handleClick}>
        {chess}
    </button>
}



export default ChessBoardSquare;