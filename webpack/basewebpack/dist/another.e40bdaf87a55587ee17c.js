(self["webpackChunktest1"] = self["webpackChunktest1"] || []).push([["another"],{

/***/ "./src/another.js":
/*!************************!*\
  !*** ./src/another.js ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

alert('1')
const button = document.createElement('button');
const root = document.getElementById('root')
button.textContent = "加法"
button.addEventListener('click', () => {
    __webpack_require__.e(/*! import() | math */ "math").then(__webpack_require__.bind(__webpack_require__, /*! ./math.js */ "./src/math.js")).then(({ add }) => {
        //webpackPrefetch: true 预加载：在网络空闲的时候加载
        console.log(add(4, 5),'21')
    })
})//懒加载操作
document.body.appendChild(button)

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ /* webpack/runtime/startup prefetch */
/******/ (() => {
/******/ 	__webpack_require__.O(0, ["another"], () => {
/******/ 		__webpack_require__.E("math");
/******/ 	}, 5);
/******/ })();
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/another.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vdGhlci5lNDBiZGFmODdhNTU1ODdlZTE3Yy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBJQUFzRSxTQUFTLEtBQUs7QUFDeEY7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7Ozs7Ozs7O1VDVkE7VUFDQTtVQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0MS8uL3NyYy9hbm90aGVyLmpzIiwid2VicGFjazovL3Rlc3QxL3dlYnBhY2svcnVudGltZS9zdGFydHVwIHByZWZldGNoIl0sInNvdXJjZXNDb250ZW50IjpbImFsZXJ0KCcxJylcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcbmJ1dHRvbi50ZXh0Q29udGVudCA9IFwi5Yqg5rOVXCJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbXBvcnQoLyp3ZWJwYWNrQ2h1bmtOYW1lOiAnbWF0aCcsIHdlYnBhY2tQcmVmZXRjaDogdHJ1ZSovJy4vbWF0aC5qcycpLnRoZW4oKHsgYWRkIH0pID0+IHtcbiAgICAgICAgLy93ZWJwYWNrUHJlZmV0Y2g6IHRydWUg6aKE5Yqg6L2977ya5Zyo572R57uc56m66Zey55qE5pe25YCZ5Yqg6L29XG4gICAgICAgIGNvbnNvbGUubG9nKGFkZCg0LCA1KSwnMjEnKVxuICAgIH0pXG59KS8v5oeS5Yqg6L295pON5L2cXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ1dHRvbikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLk8oMCwgW1wiYW5vdGhlclwiXSwgKCkgPT4ge1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLkUoXCJtYXRoXCIpO1xufSwgNSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9