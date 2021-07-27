module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./global.css":
/*!********************!*\
  !*** ./global.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2dsb2JhbC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./global.css\n");

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/semantic-ui-css/semantic.min.css\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: reportWebVitals, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reportWebVitals\", function() { return reportWebVitals; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.css */ \"./global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/Cart */ \"./store/Cart.tsx\");\nvar _jsxFileName = \"/Users/amcereijo/Documents/git/platzi/next_js_ts/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction reportWebVitals(metric) {\n  console.log(metric);\n}\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  // Aditional props\n  // Aditional layout\n  // Manejar errores - componentDidCatch\n  return __jsx(_store_Cart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbInJlcG9ydFdlYlZpdGFscyIsIm1ldHJpYyIsImNvbnNvbGUiLCJsb2ciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBRU8sU0FBU0EsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDdENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0Q7O0FBRUQsTUFBTUcsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBd0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsU0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtELENBVEQ7O0FBV2VGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcydcbmltcG9ydCAnLi4vZ2xvYmFsLmNzcydcblxuaW1wb3J0IENhcnRQcm92aWRlciBmcm9tICdAc3RvcmUvQ2FydCdcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcG9ydFdlYlZpdGFscyhtZXRyaWMpIHtcbiAgY29uc29sZS5sb2cobWV0cmljKTtcbn1cblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICAvLyBBZGl0aW9uYWwgcHJvcHNcbiAgLy8gQWRpdGlvbmFsIGxheW91dFxuICAvLyBNYW5lamFyIGVycm9yZXMgLSBjb21wb25lbnREaWRDYXRjaFxuICByZXR1cm4gKFxuICAgIDxDYXJ0UHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DYXJ0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/Cart.tsx":
/*!************************!*\
  !*** ./store/Cart.tsx ***!
  \************************/
/*! exports provided: useCart, useCartMutations, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCartMutations\", function() { return useCartMutations; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/amcereijo/Documents/git/platzi/next_js_ts/store/Cart.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst defaultState = {};\nconst CartItemsContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(defaultState);\nconst CartDispatchContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(() => {});\n\nconst CartProvider = ({\n  children\n}) => {\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(cartReducers, defaultState);\n  return __jsx(CartItemsContext.Provider, {\n    value: state,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(CartDispatchContext.Provider, {\n    value: dispatch,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, children));\n};\n\nfunction cartReducers(state, {\n  item,\n  type,\n  quantity: qtyToAdd = 1\n}) {\n  const existingCartItem = state[item.id];\n\n  switch (type) {\n    case 'add':\n      {\n        if (existingCartItem != undefined) {\n          const quantity = existingCartItem.quantity + qtyToAdd;\n          return _objectSpread(_objectSpread({}, state), {}, {\n            [item.id]: _objectSpread(_objectSpread({}, existingCartItem), {}, {\n              quantity\n            })\n          });\n        }\n\n        return _objectSpread(_objectSpread({}, state), {}, {\n          [item.id]: _objectSpread(_objectSpread({}, item), {}, {\n            quantity: qtyToAdd\n          })\n        });\n      }\n\n    case 'remove':\n      {\n        if (existingCartItem == undefined) {\n          return state;\n        }\n\n        const quantity = existingCartItem.quantity - 1;\n\n        if (quantity > 0) {\n          return _objectSpread(_objectSpread({}, state), {}, {\n            [item.id]: _objectSpread(_objectSpread({}, existingCartItem), {}, {\n              quantity\n            })\n          });\n        }\n\n        const newCartItems = _objectSpread({}, state);\n\n        delete newCartItems[item.id];\n        return newCartItems;\n      }\n\n    default:\n      {\n        throw new Error(`Unhandled action type: ${type}`);\n      }\n  }\n}\n\nconst getCartSubTotal = (sum, item) => {\n  sum += item.price * item.quantity;\n  return sum;\n};\n\nconst getCartCount = (sum, item) => sum + item.quantity;\n/**\n * Hey there insatiably brain,\n * Are you interested in this pattern where the Context values are\n * exposed without actually provinding access to the Context itself :)\n * https://kentcdodds.com/blog/how-to-use-react-context-effectively\n */\n\n\nconst useCart = () => {\n  const itemsById = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(CartItemsContext);\n  const items = Object.values(itemsById); // Not familiar with Array.reduce? :)\n  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce\n\n  const count = items.reduce(getCartCount, 0);\n  const subTotal = items.reduce(getCartSubTotal, 0);\n  return {\n    items,\n    itemsById,\n    count,\n    subTotal\n  };\n};\nconst useCartMutations = () => {\n  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(CartDispatchContext);\n\n  const addToCart = (product, quantity) => dispatch({\n    type: 'add',\n    item: product,\n    quantity\n  });\n\n  const removeFromCart = product => dispatch({\n    type: 'remove',\n    item: product\n  });\n\n  return {\n    addToCart,\n    removeFromCart\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartProvider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9DYXJ0LnRzeD85NWEyIl0sIm5hbWVzIjpbImRlZmF1bHRTdGF0ZSIsIkNhcnRJdGVtc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJDYXJ0RGlzcGF0Y2hDb250ZXh0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsImNhcnRSZWR1Y2VycyIsIml0ZW0iLCJ0eXBlIiwicXVhbnRpdHkiLCJxdHlUb0FkZCIsImV4aXN0aW5nQ2FydEl0ZW0iLCJpZCIsInVuZGVmaW5lZCIsIm5ld0NhcnRJdGVtcyIsIkVycm9yIiwiZ2V0Q2FydFN1YlRvdGFsIiwic3VtIiwicHJpY2UiLCJnZXRDYXJ0Q291bnQiLCJ1c2VDYXJ0IiwiaXRlbXNCeUlkIiwidXNlQ29udGV4dCIsIml0ZW1zIiwiT2JqZWN0IiwidmFsdWVzIiwiY291bnQiLCJyZWR1Y2UiLCJzdWJUb3RhbCIsInVzZUNhcnRNdXRhdGlvbnMiLCJhZGRUb0NhcnQiLCJwcm9kdWN0IiwicmVtb3ZlRnJvbUNhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQSxNQUFNQSxZQUFZLEdBQUcsRUFBckI7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQkgsWUFBcEIsQ0FBekI7QUFDQSxNQUFNSSxtQkFBbUIsR0FBR0YsNENBQUssQ0FBQ0MsYUFBTixDQUFxQixNQUFNLENBQUUsQ0FBN0IsQ0FBNUI7O0FBSUEsTUFBTUUsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlEO0FBQ3BFLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsd0RBQVUsQ0FBQ0MsWUFBRCxFQUFlVixZQUFmLENBQXBDO0FBRUEsU0FDRSxNQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRU8sS0FBbEM7QUFBQTtBQUFBO0FB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QUFPQSxRQUFNdUIsY0FBYyxHQUFJRCxPQUFELElBQ3JCM0IsUUFBUSxDQUFDO0FBQ1BJLFFBQUksRUFBRSxRQURDO0FBRVBELFFBQUksRUFBRXdCO0FBRkMsR0FBRCxDQURWOztBQU1BLFNBQU87QUFDTEQsYUFESztBQUVMRTtBQUZLLEdBQVA7QUFJRCxDQXBCTTtBQXNCUS9CLDJFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvQ2FydC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IHR5cGUgQ2FydEl0ZW1UeXBlID0gVFByb2R1Y3QgJiB7IHF1YW50aXR5OiBudW1iZXIgfVxuXG5leHBvcnQgdHlwZSBDYXJ0U3RhdGUgPSB7XG4gIFtrZXk6IHN0cmluZ106IENhcnRJdGVtVHlwZVxufVxuXG5leHBvcnQgdHlwZSBDYXJ0QWN0aW9uID0ge1xuICB0eXBlOiAnYWRkJyB8ICdyZW1vdmUnXG4gIGl0ZW06IFRQcm9kdWN0XG4gIHF1YW50aXR5PzogbnVtYmVyXG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9IGFzIENhcnRTdGF0ZVxuXG5jb25zdCBDYXJ0SXRlbXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0U3RhdGUpXG5jb25zdCBDYXJ0RGlzcGF0Y2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgoKCkgPT4ge30pIGFzIERpc3BhdGNoPFxuICBDYXJ0QWN0aW9uXG4+KVxuXG5jb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXJzLCBkZWZhdWx0U3RhdGUpXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydEl0ZW1zQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAgPENhcnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9DYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQ2FydEl0ZW1zQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5mdW5jdGlvbiBjYXJ0UmVkdWNlcnMoXG4gIHN0YXRlOiBDYXJ0U3RhdGUsXG4gIHsgaXRlbSwgdHlwZSwgcXVhbnRpdHk6IHF0eVRvQWRkID0gMSB9OiBDYXJ0QWN0aW9uXG4pIHtcbiAgY29uc3QgZXhpc3RpbmdDYXJ0SXRlbSA9IHN0YXRlW2l0ZW0uaWRdXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnYWRkJzoge1xuICAgICAgaWYgKGV4aXN0aW5nQ2FydEl0ZW0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gZXhpc3RpbmdDYXJ0SXRlbS5xdWFudGl0eSArIHF0eVRvQWRkXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgW2l0ZW0uaWRdOiB7XG4gICAgICAgICAgICAuLi5leGlzdGluZ0NhcnRJdGVtLFxuICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2l0ZW0uaWRdOiB7XG4gICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICBxdWFudGl0eTogcXR5VG9BZGQsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSAncmVtb3ZlJzoge1xuICAgICAgaWYgKGV4aXN0aW5nQ2FydEl0ZW0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBxdWFudGl0eSA9IGV4aXN0aW5nQ2FydEl0ZW0ucXVhbnRpdHkgLSAxXG4gICAgICBpZiAocXVhbnRpdHkgPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgW2l0ZW0uaWRdOiB7XG4gICAgICAgICAgICAuLi5leGlzdGluZ0NhcnRJdGVtLFxuICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdDYXJ0SXRlbXMgPSB7IC4uLnN0YXRlIH1cbiAgICAgIGRlbGV0ZSBuZXdDYXJ0SXRlbXNbaXRlbS5pZF1cbiAgICAgIHJldHVybiBuZXdDYXJ0SXRlbXNcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHt0eXBlfWApXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGdldENhcnRTdWJUb3RhbCA9IChzdW06IG51bWJlciwgaXRlbTogQ2FydEl0ZW1UeXBlKSA9PiB7XG4gIHN1bSArPSBpdGVtLnByaWNlICogaXRlbS5xdWFudGl0eVxuICByZXR1cm4gc3VtXG59XG5jb25zdCBnZXRDYXJ0Q291bnQgPSAoc3VtOiBudW1iZXIsIGl0ZW06IENhcnRJdGVtVHlwZSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eVxuLyoqXG4gKiBIZXkgdGhlcmUgaW5zYXRpYWJseSBicmFpbixcbiAqIEFyZSB5b3UgaW50ZXJlc3RlZCBpbiB0aGlzIHBhdHRlcm4gd2hlcmUgdGhlIENvbnRleHQgdmFsdWVzIGFyZVxuICogZXhwb3NlZCB3aXRob3V0IGFjdHVhbGx5IHByb3ZpbmRpbmcgYWNjZXNzIHRvIHRoZSBDb250ZXh0IGl0c2VsZiA6KVxuICogaHR0cHM6Ly9rZW50Y2RvZGRzLmNvbS9ibG9nL2hvdy10by11c2UtcmVhY3QtY29udGV4dC1lZmZlY3RpdmVseVxuICovXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXNCeUlkID0gdXNlQ29udGV4dChDYXJ0SXRlbXNDb250ZXh0KVxuICBjb25zdCBpdGVtcyA9IE9iamVjdC52YWx1ZXMoaXRlbXNCeUlkKVxuICAvLyBOb3QgZmFtaWxpYXIgd2l0aCBBcnJheS5yZWR1Y2U/IDopXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L1JlZHVjZVxuICBjb25zdCBjb3VudCA9IGl0ZW1zLnJlZHVjZShnZXRDYXJ0Q291bnQsIDApXG4gIGNvbnN0IHN1YlRvdGFsID0gaXRlbXMucmVkdWNlKGdldENhcnRTdWJUb3RhbCwgMClcblxuICByZXR1cm4ge1xuICAgIGl0ZW1zLFxuICAgIGl0ZW1zQnlJZCxcbiAgICBjb3VudCxcbiAgICBzdWJUb3RhbCxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHVzZUNhcnRNdXRhdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQ29udGV4dChDYXJ0RGlzcGF0Y2hDb250ZXh0KVxuXG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCwgcXVhbnRpdHk/OiBudW1iZXIpID0+XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ2FkZCcsXG4gICAgICBpdGVtOiBwcm9kdWN0LFxuICAgICAgcXVhbnRpdHksXG4gICAgfSlcblxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChwcm9kdWN0OiBUUHJvZHVjdCkgPT5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAncmVtb3ZlJyxcbiAgICAgIGl0ZW06IHByb2R1Y3QsXG4gICAgfSlcblxuICByZXR1cm4ge1xuICAgIGFkZFRvQ2FydCxcbiAgICByZW1vdmVGcm9tQ2FydCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UHJvdmlkZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/Cart.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });