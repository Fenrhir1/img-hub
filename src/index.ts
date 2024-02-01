/** @format */

import { render } from './utilities/render';
import './css/general.css';

function renderMainPage() {
  return `<div id="main container">
  <div id="top-container" class="top-container">
    <input type="text" placeholder="Inserisci l'url dell'immagine">
    <input type="text" placeholder="Inserisci il titolo dell'immagine">
    <input type="text" placeholder="Inserisci la descrizione dell'immagine">
    <button>Aggiungi la tua immagine!</button>
  </div>
  <div id="bottom-container">
  </div>`;
}

window.onload = () => {
  render('root', renderMainPage);
};
