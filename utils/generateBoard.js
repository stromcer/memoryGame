
export function generateBoard(boardObject){
    
    let resultHtmlBoard = ``;
  
    for(let row in boardObject){
      resultHtmlBoard +=`
      <div id="board${row}" class="row h-25 text-center mx-0">
      `;
  
  
        for(let col in boardObject[row]){
          resultHtmlBoard +=`
          <div id="board_${row}_${col}" class="col w-25 h-100 px-0 d-flex justify-content-center align-items-center">
            <button id="button_${row}_${col}" class="rounded border border-dark w-75 h-75 gameCard">
              <div id="card_${row}_${col}" class="h1">${boardObject[row][col].image}</div>
            </button>
          </div>
          `;
        }
      resultHtmlBoard +=`
      </div>
      `;
    }
  
    return resultHtmlBoard
}