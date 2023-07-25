import { boardSize } from './ChessBoardConfig';

let chessBoardState=Array.from({ length: boardSize+5 }, () => new Array(boardSize).fill('\u00A0'));

function setChessBoardState(row,col,value){
    chessBoardState[row][col]=value;
}

let currentPlayer='X';

function toogleCurrentPlayer(){
    currentPlayer==='X'?currentPlayer='O':currentPlayer='X';
}

export {chessBoardState,setChessBoardState,currentPlayer,toogleCurrentPlayer};

export let finished=false;

export function judgedWinner(row,column,currentPlayer){
    //Judge if the current player wins
    return judgedWinnerHorizontal(row,column,currentPlayer)||judgedWinnerVertical(row,column,currentPlayer)||judgedWinnerDiagonal(row,column,currentPlayer);
}

function judgedWinnerHorizontal(row,column,currentPlayer){
    let count=0;
    let left=true;
    let right=true;
    for(let i=1;i<=4;i++){
        if(chessBoardState[row][column+i]===currentPlayer&&left){
            count++;
        }
        else{
            left=false;
        }
        if(chessBoardState[row][column-i]===currentPlayer&&right){
            count++;
        }
        else{
            right=false;
        }  
    }
    if(count>=4){
        finished=true;
        return true;
    }
    return false;
}


function judgedWinnerVertical(row,column,currentPlayer){
    let count=0;
    let left=true;
    let right=true;
    for(let i=1;i<=4;i++){
        if(row+i<=boardSize){
            if(chessBoardState[row+i][column]===currentPlayer&&left){
                count++;
            }
            else{
                left=false;
            }
        }
        if(row-i>=0){
            if(chessBoardState[row-i][column]===currentPlayer&&right){
                count++;
            }
            else{
                right=false;
            }  
        }
    }
    if(count>=4){
        finished=true;
        return true;
    }
    return false;
}
function judgedWinnerDiagonal(row,column,currentPlayer){
    return judgedWinnerDiagonalLeft(row,column,currentPlayer)||judgedWinnerDiagonalRight(row,column,currentPlayer);
}

function judgedWinnerDiagonalLeft(row,column,currentPlayer){
    let count=0;
    let left=true;
    let right=true;
    for(let i=1;i<=4;i++){
        if(row+i<=boardSize){
        if(chessBoardState[row+i][column+i]===currentPlayer&&left){
            count++;
        }
        else{
            left=false;
        }}
        if(row-i>=0){
        if(chessBoardState[row-i][column-i]===currentPlayer&&right){
            count++;
        }
        else{
            right=false;
        }}
    }
    if(count>=4){
        finished=true;
        return true;
    }
    return false;
}

function judgedWinnerDiagonalRight(row,column,currentPlayer){
    let count=0;
    let left=true;
    let right=true;
    for(let i=1;i<=4;i++){
        if(row+i<=boardSize){
        if(chessBoardState[row+i][column-i]===currentPlayer&&left){
            count++;
        }
        else{
            left=false;
        }}
        if(row-i>=0){
        if(chessBoardState[row-i][column+i]===currentPlayer&&right){
            count++;
        }
        else{
            right=false;
        }} 
    }
    if(count>=4){
        finished=true;
        return true;
    }
    return false;
}



//WTF? Why am I going to put the state in a single file?