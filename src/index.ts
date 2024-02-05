/** @format */

import { render } from "./utilities/render";
import "./css/general.css";
import { mapNodes } from "./declarations";
import { utilityAddEventListener } from "./utilities/addEventListener";
import { createCard, parseHtmlCards } from "./loader/createCard";
import { CardsClass } from "./store";
import { toggleListCards } from "./utilities/prefer";

export const cardsApp = new CardsClass


function renderMainPage() {
  return `<div id="main container">
  <div id="top-container" class="top-container">
  <div id="${mapNodes.form}">
    <input id="${mapNodes.inputImg}" type="text" placeholder="Inserisci l'url dell'immagine">
    <input id="${mapNodes.inputTitle}" type="text" placeholder="Inserisci il titolo dell'immagine">
    <input id="${mapNodes.inputDescription}" type="text" placeholder="Inserisci la descrizione dell'immagine">
    <button id="${mapNodes.addBtn}">Aggiungi la tua immagine!</button>
    </div>
    <button id="${mapNodes.prefBtn}">⭐</button>
  </div>
  <div id="${mapNodes.bottomContainer}" class="bottom-container">
    ${parseHtmlCards(cardsApp.arrayCards)}
  </div>`;
 
}


window.onload = () => {
  render("root", renderMainPage);
  utilityAddEventListener(mapNodes.addBtn, "click", createCard);
  toggleListCards();
};
