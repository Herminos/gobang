import ChessBoardRow from "./ChessBoardRow";
import { useState } from "react";
import { boardSize } from "./ChessBoardConfig";
import { setChessBoardState, currentPlayer, toogleCurrentPlayer,judgedWinner,finished } from "./ChessBoardState";

function ChessBoard(){
    const [currentPlayerState,setCurrentPlayerState]=useState('X');
    const [winner,setWinner]=useState('\u00A0');

    function handleClickFactory(row,column,reRenderCallback,clicked,setClicked){
        return function(){
            if(clicked||finished){
                return;
            }
            setChessBoardState(row,column,currentPlayer);
            if(judgedWinner(row,column,currentPlayer)){
                setWinner(currentPlayer);
            }
            toogleCurrentPlayer();
            setCurrentPlayerState(currentPlayer);
            setClicked(true);
            
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
        {!finished?<h1>Current Player:{currentPlayerState}</h1>:
        <h1>Winner:{winner}</h1>}

    </>
    );

}

export default ChessBoard;