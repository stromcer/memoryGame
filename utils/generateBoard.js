
export function generateBoard(boardObject){
    
    let resultHtmlBoard = ``;
  
    for(let row in boardObject){
      resultHtmlBoard +=`
      <div id="board${row}" class="row h-25 text-center mx-0">
      `;
  
  
        for(let col in boardObject[row]){
          resultHtmlBoard +=`
          <div id="board${row}col${col}" class="col w-25 my-auto px-0">
            <div id="" class="">${boardObject[row][col].image}</div>
          </div>
          `;
        }
      resultHtmlBoard +=`
      </div>
      `;
    }
  
    return resultHtmlBoard
}