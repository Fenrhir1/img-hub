/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/general.css":
/*!*****************************!*\
  !*** ./src/css/general.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/declarations.ts":
/*!*****************************!*\
  !*** ./src/declarations.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


/** @format */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapNodes = void 0;
exports.mapNodes = {
    root: "root",
    inputImg: "inputImg",
    inputTitle: "inputTitle",
    inputDescription: "inputDescription",
    addBtn: "addBtn",
    bottomContainer: "bottom-container",
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/** @format */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cardsApp = void 0;
const render_1 = __webpack_require__(/*! ./utilities/render */ "./src/utilities/render.ts");
__webpack_require__(/*! ./css/general.css */ "./src/css/general.css");
const declarations_1 = __webpack_require__(/*! ./declarations */ "./src/declarations.ts");
const addEventListener_1 = __webpack_require__(/*! ./utilities/addEventListener */ "./src/utilities/addEventListener.ts");
const createCard_1 = __webpack_require__(/*! ./loader/createCard */ "./src/loader/createCard.ts");
const store_1 = __webpack_require__(/*! ./store */ "./src/store.ts");
exports.cardsApp = new store_1.CardsClass;
function renderMainPage() {
    return `<div id="main container">
  <div id="top-container" class="top-container">
    <input id="${declarations_1.mapNodes.inputImg}" type="text" placeholder="Inserisci l'url dell'immagine">
    <input id="${declarations_1.mapNodes.inputTitle}" type="text" placeholder="Inserisci il titolo dell'immagine">
    <input id="${declarations_1.mapNodes.inputDescription}" type="text" placeholder="Inserisci la descrizione dell'immagine">
    <button id="${declarations_1.mapNodes.addBtn}">Aggiungi la tua immagine!</button>
  </div>
  <div id="${declarations_1.mapNodes.bottomContainer}" class="bottom-container">
  </div>`;
}
window.onload = () => {
    (0, render_1.render)("root", renderMainPage);
    (0, addEventListener_1.utilityAddEventListener)(declarations_1.mapNodes.addBtn, "click", createCard_1.createCard);
};


/***/ }),

/***/ "./src/loader/createCard.ts":
/*!**********************************!*\
  !*** ./src/loader/createCard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCard = void 0;
const __1 = __webpack_require__(/*! .. */ "./src/index.ts");
const declarations_1 = __webpack_require__(/*! ../declarations */ "./src/declarations.ts");
const getNode_1 = __webpack_require__(/*! ../utilities/getNode */ "./src/utilities/getNode.ts");
function createCard() {
    let inputImg = (0, getNode_1.utilityGetNode)(declarations_1.mapNodes.inputImg);
    let inputTitle = (0, getNode_1.utilityGetNode)(declarations_1.mapNodes.inputTitle);
    let inputDescription = (0, getNode_1.utilityGetNode)(declarations_1.mapNodes.inputDescription);
    let card = {
        id: __1.cardsApp.arrayCards.length + 1,
        preferiti: false,
        image: inputImg.value,
        title: inputTitle.value,
        description: inputDescription.value,
    };
    __1.cardsApp.AddCards(card);
    __1.cardsApp.saveCards();
}
exports.createCard = createCard;


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardsClass = void 0;
class CardsClass {
    constructor() {
        this.arrayCards = this.getCards();
        this.arrayCardsPreferiti = this.getPreferCards();
    }
    AddCards(card) {
        this.arrayCards = [card, ...this.arrayCards];
    }
    AddPrefers(card) {
        this.arrayCardsPreferiti = this.arrayCards.filter(card => card.preferiti);
    }
    saveCards() {
        localStorage.setItem('cards', JSON.stringify(this.arrayCards));
    }
    getCards() {
        return JSON.parse(localStorage.getItem('cards') || "[]");
    }
    savePreferCards() {
        localStorage.setItem('favoriteCards', JSON.stringify(this.arrayCardsPreferiti));
    }
    getPreferCards() {
        return JSON.parse(localStorage.getItem('favoriteCards') || "[]");
    }
}
exports.CardsClass = CardsClass;


/***/ }),

/***/ "./src/utilities/addEventListener.ts":
/*!*******************************************!*\
  !*** ./src/utilities/addEventListener.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.utilityAddEventListener = void 0;
const getNode_1 = __webpack_require__(/*! ./getNode */ "./src/utilities/getNode.ts");
function utilityAddEventListener(nodeID, event, handler) {
    const node = (0, getNode_1.utilityGetNode)(nodeID);
    node.addEventListener(event, handler);
}
exports.utilityAddEventListener = utilityAddEventListener;


/***/ }),

/***/ "./src/utilities/getNode.ts":
/*!**********************************!*\
  !*** ./src/utilities/getNode.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.utilityGetNode = void 0;
function utilityGetNode(nodeID) {
    const node = document.getElementById(nodeID);
    if (!!node)
        return node;
    else
        throw new Error(`Element with id ${nodeID} not found`);
}
exports.utilityGetNode = utilityGetNode;


/***/ }),

/***/ "./src/utilities/render.ts":
/*!*********************************!*\
  !*** ./src/utilities/render.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.render = void 0;
const getNode_1 = __webpack_require__(/*! ./getNode */ "./src/utilities/getNode.ts");
function render(nodeID, component) {
    const node = (0, getNode_1.utilityGetNode)(nodeID);
    node.innerHTML = component();
}
exports.render = render;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQWE7QUFDYjtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hhO0FBQ2I7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCLGlCQUFpQixtQkFBTyxDQUFDLHFEQUFvQjtBQUM3QyxtQkFBTyxDQUFDLGdEQUFtQjtBQUMzQix1QkFBdUIsbUJBQU8sQ0FBQyw2Q0FBZ0I7QUFDL0MsMkJBQTJCLG1CQUFPLENBQUMseUVBQThCO0FBQ2pFLHFCQUFxQixtQkFBTyxDQUFDLHVEQUFxQjtBQUNsRCxnQkFBZ0IsbUJBQU8sQ0FBQywrQkFBUztBQUNqQyxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlDQUFpQztBQUNsRCxpQkFBaUIsbUNBQW1DO0FBQ3BELGlCQUFpQix5Q0FBeUM7QUFDMUQsa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBLGFBQWEsd0NBQXdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCO0FBQ2xCLFlBQVksbUJBQU8sQ0FBQywwQkFBSTtBQUN4Qix1QkFBdUIsbUJBQU8sQ0FBQyw4Q0FBaUI7QUFDaEQsa0JBQWtCLG1CQUFPLENBQUMsd0RBQXNCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7O0FDcEJMO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7O0FDM0JMO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELCtCQUErQjtBQUMvQixrQkFBa0IsbUJBQU8sQ0FBQyw2Q0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7Ozs7Ozs7Ozs7QUNSbEI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7QUNWVDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2Qsa0JBQWtCLG1CQUFPLENBQUMsNkNBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7Ozs7O1VDUmQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1hcHAvLi9zcmMvY3NzL2dlbmVyYWwuY3NzP2U0NGYiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1hcHAvLi9zcmMvZGVjbGFyYXRpb25zLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtYXBwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtYXBwLy4vc3JjL2xvYWRlci9jcmVhdGVDYXJkLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtYXBwLy4vc3JjL3N0b3JlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtYXBwLy4vc3JjL3V0aWxpdGllcy9hZGRFdmVudExpc3RlbmVyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtYXBwLy4vc3JjL3V0aWxpdGllcy9nZXROb2RlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtYXBwLy4vc3JjL3V0aWxpdGllcy9yZW5kZXIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3R5cGVzY3JpcHQtYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKiogQGZvcm1hdCAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tYXBOb2RlcyA9IHZvaWQgMDtcbmV4cG9ydHMubWFwTm9kZXMgPSB7XG4gICAgcm9vdDogXCJyb290XCIsXG4gICAgaW5wdXRJbWc6IFwiaW5wdXRJbWdcIixcbiAgICBpbnB1dFRpdGxlOiBcImlucHV0VGl0bGVcIixcbiAgICBpbnB1dERlc2NyaXB0aW9uOiBcImlucHV0RGVzY3JpcHRpb25cIixcbiAgICBhZGRCdG46IFwiYWRkQnRuXCIsXG4gICAgYm90dG9tQ29udGFpbmVyOiBcImJvdHRvbS1jb250YWluZXJcIixcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKiBAZm9ybWF0ICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNhcmRzQXBwID0gdm9pZCAwO1xuY29uc3QgcmVuZGVyXzEgPSByZXF1aXJlKFwiLi91dGlsaXRpZXMvcmVuZGVyXCIpO1xucmVxdWlyZShcIi4vY3NzL2dlbmVyYWwuY3NzXCIpO1xuY29uc3QgZGVjbGFyYXRpb25zXzEgPSByZXF1aXJlKFwiLi9kZWNsYXJhdGlvbnNcIik7XG5jb25zdCBhZGRFdmVudExpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi91dGlsaXRpZXMvYWRkRXZlbnRMaXN0ZW5lclwiKTtcbmNvbnN0IGNyZWF0ZUNhcmRfMSA9IHJlcXVpcmUoXCIuL2xvYWRlci9jcmVhdGVDYXJkXCIpO1xuY29uc3Qgc3RvcmVfMSA9IHJlcXVpcmUoXCIuL3N0b3JlXCIpO1xuZXhwb3J0cy5jYXJkc0FwcCA9IG5ldyBzdG9yZV8xLkNhcmRzQ2xhc3M7XG5mdW5jdGlvbiByZW5kZXJNYWluUGFnZSgpIHtcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJtYWluIGNvbnRhaW5lclwiPlxyXG4gIDxkaXYgaWQ9XCJ0b3AtY29udGFpbmVyXCIgY2xhc3M9XCJ0b3AtY29udGFpbmVyXCI+XHJcbiAgICA8aW5wdXQgaWQ9XCIke2RlY2xhcmF0aW9uc18xLm1hcE5vZGVzLmlucHV0SW1nfVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnNlcmlzY2kgbCd1cmwgZGVsbCdpbW1hZ2luZVwiPlxyXG4gICAgPGlucHV0IGlkPVwiJHtkZWNsYXJhdGlvbnNfMS5tYXBOb2Rlcy5pbnB1dFRpdGxlfVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnNlcmlzY2kgaWwgdGl0b2xvIGRlbGwnaW1tYWdpbmVcIj5cclxuICAgIDxpbnB1dCBpZD1cIiR7ZGVjbGFyYXRpb25zXzEubWFwTm9kZXMuaW5wdXREZXNjcmlwdGlvbn1cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW5zZXJpc2NpIGxhIGRlc2NyaXppb25lIGRlbGwnaW1tYWdpbmVcIj5cclxuICAgIDxidXR0b24gaWQ9XCIke2RlY2xhcmF0aW9uc18xLm1hcE5vZGVzLmFkZEJ0bn1cIj5BZ2dpdW5naSBsYSB0dWEgaW1tYWdpbmUhPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBpZD1cIiR7ZGVjbGFyYXRpb25zXzEubWFwTm9kZXMuYm90dG9tQ29udGFpbmVyfVwiIGNsYXNzPVwiYm90dG9tLWNvbnRhaW5lclwiPlxyXG4gIDwvZGl2PmA7XG59XG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgICgwLCByZW5kZXJfMS5yZW5kZXIpKFwicm9vdFwiLCByZW5kZXJNYWluUGFnZSk7XG4gICAgKDAsIGFkZEV2ZW50TGlzdGVuZXJfMS51dGlsaXR5QWRkRXZlbnRMaXN0ZW5lcikoZGVjbGFyYXRpb25zXzEubWFwTm9kZXMuYWRkQnRuLCBcImNsaWNrXCIsIGNyZWF0ZUNhcmRfMS5jcmVhdGVDYXJkKTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlQ2FyZCA9IHZvaWQgMDtcbmNvbnN0IF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcbmNvbnN0IGRlY2xhcmF0aW9uc18xID0gcmVxdWlyZShcIi4uL2RlY2xhcmF0aW9uc1wiKTtcbmNvbnN0IGdldE5vZGVfMSA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvZ2V0Tm9kZVwiKTtcbmZ1bmN0aW9uIGNyZWF0ZUNhcmQoKSB7XG4gICAgbGV0IGlucHV0SW1nID0gKDAsIGdldE5vZGVfMS51dGlsaXR5R2V0Tm9kZSkoZGVjbGFyYXRpb25zXzEubWFwTm9kZXMuaW5wdXRJbWcpO1xuICAgIGxldCBpbnB1dFRpdGxlID0gKDAsIGdldE5vZGVfMS51dGlsaXR5R2V0Tm9kZSkoZGVjbGFyYXRpb25zXzEubWFwTm9kZXMuaW5wdXRUaXRsZSk7XG4gICAgbGV0IGlucHV0RGVzY3JpcHRpb24gPSAoMCwgZ2V0Tm9kZV8xLnV0aWxpdHlHZXROb2RlKShkZWNsYXJhdGlvbnNfMS5tYXBOb2Rlcy5pbnB1dERlc2NyaXB0aW9uKTtcbiAgICBsZXQgY2FyZCA9IHtcbiAgICAgICAgaWQ6IF9fMS5jYXJkc0FwcC5hcnJheUNhcmRzLmxlbmd0aCArIDEsXG4gICAgICAgIHByZWZlcml0aTogZmFsc2UsXG4gICAgICAgIGltYWdlOiBpbnB1dEltZy52YWx1ZSxcbiAgICAgICAgdGl0bGU6IGlucHV0VGl0bGUudmFsdWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpbnB1dERlc2NyaXB0aW9uLnZhbHVlLFxuICAgIH07XG4gICAgX18xLmNhcmRzQXBwLkFkZENhcmRzKGNhcmQpO1xuICAgIF9fMS5jYXJkc0FwcC5zYXZlQ2FyZHMoKTtcbn1cbmV4cG9ydHMuY3JlYXRlQ2FyZCA9IGNyZWF0ZUNhcmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2FyZHNDbGFzcyA9IHZvaWQgMDtcbmNsYXNzIENhcmRzQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFycmF5Q2FyZHMgPSB0aGlzLmdldENhcmRzKCk7XG4gICAgICAgIHRoaXMuYXJyYXlDYXJkc1ByZWZlcml0aSA9IHRoaXMuZ2V0UHJlZmVyQ2FyZHMoKTtcbiAgICB9XG4gICAgQWRkQ2FyZHMoY2FyZCkge1xuICAgICAgICB0aGlzLmFycmF5Q2FyZHMgPSBbY2FyZCwgLi4udGhpcy5hcnJheUNhcmRzXTtcbiAgICB9XG4gICAgQWRkUHJlZmVycyhjYXJkKSB7XG4gICAgICAgIHRoaXMuYXJyYXlDYXJkc1ByZWZlcml0aSA9IHRoaXMuYXJyYXlDYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLnByZWZlcml0aSk7XG4gICAgfVxuICAgIHNhdmVDYXJkcygpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcmRzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5hcnJheUNhcmRzKSk7XG4gICAgfVxuICAgIGdldENhcmRzKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FyZHMnKSB8fCBcIltdXCIpO1xuICAgIH1cbiAgICBzYXZlUHJlZmVyQ2FyZHMoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmYXZvcml0ZUNhcmRzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5hcnJheUNhcmRzUHJlZmVyaXRpKSk7XG4gICAgfVxuICAgIGdldFByZWZlckNhcmRzKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVDYXJkcycpIHx8IFwiW11cIik7XG4gICAgfVxufVxuZXhwb3J0cy5DYXJkc0NsYXNzID0gQ2FyZHNDbGFzcztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51dGlsaXR5QWRkRXZlbnRMaXN0ZW5lciA9IHZvaWQgMDtcbmNvbnN0IGdldE5vZGVfMSA9IHJlcXVpcmUoXCIuL2dldE5vZGVcIik7XG5mdW5jdGlvbiB1dGlsaXR5QWRkRXZlbnRMaXN0ZW5lcihub2RlSUQsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgY29uc3Qgbm9kZSA9ICgwLCBnZXROb2RlXzEudXRpbGl0eUdldE5vZGUpKG5vZGVJRCk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbn1cbmV4cG9ydHMudXRpbGl0eUFkZEV2ZW50TGlzdGVuZXIgPSB1dGlsaXR5QWRkRXZlbnRMaXN0ZW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51dGlsaXR5R2V0Tm9kZSA9IHZvaWQgMDtcbmZ1bmN0aW9uIHV0aWxpdHlHZXROb2RlKG5vZGVJRCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChub2RlSUQpO1xuICAgIGlmICghIW5vZGUpXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFbGVtZW50IHdpdGggaWQgJHtub2RlSUR9IG5vdCBmb3VuZGApO1xufVxuZXhwb3J0cy51dGlsaXR5R2V0Tm9kZSA9IHV0aWxpdHlHZXROb2RlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbmRlciA9IHZvaWQgMDtcbmNvbnN0IGdldE5vZGVfMSA9IHJlcXVpcmUoXCIuL2dldE5vZGVcIik7XG5mdW5jdGlvbiByZW5kZXIobm9kZUlELCBjb21wb25lbnQpIHtcbiAgICBjb25zdCBub2RlID0gKDAsIGdldE5vZGVfMS51dGlsaXR5R2V0Tm9kZSkobm9kZUlEKTtcbiAgICBub2RlLmlubmVySFRNTCA9IGNvbXBvbmVudCgpO1xufVxuZXhwb3J0cy5yZW5kZXIgPSByZW5kZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=