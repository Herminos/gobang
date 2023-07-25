import ChessBoardSquare from "./ChessBoardSquare";

function ChessBoardRow(props){
    let rowList=[];
    for(let i=0;i<props.num;i++){
        rowList.push(<li key={i} className="squareContainer"><ChessBoardSquare {...props} column={i}/></li>)
    }
    return (<ul>{rowList}</ul>);
}

export default ChessBoardRow;