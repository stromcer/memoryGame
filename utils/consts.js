
export const BOARD_HTML = document.querySelector("#board");
export const GAME_TIMER = document.querySelector("#time_counter");
export const GAME_SCORE = document.querySelector("#score_counter");
export const GAME_FINISH = document.querySelector("#finish-display");
export let ENGINE_CARDS = {card1:"", card2:""};
export let ENGINE_VARS = {board_obj:null,incrementTimer:null , activeCard1 : "",activeCard2 : "",lastID :"",totalSuccess:0};