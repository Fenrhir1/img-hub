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
exports.imgNode = exports.mapNodes = void 0;
exports.mapNodes = {
    root: 'root',
    inputImg: "inputImg",
    inputTitle: "inputTitle",
    inputDescription: "inputDescription",
    addBtn: "addBtn",
    bottomContainer: "bottom-container"
};
exports.imgNode = {
    imgUrl: '',
    title: '',
    description: '',
};


/***/ }),

/***/ "./src/loader/getImg.ts":
/*!******************************!*\
  !*** ./src/loader/getImg.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getImg = void 0;
const declarations_1 = __webpack_require__(/*! ../declarations */ "./src/declarations.ts");
const getNode_1 = __webpack_require__(/*! ../utilities/getNode */ "./src/utilities/getNode.ts");
const addEventListener_1 = __webpack_require__(/*! ../utilities/addEventListener */ "./src/utilities/addEventListener.ts");
function getImg() {
    const imgContainer = document.createElement("div");
    imgContainer.className = "image-container";
    imgContainer.innerHTML = `<img src="${declarations_1.mapNodes.inputImg}" alt="">`;
    const node = (0, getNode_1.utilityGetNode)(declarations_1.mapNodes.bottomContainer);
    node.appendChild(imgContainer);
}
exports.getImg = getImg;
(0, addEventListener_1.utilityAddEventListener)(declarations_1.mapNodes.addBtn, "click", getImg);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

/** @format */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const render_1 = __webpack_require__(/*! ./utilities/render */ "./src/utilities/render.ts");
__webpack_require__(/*! ./css/general.css */ "./src/css/general.css");
const declarations_1 = __webpack_require__(/*! ./declarations */ "./src/declarations.ts");
const addEventListener_1 = __webpack_require__(/*! ./utilities/addEventListener */ "./src/utilities/addEventListener.ts");
const getImg_1 = __webpack_require__(/*! ./loader/getImg */ "./src/loader/getImg.ts");
function renderMainPage() {
    return `<div id="main container">
  <div id="top-container" class="top-container">
    <input id="${declarations_1.mapNodes.inputImg}" type="text" placeholder="Inserisci l'url dell'immagine">
    <input id="${declarations_1.mapNodes.inputTitle}" type="text" placeholder="Inserisci il titolo dell'immagine">
    <input id="${declarations_1.mapNodes.inputDescription}" type="text" placeholder="Inserisci la descrizione dell'immagine">
    <button id="${declarations_1.mapNodes.addBtn}">Aggiungi la tua immagine!</button>
  </div>
  <div id="${declarations_1.mapNodes.bottomContainer}">
  </div>`;
}
window.onload = () => {
    (0, render_1.render)("root", renderMainPage);
    (0, addEventListener_1.utilityAddEventListener)(declarations_1.mapNodes.addBtn, "click", getImg_1.getImg);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQWE7QUFDYjtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLEdBQUcsZ0JBQWdCO0FBQ2xDLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkLHVCQUF1QixtQkFBTyxDQUFDLDhDQUFpQjtBQUNoRCxrQkFBa0IsbUJBQU8sQ0FBQyx3REFBc0I7QUFDaEQsMkJBQTJCLG1CQUFPLENBQUMsMEVBQStCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxpQ0FBaUM7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOzs7Ozs7Ozs7OztBQ2RhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELCtCQUErQjtBQUMvQixrQkFBa0IsbUJBQU8sQ0FBQyw2Q0FBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7Ozs7Ozs7Ozs7QUNSbEI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7QUNWVDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2Qsa0JBQWtCLG1CQUFPLENBQUMsNkNBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7Ozs7O1VDUmQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05hO0FBQ2I7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCLG1CQUFPLENBQUMscURBQW9CO0FBQzdDLG1CQUFPLENBQUMsZ0RBQW1CO0FBQzNCLHVCQUF1QixtQkFBTyxDQUFDLDZDQUFnQjtBQUMvQywyQkFBMkIsbUJBQU8sQ0FBQyx5RUFBOEI7QUFDakUsaUJBQWlCLG1CQUFPLENBQUMsK0NBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQ0FBaUM7QUFDbEQsaUJBQWlCLG1DQUFtQztBQUNwRCxpQkFBaUIseUNBQXlDO0FBQzFELGtCQUFrQiwrQkFBK0I7QUFDakQ7QUFDQSxhQUFhLHdDQUF3QztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LWFwcC8uL3NyYy9jc3MvZ2VuZXJhbC5jc3M/ZTQ0ZiIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWFwcC8uL3NyYy9kZWNsYXJhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1hcHAvLi9zcmMvbG9hZGVyL2dldEltZy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWFwcC8uL3NyYy91dGlsaXRpZXMvYWRkRXZlbnRMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWFwcC8uL3NyYy91dGlsaXRpZXMvZ2V0Tm9kZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LWFwcC8uL3NyYy91dGlsaXRpZXMvcmVuZGVyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1hcHAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKiogQGZvcm1hdCAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbWdOb2RlID0gZXhwb3J0cy5tYXBOb2RlcyA9IHZvaWQgMDtcbmV4cG9ydHMubWFwTm9kZXMgPSB7XG4gICAgcm9vdDogJ3Jvb3QnLFxuICAgIGlucHV0SW1nOiBcImlucHV0SW1nXCIsXG4gICAgaW5wdXRUaXRsZTogXCJpbnB1dFRpdGxlXCIsXG4gICAgaW5wdXREZXNjcmlwdGlvbjogXCJpbnB1dERlc2NyaXB0aW9uXCIsXG4gICAgYWRkQnRuOiBcImFkZEJ0blwiLFxuICAgIGJvdHRvbUNvbnRhaW5lcjogXCJib3R0b20tY29udGFpbmVyXCJcbn07XG5leHBvcnRzLmltZ05vZGUgPSB7XG4gICAgaW1nVXJsOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgZGVzY3JpcHRpb246ICcnLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRJbWcgPSB2b2lkIDA7XG5jb25zdCBkZWNsYXJhdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi9kZWNsYXJhdGlvbnNcIik7XG5jb25zdCBnZXROb2RlXzEgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2dldE5vZGVcIik7XG5jb25zdCBhZGRFdmVudExpc3RlbmVyXzEgPSByZXF1aXJlKFwiLi4vdXRpbGl0aWVzL2FkZEV2ZW50TGlzdGVuZXJcIik7XG5mdW5jdGlvbiBnZXRJbWcoKSB7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbWdDb250YWluZXIuY2xhc3NOYW1lID0gXCJpbWFnZS1jb250YWluZXJcIjtcbiAgICBpbWdDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtkZWNsYXJhdGlvbnNfMS5tYXBOb2Rlcy5pbnB1dEltZ31cIiBhbHQ9XCJcIj5gO1xuICAgIGNvbnN0IG5vZGUgPSAoMCwgZ2V0Tm9kZV8xLnV0aWxpdHlHZXROb2RlKShkZWNsYXJhdGlvbnNfMS5tYXBOb2Rlcy5ib3R0b21Db250YWluZXIpO1xuICAgIG5vZGUuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcbn1cbmV4cG9ydHMuZ2V0SW1nID0gZ2V0SW1nO1xuKDAsIGFkZEV2ZW50TGlzdGVuZXJfMS51dGlsaXR5QWRkRXZlbnRMaXN0ZW5lcikoZGVjbGFyYXRpb25zXzEubWFwTm9kZXMuYWRkQnRuLCBcImNsaWNrXCIsIGdldEltZyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXRpbGl0eUFkZEV2ZW50TGlzdGVuZXIgPSB2b2lkIDA7XG5jb25zdCBnZXROb2RlXzEgPSByZXF1aXJlKFwiLi9nZXROb2RlXCIpO1xuZnVuY3Rpb24gdXRpbGl0eUFkZEV2ZW50TGlzdGVuZXIobm9kZUlELCBldmVudCwgaGFuZGxlcikge1xuICAgIGNvbnN0IG5vZGUgPSAoMCwgZ2V0Tm9kZV8xLnV0aWxpdHlHZXROb2RlKShub2RlSUQpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG59XG5leHBvcnRzLnV0aWxpdHlBZGRFdmVudExpc3RlbmVyID0gdXRpbGl0eUFkZEV2ZW50TGlzdGVuZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudXRpbGl0eUdldE5vZGUgPSB2b2lkIDA7XG5mdW5jdGlvbiB1dGlsaXR5R2V0Tm9kZShub2RlSUQpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobm9kZUlEKTtcbiAgICBpZiAoISFub2RlKVxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRWxlbWVudCB3aXRoIGlkICR7bm9kZUlEfSBub3QgZm91bmRgKTtcbn1cbmV4cG9ydHMudXRpbGl0eUdldE5vZGUgPSB1dGlsaXR5R2V0Tm9kZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZW5kZXIgPSB2b2lkIDA7XG5jb25zdCBnZXROb2RlXzEgPSByZXF1aXJlKFwiLi9nZXROb2RlXCIpO1xuZnVuY3Rpb24gcmVuZGVyKG5vZGVJRCwgY29tcG9uZW50KSB7XG4gICAgY29uc3Qgbm9kZSA9ICgwLCBnZXROb2RlXzEudXRpbGl0eUdldE5vZGUpKG5vZGVJRCk7XG4gICAgbm9kZS5pbm5lckhUTUwgPSBjb21wb25lbnQoKTtcbn1cbmV4cG9ydHMucmVuZGVyID0gcmVuZGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuLyoqIEBmb3JtYXQgKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlbmRlcl8xID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzL3JlbmRlclwiKTtcbnJlcXVpcmUoXCIuL2Nzcy9nZW5lcmFsLmNzc1wiKTtcbmNvbnN0IGRlY2xhcmF0aW9uc18xID0gcmVxdWlyZShcIi4vZGVjbGFyYXRpb25zXCIpO1xuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcl8xID0gcmVxdWlyZShcIi4vdXRpbGl0aWVzL2FkZEV2ZW50TGlzdGVuZXJcIik7XG5jb25zdCBnZXRJbWdfMSA9IHJlcXVpcmUoXCIuL2xvYWRlci9nZXRJbWdcIik7XG5mdW5jdGlvbiByZW5kZXJNYWluUGFnZSgpIHtcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJtYWluIGNvbnRhaW5lclwiPlxuICA8ZGl2IGlkPVwidG9wLWNvbnRhaW5lclwiIGNsYXNzPVwidG9wLWNvbnRhaW5lclwiPlxuICAgIDxpbnB1dCBpZD1cIiR7ZGVjbGFyYXRpb25zXzEubWFwTm9kZXMuaW5wdXRJbWd9XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkluc2VyaXNjaSBsJ3VybCBkZWxsJ2ltbWFnaW5lXCI+XG4gICAgPGlucHV0IGlkPVwiJHtkZWNsYXJhdGlvbnNfMS5tYXBOb2Rlcy5pbnB1dFRpdGxlfVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbnNlcmlzY2kgaWwgdGl0b2xvIGRlbGwnaW1tYWdpbmVcIj5cbiAgICA8aW5wdXQgaWQ9XCIke2RlY2xhcmF0aW9uc18xLm1hcE5vZGVzLmlucHV0RGVzY3JpcHRpb259XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkluc2VyaXNjaSBsYSBkZXNjcml6aW9uZSBkZWxsJ2ltbWFnaW5lXCI+XG4gICAgPGJ1dHRvbiBpZD1cIiR7ZGVjbGFyYXRpb25zXzEubWFwTm9kZXMuYWRkQnRufVwiPkFnZ2l1bmdpIGxhIHR1YSBpbW1hZ2luZSE8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgaWQ9XCIke2RlY2xhcmF0aW9uc18xLm1hcE5vZGVzLmJvdHRvbUNvbnRhaW5lcn1cIj5cbiAgPC9kaXY+YDtcbn1cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgKDAsIHJlbmRlcl8xLnJlbmRlcikoXCJyb290XCIsIHJlbmRlck1haW5QYWdlKTtcbiAgICAoMCwgYWRkRXZlbnRMaXN0ZW5lcl8xLnV0aWxpdHlBZGRFdmVudExpc3RlbmVyKShkZWNsYXJhdGlvbnNfMS5tYXBOb2Rlcy5hZGRCdG4sIFwiY2xpY2tcIiwgZ2V0SW1nXzEuZ2V0SW1nKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=