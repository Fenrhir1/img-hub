import { cardsApp } from "..";
import { carta, mapNodes } from "../declarations";
import { utilityGetNode } from "../utilities/getNode";
import { togglePreferiti } from "../utilities/prefer";


export function createCard() {
let inputImg = utilityGetNode(mapNodes.inputImg) as HTMLInputElement;
let inputTitle = utilityGetNode(mapNodes.inputTitle) as HTMLInputElement;
let inputDescription = utilityGetNode(mapNodes.inputDescription) as HTMLInputElement;
 let bottomContainer = utilityGetNode(mapNodes.bottomContainer) as HTMLElement;
let card:carta= {
  id: cardsApp.arrayCards.length + 1,
  preferiti: false,
  image: inputImg.value,
  title: inputTitle.value,
  description: inputDescription.value,
}
cardsApp.AddCards(card);
cardsApp.saveCards();
bottomContainer.innerHTML = parseHtmlCards(cardsApp.arrayCards)
togglePreferiti()
}

export function parseHtmlCards(cards:carta[]){
 let parsedCards = cards.map((card)=>{
  return `<div>
  <img src="${card.image}"></img>
  <h2>${card.title}</h2>
  <p>${card.description}</p>
  <button class="add-pref" id="${card.id}">⭐</button>
  </div>`
}).join('');
return parsedCards;
}
