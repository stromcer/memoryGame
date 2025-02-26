//import { emojiFoods } from './emoji-foods.js';
import { allGameCards } from './utils/allCards.js';
import { shuffleArray } from './utils/shuffleArray.js';
import { createBoardObject } from './utils/createBoardObject.js';
import { generateBoard } from './utils/generateBoard.js';
import { BOARD_HTML, GAME_FINISH, GAME_SCORE, GAME_TIMER, ENGINE_VARS, GAME_SHARE } from './utils/consts.js';



// FUNCIONES DEL RELOJ
function timer(){
    if(ENGINE_VARS.incrementTimer){
        GAME_TIMER.innerHTML++
    }
}
function timerReset(){
    GAME_TIMER.innerHTML= 0,
    ENGINE_VARS.incrementTimer = true;
}

function timerStop(){
    ENGINE_VARS.incrementTimer = false;
}


//FUNCIONES PARA EL JUEGO

function setCardsDefault(card1,card2){
    
    document.getElementById(card1).className = "rounded border border-dark w-75 h-75 gameCard";
    document.getElementById(card2).className = "rounded border border-dark w-75 h-75 gameCard";
    ENGINE_VARS.stopCards = false;
    refreshData();
}

function createShareLink(){
    let link = `https://twitter.com/intent/tweet?url=https%3A%2F%2FCristian_Mola.com&text=`
    let str = `¡He obtenido ${GAME_SCORE.innerHTML} puntos en el increible juego de memoria de Dani!`
    let formattedStr = str.split(" ").join("%20")
    console.log(formattedStr)
    GAME_SHARE.href = `${link}${formattedStr}`
}

function checkIfLast(buttonID){
    let classStr = document.getElementById(buttonID).className
    return classStr.includes("gameCard_ACTIVE")
}



function refreshData(){
    ENGINE_VARS.activeCard1 = "";
    ENGINE_VARS.activeCard2 = "";
    ENGINE_VARS.lastID = "";

    
}

function checkIfEndGame(){
    if(ENGINE_VARS.totalSuccess==8){
        timerStop();
        BOARD_HTML.className="col-4 bg-success border border-dark d-none"
        GAME_FINISH.className="finish-display text-center"
        document.getElementById("endScore").innerHTML = `Tu puntuacion final: ${GAME_SCORE.innerHTML}`
        createShareLink();
    }
}

function compareTwo(buttonID,cardValue){
    if(!Boolean(ENGINE_VARS.activeCard1)){
        ENGINE_VARS.activeCard1 = cardValue;
        ENGINE_VARS.lastID = buttonID;
        return
    }
    ENGINE_VARS.activeCard2 = cardValue;
    
    
    if(ENGINE_VARS.activeCard1 == ENGINE_VARS.activeCard2){
        GAME_SCORE.innerHTML++
        ENGINE_VARS.totalSuccess++
        refreshData();
        checkIfEndGame();
        return
    }
    GAME_SCORE.innerHTML--
    ENGINE_VARS.stopCards = true;
    setTimeout(()=>{setCardsDefault(ENGINE_VARS.lastID,buttonID)},500);
    
    
}





function triggerCard(buttonID){
    let classList = document.getElementById(buttonID).className.split(" "); 
    classList.pop();
    classList.push("gameCard_ACTIVE");
    let arrClass = classList.join(" ");
    let boardCoords = [buttonID.split("_")[1],buttonID.split("_")[2]];
    let cardValue = ENGINE_VARS.board_obj[boardCoords[0]][boardCoords[1]].value;
    document.getElementById(buttonID).className = arrClass;
    compareTwo(buttonID,cardValue);

}




// CARGA HTML:


window.onload = function() {
    setInterval(timer, 1000);
    startGame();
    // Listener global de botones
    document.addEventListener("click", function(event){
        
        if(document.getElementById(event.target.id).tagName == "BUTTON"){

            if(event.target.id == "start-btn"){
                startGame()
                return
            }
            if(ENGINE_VARS.stopCards){
                return
            }

            if(checkIfLast(event.target.id)){
                return
            }

            triggerCard(event.target.id);
        }
    });



    function startGame(){
        ENGINE_VARS.stopCards = false;
        BOARD_HTML.className= "col-4";
        GAME_FINISH.className= "text-center d-none";
        ENGINE_VARS.totalSuccess= 0;
        timerReset();
        GAME_SCORE.innerHTML = 0;
        refreshData();
        let cardList = Object.keys(allGameCards);
        let shuffledCardList = shuffleArray(cardList,allGameCards);
        ENGINE_VARS.board_obj = createBoardObject(shuffledCardList);
        let htmlBoard = generateBoard(ENGINE_VARS.board_obj);

        BOARD_HTML.innerHTML= htmlBoard ;
    }





};

























// INDICACIONES:
/**
 *
 * Empezar el juego cuando el usuario haga click en el botón
 * .start-btn
 *
 * Crear las cards con los emojis usando el template
 * #template-card
 *
 * Cada board generado debe ser aleatorio y tiene que estar barajado con un máximo de 16 cards 4x4
 * shuffleArray
 *
 * Añadir clase flipped a las cards cuando el usuario haga click
 * .board (delegación de eventos)
 *
 * Comprobar si las dos cartas son iguales y añadir clase match
 * .match
 *
 * Sumar un punto si son iguales y restar un punto si no lo son
 * Actualizar el contador de puntos
 * .score-board__item-score
 *
 * Iniciar el temporizador cuando se empieza el juego
 * Actualizar el contador de segundos
 * .score-board__item-time
 *
 * Mostrar el mensaje de fin de juego cuando hagan match todas las cards
 * .finish-display
 *
 * Cuando el usuario quiera volver a jugar: ocultar mensaje fin de juego, resetear contador de puntos, segundos y board
 *
 *
 * ⭐BONUS⭐: Compartir en redes sociales que has terminado el proyecto
 * Haz ctrl + click en este link para compartir en Twitter:
 * https://twitter.com/intent/tweet?url=https%3A%2F%2Fnaviscode.gumroad.com%2Fl%2Ffrontend-fastlane-plan&text=Completado%20el%20proyecto%20del%20curso%20del%20DOM%20del%20Frontend%20Fastlane%20Plan%20de%20%40NavisCode%0A%0A%F0%9F%9A%80%20A%20por%20el%20siguiente%20reto%21%0A%0A
 *
 */

