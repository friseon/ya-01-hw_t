/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);

var gallery = document.querySelector('.gallery'),
    galleryItems = document.querySelectorAll('.gallery__image');

var imgSescriptions = [
    "Тотемное молчание",
    "Будоражущий локоть",
    "Кульминационное мандражирование",
    "Абсолютная асталависта"
];

// Формирование галереи изображений
for (var i = 1; i <= 7; i++) {
    var galleryItem = document.createElement('div');
        galleryImage = document.createElement('img'),
        imageInfo = document.createElement('div');
        imageTitle = imgSescriptions[Math.floor(Math.random()*imgSescriptions.length)],
        imgUrl = "./assets/img/preview/" + i + ".jpg",
        imgUrlFull = "./assets/img/" + i + ".jpg",
        imgUrlFullx2 = "./assets/img/" + i + "-2x.jpg";

    galleryItem.className = "gallery__item";
    galleryImage.className = "gallery__image";
    galleryImage.setAttribute("data-src", imgUrl);
    galleryImage.setAttribute("data-fullUrl", imgUrlFull);
    galleryImage.setAttribute("data-fullUrl-2x", imgUrlFullx2);
    galleryImage.setAttribute("alt", imageTitle);
    imageInfo.className = "image__info";
    imageInfo.innerHTML = imageTitle;
    galleryItem.appendChild(galleryImage);
    galleryItem.appendChild(imageInfo);
    showInfo(galleryImage);
    gallery.appendChild(galleryItem);
}

// Пояление/скрытие подписи к фото
function showInfo(element) {
    element.addEventListener('mouseover', function() {
        element.nextElementSibling.style.opacity = "1";
        element.nextElementSibling.style.bottom = "0";
    });
    element.addEventListener('mouseleave', function() {
        element.nextElementSibling.style.opacity = "0";
        element.nextElementSibling.style.bottom = "-100%";
    });
}

// Появление изображений
[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() {
        img.removeAttribute('data-src');
    };
});

var gallaryObj = new galleryViewer('.gallery__image');

// Модалка для просмотра изображений
function galleryViewer(items) {
    var gallary = document.querySelectorAll(items);
    this.create = create;
    this.open = open;
    this.close = close;
    var modalWindow = null;
    var modalImage = null;

    create();

    gallary.forEach(function(item) {
        item.addEventListener('click', open);
    });

    function create() {
        var modalOverlay = document.createElement('div'),
            modalBody = document.createElement('div');

        modalWindow = document.createElement('div');
        modalImage = document.createElement('img');

        modalWindow.className = "modal";
        modalBody.className = "modal__body";
        modalImage.className = "modal__image";
        modalOverlay.className = "modal__overlay";

        modalWindow.appendChild(modalOverlay);
        modalWindow.appendChild(modalBody);
        modalBody.appendChild(modalImage);
        document.body.appendChild(modalWindow);

        modalWindow.addEventListener('click', close);
    }

    function open() {
        modalWindow.style.display = "block";
        modalImage.src = this.getAttribute("data-fullUrl");
        modalImage.setAttribute("srcset", this.getAttribute("data-fullUrl-2x") + " 2x");
        document.body.classList.add("noscroll");
    }

    function close() {
        modalWindow.style.display = "none";
        modalImage.src = "";
        document.body.classList.remove("noscroll");
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map