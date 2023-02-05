 export function shuffleArray(allCardsKeys,allGameCards) {
    let tempCardArr = allCardsKeys.concat(allCardsKeys)
    let finalArr = []
    for (let i = tempCardArr.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const randomItem = tempCardArr[randomIndex];
        tempCardArr[randomIndex] = tempCardArr[i];
        tempCardArr[i] = randomItem;
    }

    for(let key of tempCardArr){
      finalArr.push(allGameCards[key])
    };

   return finalArr;
 }
