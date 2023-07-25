import { boardSize } from './ChessBoardConfig';

let chessBoardState=Array.from({ length: boardSize }, () => new Array(boardSize).fill('\u00A0'));

function setChessBoardState(row,col,value){
    chessBoardState[row][col]=value;
}

let currentPlayer='X';

function toogleCurrentPlayer(){
    currentPlayer==='X'?currentPlayer='O':currentPlayer='X';
}

export {chessBoardState,setChessBoardState,currentPlayer,toogleCurrentPlayer};

//WTF? Why am I going to put the state in a single file?