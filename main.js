/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 368:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "goblin.png";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/js/NewField.js
const points = document.getElementById("points");
const godlins = document.getElementById("godlins");
class NewField {
  constructor(board) {
    this.board = board;
  }
  start() {
    const plaingField = document.querySelector(".board");
    for (let i = 0; i < this.board ** 2; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      plaingField.prepend(cell);
    }
    this.randomGoblin();
  }
  randomGoblin() {
    let hitGoblin = -1;
    let wingClick = 0;
    const cellList = document.querySelectorAll(".cell");
    let lastIndex = 0;
    const max = this.board ** 2 - 1;
    const interval = setInterval(() => {
      let index = Math.floor(Math.random() * (this.board + 1));
      if (index === lastIndex) {
        index += 1;
        if (index >= max) {
          index = 0;
        }
      }
      cellList[lastIndex].innerHTML = "";
      cellList[index].innerHTML = '<img src="goblin.png">';
      // cellList[index].classList.add('img');
      lastIndex = index;
      hitGoblin++;
      godlins.innerText = `Пропущено гоблинов ${hitGoblin}`;
      if (hitGoblin === 5) {
        alert(`Игра окончена, пропущено ${hitGoblin} гоблинов `);
        clearInterval(interval);
        cellList.item(lastIndex).innerHTML = " ";
      }
    }, 1000);
    document.addEventListener("click", event => {
      const eventTarget = event.target;
      if (eventTarget.closest("img")) {
        wingClick++;
        hitGoblin--;
        points.innerText = `Набрано баллов ${wingClick}`;
        cellList.item(lastIndex).innerHTML = " ";
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

const play = new NewField(4);
play.start();
// EXTERNAL MODULE: ./src/img/goblin.png
var goblin = __webpack_require__(368);
;// CONCATENATED MODULE: ./src/index.js




// import "./img/hammer1.png";
})();

/******/ })()
;