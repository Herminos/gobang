import ChessBoardRow from "./ChessBoardRow";
import { useState } from "react";
import { boardSize } from "./ChessBoardConfig";
import { setChessBoardState, currentPlayer, toogleCurrentPlayer } from "./ChessBoardState";

function ChessBoard(){
    const [currentPlayerState,setCurrentPlayerState]=useState('X');

    function handleClickFactory(row,column,reRenderCallback){
        return function(){
            setChessBoardState(row,column,currentPlayer);
            toogleCurrentPlayer();
            setCurrentPlayerState(currentPlayer);
            reRenderCallback();//To re-render the square to disaply the chess, It will be a setState() call
        }
    }//A function factory to generate a function to handle click event for each square

    let row=[];
    for(let i=0;i<boardSize;i++){
        row.push(<li key={i} className="rowContainer">
            <ChessBoardRow num={boardSize} row={i} handleClickFactory={handleClickFactory}/>
            </li>)
    }
    return (<>
        <ul>{row}</ul>
        <h1>Current Player:{currentPlayerState}</h1>
    </>
    );

}

export default ChessBoard;