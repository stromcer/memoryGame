export function createBoardObject(allCardsKeys){
    let tempCardArr = allCardsKeys
    let boardObject = {
        row1:{},
        row2:{},
        row3:{},
        row4:{}
    }
  
    for(let row in boardObject){
        for (let index=1; index<=4;index++){
            boardObject[row][index] = tempCardArr[0]
            tempCardArr.shift();
        }
    }
  
    return boardObject
  }