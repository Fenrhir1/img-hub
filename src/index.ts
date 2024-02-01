/** @format */

import { render } from "./utilities/render";
import "./css/general.css";
import { mapNodes } from "./declarations";
import { utilityAddEventListener } from "./utilities/addEventListener";
import { getImg } from "./loader/getImg";

function renderMainPage() {
  return `<div id="main container">
  <div id="top-container" class="top-container">
    <input id="${mapNodes.inputImg}" type="text" placeholder="Inserisci l'url dell'immagine">
    <input id="${mapNodes.inputTitle}" type="text" placeholder="Inserisci il titolo dell'immagine">
    <input id="${mapNodes.inputDescription}" type="text" placeholder="Inserisci la descrizione dell'immagine">
    <button id="${mapNodes.addBtn}">Aggiungi la tua immagine!</button>
  </div>
  <div id="${mapNodes.bottomContainer}" class="bottom-container">
  </div>`;
}

window.onload = () => {
  render("root", renderMainPage);
  utilityAddEventListener(mapNodes.addBtn, "click", getImg);
};
