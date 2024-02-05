import { carta } from "./declarations";

export class CardsClass {
    arrayCards:carta[]=this.getCards();
    arrayCardsPreferiti:carta[] =this.getPreferCards();
    

    AddCards(card:carta){
        this.arrayCards = [card, ...this.arrayCards];
        
    }
    AddPrefers(){
        this.arrayCardsPreferiti = this.arrayCards.filter(card => card.preferiti)
    }

    saveCards(){
        localStorage.setItem('cards', JSON.stringify(this.arrayCards));
        
    }
    getCards(){
        
      return JSON.parse(localStorage.getItem('cards') || "[]");
    }

    savePreferCards(){
        localStorage.setItem('favoriteCards', JSON.stringify(this.arrayCardsPreferiti));
        
    }
    getPreferCards(){
        
      return JSON.parse(localStorage.getItem('favoriteCards') || "[]");
    }
}


