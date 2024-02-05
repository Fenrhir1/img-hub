import { cardsApp } from "..";
import { mapNodes } from "../declarations";
import { parseHtmlCards } from "../loader/createCard";
import { utilityGetNode } from "./getNode";

export function togglePreferiti(){
    let prefBtns =  document.querySelectorAll('.add-pref');
    prefBtns.forEach((btn,i)=>{
        btn.addEventListener('click', ()=>{
         let isPreferito = cardsApp.arrayCards[i].preferiti
         cardsApp.arrayCards[i].preferiti  = isPreferito  === false ? true : false;
            cardsApp.saveCards();
            cardsApp.AddPrefers();
            cardsApp.savePreferCards();

        });
    });
}

export function toggleListCards(){
    let prefBtnList = utilityGetNode(mapNodes.prefBtn)
prefBtnList.addEventListener('click', ()=>{
    let bottomContainer = utilityGetNode(mapNodes.bottomContainer);
    let form = utilityGetNode(mapNodes.form);
    form.style.display = form.style.display == "block" ? "none" : "block";

    if(form.style.display == "none"){
        bottomContainer.innerHTML = parseHtmlCards(cardsApp.arrayCardsPreferiti);
        
        

    }else{bottomContainer.innerHTML = parseHtmlCards(cardsApp.arrayCards);

    }
    togglePreferiti();
});
}