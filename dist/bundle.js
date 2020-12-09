/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/folder.js":
/*!*************************************!*
  !*** ./src/js/components/folder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Folder = /*#__PURE__*/function () {\n  function Folder() {\n    _classCallCheck(this, Folder);\n\n    this.aboutBtn = document.querySelector(\".about-btn\");\n    this.projectsBtn = document.querySelector(\".projects-btn\");\n    this.contactBtn = document.querySelector(\".contact-btn\");\n    this.transitionEnd = this.whichTransitionEndEvent();\n    this.mainContents = document.querySelector(\".main-contents\");\n    this.paperBottom = document.querySelector(\".paper-bottom\");\n    this.paperMiddle = document.querySelector(\".paper-middle\");\n    this.paperTop = document.querySelector(\".paper-top\");\n    this.aboutPaper = document.querySelector(\".paper--about\");\n    this.projectsPaper = document.querySelector(\".paper--projects\");\n    this.contactPaper = document.querySelector(\".paper--contact\");\n    this.nextTab = \"about\";\n    this.aboutPaper.classList.add(\"selected\");\n    this.aboutPaper.classList.add(\"unshift\");\n    this.adjustFooterPosition();\n    this.hideNonSelectedTabs();\n    this.updateAllTabHolderHeights();\n    this.events();\n  }\n\n  _createClass(Folder, [{\n    key: \"events\",\n    value: function events() {\n      this.aboutBtn.addEventListener(\"click\", this.handleAbout.bind(this));\n      this.projectsBtn.addEventListener(\"click\", this.handleProjects.bind(this));\n      this.contactBtn.addEventListener(\"click\", this.handleContact.bind(this));\n      this.aboutPaper.addEventListener(this.transitionEnd, this.nextTransition.bind(this));\n      this.projectsPaper.addEventListener(this.transitionEnd, this.nextTransition.bind(this));\n      this.contactPaper.addEventListener(this.transitionEnd, this.nextTransition.bind(this));\n      this.aboutBtn.addEventListener(\"mouseover\", this.movePaperDown.bind(this));\n      this.projectsBtn.addEventListener(\"mouseover\", this.movePaperDown.bind(this));\n      this.contactBtn.addEventListener(\"mouseover\", this.movePaperDown.bind(this));\n      this.aboutBtn.addEventListener(\"mouseout\", this.movePaperUp.bind(this));\n      this.projectsBtn.addEventListener(\"mouseout\", this.movePaperUp.bind(this));\n      this.contactBtn.addEventListener(\"mouseout\", this.movePaperUp.bind(this));\n      window.addEventListener(\"resize\", this.handleWindowResize.bind(this));\n    } //Methods\n\n  }, {\n    key: \"handleAbout\",\n    value: function handleAbout(e) {\n      console.log(\"inside handleAbout\");\n      this.nextTab = \"about\";\n      document.querySelector(\".selected\").classList.toggle(\"selected\");\n      this.aboutPaper.classList.add(\"selected\");\n      this.adjustFooterPosition();\n      this.hideNonSelectedTabs();\n    }\n  }, {\n    key: \"handleProjects\",\n    value: function handleProjects(e) {\n      console.log(\"inside handleProjects\");\n      this.nextTab = \"projects\";\n      document.querySelector(\".selected\").classList.toggle(\"selected\");\n      this.projectsPaper.classList.add(\"selected\");\n      this.adjustFooterPosition();\n      this.hideNonSelectedTabs();\n    }\n  }, {\n    key: \"handleContact\",\n    value: function handleContact(e) {\n      console.log(\"inside nhandleContact\");\n      this.nextTab = \"contact\";\n      document.querySelector(\".selected\").classList.toggle(\"selected\");\n      this.contactPaper.classList.add(\"selected\");\n      this.adjustFooterPosition();\n      this.hideNonSelectedTabs();\n    }\n  }, {\n    key: \"nextTransition\",\n    value: function nextTransition() {\n      console.log(\"inside nextTransition\");\n\n      if (this.nextTab == \"about\") {\n        this.aboutPaper.style.top = \"150px\";\n      } else if (this.nextTab == \"projects\") {\n        this.projectsPaper.style.top = \"150px\";\n      } else if (this.nextTab == \"contact\") {\n        this.contactPaper.style.top = \"150px\";\n      }\n\n      this.nextTab == \"none\";\n      this.updateAllTabHolderHeights(); // fixes content poking past paper bug\n\n      this.hideNonSelectedTabs(); // fixes content poking past paper bug\n\n      this.adjustFooterPosition();\n    }\n  }, {\n    key: \"movePaperDown\",\n    value: function movePaperDown(e) {\n      console.log(\"inside movePaperDown\");\n\n      if (e.target == this.aboutBtn) {\n        this.paperTop.classList.add(\"move-down\");\n        this.paperMiddle.classList.remove(\"move-down\");\n        this.paperBottom.classList.remove(\"move-down\");\n      } else if (e.target == this.projectsBtn) {\n        this.paperTop.classList.remove(\"move-down\");\n        this.paperMiddle.classList.add(\"move-down\");\n        this.paperBottom.classList.remove(\"move-down\");\n      } else if (e.target == this.contactBtn) {\n        this.paperTop.classList.remove(\"move-down\");\n        this.paperMiddle.classList.remove(\"move-down\");\n        this.paperBottom.classList.add(\"move-down\");\n      }\n    }\n  }, {\n    key: \"movePaperUp\",\n    value: function movePaperUp(e) {\n      console.log(\"inside movePaperUp\");\n\n      if (e.target == this.aboutBtn) {\n        this.paperTop.classList.remove(\"move-down\");\n      } else if (e.target == this.projectsBtn) {\n        this.paperMiddle.classList.remove(\"move-down\");\n      } else if (e.target == this.contactBtn) {\n        this.paperBottom.classList.remove(\"move-down\");\n      }\n    }\n  }, {\n    key: \"whichTransitionEndEvent\",\n    value: function whichTransitionEndEvent() {\n      console.log(\"inside whichTransition\");\n      var t;\n      var el = document.createElement(\"fakeelement\");\n      var transitions = {\n        transition: \"transitionend\",\n        OTransition: \"oTransitionEnd\",\n        MozTransition: \"transitionend\",\n        WebkitTransition: \"webkitTransitionEnd\"\n      };\n\n      for (t in transitions) {\n        if (el.style[t] !== undefined) {\n          return transitions[t];\n        }\n      }\n    }\n  }, {\n    key: \"handleWindowResize\",\n    value: function handleWindowResize() {\n      console.log(\"inside handleWindowResize\");\n      this.updateAllTabHolderHeights();\n      this.hideNonSelectedTabs();\n      this.adjustFooterPosition();\n    }\n  }, {\n    key: \"adjustFooterPosition\",\n    value: function adjustFooterPosition() {\n      console.log(\"inside adjustFooter\");\n      var selectedTab = document.querySelector(\".selected\");\n      this.mainContents.style.height = this.getHeight(selectedTab, true);\n    }\n  }, {\n    key: \"getHeight\",\n    value: function getHeight(tab) {\n      var footer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      console.log(\"inside GetHeight\");\n      var additional = footer ? 200 : 0;\n      var paperBottom = tab.querySelector(\".bottom-of-paper\");\n      var paperTop = tab.querySelector(\".top-of-paper\");\n      var diff = paperBottom.offsetTop - paperTop.offsetTop;\n      return \"\".concat(diff + 80 + additional, \"px\");\n    }\n  }, {\n    key: \"updateAllTabHolderHeights\",\n    value: function updateAllTabHolderHeights() {\n      var _this = this;\n\n      console.log(\"inside UpdateTabs\");\n      [this.aboutPaper, this.projectsPaper, this.contactPaper].forEach(function (tab) {\n        tab.style.height = _this.getHeight(tab);\n      });\n    }\n  }, {\n    key: \"hideNonSelectedTabs\",\n    value: function hideNonSelectedTabs() {\n      console.log(\"inside hideNonSelectdTabs\");\n\n      if (this.nextTab == \"about\") {\n        this.aboutPaper.classList.remove(\"rounded-bottom-right-border\");\n        this.projectsPaper.classList.add(\"rounded-bottom-right-border\");\n        this.contactPaper.classList.add(\"rounded-bottom-right-border\");\n        this.projectsPaper.style.top = \"-\" + this.getHeight(this.projectsPaper);\n        this.contactPaper.style.top = \"-\" + this.getHeight(this.contactPaper);\n      } else if (this.nextTab == \"projects\") {\n        this.projectsPaper.classList.remove(\"rounded-bottom-right-border\");\n        this.aboutPaper.classList.add(\"rounded-bottom-right-border\");\n        this.contactPaper.classList.add(\"rounded-bottom-right-border\");\n        this.aboutPaper.style.top = \"-\" + this.getHeight(this.aboutPaper);\n        this.contactPaper.style.top = \"-\" + this.getHeight(this.contactPaper);\n      } else if (this.nextTab == \"contact\") {\n        this.contactPaper.classList.remove(\"rounded-bottom-right-border\");\n        this.projectsPaper.classList.add(\"rounded-bottom-right-border\");\n        this.aboutPaper.classList.add(\"rounded-bottom-right-border\");\n        this.projectsPaper.style.top = \"-\" + this.getHeight(this.projectsPaper);\n        this.aboutPaper.style.top = \"-\" + this.getHeight(this.aboutPaper);\n      }\n    }\n  }]);\n\n  return Folder;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Folder);\n\n//# sourceURL=webpack://01-my-portfolio/./src/js/components/folder.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_folder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/folder */ \"./src/js/components/folder.js\");\n\nvar folder = new _components_folder__WEBPACK_IMPORTED_MODULE_0__.default();\n\n//# sourceURL=webpack://01-my-portfolio/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;