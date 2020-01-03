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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fbConfig.js":
/*!*********************!*\
  !*** ./fbConfig.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(__webpack_require__(/*! firebase/app */ "firebase/app"));

__webpack_require__(/*! firebase/firestore */ "firebase/firestore");

__webpack_require__(/*! firebase/database */ "firebase/database");

__webpack_require__(/*! firebase/storage */ "firebase/storage");

var firebaseConfig = {
  apiKey: "AIzaSyA6EhV4o8TKPLGHwGKCypEjTGziBQ8VS0o",
  authDomain: "jobstent-c0cea.firebaseapp.com",
  databaseURL: "https://jobstent-c0cea.firebaseio.com",
  projectId: "jobstent-c0cea",
  storageBucket: "gs://jobstent-c0cea.appspot.com/",
  messagingSenderId: "71699082578",
  appId: "1:71699082578:web:5e16e6cc25868206539e8b"
};

var fire = _app["default"].initializeApp(firebaseConfig); // firebase.firestore().settings({ timestampsInSnapshots: true });
// export const db = firebase.database();


var _default = fire;
exports["default"] = _default;

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouter = __webpack_require__(/*! react-router */ "react-router");

var _App = _interopRequireDefault(__webpack_require__(/*! ./src/components/App */ "./src/components/App.js"));

var _Home = _interopRequireDefault(__webpack_require__(/*! ./src/components/Home */ "./src/components/Home.js"));

var _header = _interopRequireDefault(__webpack_require__(/*! ./src/components/header */ "./src/components/header.js"));

var _resumeTemplates = _interopRequireDefault(__webpack_require__(/*! ./src/components/resumeTemplates */ "./src/components/resumeTemplates.js"));

var _builder = _interopRequireDefault(__webpack_require__(/*! ./src/components/builder/builder */ "./src/components/builder/builder.js"));

var _templates = _interopRequireDefault(__webpack_require__(/*! ./src/components/templates */ "./src/components/templates.js"));

var _login = _interopRequireDefault(__webpack_require__(/*! ./src/components/sign/login */ "./src/components/sign/login.js"));

var _register = _interopRequireDefault(__webpack_require__(/*! ./src/components/sign/register */ "./src/components/sign/register.js"));

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])(_reactRouter.Route, {
  exact: true,
  path: "/",
  component: _Home["default"]
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])(_reactRouter.Route, {
  exact: true,
  path: "/login",
  component: _login["default"]
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])(_reactRouter.Route, {
  exact: true,
  path: "/register",
  component: _register["default"]
});

var _ref4 =
/*#__PURE__*/
(0, _jsx2["default"])(_reactRouter.Route, {
  exact: true,
  path: "/resume-templates",
  component: _resumeTemplates["default"]
});

var _ref5 =
/*#__PURE__*/
(0, _jsx2["default"])(_reactRouter.Route, {
  exact: true,
  path: "/builder",
  component: _builder["default"]
});

var Routes = function Routes(props) {
  return (0, _jsx2["default"])("div", {}, void 0, (0, _jsx2["default"])(_header["default"], {
    url: props
  }), (0, _jsx2["default"])(_App["default"], {}, void 0, _ref, _ref2, _ref3, _ref4, _ref5, (0, _jsx2["default"])(_reactRouter.Route, {
    exact: true,
    path: "/builder/:id",
    render: function render(prop) {
      return (0, _jsx2["default"])(_builder["default"], {
        resumeID: prop.match.params.id
      });
    }
  }), (0, _jsx2["default"])(_reactRouter.Route, {
    exact: true,
    path: "/templates/:id/:uid",
    render: function render(prop) {
      return (0, _jsx2["default"])(_templates["default"], {
        templateID: prop.match.params.id,
        userID: prop.match.params.uid
      });
    }
  })));
};

module.exports = Routes;

/***/ }),

/***/ "./server/api/index.js":
/*!*****************************!*\
  !*** ./server/api/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

var _helpers = __webpack_require__(/*! ../helpers */ "./server/helpers/index.js");

var Router = _express["default"].Router();

module.exports = Router;

/***/ }),

/***/ "./server/api/template.js":
/*!********************************!*\
  !*** ./server/api/template.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _helpers = __webpack_require__(/*! ../helpers */ "./server/helpers/index.js");

var Router = _express["default"].Router();

Router.post('/create-pdf',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var templateID, userID, pdf;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            templateID = req.body.templateID;
            userID = req.body.userID;
            _context.next = 4;
            return (0, _helpers.generatePDF)(templateID, userID);

          case 4:
            pdf = _context.sent;

            if (pdf) {
              res.status(200).contentType('application/pdf').send("data:application/pdf;base64,".concat(new Buffer.from(pdf).toString('base64')));
            } else {
              res.status(400).json({
                message: 'cannot'
              });
            } // res.status(200).contentType('application/pdf').send(`data:application/pdf;base64,${new Buffer.from(pdf).toString('base64')}`);


          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
module.exports = Router;

/***/ }),

/***/ "./server/helpers/index.js":
/*!*********************************!*\
  !*** ./server/helpers/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator"));

var _puppeteer = _interopRequireDefault(__webpack_require__(/*! puppeteer */ "puppeteer"));

var http_build_query = function http_build_query(jsonObj) {
  var keys = Object.keys(jsonObj);
  var values = keys.map(function (key) {
    return jsonObj[key];
  });
  return keys.map(function (key, index) {
    return "".concat(key, "=").concat(values[index]);
  }).join("&");
};

var generatePDF =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(templateID, userID) {
    var browser, page, pdf;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _puppeteer["default"].launch({
              headless: true,
              executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium'
            });

          case 3:
            browser = _context.sent;
            _context.next = 6;
            return browser.newPage();

          case 6:
            page = _context.sent;
            _context.next = 9;
            return page.setViewport({
              width: 1920,
              height: 1080
            });

          case 9:
            _context.next = 11;
            return page["goto"]("http://localhost:3000/templates/".concat(templateID, "/").concat(userID), {
              waitUntil: 'networkidle2'
            });

          case 11:
            _context.next = 13;
            return page.waitForSelector('.g-resume-container');

          case 13:
            _context.next = 15;
            return page.pdf({
              format: 'A4',
              printBackground: true
            });

          case 15:
            pdf = _context.sent;
            _context.next = 18;
            return browser.close();

          case 18:
            return _context.abrupt("return", pdf);

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            console.log("ERROR::", _context.t0);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 21]]);
  }));

  return function generatePDF(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  http_build_query: http_build_query,
  generatePDF: generatePDF
};

/***/ }),

/***/ "./server/middlewares/index.js":
/*!*************************************!*\
  !*** ./server/middlewares/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (app) {
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
};

/***/ }),

/***/ "./server/renderer.js":
/*!****************************!*\
  !*** ./server/renderer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

var _createStore = _interopRequireDefault(__webpack_require__(/*! ../src/createStore */ "./src/createStore.js"));

var _routes = _interopRequireDefault(__webpack_require__(/*! ../routes */ "./routes.js"));

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])(_routes["default"], {});

var Renderer = function Renderer(req, res) {
  var store = (0, _createStore["default"])({});
  var state = store.getState();
  var content = (0, _server.renderToString)((0, _jsx2["default"])(_reactRedux.Provider, {
    store: store
  }, void 0, (0, _jsx2["default"])(_reactRouterDom.StaticRouter, {
    location: req.path,
    query: req.query
  }, void 0, _ref)));
  var meta = "\n    ".concat(_reactHelmet.Helmet.title ? _reactHelmet.Helmet.title.toString() : "", "\n    ").concat(_reactHelmet.Helmet.meta ? _reactHelmet.Helmet.meta.toString() : "", "\n  ");
  var scripts = "\n    <script>\n      window.STORE_DATA = ".concat(JSON.stringify(state).replace("<script>", ""), "\n    </script>\n  ");
  console.log(_path["default"].resolve('./server/index.html'));

  var html = _fs["default"].readFile(_path["default"].resolve('./dist/public/index.html'), 'utf8', function (err, data) {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Something went wrong');
    }

    var newData = data.replace('<div id="all-meta"></div>', meta);
    newData = newData.replace('<div id="root"></div>', "<div id=\"root\">".concat(content, "</div>"));
    newData = newData.replace('<div id="scripts"></div>', scripts);
    return res.send(newData);
  });
};

module.exports = Renderer;

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(__webpack_require__(/*! express */ "express"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

var _bodyParser = _interopRequireDefault(__webpack_require__(/*! body-parser */ "body-parser"));

var _cors = _interopRequireDefault(__webpack_require__(/*! cors */ "cors"));

var _api = _interopRequireDefault(__webpack_require__(/*! ./api */ "./server/api/index.js"));

var _template = _interopRequireDefault(__webpack_require__(/*! ./api/template */ "./server/api/template.js"));

var _renderer = _interopRequireDefault(__webpack_require__(/*! ./renderer */ "./server/renderer.js"));

var _middlewares = _interopRequireDefault(__webpack_require__(/*! ./middlewares */ "./server/middlewares/index.js"));

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json()); // app.use('/assets', Express.static('assets'));

app.use(_express["default"]["static"]('dist/public'));
(0, _middlewares["default"])(app);
app.use('/api/template', _template["default"]);
app.use('/api', _api["default"]);
app.get("*", function (req, res) {
  (0, _renderer["default"])(req, res);
});
app.listen(PORT, function () {
  console.log("App running on ".concat(PORT));
});

/***/ }),

/***/ "./src/actions/builder.js":
/*!********************************!*\
  !*** ./src/actions/builder.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rightPanelMenuSwitch = exports.leftPanelListHandler = exports.makeFieldActive = exports.getFieldDefault = exports.generatePDF = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "lodash"));

__webpack_require__(/*! firebase/app */ "firebase/app");

var _fbConfig = _interopRequireDefault(__webpack_require__(/*! ../../fbConfig */ "./fbConfig.js"));

var ActionTypes = _interopRequireWildcard(__webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.js"));

var _Fields = __webpack_require__(/*! ../constants/Fields */ "./src/constants/Fields.js");

var DB = _fbConfig["default"].firestore();

var generatePDF = function generatePDF() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(dispatch, getState) {
        var template, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                template = _lodash["default"].cloneDeep(getState().template);
                user = _lodash["default"].cloneDeep(getState().user);

                _axios["default"].post('/api/template/create-pdf', {
                  templateID: template.id,
                  userID: user.userCredentials.uid
                }).then(function (res) {
                  var anchorTag = document.createElement('a');
                  anchorTag.href = res.data;
                  anchorTag.download = "My PDF File.pdf";
                  anchorTag.click();
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.generatePDF = generatePDF;

var getFieldDefault = function getFieldDefault(type) {
  var arr = _Fields.basic_fields.concat(_Fields.special_fields);

  return arr.find(function (f) {
    return f.type === type;
  });
};

exports.getFieldDefault = getFieldDefault;

var makeFieldActive = function makeFieldActive(fieldID) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(dispatch, getState) {
        var template, builder, field;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                template = _lodash["default"].cloneDeep(getState().template);
                builder = _lodash["default"].cloneDeep(getState().builder);
                field = template.items ? template.items.find(function (f) {
                  return f.fid == fieldID;
                }) : false;

                if (!field) {
                  _context2.next = 6;
                  break;
                }

                builder.activeField = field;
                return _context2.abrupt("return", dispatch({
                  type: ActionTypes.SET_ACTIVE_FIELD,
                  payload: builder
                }));

              case 6:
                return _context2.abrupt("return", false);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.makeFieldActive = makeFieldActive;

var leftPanelListHandler = function leftPanelListHandler(panelType) {
  return function (dispatch, getState) {
    var builder = _lodash["default"].cloneDeep(getState().builder);

    builder[panelType] = builder[panelType] == 'open' ? 'closed' : 'open';
    dispatch({
      type: ActionTypes.LEFT_PANEL_MENU_HANDLER,
      payload: builder
    });
  };
};
/*** RIGHT PANEL  ***/


exports.leftPanelListHandler = leftPanelListHandler;

var rightPanelMenuSwitch = function rightPanelMenuSwitch(data) {
  return function (dispatch, getState) {
    var rightPanel = _lodash["default"].cloneDeep(getState().rightPanel);

    rightPanel.activeMenu = data;
    dispatch({
      type: ActionTypes.RIGHT_PANEL_MENU_SWITCH,
      payload: rightPanel
    });
  };
};

exports.rightPanelMenuSwitch = rightPanelMenuSwitch;

/***/ }),

/***/ "./src/actions/template.js":
/*!*********************************!*\
  !*** ./src/actions/template.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewResumePage = exports.updateResumeItem = exports.createResumeItem = exports.generateResume = exports.fetchResume = exports.initResume = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "axios"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "lodash"));

__webpack_require__(/*! firebase/app */ "firebase/app");

var _fbConfig = _interopRequireDefault(__webpack_require__(/*! ../../fbConfig */ "./fbConfig.js"));

var ActionTypes = _interopRequireWildcard(__webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DB = _fbConfig["default"].firestore();

var initResume = function initResume(resumeID) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(dispatch, getState) {
        var templateRef, doc;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                templateRef = DB.collection('users').doc(resumeID);
                _context.next = 3;
                return templateRef.get().then();

              case 3:
                doc = _context.sent;

                if (!(doc && doc.exists)) {
                  _context.next = 7;
                  break;
                }

                console.log("DOC::", doc);
                return _context.abrupt("return", dispatch({
                  type: ActionTypes.INIT_TEMPLATE,
                  payload: data
                }));

              case 7:
                console.log("DOC couldn't find");
                return _context.abrupt("return", false);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

exports.initResume = initResume;

var fetchResume = function fetchResume(id) {
  var userID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(dispatch, getState) {
        var template, user, userId, _ref3, resume, docRef;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                template = _lodash["default"].cloneDeep(getState().template);
                user = _lodash["default"].cloneDeep(getState().user);
                userId = userID || user;
                _context2.next = 5;
                return getResumeFromDB(template, userId, id);

              case 5:
                _ref3 = _context2.sent;
                resume = _ref3.resume;
                docRef = _ref3.docRef;
                return _context2.abrupt("return", dispatch({
                  type: ActionTypes.FETCH_TEMPLATE,
                  payload: resume
                }));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

exports.fetchResume = fetchResume;

var getResumeFromDB =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(template, user) {
    var id,
        userID,
        docRef,
        resumeData,
        resumeIndex,
        resume,
        _args3 = arguments;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : false;
            userID = user.userCredentials ? user.userCredentials.uid : user;
            docRef = _fbConfig["default"].firestore().collection("users").doc(userID);
            _context3.next = 5;
            return docRef.get().then();

          case 5:
            _context3.next = 7;
            return _context3.sent.data();

          case 7:
            resumeData = _context3.sent;
            resumeIndex = Object.keys(resumeData).find(function (r) {
              return r == (id ? id : template.id);
            });
            resume = resumeData[resumeIndex];
            return _context3.abrupt("return", {
              resume: resume,
              docRef: docRef
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getResumeFromDB(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

var generateResume = function generateResume(resumeID) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(dispatch, getState) {
        var template, user, timestamp, templateRef, doc, resumeIndex, url, response;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                template = _lodash["default"].cloneDeep(getState().template);
                user = _lodash["default"].cloneDeep(getState().user);
                timestamp = new Date().getTime();

                if (!(resumeID && typeof template.id === "undefined")) {
                  _context4.next = 15;
                  break;
                }

                templateRef = DB.collection('users').doc(user.userCredentials.uid);
                _context4.next = 7;
                return templateRef.get().then();

              case 7:
                doc = _context4.sent;

                if (!(!doc || !doc.exists)) {
                  _context4.next = 11;
                  break;
                }

                console.log("DOC couldn't find");
                return _context4.abrupt("return", false);

              case 11:
                resumeIndex = Object.keys(doc.data()).find(function (d) {
                  return d === resumeID;
                });

                if (resumeIndex) {
                  template = doc.data()[resumeIndex];
                } else {
                  alert("Document couldn't find");
                }

                _context4.next = 16;
                break;

              case 15:
                if (typeof template.id === "undefined") {
                  template.id = "".concat(timestamp);
                  template.pages = [{
                    type: 'page',
                    fid: 1
                  }];
                  url = window.location.protocol + "//" + window.location.host + window.location.pathname + '/' + template.id;
                  window.history.pushState({
                    path: url
                  }, '', url);
                  response = DB.collection("users").doc(user.userCredentials.uid).update((0, _defineProperty2["default"])({}, template.id, template));
                  console.log("RESPONSE:", response);
                }

              case 16:
                return _context4.abrupt("return", dispatch({
                  type: ActionTypes.INIT_TEMPLATE,
                  payload: template
                }));

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x7, _x8) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.generateResume = generateResume;

var createResumeItem = function createResumeItem(_ref6) {
  var type = _ref6.type,
      page = _ref6.page,
      value = _ref6.value,
      style = _ref6.style;
  return (
    /*#__PURE__*/
    function () {
      var _ref7 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(dispatch, getState) {
        var template, user, _ref8, resume, docRef, fid, payload;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                template = _lodash["default"].cloneDeep(getState().template);
                user = _lodash["default"].cloneDeep(getState().user);
                _context5.next = 4;
                return getResumeFromDB(template, user);

              case 4:
                _ref8 = _context5.sent;
                resume = _ref8.resume;
                docRef = _ref8.docRef;
                fid = template.items ? template.items.length + 1 : 1;
                payload = {
                  type: type,
                  fid: fid,
                  value: value,
                  style: style,
                  pageID: page
                };

                if (!resume.items) {
                  resume.items = [];
                }

                resume.items.push(payload);
                docRef.update((0, _defineProperty2["default"])({}, template.id, resume));
                return _context5.abrupt("return", dispatch({
                  type: ActionTypes.FIELD_ITEM_CREATED,
                  payload: resume
                }));

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }()
  );
};

exports.createResumeItem = createResumeItem;

var updateResumeItem = function updateResumeItem(_ref9) {
  var fid = _ref9.fid,
      value = _ref9.value,
      style = _ref9.style;
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(dispatch, getState) {
        var template, user, _ref11, resume, docRef, itemIndex;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                template = _lodash["default"].cloneDeep(getState().template);
                user = _lodash["default"].cloneDeep(getState().user);
                _context6.next = 4;
                return getResumeFromDB(template, user);

              case 4:
                _ref11 = _context6.sent;
                resume = _ref11.resume;
                docRef = _ref11.docRef;
                itemIndex = resume.items.findIndex(function (f) {
                  return f.fid == fid;
                });

                if (!(itemIndex == -1)) {
                  _context6.next = 10;
                  break;
                }

                return _context6.abrupt("return");

              case 10:
                resume.items[itemIndex] = Object.assign({}, resume.items[itemIndex], value, {
                  style: _objectSpread({}, resume.items[itemIndex].style, {}, style)
                });
                docRef.update((0, _defineProperty2["default"])({}, template.id, resume));
                return _context6.abrupt("return", dispatch({
                  type: ActionTypes.FIELD_ITEM_UPDATE,
                  payload: resume
                }));

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x11, _x12) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
};

exports.updateResumeItem = updateResumeItem;

var addNewResumePage = function addNewResumePage() {
  return (
    /*#__PURE__*/
    function () {
      var _ref12 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(dispatch, getState) {
        var template, user, _ref13, resume, docRef, pageID, isUpdate;

        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                template = _lodash["default"].cloneDeep(getState().template);
                user = _lodash["default"].cloneDeep(getState().user);
                _context7.next = 4;
                return getResumeFromDB(template, user);

              case 4:
                _ref13 = _context7.sent;
                resume = _ref13.resume;
                docRef = _ref13.docRef;
                pageID = template.pages.length + 1;
                resume.pages.push({
                  type: 'page',
                  fid: pageID
                });
                _context7.next = 11;
                return docRef.update((0, _defineProperty2["default"])({}, template.id, resume));

              case 11:
                isUpdate = _context7.sent;
                console.log(isUpdate);
                return _context7.abrupt("return", dispatch({
                  type: ActionTypes.ADD_NEW_PAGE,
                  payload: resume
                }));

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function (_x13, _x14) {
        return _ref12.apply(this, arguments);
      };
    }()
  );
};

exports.addNewResumePage = addNewResumePage;

/***/ }),

/***/ "./src/actions/user.js":
/*!*****************************!*\
  !*** ./src/actions/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogout = exports.userSignIn = exports.userConnectionChecked = exports.checkUserConnection = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var constant = _interopRequireWildcard(__webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.js"));

__webpack_require__(/*! firebase/auth */ "firebase/auth");

var _app = _interopRequireDefault(__webpack_require__(/*! firebase/app */ "firebase/app"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var checkUserConnection = function checkUserConnection() {
  return function (dispatch, getState) {
    return dispatch({
      type: constant.CHECK_USER_CONNECTION,
      payload: true
    });
  };
};

exports.checkUserConnection = checkUserConnection;

var userConnectionChecked = function userConnectionChecked(data) {
  return function (dispatch, getState) {
    var user = _objectSpread({}, getState().user);

    if (data) {
      user.userCredentials = data;
      user.login = true;
    }

    user.checked = true;
    dispatch({
      type: constant.INIT_USER,
      payload: user
    });
  };
};

exports.userConnectionChecked = userConnectionChecked;

var userSignIn = function userSignIn(data) {
  return function (dispatch, getState) {
    if (data) {
      var user = _objectSpread({}, getState().user);

      user.userCredentials = data;
      user.login = true;
      dispatch({
        type: constant.USER_SIGN_IN,
        payload: user
      });
    }
  };
};

exports.userSignIn = userSignIn;

var userLogout = function userLogout() {
  return function (dispatch, getState) {
    var user = _objectSpread({}, getState().user);

    user.userCredentials = undefined;
    user.login = false;
    dispatch({
      type: constant.USER_LOGOUT,
      payload: user
    });

    _app["default"].auth().signOut().then(function () {
      // Sign-out successful.
      console.log("User is successfully logout");
    })["catch"](function (error) {
      // An error happened.
      console.log("ERROR HAPPENED: User logout");
    });
  };
};

exports.userLogout = userLogout;

/***/ }),

/***/ "./src/assets/images/arda.jpeg":
/*!*************************************!*\
  !*** ./src/assets/images/arda.jpeg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/assets/images/loginpic.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/images/loginpic.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "./src/assets/js/polyfill.js":
/*!***********************************!*\
  !*** ./src/assets/js/polyfill.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-undef */
if (global.window && window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;

    do {
      i = matches.length;

      while (--i >= 0 && matches.item(i) !== el) {}

      ;
    } while (i < 0 && (el = el.parentElement));

    return el;
  };
}

/***/ }),

/***/ "./src/assets/svgs/google.svg":
/*!************************************!*\
  !*** ./src/assets/svgs/google.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n| <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n| <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"");

/***/ }),

/***/ "./src/assets/svgs/linkedin.svg":
/*!**************************************!*\
  !*** ./src/assets/svgs/linkedin.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n| <!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n| <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

__webpack_require__(/*! firebase/auth */ "firebase/auth");

var _fbConfig = _interopRequireDefault(__webpack_require__(/*! ../../fbConfig */ "./fbConfig.js"));

var userActions = _interopRequireWildcard(__webpack_require__(/*! ../actions/user */ "./src/actions/user.js"));

__webpack_require__(/*! ../assets/js/polyfill */ "./src/assets/js/polyfill.js");

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {}, void 0, "Loading");

var App =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(App, _React$Component);

  function App(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, App);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(App).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "authListener",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var _this$props, onUserConnectionChecked, onUserCheckConnection;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, onUserConnectionChecked = _this$props.onUserConnectionChecked, onUserCheckConnection = _this$props.onUserCheckConnection;
              _context.next = 3;
              return onUserCheckConnection();

            case 3:
              _fbConfig["default"].auth().onAuthStateChanged(function (user) {
                // console.log("USER::", user);
                if (user) {
                  onUserConnectionChecked(user);
                }
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "routeHandler", function () {
      var location = _this.props.location;
      if (!location) return '';

      switch (location.pathname) {
        case '/builder':
          return 'app';

        default:
          return 'classic';
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.componentState = {};
      this.authListener();
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      console.log("DIDCATCH::", err);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          user = _this$props2.user,
          location = _this$props2.location;
      console.log("USERrr:", user.checked);

      if (user.checked || location.pathname.indexOf('/templates/') > -1) {
        return (0, _jsx2["default"])("main", {
          className: "app",
          "app-type": this.routeHandler()
        }, void 0, children);
      }

      return _ref2;
    }
  }]);
  return App;
}(_react["default"].Component);

App.propTypes = {
  children: _propTypes["default"].array.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = {
  onUserConnectionChecked: userActions.userConnectionChecked,
  onUserCheckConnection: userActions.checkUserConnection
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouterDom.withRouter)(App));

exports["default"] = _default;

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "margin-left x1"
}, void 0, (0, _jsx2["default"])("div", {
  className: "flex f-center"
}, void 0, (0, _jsx2["default"])("h1", {}, void 0, "Home Page")));

var Home =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Home, _React$Component);

  function Home() {
    (0, _classCallCheck2["default"])(this, Home);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Home).apply(this, arguments));
  }

  (0, _createClass2["default"])(Home, [{
    key: "render",
    value: function render() {
      return _ref;
    }
  }]);
  return Home;
}(_react["default"].Component);

var _default = Home;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/builder/builder.js":
/*!*******************************************!*\
  !*** ./src/components/builder/builder.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "lodash"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _leftPanel = _interopRequireDefault(__webpack_require__(/*! ./leftPanel */ "./src/components/builder/leftPanel.js"));

var _content = _interopRequireDefault(__webpack_require__(/*! ./content */ "./src/components/builder/content.js"));

var _rightPanel = _interopRequireDefault(__webpack_require__(/*! ./rightPanel */ "./src/components/builder/rightPanel.js"));

var builderActions = _interopRequireWildcard(__webpack_require__(/*! ../../actions/builder */ "./src/actions/builder.js"));

var templateActions = _interopRequireWildcard(__webpack_require__(/*! ../../actions/template */ "./src/actions/template.js"));

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "create-resume"
}, void 0, (0, _jsx2["default"])(_reactHelmet["default"], {}, void 0, (0, _jsx2["default"])("title", {}, void 0, "Resume Builder")), (0, _jsx2["default"])("div", {
  className: "create-resume-container"
}, void 0, (0, _jsx2["default"])(_leftPanel["default"], {}), (0, _jsx2["default"])(_content["default"], {}), (0, _jsx2["default"])(_rightPanel["default"], {})));

var Builder =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Builder, _React$Component);

  function Builder(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Builder);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Builder).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "initTemplate", function () {
      var _this$props = _this.props,
          onInitResume = _this$props.onInitResume,
          onGenerateResume = _this$props.onGenerateResume,
          resumeID = _this$props.resumeID;
      var result = onGenerateResume(resumeID);
      result.then(function (res) {
        if (res) {
          _this.setState({
            templateStatus: 'loaded'
          });
        } else {
          _this.setState({
            templateStatus: 'not_found'
          });
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addImageFromUrl", function () {
      var _this$props2 = _this.props,
          onProfileImageAdd = _this$props2.onProfileImageAdd,
          onChangeActiveLayout = _this$props2.onChangeActiveLayout;
      onProfileImageAdd(_this.refs.profileImageUrl.value);

      _this.setState({
        urlBoxOpened: false
      }, function () {
        onChangeActiveLayout({
          process: 'removeSection'
        });
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "uploadProfileImage", function (event) {
      _this.setState({
        uploadImageSettings: {
          active: true,
          files: event.target.files
        }
      });
    });
    _this.state = {
      templateStatus: false,
      builderMenuDimensions: {},
      uploadImageSettings: {
        active: false,
        event: null
      },
      urlBoxOpened: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Builder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initTemplate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          templateStatus = _this$state.templateStatus,
          zoom = _this$state.zoom,
          builderMenuDimensions = _this$state.builderMenuDimensions;
      var activeSection = this.props.builder.activeSection; // if (!templateStatus) return <div>Loading...</div>
      // if (templateStatus == 'not_found') {
      //   return (
      //     <div className="not_found">
      //       <p>Resume couldn't found</p>
      //     </div>
      //   )
      // }

      return _ref;
    }
  }]);
  return Builder;
}(_react["default"].Component);

Builder.propTypes = {};
Builder.defaultProps = {};

var mapStateToProps = function mapStateToProps(state) {
  return {
    builder: state.builder,
    template: state.template
  };
};

var mapDispatchToProps = {
  onFieldClick: builderActions.fieldClick,
  onFieldChange: builderActions.fieldChange,
  onIsPropertyChanged: builderActions.isPropertyChanged,
  onAddElementToTemplate: builderActions.addElementToTemplate,
  onProfileImageAdd: builderActions.profileImageAdd,
  onSortFields: builderActions.sortFields,
  onChangeActiveLayout: builderActions.changeActiveLayout,
  onChangeActiveElement: builderActions.changeActiveElement,
  onInitResume: templateActions.initResume,
  onGenerateResume: templateActions.generateResume
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Builder);

exports["default"] = _default;

/***/ }),

/***/ "./src/components/builder/content.js":
/*!*******************************************!*\
  !*** ./src/components/builder/content.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _template = _interopRequireDefault(__webpack_require__(/*! ./template */ "./src/components/builder/template.js"));

var builderActions = _interopRequireWildcard(__webpack_require__(/*! ../../actions/builder */ "./src/actions/builder.js"));

var templateActions = _interopRequireWildcard(__webpack_require__(/*! ../../actions/template */ "./src/actions/template.js"));

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])("button", {
  type: "button"
}, void 0, "Order");

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])("strong", {}, void 0, "Upload Image");

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "delete");

var _ref4 =
/*#__PURE__*/
(0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "remove_red_eye");

var Content =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Content, _React$Component);

  function Content(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Content);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Content).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "generateResumeTemplate", function () {
      var _this$props = _this.props,
          template = _this$props.template,
          builder = _this$props.builder;
      return (0, _jsx2["default"])(_template["default"], {
        pages: template.pages,
        layouts: template.layouts,
        activeField: builder.activeField,
        fields: template.items,
        zoom: _this.state.zoom,
        actions: {
          createItem: _this.props.onCreateResumeItem,
          updateItem: _this.props.onUpdateResumeItem,
          addNewPage: _this.props.onAddNewResumePage,
          createLayout: _this.props.onCreateNewLayout,
          makeFieldActive: _this.props.onMakeFieldActive
        },
        helpers: {
          getFieldDefault: builderActions.getFieldDefault
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "zoomer", function (process) {
      var zoom = _this.state.zoom;

      if (process === 'increase' && zoom.percent <= 150) {
        // zoom.width = zoom.width * 1.2;
        // zoom.height = zoom.height * 1.2;
        zoom.percent += 25; // zoom.transform = `scale(${zoom.percent / 100})`;
      } else if (process === 'decrease' && zoom.percent > 50) {
        // zoom.width = zoom.width / 1.2;
        // zoom.height = zoom.height / 1.2;
        zoom.percent -= 25; // zoom.transform = `scale(${zoom.percent / 100})`;
      } // document.querySelector('.g-resume-container').style.transform = zoom.transform;


      _this.setState({
        zoom: zoom
      });
    });
    _this.state = {
      templateStatus: false,
      zoom: {
        width: 892.5,
        height: 1263,
        percent: 100
      },
      builderMenuDimensions: {},
      uploadImageSettings: {
        active: false,
        event: null
      },
      urlBoxOpened: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Content, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeSection = this.props.builder.activeSection;
      var _this$state = this.state,
          templateStatus = _this$state.templateStatus,
          zoom = _this$state.zoom,
          builderMenuDimensions = _this$state.builderMenuDimensions;
      return (0, _jsx2["default"])("div", {
        className: "content"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "resume-area"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "resume-content"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "resume"
      }, void 0, this.generateResumeTemplate()), activeSection && (0, _jsx2["default"])("div", {
        className: "builder-menu",
        style: {
          left: builderMenuDimensions.x,
          top: builderMenuDimensions.y - 110
        }
      }, void 0, (0, _jsx2["default"])("div", {
        className: "builder-menu-content"
      }, void 0, ['profilePicture', 'fullname'].indexOf(activeSection) == -1 && (0, _jsx2["default"])(_react["default"].Fragment, {}, void 0, (0, _jsx2["default"])("button", {
        type: "button",
        onClick: this.addItemToSection
      }, void 0, "+ Add Item"), _ref), activeSection == 'profilePicture' && (0, _jsx2["default"])("div", {
        className: "upload-image"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "from-pc"
      }, void 0, (0, _jsx2["default"])("input", {
        type: "file",
        onChange: this.uploadProfileImage
      }), _ref2), (0, _jsx2["default"])("div", {
        className: "from-url"
      }, void 0, (0, _jsx2["default"])("strong", {
        className: "url-box-text",
        onClick: function onClick() {
          return _this2.setState({
            urlBoxOpened: !_this2.state.urlBoxOpened
          });
        }
      }, void 0, "Add with URL"), (0, _jsx2["default"])("div", {
        className: "url-box ".concat(this.state.urlBoxOpened ? 'active' : '')
      }, void 0, _react["default"].createElement("input", {
        type: "text",
        placeholder: "Profile Image URL",
        ref: "profileImageUrl"
      }), (0, _jsx2["default"])("button", {
        type: "button",
        onClick: this.addImageFromUrl
      }, void 0, "Save")))), (0, _jsx2["default"])("button", {
        type: "button",
        onClick: this.disableSection
      }, void 0, _ref3))))), (0, _jsx2["default"])("div", {
        className: "bottom-bar"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "zoomer"
      }, void 0, _ref4, (0, _jsx2["default"])("i", {
        className: "material-icons cursor",
        onClick: this.zoomer.bind(this, 'decrease')
      }, void 0, "remove"), (0, _jsx2["default"])("span", {}, void 0, zoom.percent, "%"), (0, _jsx2["default"])("i", {
        className: "material-icons cursor",
        onClick: this.zoomer.bind(this, 'increase')
      }, void 0, "add"))), (0, _jsx2["default"])("div", {
        className: "modals"
      }, void 0, this.state.uploadImageSettings.active && (0, _jsx2["default"])("div", {
        id: "uploadProfilePicture"
      }, void 0, (0, _jsx2["default"])(UploadImage, {
        files: this.state.uploadImageSettings.files
      }))));
    }
  }]);
  return Content;
}(_react["default"].Component);

Content.propTypes = {};
Content.defaultProps = {};

var mapStateToProps = function mapStateToProps(state) {
  return {
    builder: state.builder,
    template: state.template
  };
};

var mapDispatchToProps = {
  onTemplateInit: builderActions.initTemplate,
  onFieldClick: builderActions.fieldClick,
  onFieldChange: builderActions.fieldChange,
  onIsPropertyChanged: builderActions.isPropertyChanged,
  onAddElementToTemplate: builderActions.addElementToTemplate,
  onProfileImageAdd: builderActions.profileImageAdd,
  onSortFields: builderActions.sortFields,
  onChangeActiveLayout: builderActions.changeActiveLayout,
  onChangeActiveElement: builderActions.changeActiveElement,
  onCreateResumeItem: templateActions.createResumeItem,
  onUpdateResumeItem: templateActions.updateResumeItem,
  onAddNewResumePage: templateActions.addNewResumePage,
  onCreateNewLayout: templateActions.addNewLayout,
  onMakeFieldActive: builderActions.makeFieldActive
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Content);

exports["default"] = _default;

/***/ }),

/***/ "./src/components/builder/leftPanel.js":
/*!*********************************************!*\
  !*** ./src/components/builder/leftPanel.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var builderActions = _interopRequireWildcard(__webpack_require__(/*! ../../actions/builder */ "./src/actions/builder.js"));

var _Fields = __webpack_require__(/*! ../../constants/Fields */ "./src/constants/Fields.js");

var _helpers = __webpack_require__(/*! ../../helpers */ "./src/helpers/index.js");

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "panel-title"
}, void 0, (0, _jsx2["default"])("i", {
  className: "fas fa-th-list"
}), (0, _jsx2["default"])("strong", {}, void 0, "Add Field"));

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "search"
}, void 0, (0, _jsx2["default"])("input", {
  type: "search",
  placeholder: "Search Fields"
}));

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])("span", {}, void 0, "Basic Fields");

var _ref4 =
/*#__PURE__*/
(0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "arrow_drop_down");

var _ref5 =
/*#__PURE__*/
(0, _jsx2["default"])("span", {}, void 0, "Quick Fields");

var _ref6 =
/*#__PURE__*/
(0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "arrow_drop_down");

var LeftPanel =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(LeftPanel, _React$PureComponent);

  function LeftPanel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, LeftPanel);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LeftPanel).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldDragStart", function (e) {
      var field = e.target;
      e.dataTransfer.setData('text/plain', JSON.stringify({
        process: 'copy',
        type: field.getAttribute('type')
      }));
      window.componentState.dragType = "copy";
      field.classList.add('active');
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldDragOver", function (e) {
      e.stopPropagation();
      e.preventDefault();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldDragEnd", function (e) {
      var field = e.target;
      field.classList.remove('active');
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "panelHandler", function (type, event) {
      var onLeftPanelListHandler = _this.props.onLeftPanelListHandler;
      onLeftPanelListHandler(type);
    });
    return _this;
  }

  (0, _createClass2["default"])(LeftPanel, [{
    key: "renderFields",
    value: function renderFields(fields) {
      var _this2 = this;

      var dom = fields.map(function (field, index) {
        var fid = (0, _helpers.uuid)();
        return (0, _jsx2["default"])("li", {
          className: "field",
          type: field.type,
          fid: fid,
          "data-order": index,
          draggable: true,
          onDragStart: _this2.fieldDragStart,
          onDragOver: _this2.fieldDragOver,
          onDragEnd: _this2.fieldDragEnd
        }, void 0, (0, _jsx2["default"])("span", {
          className: "text"
        }, void 0, field.text));
      });
      return dom;
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _jsx2["default"])("aside", {
        className: "left-panel"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "left-panel-container"
      }, void 0, _ref, (0, _jsx2["default"])("div", {
        className: "panel-content"
      }, void 0, _ref2, (0, _jsx2["default"])("div", {
        className: "fields"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "field-group",
        "data-passive": this.props.builder.basic_fields == 'closed'
      }, void 0, (0, _jsx2["default"])("div", {
        className: "field-group-title",
        onClick: this.panelHandler.bind(this, 'basic_fields')
      }, void 0, _ref3, _ref4), (0, _jsx2["default"])("ul", {
        className: "field-group-items"
      }, void 0, this.renderFields(_Fields.basic_fields))), (0, _jsx2["default"])("div", {
        className: "field-group",
        "data-passive": this.props.builder.quick_fields == 'closed'
      }, void 0, (0, _jsx2["default"])("div", {
        className: "field-group-title",
        onClick: this.panelHandler.bind(this, 'quick_fields')
      }, void 0, _ref5, _ref6), (0, _jsx2["default"])("ul", {
        className: "field-group-items"
      }, void 0, this.renderFields(_Fields.special_fields)))))));
    }
  }]);
  return LeftPanel;
}(_react["default"].PureComponent);

LeftPanel.propTypes = {};
LeftPanel.defaultProps = {};

var mapStateToProps = function mapStateToProps(state) {
  return {
    builder: state.builder
  };
};

var mapDispatchToProps = {
  onLeftPanelListHandler: builderActions.leftPanelListHandler
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LeftPanel);

exports["default"] = _default;

/***/ }),

/***/ "./src/components/builder/resumeItem.js":
/*!**********************************************!*\
  !*** ./src/components/builder/resumeItem.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _fields = __webpack_require__(/*! ../fields */ "./src/components/fields/index.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])("span", {}, void 0, "ADRESS");

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])("input", {
  type: "text"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "lines"
}, void 0, (0, _jsx2["default"])("span", {}), (0, _jsx2["default"])("span", {}), (0, _jsx2["default"])("span", {}), (0, _jsx2["default"])("span", {}));

var ResumeItem =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(ResumeItem, _React$PureComponent);

  function ResumeItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ResumeItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ResumeItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createTextField", function () {
      var _this$props = _this.props,
          type = _this$props.type,
          value = _this$props.value,
          style = _this$props.style;
      return (0, _jsx2["default"])("div", {
        className: "resume-field",
        type: type
      }, void 0, (0, _jsx2["default"])(_fields.Textfield, {
        defaultValue: value
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createDateField", function () {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createAddressField", function () {
      var type = _this.props.type;
      return (0, _jsx2["default"])("div", {
        className: "resume-field",
        type: type
      }, void 0, _ref, _ref2);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createCircleField", function () {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createLineField", function () {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createContainer", function (field) {
      var _this$props2 = _this.props,
          onDragStart = _this$props2.onDragStart,
          onDragOver = _this$props2.onDragOver,
          draggable = _this$props2.draggable,
          style = _this$props2.style,
          activeField = _this$props2.activeField,
          fid = _this$props2.fid;
      return (0, _jsx2["default"])("li", {
        className: "field-line",
        id: "field_".concat(fid),
        fid: "field_".concat(fid),
        style: _objectSpread({}, style),
        type: _this.props.type,
        draggable: draggable,
        onDragStart: onDragStart,
        onDragOver: onDragOver,
        onClick: _this.fieldLineClick,
        "data-field-active": activeField && activeField.fid == fid
      }, void 0, (0, _jsx2["default"])("div", {
        className: "field-line-container"
      }, void 0, _ref3, (0, _jsx2["default"])("div", {
        className: "field-content"
      }, void 0, field)));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldLineClick", function (e) {
      var makeFieldActive = _this.props.actions.makeFieldActive;
      var fieldLine = e.target.closest('.field-line');
      var fieldID = fieldLine && fieldLine.id ? fieldLine.id.replace('field_', '') : false;

      if (fieldID) {
        makeFieldActive(fieldID);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ResumeItem, [{
    key: "render",
    value: function render() {
      var type = this.props.type;
      var field = null;

      switch (type) {
        case 'jbt_text':
          field = this.createTextField();
          break;

        case 'jbt_date':
          field = this.createDateField();

        case 'jbt_address':
          field = this.createAddressField();
          break;

        case 'jbt_circle':
          field = this.createCircleField();
          break;

        case 'jbt_line':
          field = this.createLineField();
          break;
      }

      return this.createContainer(field);
    }
  }]);
  return ResumeItem;
}(_react["default"].PureComponent);

;
var _default = ResumeItem;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/builder/rightPanel.js":
/*!**********************************************!*\
  !*** ./src/components/builder/rightPanel.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _builder = __webpack_require__(/*! ../../helpers/builder */ "./src/helpers/builder.js");

var _fields = __webpack_require__(/*! ../fields */ "./src/components/fields/index.js");

var builderActions = _interopRequireWildcard(__webpack_require__(/*! ../../actions/builder */ "./src/actions/builder.js"));

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "title"
}, void 0, (0, _jsx2["default"])("span", {}, void 0, "Input Settings"), (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "arrow_drop_down"));

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])("strong", {}, void 0, "Font");

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])("strong", {}, void 0, "Text Style");

var _ref4 =
/*#__PURE__*/
(0, _jsx2["default"])("strong", {}, void 0, "Alignment");

var _ref5 =
/*#__PURE__*/
(0, _jsx2["default"])("strong", {}, void 0, "Icon Settings");

var _ref6 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "template-style"
}, void 0, "Template Style");

var _ref7 =
/*#__PURE__*/
(0, _jsx2["default"])("li", {
  "data-menu": "field-settings"
}, void 0, "Field Settings");

var _ref8 =
/*#__PURE__*/
(0, _jsx2["default"])("li", {
  "data-menu": "template-style"
}, void 0, "Template Style");

var RightPanel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(RightPanel, _React$Component);

  function RightPanel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RightPanel);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(RightPanel).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "generatePDF", function () {
      var onGeneratePDF = _this.props.onGeneratePDF;
      onGeneratePDF();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderRightPanelFields", function () {
      var _this$props$builder = _this.props.builder,
          activeSection = _this$props$builder.activeSection,
          activeLayout = _this$props$builder.activeLayout,
          activePath = _this$props$builder.activePath;
      var dom = null;
      var activeField = null;

      if (activeField === 'general') {
        dom = _react["default"].createElement(_builder.RenderFieldGroup, {
          panelType: 'template-settings',
          title: 'Template Settings',
          icon: {
            type: 'font-awesome',
            text: 'fas fa-pencil-ruler',
            size: 16
          },
          subFieldGroup: [{
            type: 'fonts',
            title: 'Font',
            icon: {
              type: 'material-icons',
              text: 'text_format',
              size: 22
            },
            fields: [{
              type: 'fontFamily',
              initialValue: ''
            }, {
              type: 'fontSize',
              initialValue: ''
            }]
          }, {
            type: 'colors',
            title: 'Color',
            icon: {
              type: 'material-icons',
              text: 'color_lens',
              size: 22
            },
            fields: [{
              type: 'colorPicker',
              label: 'Main Color',
              initialValue: '',
              additionalClass: 'inline',
              position: "right"
            }, {
              type: 'colorPicker',
              label: 'Sidebar Color',
              initialValue: '',
              additionalClass: 'inline',
              position: "right"
            }]
          }]
        });
      } else if (activeField === 'icon') {
        dom = _react["default"].createElement(_builder.RenderFieldGroup, {
          panelType: 'icon-settings',
          title: 'Icon Settings',
          icon: {
            type: 'font-awesome',
            text: 'fas fa-icons',
            size: 16
          },
          subFieldGroup: [{
            fields: [{
              type: 'icon-library'
            }]
          }]
        });
      }

      return dom;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "menuClickHandler", function (e) {
      var onRightPanelMenuSwitch = _this.props.onRightPanelMenuSwitch;
      var dataMenu = e.target.getAttribute('data-menu');
      onRightPanelMenuSwitch(dataMenu);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderFieldSettings", function () {
      var parsedPath = [];
      var _this$props$builder2 = _this.props.builder,
          activeElement = _this$props$builder2.activeElement,
          activeSection = _this$props$builder2.activeSection,
          activeLayout = _this$props$builder2.activeLayout;
      return (0, _jsx2["default"])("div", {
        className: "field-settings"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "field-settings-content"
      }, void 0, activeElement && (0, _jsx2["default"])("div", {
        className: "subgroup",
        "data-menu-item": "input"
      }, void 0, _ref, (0, _jsx2["default"])("div", {
        className: "subgroup-content"
      }, void 0, activeElement['data-special-features'] && _this.renderSpecialFeatures(activeElement['data-special-features']), _this.renderSubgroupField(activeElement)))));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderSubgroupField", function (activeElement) {
      var dom = [];

      if (activeElement['field-type'] === 'input') {
        dom.push((0, _jsx2["default"])("div", {
          className: "panel-group"
        }, void 0, (0, _jsx2["default"])("div", {
          className: "panel-title"
        }, void 0, (0, _jsx2["default"])(_fields.Icon, {
          icon: {
            type: 'material-icons',
            text: 'text_format'
          },
          size: 22
        }), _ref2), (0, _jsx2["default"])("div", {
          className: "panel-item-content"
        }, void 0, (0, _builder.renderField)({
          element: 'fontSize'
        }), (0, _builder.renderField)({
          element: 'fontFamily'
        }))));
        dom.push((0, _jsx2["default"])("div", {
          className: "panel-group"
        }, void 0, (0, _jsx2["default"])("div", {
          className: "panel-title"
        }, void 0, (0, _jsx2["default"])(_fields.Icon, {
          icon: {
            type: 'material-icons',
            text: 'color_lens'
          },
          size: 22
        }), _ref3), (0, _jsx2["default"])("div", {
          className: "panel-item-content"
        }, void 0, (0, _builder.renderField)({
          element: {
            type: 'colorPicker',
            label: 'Text Color',
            initialValue: '',
            additionalClass: 'inline',
            position: "right"
          }
        }), (0, _builder.renderField)({
          element: {
            type: 'bold/italic/strikethrough',
            label: 'Bold & Italic & Strikethrough'
          }
        }))));
        dom.push((0, _jsx2["default"])("div", {
          className: "panel-group"
        }, void 0, (0, _jsx2["default"])("div", {
          className: "panel-title"
        }, void 0, (0, _jsx2["default"])(_fields.Icon, {
          icon: {
            type: 'font-awesome',
            text: 'fas fa-pen-fancy'
          },
          size: 22
        }), _ref4), (0, _jsx2["default"])("div", {
          className: "panel-item-content"
        }, void 0, (0, _builder.renderField)({
          element: {
            type: 'alignment_horizontal',
            label: 'Horizontal'
          }
        }), (0, _builder.renderField)({
          element: {
            type: 'alignment_vertical',
            label: 'Vertical'
          }
        }))));
      } else if (activeElement['field-type'] === 'icon') {
        dom.push((0, _jsx2["default"])("div", {
          className: "panel-group"
        }, void 0, (0, _jsx2["default"])("div", {
          className: "panel-title"
        }, void 0, (0, _jsx2["default"])(_fields.Icon, {
          icon: {
            type: 'material-icons',
            text: 'text_format'
          },
          size: 22
        }), _ref5), (0, _jsx2["default"])("div", {
          className: "panel-item-content"
        }, void 0, (0, _builder.renderField)({
          element: {
            type: 'icon-library'
          }
        }), (0, _builder.renderField)({
          element: {
            type: 'fontSize',
            label: 'Icon Size'
          }
        }))));
      }

      return dom;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderSpecialFeatures", function (specialFeature) {
      var features = specialFeature.split('|');
      var field = null;
      features.map(function (feature) {
        switch (feature) {
          case 'date':
            return field = (0, _builder.renderField)({
              element: 'dateField'
            });
        }
      });
      return field;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTemplateStyle", function () {
      return _ref6;
    });
    return _this;
  }

  (0, _createClass2["default"])(RightPanel, [{
    key: "render",
    value: function render() {
      var activeMenu = this.props.rightPanel.activeMenu;
      return (0, _jsx2["default"])("aside", {
        className: "right-panel"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "right-panel-container"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "tabs"
      }, void 0, (0, _jsx2["default"])("ul", {
        onClick: this.menuClickHandler
      }, void 0, _ref7, _ref8), (0, _jsx2["default"])("span", {
        className: "line",
        "data-menu": activeMenu
      })), (0, _jsx2["default"])("div", {
        className: "right-panel-content"
      }, void 0, activeMenu === 'field-settings' && this.renderFieldSettings(), activeMenu === 'template-style' && this.renderTemplateStyle())), (0, _jsx2["default"])("div", {
        className: "right-panel-bottom"
      }, void 0, (0, _jsx2["default"])(_fields.Button, {
        type: "button",
        dataType: "type1",
        size: "big",
        classNames: "download-btn",
        iconPosition: "left",
        text: "Download PDF",
        iconData: {
          type: 'font-awesome',
          text: 'fas fa-file-download'
        },
        click: this.generatePDF
      })));
    }
  }]);
  return RightPanel;
}(_react["default"].Component);

RightPanel.propTypes = {};
RightPanel.defaultProps = {};

var mapStateToProps = function mapStateToProps(state) {
  return {
    template: state.template,
    rightPanel: state.rightPanel,
    builder: state.builder
  };
};

var mapDispatchToProps = {
  onGeneratePDF: builderActions.generatePDF,
  onRightPanelMenuSwitch: builderActions.rightPanelMenuSwitch
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RightPanel);

exports["default"] = _default;

/***/ }),

/***/ "./src/components/builder/template.js":
/*!********************************************!*\
  !*** ./src/components/builder/template.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _resumeItem = _interopRequireDefault(__webpack_require__(/*! ./resumeItem */ "./src/components/builder/resumeItem.js"));

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])("hr", {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])("span", {}, void 0, "+ Add New Page");

var _ref4 =
/*#__PURE__*/
(0, _jsx2["default"])("hr", {});

var TemplateContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(TemplateContainer, _React$Component);

  function TemplateContainer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TemplateContainer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TemplateContainer).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pageDropzone",
    /*#__PURE__*/
    function () {
      var _ref = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(pagex, event) {
        var _this$props, _this$props$actions, createItem, updateItem, helpers, pageContent, page, pageID, dataTransfer, process, fieldType, fieldID, locations, fieldDefaults, field, element, newStyle, _field;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$props = _this.props, _this$props$actions = _this$props.actions, createItem = _this$props$actions.createItem, updateItem = _this$props$actions.updateItem, helpers = _this$props.helpers;
                pageContent = event.target;
                page = event.target.closest('.page');
                pageID = page.id.replace('page_', '');
                dataTransfer = JSON.parse(event.dataTransfer.getData('text'));
                process = dataTransfer.process;
                fieldType = dataTransfer.type;
                fieldID = dataTransfer.id;
                event.dataTransfer.clearData(); // Drag Element Locations

                locations = {
                  x: window.event.x,
                  y: window.event.y,
                  offsetX: window.event.offsetX,
                  offsetY: window.event.offsetY
                };

                if (!(process == 'copy')) {
                  _context.next = 19;
                  break;
                }

                fieldDefaults = helpers.getFieldDefault(fieldType);
                _context.next = 15;
                return createItem({
                  type: fieldType,
                  page: pageID,
                  value: fieldDefaults.defaultValue,
                  style: Object.assign({}, fieldDefaults.defaultStyle, {
                    left: locations.offsetX,
                    top: locations.offsetY
                  })
                });

              case 15:
                field = _context.sent;
                console.log("RESPONSE:", field);
                _context.next = 26;
                break;

              case 19:
                if (!(process == 'move')) {
                  _context.next = 26;
                  break;
                }

                element = document.querySelector("#field_".concat(fieldID)); // const newStyle = {
                //   left: locations.offsetX - this.draggedElement.x,
                //   top: locations.offsetY - this.draggedElement.y
                // };

                newStyle = {
                  left: locations.offsetX,
                  top: locations.offsetY
                };
                _context.next = 24;
                return updateItem({
                  fid: fieldID,
                  style: newStyle
                });

              case 24:
                _field = _context.sent;
                console.log("RESPONSE2:", _field);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldDragOver", function (layout, event) {
      event.preventDefault();
      var dragType = window.componentState.dragType;

      if (dragType == 'copy') {
        event.dataTransfer.dropEffect = 'copy';
      } else {
        event.dataTransfer.dropEffect = 'move';
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addedFieldsDragStart", function (e) {
      var field = e.target;
      e.dataTransfer.setData('text/plain', JSON.stringify({
        process: 'move',
        id: field.id.replace('field_', '')
      }));
      window.componentState.dragType = "move";
      field.classList.add('active');
      var crt = e.target.querySelector('.field-content');
      e.dataTransfer.setDragImage(crt, 0, 0);
      var positions = field.getBoundingClientRect();
      _this.draggedElement = {
        x: window.event.clientX - positions.x,
        y: window.event.clientY - positions.y
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addedFieldDragOver", function (e) {
      e.stopPropagation();
      e.preventDefault();
    });
    return _this;
  }

  (0, _createClass2["default"])(TemplateContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          pages = _this$props2.pages,
          layouts = _this$props2.layouts,
          fields = _this$props2.fields,
          zoom = _this$props2.zoom,
          actions = _this$props2.actions,
          renderPDF = _this$props2.renderPDF;
      return (0, _jsx2["default"])("div", {
        className: "g-resume-container",
        style: {
          transform: zoom ? "scale(".concat(zoom.percent / 100, ")") : "scale(1)"
        }
      }, void 0, (0, _jsx2["default"])("div", {
        className: "pages"
      }, void 0, pages && pages.map(function (page, index) {
        return (0, _jsx2["default"])("div", {
          className: "page",
          id: "page_".concat(page.fid),
          onDrop: _this2.pageDropzone.bind(_this2, page),
          onDragOver: _this2.fieldDragOver.bind(_this2, page)
        }, void 0, (0, _jsx2["default"])("div", {
          className: "page-content"
        }, void 0, (0, _jsx2["default"])("ul", {}, void 0, fields && fields.length > 0 && fields.map(function (item, index) {
          return item.pageID == page.fid && (0, _jsx2["default"])(_resumeItem["default"], {
            fid: item.fid,
            type: item.type,
            value: item.value,
            style: item.style,
            draggable: true,
            onDragStart: _this2.addedFieldsDragStart,
            onDragOver: _this2.addedFieldDragOver,
            actions: _this2.props.actions,
            activeField: _this2.props.activeField
          });
        }))), page.fid === pages.length && !renderPDF && (0, _jsx2["default"])("div", {
          className: "add-new-page",
          onClick: actions && actions.addNewPage,
          style: {
            width: "".concat(8.27 * (zoom.percent / 100), "in")
          }
        }, void 0, _ref2, _ref3, _ref4));
      })));
    }
  }]);
  return TemplateContainer;
}(_react["default"].Component);

;
var _default = TemplateContainer;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/fields/Icon.js":
/*!***************************************!*\
  !*** ./src/components/fields/Icon.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var Icon =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Icon, _React$Component);

  function Icon(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Icon);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Icon).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "iconClick", function (e) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick({
          type: 'icon',
          element: e.target,
          original: e
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          clickable = _this$props.clickable,
          onClick = _this$props.onClick,
          style = _this$props.style,
          fid = _this$props.fid;
      return (0, _jsx2["default"])("div", {
        className: "icon resume-icon",
        style: style
      }, void 0, (0, _jsx2["default"])("i", {
        className: icon.type === "material-icons" ? "material-icons" : icon.text,
        onClick: this.iconClick,
        "data-clickable": clickable,
        id: fid,
        "field-type": "icon"
      }, void 0, icon.type === 'material-icons' && icon.text));
    }
  }]);
  return Icon;
}(_react["default"].Component);

Icon.propTypes = {
  icon: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func,
  clickable: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  fid: _propTypes["default"].number
};
Icon.defaultProps = {
  onClick: function onClick() {
    return console.log("Icon Clicked");
  },
  clickable: true,
  style: {},
  fid: -1
};
var _default = Icon;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/fields/button.js":
/*!*****************************************!*\
  !*** ./src/components/fields/button.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./src/components/fields/Icon.js"));

// const LoadingSVG = require("./../../assets/img/loading.svg");
var Button =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Button, _React$Component);

  function Button() {
    (0, _classCallCheck2["default"])(this, Button);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Button).apply(this, arguments));
  }

  (0, _createClass2["default"])(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          iconData = _this$props.iconData,
          loading = _this$props.loading,
          text = _this$props.text,
          iconPosition = _this$props.iconPosition,
          classNames = _this$props.classNames,
          click = _this$props.click,
          dataType = _this$props.dataType,
          type = _this$props.type,
          size = _this$props.size,
          shadow = _this$props.shadow;
      return (0, _jsx2["default"])("div", {
        className: "jButton",
        "data-type": dataType,
        "data-icon": JSON.stringify(iconData) ? true : false,
        "data-size": size,
        "data-shadow": shadow
      }, void 0, (0, _jsx2["default"])("button", {
        type: type,
        className: "".concat(classNames, " ").concat(iconPosition),
        onClick: click
      }, void 0, iconData && !loading ? iconPosition === "left" ? (0, _jsx2["default"])(_react["default"].Fragment, {}, void 0, (0, _jsx2["default"])(_Icon["default"], {
        icon: iconData
      }), (0, _jsx2["default"])("span", {}, void 0, text)) : (0, _jsx2["default"])(_react["default"].Fragment, {}, void 0, (0, _jsx2["default"])("span", {}, void 0, text), (0, _jsx2["default"])(_Icon["default"], {
        icon: iconData
      })) : text));
    }
  }]);
  return Button;
}(_react["default"].Component);

;
Button.propTypes = {
  type: _propTypes["default"].string.isRequired,
  classNames: _propTypes["default"].string,
  dataType: _propTypes["default"].string,
  size: _propTypes["default"].string,
  click: _propTypes["default"].func,
  text: _propTypes["default"].string,
  icon: _propTypes["default"].object,
  loading: _propTypes["default"].bool,
  iconPosition: _propTypes["default"].string,
  shadow: _propTypes["default"].bool
};
Button.defaultProps = {
  classNames: "",
  dataType: "",
  text: "",
  icon: {},
  loading: false,
  iconPosition: 'left',
  shadow: false,
  click: function click() {
    return console.log("Clicked");
  }
};
var _default = Button;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/fields/card.js":
/*!***************************************!*\
  !*** ./src/components/fields/card.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./src/components/fields/Icon.js"));

var Card =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Card, _React$Component);

  function Card() {
    (0, _classCallCheck2["default"])(this, Card);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Card).apply(this, arguments));
  }

  (0, _createClass2["default"])(Card, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children,
          additionalClass = _this$props.additionalClass;
      return (0, _jsx2["default"])("div", {
        className: "card ".concat(additionalClass)
      }, void 0, title && (0, _jsx2["default"])("div", {
        className: "card-title"
      }, void 0, title.icon && (0, _jsx2["default"])(_Icon["default"], {
        icon: title.icon
      }), title.text && (0, _jsx2["default"])("strong", {}, void 0, title.text)), (0, _jsx2["default"])("div", {
        className: "card-content"
      }, void 0, children));
    }
  }]);
  return Card;
}(_react["default"].Component);

;
Card.propTypes = {
  additionalClass: _propTypes["default"].string,
  title: _propTypes["default"].shape({
    icon: _propTypes["default"].shape({
      type: _propTypes["default"].string,
      text: _propTypes["default"].string
    }),
    text: _propTypes["default"].string
  })
};
Card.defaultProps = {
  additionalClass: '',
  title: null
};
var _default = Card;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/fields/colorPicker.js":
/*!**********************************************!*\
  !*** ./src/components/fields/colorPicker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactColor = __webpack_require__(/*! react-color */ "react-color");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var cover = {
  position: 'fixed',
  top: '0px',
  right: '0px',
  bottom: '0px',
  left: '0px'
};

var ColorPicker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ColorPicker, _React$Component);

  function ColorPicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorPicker);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ColorPicker).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      _this.setState({
        displayColorPicker: !_this.state.displayColorPicker
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClose", function () {
      _this.setState({
        displayColorPicker: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (color) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          dataId = _this$props.dataId;

      _this.setState({
        color: color.hex
      });

      if (onChange) {
        if (Number.isInteger(dataId)) {
          onChange(color.hex, dataId);
        } else {
          onChange(color.hex);
        }
      }
    });
    _this.state = {
      displayColorPicker: false,
      color: '#ddd'
    };
    return _this;
  }

  (0, _createClass2["default"])(ColorPicker, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          boxHeight = _this$props2.boxHeight,
          position = _this$props2.position,
          defaultValue = _this$props2.defaultValue,
          label = _this$props2.label,
          additionalClass = _this$props2.additionalClass;
      var _this$state = this.state,
          displayColorPicker = _this$state.displayColorPicker,
          color = _this$state.color;
      return (0, _jsx2["default"])("div", {
        className: "color-picker ".concat(additionalClass)
      }, void 0, (0, _jsx2["default"])("span", {
        className: "label"
      }, void 0, label), type === 'box' && (0, _jsx2["default"])("div", {
        className: "box"
      }, void 0, (0, _jsx2["default"])("span", {
        className: "box-area",
        onClick: this.handleClick,
        style: {
          backgroundColor: defaultValue || color,
          height: boxHeight,
          width: boxHeight
        }
      }), displayColorPicker && (0, _jsx2["default"])("div", {
        className: "color-picker-box",
        "data-position": position,
        style: {
          zIndex: 2
        }
      }, void 0, (0, _jsx2["default"])("div", {
        style: cover,
        onClick: this.handleClose
      }), (0, _jsx2["default"])(_reactColor.SketchPicker, {
        color: this.state.color,
        onChangeComplete: this.handleChange
      }))));
    }
  }]);
  return ColorPicker;
}(_react["default"].Component);

ColorPicker.propTypes = {
  type: _propTypes["default"].string,
  boxHeight: _propTypes["default"].number,
  position: _propTypes["default"].string,
  defaultValue: _propTypes["default"].string,
  label: _propTypes["default"].string,
  additionalClass: _propTypes["default"].string
};
ColorPicker.defaultProps = {
  type: 'box',
  boxHeight: 20,
  position: 'left',
  defaultValue: '',
  label: '',
  additionalClass: _propTypes["default"].string
};
var _default = ColorPicker;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/fields/icon.js":
/*!***************************************!*\
  !*** ./src/components/fields/icon.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var Icon =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Icon, _React$Component);

  function Icon(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Icon);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Icon).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "iconClick", function (e) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick({
          type: 'icon',
          element: e.target,
          original: e
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          clickable = _this$props.clickable,
          onClick = _this$props.onClick,
          style = _this$props.style,
          fid = _this$props.fid;
      return (0, _jsx2["default"])("div", {
        className: "icon resume-icon",
        style: style
      }, void 0, (0, _jsx2["default"])("i", {
        className: icon.type === "material-icons" ? "material-icons" : icon.text,
        onClick: this.iconClick,
        "data-clickable": clickable,
        id: fid,
        "field-type": "icon"
      }, void 0, icon.type === 'material-icons' && icon.text));
    }
  }]);
  return Icon;
}(_react["default"].Component);

Icon.propTypes = {
  icon: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func,
  clickable: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  fid: _propTypes["default"].number
};
Icon.defaultProps = {
  onClick: function onClick() {
    return console.log("Icon Clicked");
  },
  clickable: true,
  style: {},
  fid: -1
};
var _default = Icon;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/fields/iconLibrary.js":
/*!**********************************************!*\
  !*** ./src/components/fields/iconLibrary.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _iconConsts = _interopRequireDefault(__webpack_require__(/*! ../../constants/iconConsts */ "./src/constants/iconConsts.js"));

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "modal-title"
}, void 0, (0, _jsx2["default"])("div", {
  className: "input"
}, void 0, (0, _jsx2["default"])("input", {
  type: "search",
  placeholder: "Search Icon"
}), (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "search")));

var IconLibrary =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(IconLibrary, _React$Component);

  function IconLibrary(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, IconLibrary);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(IconLibrary).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getIcons", function () {
      var dom = [];
      var icons = _this.state.icons;

      if (icons) {
        icons.map(function (icon, key) {
          dom.push((0, _jsx2["default"])("li", {
            onClick: _this.iconClicked.bind((0, _assertThisInitialized2["default"])(_this), icon)
          }, key, icon.type == "font-awesome" && (0, _jsx2["default"])("i", {
            className: "".concat(icon.text)
          }), icon.type == "material-icons" && (0, _jsx2["default"])("i", {
            className: "material-icons"
          }, void 0, icon.text)));
        });
      }

      return dom;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "iconClicked", function (icon) {});
    _this.state = {
      icon: "",
      icons: _iconConsts["default"],
      isModalOpened: false
    };
    return _this;
  }

  (0, _createClass2["default"])(IconLibrary, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          icon = _this$state.icon,
          isModalOpened = _this$state.isModalOpened;
      var activeIcon = this.props.activeIcon;
      return (0, _jsx2["default"])("div", {
        className: "icons-library"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "modal"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "modal-content"
      }, void 0, _ref, (0, _jsx2["default"])("ul", {}, void 0, this.getIcons()))));
    }
  }]);
  return IconLibrary;
}(_react["default"].Component);

IconLibrary.propTypes = {
  activeIcon: _propTypes["default"].object.isRequired
};
var _default = IconLibrary;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/fields/index.js":
/*!****************************************!*\
  !*** ./src/components/fields/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _card["default"];
  }
});
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: function get() {
    return _select["default"];
  }
});
Object.defineProperty(exports, "ColorPicker", {
  enumerable: true,
  get: function get() {
    return _colorPicker["default"];
  }
});
Object.defineProperty(exports, "Toggle", {
  enumerable: true,
  get: function get() {
    return _toggle["default"];
  }
});
Object.defineProperty(exports, "Textfield", {
  enumerable: true,
  get: function get() {
    return _textfield["default"];
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button["default"];
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function get() {
    return _icon["default"];
  }
});

var _card = _interopRequireDefault(__webpack_require__(/*! ./card */ "./src/components/fields/card.js"));

var _select = _interopRequireDefault(__webpack_require__(/*! ./select */ "./src/components/fields/select.js"));

var _colorPicker = _interopRequireDefault(__webpack_require__(/*! ./colorPicker */ "./src/components/fields/colorPicker.js"));

var _toggle = _interopRequireDefault(__webpack_require__(/*! ./toggle */ "./src/components/fields/toggle.js"));

var _textfield = _interopRequireDefault(__webpack_require__(/*! ./textfield */ "./src/components/fields/textfield.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ "./src/components/fields/button.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ./icon */ "./src/components/fields/icon.js"));

/***/ }),

/***/ "./src/components/fields/select.js":
/*!*****************************************!*\
  !*** ./src/components/fields/select.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactSelect = _interopRequireDefault(__webpack_require__(/*! react-select */ "react-select"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Select =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Select, _React$Component);

  function Select(_props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Select);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Select).call(this, _props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "init", function (props) {
      var options = props.options;
      var val = options.find(function (option) {
        return option.value === props.value;
      });

      if (!val) {
        val = {};
      }

      _this.setState({
        selectValue: val
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectChangeHandler", function (options) {
      var onChange = _this.props.onChange;

      _this.setState({
        selectValue: options
      });

      if (onChange) {
        onChange(options);
      }
    });
    _this.state = {
      selectValue: null
    };
    return _this;
  }

  (0, _createClass2["default"])(Select, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.init(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.init(nextProps);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          height = _this$props.height,
          placeholder = _this$props.placeholder,
          options = _this$props.options,
          label = _this$props.label,
          additionalClass = _this$props.additionalClass;
      var selectValue = this.state.selectValue;
      var styles = {
        control: function control(base, state) {
          return _objectSpread({}, base, {
            minHeight: height,
            height: height,
            boxShadow: state.isFocused ? 0 : 0,
            borderColor: state.isFocused ? '#ba5b5b' : base.borderColor,
            '&:hover': {
              borderColor: state.isFocused ? '#ba5b5b' : base.borderColor
            }
          });
        },
        container: function container(base) {
          return _objectSpread({}, base, {
            fontSize: 14
          });
        },
        input: function input(base) {
          return _objectSpread({}, base, {
            height: height,
            fontSize: 13
          });
        },
        dropdownIndicator: function dropdownIndicator(base) {
          return _objectSpread({}, base, {
            paddingTop: 0,
            paddingBottom: 0
          });
        },
        clearIndicator: function clearIndicator(base) {
          return _objectSpread({}, base, {
            paddingTop: 0,
            paddingBottom: 0
          });
        },
        valueContainer: function valueContainer(base) {
          return _objectSpread({}, base, {
            paddingTop: 0,
            paddingBottom: 0,
            height: height
          });
        }
      };
      return (0, _jsx2["default"])("div", {
        className: "select-field ".concat(additionalClass)
      }, void 0, (0, _jsx2["default"])("span", {
        className: "select-label"
      }, void 0, label), (0, _jsx2["default"])(_reactSelect["default"], {
        placeholder: placeholder,
        styles: styles,
        options: options,
        value: selectValue,
        onChange: this.selectChangeHandler
      }));
    }
  }]);
  return Select;
}(_react["default"].Component);

;
Select.propTypes = {
  options: _propTypes["default"].array.isRequired,
  height: _propTypes["default"].number,
  placeholder: _propTypes["default"].string,
  label: _propTypes["default"].string,
  additionalClass: _propTypes["default"].string
};
Select.defaultProps = {
  height: 30,
  placeholder: "Select",
  label: "",
  additionalClass: ""
};
var _default = Select;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/fields/textfield.js":
/*!********************************************!*\
  !*** ./src/components/fields/textfield.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactTextareaAutosize = _interopRequireDefault(__webpack_require__(/*! react-textarea-autosize */ "react-textarea-autosize"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var Textfield =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Textfield, _React$Component);

  function Textfield() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Textfield);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Textfield)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputBlur", function (path, e) {
      var onBlur = _this.props.onBlur;

      if (onBlur) {
        onBlur({
          type: 'input',
          value: e.target.value,
          path: path,
          original: e
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputFocus", function (path, e) {
      var onFocus = _this.props.onFocus;

      if (onFocus) {
        onFocus({
          type: 'input',
          value: e.target.value,
          path: path,
          original: e
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Textfield, [{
    key: "render",
    value: function render() {
      var uniqueID = this.props.fid;
      return (0, _jsx2["default"])("div", {
        className: "text-field ".concat(this.props.fieldClass ? this.props.fieldClass : '')
      }, void 0, this.props.maxRows === 1 ? (0, _jsx2["default"])("input", {
        type: "text",
        id: uniqueID,
        "data-type": this.props.type ? this.props.type : 'type1',
        className: "g-input ".concat(this.props.additionalClass ? this.props.additionalClass : ''),
        defaultValue: this.props.defaultValue,
        onBlur: this.inputBlur.bind(this, this.props.path),
        onFocus: this.inputFocus.bind(this, this.props.path),
        placeholder: this.props.placeholder ? this.props.placeholder : '',
        style: this.props.style,
        "data-special-features": this.props.specialFeature,
        "field-type": "input"
      }) : (0, _jsx2["default"])(_reactTextareaAutosize["default"], {
        id: uniqueID,
        "data-type": this.props.type ? this.props.type : 'type1',
        className: "g-input ".concat(this.props.additionalClass ? this.props.additionalClass : ''),
        defaultValue: this.props.defaultValue,
        placeholder: this.props.placeholder ? this.props.placeholder : '',
        onBlur: this.inputBlur.bind(this, this.props.path),
        onFocus: this.inputFocus.bind(this, this.props.path),
        maxRows: this.props.maxRows,
        style: this.props.style,
        "data-special-features": this.props.specialFeature,
        "field-type": "input"
      }));
    }
  }]);
  return Textfield;
}(_react["default"].Component);

Textfield.propTypes = {
  placeholder: _propTypes["default"].string
};
Textfield.defaultProps = {
  placeholder: ''
};
var _default = Textfield;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/fields/toggle.js":
/*!*****************************************!*\
  !*** ./src/components/fields/toggle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Icon = _interopRequireDefault(__webpack_require__(/*! ./Icon */ "./src/components/fields/Icon.js"));

var Toggle =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Toggle, _React$Component);

  function Toggle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Toggle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Toggle).call(this, props));
    _this.state = {
      selectValue: null
    };
    return _this;
  }

  (0, _createClass2["default"])(Toggle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          additionalClass = _this$props.additionalClass,
          offIcon = _this$props.offIcon,
          onIcon = _this$props.onIcon;
      return (0, _jsx2["default"])("button", {
        type: "button",
        className: "jToggle ".concat(additionalClass)
      }, void 0, (0, _jsx2["default"])("span", {
        className: "drag"
      }, void 0, offIcon && (0, _jsx2["default"])(_Icon["default"], {
        icon: offIcon
      }), onIcon && (0, _jsx2["default"])(_Icon["default"], {
        icon: onIcon
      })));
    }
  }]);
  return Toggle;
}(_react["default"].Component);

;
Toggle.propTypes = {
  additionalClass: _propTypes["default"].string
};
Toggle.defaultProps = {
  additionalClass: ''
};
var _default = Toggle;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _user = __webpack_require__(/*! ../actions/user */ "./src/actions/user.js");

var _helpers = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])("ul", {
  className: "main-menu flex nw f-center"
}, void 0, (0, _jsx2["default"])("li", {
  className: "active"
}, void 0, (0, _jsx2["default"])(_reactRouterDom.Link, {
  to: "/resume-templates"
}, void 0, "Resume Templates")), (0, _jsx2["default"])("li", {
  className: ""
}, void 0, (0, _jsx2["default"])(_reactRouterDom.Link, {
  to: "/builder"
}, void 0, "Create Resume")), (0, _jsx2["default"])("li", {
  className: ""
}, void 0, (0, _jsx2["default"])(_reactRouterDom.Link, {
  to: "/cover-letter"
}, void 0, "Create Cover Letter")), (0, _jsx2["default"])("li", {
  className: ""
}, void 0, (0, _jsx2["default"])(_reactRouterDom.Link, {
  to: "/blog"
}, void 0, "Blog")));

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])("li", {
  className: "notification"
}, void 0, (0, _jsx2["default"])("span", {
  className: "bell"
}, void 0, (0, _jsx2["default"])("span", {
  className: "icon"
}, void 0, (0, _jsx2["default"])("i", {
  className: "far fa-bell"
}), (0, _jsx2["default"])("span", {
  className: "number"
}, void 0, "4"))));

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])("i", {
  className: "fas fa-chevron-down"
});

var _ref4 =
/*#__PURE__*/
(0, _jsx2["default"])("li", {}, void 0, (0, _jsx2["default"])(_reactRouterDom.Link, {
  to: "/profile"
}, void 0, "Profile"));

var _ref5 =
/*#__PURE__*/
(0, _jsx2["default"])("li", {}, void 0, (0, _jsx2["default"])(_reactRouterDom.Link, {
  to: "/settings"
}, void 0, "Settings"));

var _ref6 =
/*#__PURE__*/
(0, _jsx2["default"])("a", {}, void 0, "Exit");

var _ref7 =
/*#__PURE__*/
(0, _jsx2["default"])(_react["default"].Fragment, {}, void 0, (0, _jsx2["default"])("li", {
  className: "list-item"
}, void 0, (0, _jsx2["default"])(_reactRouterDom.Link, {
  to: "/login"
}, void 0, (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "person"), (0, _jsx2["default"])("span", {}, void 0, "Sign In"))), (0, _jsx2["default"])("li", {
  className: "list-item"
}, void 0, (0, _jsx2["default"])(_reactRouterDom.Link, {
  to: "/register"
}, void 0, (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "person_add"), (0, _jsx2["default"])("span", {}, void 0, "Sign Up"))));

var _ref8 =
/*#__PURE__*/
(0, _jsx2["default"])("ul", {}, void 0, (0, _jsx2["default"])("li", {}, void 0, (0, _jsx2["default"])("a", {
  target: "_blank",
  href: "https://linkedin.com"
}, void 0, (0, _jsx2["default"])("i", {
  className: "fab fa-linkedin-in"
}))), (0, _jsx2["default"])("li", {}, void 0, (0, _jsx2["default"])("a", {
  target: "_blank",
  href: "https://facebook.com"
}, void 0, (0, _jsx2["default"])("i", {
  className: "fab fa-facebook-f"
}))), (0, _jsx2["default"])("li", {}, void 0, (0, _jsx2["default"])("a", {
  target: "_blank",
  href: "https://twitter.com"
}, void 0, (0, _jsx2["default"])("i", {
  className: "fab fa-twitter"
}))), (0, _jsx2["default"])("li", {}, void 0, (0, _jsx2["default"])("a", {
  target: "_blank",
  href: "https://github.com"
}, void 0, (0, _jsx2["default"])("i", {
  className: "fab fa-github"
}))), (0, _jsx2["default"])("li", {}, void 0, (0, _jsx2["default"])("a", {
  target: "_blank",
  href: "https://pinterest.com"
}, void 0, (0, _jsx2["default"])("i", {
  className: "fab fa-pinterest"
}))));

var Header =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderHeaderByUrl", function () {
      var _this$props = _this.props,
          location = _this$props.location,
          user = _this$props.user;
      var header = null;

      switch (true) {
        case location.pathname.indexOf('/builder') > -1:
          header = (0, _jsx2["default"])("div", {
            className: "app-header"
          }, void 0, (0, _jsx2["default"])("div", {
            className: "fluid-container"
          }, void 0, (0, _jsx2["default"])("div", {
            className: "left-area"
          }, void 0, (0, _jsx2["default"])(_reactRouterDom.Link, {
            to: "/"
          }, void 0, (0, _jsx2["default"])("img", {
            src: __webpack_require__(/*! ../assets/images/logo.png */ "./src/assets/images/logo.png"),
            alt: ""
          }))), (0, _jsx2["default"])("div", {
            className: "right-area"
          }, void 0, _this.renderMainMenu())));
          return header;

        case location.pathname.indexOf('/templates') > -1:
          header = null;
          return header;

        default:
          header = (0, _jsx2["default"])("div", {
            className: "classic"
          }, void 0, (0, _jsx2["default"])("div", {
            className: "top-bar"
          }, void 0, (0, _jsx2["default"])("div", {
            className: "container"
          }, void 0, (0, _jsx2["default"])("div", {
            className: "flex j-space-between h100"
          }, void 0, (0, _jsx2["default"])("div", {
            className: "left-area h100"
          }, void 0, _this.renderTopMenu('left')), (0, _jsx2["default"])("div", {
            className: "right-area h100"
          }, void 0, (0, _jsx2["default"])("nav", {
            className: "h100"
          }, void 0, _this.renderTopMenu('right')))))), (0, _jsx2["default"])("div", {
            className: "middle-bar"
          }, void 0, (0, _jsx2["default"])("div", {
            className: "container"
          }, void 0, (0, _jsx2["default"])("div", {
            className: "flex j-space-between a-center"
          }, void 0, (0, _jsx2["default"])("div", {
            className: "left-area"
          }, void 0, (0, _jsx2["default"])(_reactRouterDom.Link, {
            to: "/"
          }, void 0, (0, _jsx2["default"])("img", {
            src: __webpack_require__(/*! ../assets/images/logo.png */ "./src/assets/images/logo.png"),
            alt: ""
          }))), (0, _jsx2["default"])("div", {
            className: "right-area"
          }, void 0, (0, _jsx2["default"])("nav", {}, void 0, _this.renderMainMenu()))))));
      }

      return header;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderMainMenu", function () {
      return _ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTopMenu", function (type) {
      var user = _this.props.user;

      if (type === 'right') {
        return (0, _jsx2["default"])("ul", {}, void 0, user.login == true && (0, _jsx2["default"])(_react["default"].Fragment, {}, void 0, _ref2, (0, _jsx2["default"])("li", {
          className: "profile",
          onClick: _this.topMenuClicked
        }, void 0, (0, _jsx2["default"])("span", {
          className: "profile-container"
        }, void 0, (0, _jsx2["default"])("span", {
          className: "profile-image"
        }, void 0, (0, _jsx2["default"])("img", {
          src: __webpack_require__(/*! ../assets/images/arda.jpeg */ "./src/assets/images/arda.jpeg"),
          alt: ""
        })), (0, _jsx2["default"])("span", {
          className: "profile-name"
        }, void 0, (0, _jsx2["default"])("strong", {
          className: "fs-5"
        }, void 0, (0, _helpers.UpperCase)(user.userCredentials.displayName)), _ref3)), (0, _jsx2["default"])("ul", {
          className: "opened-list"
        }, void 0, _ref4, _ref5, (0, _jsx2["default"])("li", {
          onClick: _this.props.onUserLogout.bind((0, _assertThisInitialized2["default"])(_this))
        }, void 0, _ref6)))), user.login == false && _ref7);
      } else if (type === 'left') {
        return _ref8;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "topMenuClicked", function (e) {
      var li = e.target.closest('li');

      if (li.className.indexOf('active') > -1) {
        li.classList.remove('active');
      } else {
        li.classList.add('active');
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Header, [{
    key: "render",
    value: function render() {
      return (0, _jsx2["default"])("header", {}, void 0, this.renderHeaderByUrl());
    }
  }]);
  return Header;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = {
  onUserLogout: _user.userLogout
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactRouterDom.withRouter)(Header));

exports["default"] = _default;

/***/ }),

/***/ "./src/components/resumeTemplates.js":
/*!*******************************************!*\
  !*** ./src/components/resumeTemplates.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _fields = __webpack_require__(/*! ./fields */ "./src/components/fields/index.js");

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "box-item rating"
}, void 0, (0, _jsx2["default"])("span", {
  className: "low"
}, void 0, "Rating"), (0, _jsx2["default"])("div", {
  className: "star-group flex a-center"
}, void 0, (0, _jsx2["default"])("i", {
  className: "material-icons selected"
}, void 0, "star"), (0, _jsx2["default"])("i", {
  className: "material-icons selected"
}, void 0, "star"), (0, _jsx2["default"])("i", {
  className: "material-icons selected"
}, void 0, "star"), (0, _jsx2["default"])("i", {
  className: "material-icons selected"
}, void 0, "star"), (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "star"), (0, _jsx2["default"])("small", {}, void 0, "(4 Selected)")));

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])(_fields.AdvertiseBox, {
  width: 300,
  height: 250
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "content"
}, void 0, (0, _jsx2["default"])("div", {
  className: "applied-filters"
}), (0, _jsx2["default"])("div", {
  className: "templates"
}, void 0, (0, _jsx2["default"])("div", {
  className: "template-item"
})));

var ResumeTemplates =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ResumeTemplates, _React$Component);

  function ResumeTemplates() {
    (0, _classCallCheck2["default"])(this, ResumeTemplates);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ResumeTemplates).apply(this, arguments));
  }

  (0, _createClass2["default"])(ResumeTemplates, [{
    key: "componentDidMount",
    value: function componentDidMount() {// axios.post('/api/template/create-pdf', {
      //   pdfID: 255, content: {
      //     name: 'Arda', price1: 543, price2: 164, receiptId: '1235', themeProps: {
      //       colors: {
      //         mainColor: '#fff',
      //         sidebarColor: '#63c9bb'
      //       }
      //     }
      //   }
      // }).then(res => {
      //   const anchorTag = document.createElement('a');
      //   anchorTag.href = res.data;
      //   anchorTag.download = "My PDF File.pdf";
      //   anchorTag.click();
      //   // const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      //   // saveAs(pdfBlob, 'arda.pdf');
      // });
    }
  }, {
    key: "render",
    value: function render() {
      return (0, _jsx2["default"])("div", {
        className: "resume-templates",
        "padding-vertical": "true"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "container"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "resume-templates-container"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "content-container"
      }, void 0, (0, _jsx2["default"])("aside", {
        className: "left-area"
      }, void 0, (0, _jsx2["default"])(_fields.Card, {
        additionalClass: "filter-box",
        title: {
          icon: {
            type: 'material-icons',
            text: 'filter_list'
          },
          text: 'Filter Templates'
        }
      }, void 0, (0, _jsx2["default"])("div", {
        className: "box-content"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "box-item"
      }, void 0, (0, _jsx2["default"])(_fields.Select, {
        label: "Category",
        placeholder: "Priority" // onChange={this.selectChangeHandler.bind(this)}
        // value={activeTask.priority}
        ,
        options: [{
          value: "Simple",
          label: "Simple"
        }, {
          value: "Professional",
          label: "Professional"
        }, {
          value: "Modern",
          label: "Modern"
        }, {
          value: "Creative",
          label: "Creative"
        }]
      })), (0, _jsx2["default"])("div", {
        className: "box-item"
      }, void 0, (0, _jsx2["default"])(_fields.Select, {
        label: "Profession",
        placeholder: "" // onChange={this.selectChangeHandler.bind(this)}
        // value={activeTask.priority}
        ,
        options: [{
          value: "computer-science",
          label: "Computer Science"
        }, {
          value: "engineer",
          label: "Engineer"
        }, {
          value: "pilot",
          label: "Pilot"
        }]
      })), _ref)), _ref2), _ref3))));
    }
  }]);
  return ResumeTemplates;
}(_react["default"].Component);

var _default = ResumeTemplates;
exports["default"] = _default;

/***/ }),

/***/ "./src/components/sign/login.js":
/*!**************************************!*\
  !*** ./src/components/sign/login.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _app = _interopRequireDefault(__webpack_require__(/*! firebase/app */ "firebase/app"));

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _fbConfig = _interopRequireDefault(__webpack_require__(/*! ../../../fbConfig */ "./fbConfig.js"));

var _fields = __webpack_require__(/*! ../fields */ "./src/components/fields/index.js");

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])(_reactHelmet["default"], {}, void 0, (0, _jsx2["default"])("title", {}, void 0, "Sign In"));

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "title"
}, void 0, (0, _jsx2["default"])("span", {}, void 0, "Welcome to"), (0, _jsx2["default"])("h1", {}, void 0, "Jobstent"));

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])("label", {
  htmlFor: "username"
}, void 0, "Email Address");

var _ref4 =
/*#__PURE__*/
(0, _jsx2["default"])("label", {
  htmlFor: "password"
}, void 0, "Password");

var _ref5 =
/*#__PURE__*/
(0, _jsx2["default"])("span", {
  className: "reset-password"
}, void 0, "Reset Password");

var _ref6 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "or-area"
}, void 0, (0, _jsx2["default"])("em", {}), (0, _jsx2["default"])("span", {}, void 0, "OR"), (0, _jsx2["default"])("em", {}));

var _ref7 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "logged-area"
}, void 0, "You have alreaddy logged in");

var Login =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Login, _React$Component);

  function Login(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Login);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Login).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "signInWithCredentials", function () {
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;

      _fbConfig["default"].auth().signInWithEmailAndPassword(email, password).then(function (firebaseUser) {
        console.log("USER LOGGED, #12");
      })["catch"](function (err) {
        console.log("ERROR HAPPENED: SignInWithCredentials", err);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "signInWithGoogle", function () {
      var base_provider = new _app["default"].auth.GoogleAuthProvider();

      _fbConfig["default"].auth().signInWithPopup(base_provider).then(function (res) {
        console.log("RESPONSE: ", res);
      })["catch"](function (err) {
        console.log("ERROR ON GOOGLE LOGIN", err);
      });
    });
    _this.state = {
      email: "",
      password: ""
    };
    return _this;
  }

  (0, _createClass2["default"])(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var user = this.props.user;
      console.log("PROPS:", user);
      return (0, _jsx2["default"])("div", {
        className: "login-page"
      }, void 0, _ref, (0, _jsx2["default"])("div", {
        className: "center-page"
      }, void 0, !user.login && (0, _jsx2["default"])("div", {
        className: "login-area"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "left-side"
      }, void 0, (0, _jsx2["default"])("img", {
        src: __webpack_require__(/*! ../../assets/images/loginpic.jpeg */ "./src/assets/images/loginpic.jpeg"),
        alt: ""
      })), (0, _jsx2["default"])("div", {
        className: "right-side"
      }, void 0, _ref2, (0, _jsx2["default"])("form", {}, void 0, (0, _jsx2["default"])("div", {
        className: "form-group"
      }, void 0, _ref3, (0, _jsx2["default"])("input", {
        type: "email",
        id: "username",
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        }
      })), (0, _jsx2["default"])("div", {
        className: "form-group"
      }, void 0, _ref4, (0, _jsx2["default"])("input", {
        type: "password",
        id: "password",
        value: this.state.password,
        onChange: function onChange(e) {
          return _this2.setState({
            password: e.target.value
          });
        }
      }), _ref5), (0, _jsx2["default"])(_fields.Button, {
        type: "button",
        shadow: "true",
        text: "Sign In",
        size: "large",
        dataType: "midnight",
        click: this.signInWithCredentials
      }), _ref6, (0, _jsx2["default"])("div", {
        className: "social-buttons"
      }, void 0, (0, _jsx2["default"])("img", {
        src: __webpack_require__(/*! ../../assets/svgs/google.svg */ "./src/assets/svgs/google.svg"),
        onClick: this.signInWithGoogle
      }), (0, _jsx2["default"])("img", {
        src: __webpack_require__(/*! ../../assets/svgs/linkedin.svg */ "./src/assets/svgs/linkedin.svg")
      }))))), user.login && _ref7));
    }
  }]);
  return Login;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = {};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);

exports["default"] = _default;

/***/ }),

/***/ "./src/components/sign/register.js":
/*!*****************************************!*\
  !*** ./src/components/sign/register.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _app = _interopRequireDefault(__webpack_require__(/*! firebase/app */ "firebase/app"));

__webpack_require__(/*! firebase/auth */ "firebase/auth");

__webpack_require__(/*! firebase/database */ "firebase/database");

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _fields = __webpack_require__(/*! ../fields */ "./src/components/fields/index.js");

var _fbConfig = _interopRequireDefault(__webpack_require__(/*! ../../../fbConfig */ "./fbConfig.js"));

var _user = __webpack_require__(/*! ../../actions/user */ "./src/actions/user.js");

var _ref =
/*#__PURE__*/
(0, _jsx2["default"])(_reactHelmet["default"], {}, void 0, (0, _jsx2["default"])("title", {}, void 0, "Jobstent Register"));

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "title"
}, void 0, (0, _jsx2["default"])("span", {}, void 0, "Welcome to"), (0, _jsx2["default"])("h1", {}, void 0, "Jobstent"));

var _ref3 =
/*#__PURE__*/
(0, _jsx2["default"])("label", {
  htmlFor: "name"
}, void 0, "Name");

var _ref4 =
/*#__PURE__*/
(0, _jsx2["default"])("label", {
  htmlFor: "surname"
}, void 0, "Surname");

var _ref5 =
/*#__PURE__*/
(0, _jsx2["default"])("label", {
  htmlFor: "username"
}, void 0, "Email Address");

var _ref6 =
/*#__PURE__*/
(0, _jsx2["default"])("label", {
  htmlFor: "password"
}, void 0, "Password");

var _ref7 =
/*#__PURE__*/
(0, _jsx2["default"])("label", {
  htmlFor: "password"
}, void 0, "Password (Confirm)");

var _ref8 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "or-area"
}, void 0, (0, _jsx2["default"])("em", {}), (0, _jsx2["default"])("span", {}, void 0, "OR"), (0, _jsx2["default"])("em", {}));

var Register =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Register, _React$Component);

  function Register(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Register);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Register).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "signUpWithEmailAndPassword", function () {
      var onUserSignIn = _this.props.onUserSignIn;
      var _this$state = _this.state,
          name = _this$state.name,
          surname = _this$state.surname,
          email = _this$state.email,
          password = _this$state.password;

      _app["default"].auth().createUserWithEmailAndPassword(email, password).then(function (authUser) {
        authUser.user.updateProfile({
          displayName: name + ' ' + surname
        }).then(function (res) {
          console.log("SUCCESS::", res);
        }, function (error) {
          console.log("ERROR:", error);
        });
      }, function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          console.error(error);
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "signUpWithGoogle", function () {
      var base_provider = new _app["default"].auth.GoogleAuthProvider();

      _fbConfig["default"].auth().signInWithPopup(base_provider).then(function (res) {
        console.log("RESPONSE: ", res);
      })["catch"](function (err) {
        console.log("ERROR ON GOOGLE LOGIN", err);
      });
    });
    _this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirm: ''
    };
    return _this;
  }

  (0, _createClass2["default"])(Register, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return (0, _jsx2["default"])("div", {
        className: "login-page register-page"
      }, void 0, _ref, (0, _jsx2["default"])("div", {
        className: "center-page"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "login-area"
      }, void 0, (0, _jsx2["default"])("div", {
        className: "left-side"
      }, void 0, (0, _jsx2["default"])("img", {
        src: __webpack_require__(/*! ../../assets/images/loginpic.jpeg */ "./src/assets/images/loginpic.jpeg"),
        alt: ""
      })), (0, _jsx2["default"])("div", {
        className: "right-side"
      }, void 0, _ref2, (0, _jsx2["default"])("form", {}, void 0, (0, _jsx2["default"])("div", {
        className: "form-group group"
      }, void 0, (0, _jsx2["default"])("div", {}, void 0, _ref3, (0, _jsx2["default"])("input", {
        type: "text",
        id: "name",
        value: this.state.name,
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        }
      })), (0, _jsx2["default"])("div", {}, void 0, _ref4, (0, _jsx2["default"])("input", {
        type: "text",
        id: "surname",
        value: this.state.surname,
        onChange: function onChange(e) {
          return _this2.setState({
            surname: e.target.value
          });
        }
      }))), (0, _jsx2["default"])("div", {
        className: "form-group"
      }, void 0, _ref5, (0, _jsx2["default"])("input", {
        type: "email",
        id: "username",
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        }
      })), (0, _jsx2["default"])("div", {
        className: "form-group"
      }, void 0, _ref6, (0, _jsx2["default"])("input", {
        type: "password",
        id: "password",
        value: this.state.password,
        onChange: function onChange(e) {
          return _this2.setState({
            password: e.target.value
          });
        }
      })), (0, _jsx2["default"])("div", {
        className: "form-group"
      }, void 0, _ref7, (0, _jsx2["default"])("input", {
        type: "password",
        id: "password",
        value: this.state.passwordConfirm,
        onChange: function onChange(e) {
          return _this2.setState({
            passwordConfirm: e.target.value
          });
        }
      })), (0, _jsx2["default"])(_fields.Button, {
        type: "button",
        shadow: "true",
        text: "Sign Up",
        size: "large",
        dataType: "midnight",
        click: this.signUpWithEmailAndPassword
      }), _ref8, (0, _jsx2["default"])("div", {
        className: "social-buttons"
      }, void 0, (0, _jsx2["default"])("img", {
        src: __webpack_require__(/*! ../../assets/svgs/google.svg */ "./src/assets/svgs/google.svg"),
        onClick: this.signInWithGoogle
      }), (0, _jsx2["default"])("img", {
        src: __webpack_require__(/*! ../../assets/svgs/linkedin.svg */ "./src/assets/svgs/linkedin.svg")
      })))))));
    }
  }]);
  return Register;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = {
  onUserSignIn: _user.userSignIn
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Register);

exports["default"] = _default;

/***/ }),

/***/ "./src/components/templates.js":
/*!*************************************!*\
  !*** ./src/components/templates.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _template = _interopRequireDefault(__webpack_require__(/*! ./builder/template */ "./src/components/builder/template.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var templateActions = _interopRequireWildcard(__webpack_require__(/*! ../actions/template */ "./src/actions/template.js"));

var _ref2 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  "class": "loading"
}, void 0, "loading..");

var Templates =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Templates, _React$Component);

  function Templates(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Templates);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Templates).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getResume",
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var _this$props, templateID, userID, onFetchResume, res;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, templateID = _this$props.templateID, userID = _this$props.userID, onFetchResume = _this$props.onFetchResume;
              console.log(_this.props);
              _context.next = 4;
              return onFetchResume(templateID, userID);

            case 4:
              res = _context.sent;

              if (res) {
                _this.setState({
                  isLoad: true
                });
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    _this.state = {
      isLoad: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Templates, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getResume();
    }
  }, {
    key: "render",
    value: function render() {
      var isLoad = this.state.isLoad;
      if (!isLoad) return _ref2;
      var template = this.props.template;
      return (0, _jsx2["default"])("div", {
        className: "templates renderPDF"
      }, void 0, (0, _jsx2["default"])(_template["default"], {
        pages: template.pages,
        layouts: template.layouts,
        fields: template.items,
        renderPDF: true
      }));
    }
  }]);
  return Templates;
}(_react["default"].Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    template: state.template
  };
};

var mapDispatchToProps = {
  onFetchResume: templateActions.fetchResume
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Templates);

exports["default"] = _default;

/***/ }),

/***/ "./src/constants/ActionTypes.js":
/*!**************************************!*\
  !*** ./src/constants/ActionTypes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RIGHT_PANEL_MENU_SWITCH = exports.RIGHT_PANEL_INIT = exports.LEFT_PANEL_MENU_HANDLER = exports.DRAG_HAPPENED = exports.SET_ACTIVE_FIELD = exports.SET_ACTIVE_LAYOUT = exports.ACTIVE_PATH_CHANGE = exports.ADD_NEW_LAYOUT = exports.ADD_NEW_PAGE = exports.FIELD_IMAGE_ADD = exports.FIELD_ITEM_UPDATE = exports.FIELD_ITEM_ADD = exports.FIELD_CLICK = exports.FIELD_CHANGE = exports.FIELD_ITEM_CREATED = exports.FETCH_TEMPLATE = exports.INIT_TEMPLATE = exports.USER_LOGOUT = exports.USER_SIGN_IN = exports.INIT_USER = exports.CHECK_USER_CONNECTION = void 0;

/**
 * USER CONSTANTS
 */
var CHECK_USER_CONNECTION = "check_user_connection";
exports.CHECK_USER_CONNECTION = CHECK_USER_CONNECTION;
var INIT_USER = "init_user";
exports.INIT_USER = INIT_USER;
var USER_SIGN_IN = "user_sign_in";
exports.USER_SIGN_IN = USER_SIGN_IN;
var USER_LOGOUT = "user_logout";
/**
 * Template Constants
 */

exports.USER_LOGOUT = USER_LOGOUT;
var INIT_TEMPLATE = "init_template";
exports.INIT_TEMPLATE = INIT_TEMPLATE;
var FETCH_TEMPLATE = "fetch_template";
/**
 * Template Constants
 */

exports.FETCH_TEMPLATE = FETCH_TEMPLATE;
var FIELD_ITEM_CREATED = "field_item_created";
exports.FIELD_ITEM_CREATED = FIELD_ITEM_CREATED;
var FIELD_CHANGE = "field_change";
exports.FIELD_CHANGE = FIELD_CHANGE;
var FIELD_CLICK = "field_click";
exports.FIELD_CLICK = FIELD_CLICK;
var FIELD_ITEM_ADD = "field_item_add";
exports.FIELD_ITEM_ADD = FIELD_ITEM_ADD;
var FIELD_ITEM_UPDATE = "field_item_update";
exports.FIELD_ITEM_UPDATE = FIELD_ITEM_UPDATE;
var FIELD_IMAGE_ADD = "field_image_add";
exports.FIELD_IMAGE_ADD = FIELD_IMAGE_ADD;
var ADD_NEW_PAGE = "add_new_page";
exports.ADD_NEW_PAGE = ADD_NEW_PAGE;
var ADD_NEW_LAYOUT = "add_new_layout";
/**
 * BUILDER CONSTANTS
  */

exports.ADD_NEW_LAYOUT = ADD_NEW_LAYOUT;
var ACTIVE_PATH_CHANGE = "active_path_change";
exports.ACTIVE_PATH_CHANGE = ACTIVE_PATH_CHANGE;
var SET_ACTIVE_LAYOUT = "set_active_layout";
exports.SET_ACTIVE_LAYOUT = SET_ACTIVE_LAYOUT;
var SET_ACTIVE_FIELD = "set_active_field";
/**
 * DRAG
*/

exports.SET_ACTIVE_FIELD = SET_ACTIVE_FIELD;
var DRAG_HAPPENED = "drag_happened";
/**
 * LeftPanel
*/

exports.DRAG_HAPPENED = DRAG_HAPPENED;
var LEFT_PANEL_MENU_HANDLER = "left_panel_menu_handler";
/**
 * RightPanel
*/

exports.LEFT_PANEL_MENU_HANDLER = LEFT_PANEL_MENU_HANDLER;
var RIGHT_PANEL_INIT = "right_panel_init";
exports.RIGHT_PANEL_INIT = RIGHT_PANEL_INIT;
var RIGHT_PANEL_MENU_SWITCH = "right_panel_menu_switch";
exports.RIGHT_PANEL_MENU_SWITCH = RIGHT_PANEL_MENU_SWITCH;

/***/ }),

/***/ "./src/constants/Fields.js":
/*!*********************************!*\
  !*** ./src/constants/Fields.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.special_fields = exports.basic_fields = void 0;
var basic_fields = [{
  type: 'jbt_text',
  text: 'Text',
  defaultValue: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet accusamus amet dolorum. Debitis eaque quos vero vel quam obcaecati corrupti, excepturi, quis porro sequi, voluptate nostrum officia hic amet.',
  defaultStyle: {
    width: 450,
    position: 'absolute'
  }
}, {
  type: 'jbt_icon',
  text: 'Icon',
  defaultValue: '',
  defaultStyle: {}
}, {
  type: 'jbt_image',
  text: 'Image',
  defaultValue: '',
  defaultStyle: {}
}, {
  type: 'jbt_date',
  text: 'Date'
}, {
  type: 'jbt_address',
  text: 'Address'
}, {
  type: 'jbt_circle',
  text: 'Circle'
}, {
  type: 'jbt_line',
  text: 'Line'
}, {
  type: 'jbt_shape',
  text: 'Shape'
}, {
  type: 'jbt_layout',
  text: 'Layout'
}];
exports.basic_fields = basic_fields;
var special_fields = [{
  type: 'jbt_profile_photo',
  text: 'Profile Photo'
}, {
  type: 'jbt_personal_informations',
  text: 'Personal Informations'
}, {
  type: 'jbt_contact_informations',
  text: 'Contact Informations'
}, {
  type: 'jbt_professional_summary',
  text: 'Professional Summary'
}, {
  type: 'jbt_work_experience',
  text: 'Work Experience'
}, {
  type: 'jbt_education',
  text: 'Education'
}, {
  type: 'jbt_skills',
  text: 'Skills'
}];
exports.special_fields = special_fields;

/***/ }),

/***/ "./src/constants/iconConsts.js":
/*!*************************************!*\
  !*** ./src/constants/iconConsts.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var icon = [{
  type: 'material-icons',
  text: '3d_rotation'
}, {
  type: 'material-icons',
  text: 'ac_unit'
}, {
  type: 'material-icons',
  text: 'access_alarm'
}, {
  type: 'material-icons',
  text: 'access_alarms'
}, {
  type: 'material-icons',
  text: 'access_time'
}, {
  type: 'material-icons',
  text: 'accessibility'
}, {
  type: 'material-icons',
  text: 'accessible'
}, {
  type: 'material-icons',
  text: 'account_balance'
}, {
  type: 'material-icons',
  text: 'account_balance_wallet'
}, {
  type: 'material-icons',
  text: 'account_box'
}, {
  type: 'material-icons',
  text: 'account_circle'
}, {
  type: 'material-icons',
  text: 'adb'
}, {
  type: 'material-icons',
  text: 'add'
}, {
  type: 'material-icons',
  text: 'add_a_photo'
}, {
  type: 'material-icons',
  text: 'add_alarm'
}, {
  type: 'material-icons',
  text: 'add_alert'
}, {
  type: 'material-icons',
  text: 'add_box'
}, {
  type: 'material-icons',
  text: 'add_circle'
}, {
  type: 'material-icons',
  text: 'add_circle_outline'
}, {
  type: 'material-icons',
  text: 'add_location'
}, {
  type: 'material-icons',
  text: 'add_shopping_cart'
}, {
  type: 'material-icons',
  text: 'add_to_photos'
}, {
  type: 'material-icons',
  text: 'add_to_queue'
}, {
  type: 'material-icons',
  text: 'adjust'
}, {
  type: 'material-icons',
  text: 'airline_seat_flat'
}, {
  type: 'material-icons',
  text: 'airline_seat_flat_angled'
}, {
  type: 'material-icons',
  text: 'airline_seat_individual_suite'
}, {
  type: 'material-icons',
  text: 'airline_seat_legroom_extra'
}, {
  type: 'material-icons',
  text: 'airline_seat_legroom_normal'
}, {
  type: 'material-icons',
  text: 'airline_seat_legroom_reduced'
}, {
  type: 'material-icons',
  text: 'airline_seat_recline_extra'
}, {
  type: 'material-icons',
  text: 'airline_seat_recline_normal'
}, {
  type: 'material-icons',
  text: 'airplanemode_active'
}, {
  type: 'material-icons',
  text: 'airplanemode_inactive'
}, {
  type: 'material-icons',
  text: 'airplay'
}, {
  type: 'material-icons',
  text: 'airport_shuttle'
}, {
  type: 'material-icons',
  text: 'alarm'
}, {
  type: 'material-icons',
  text: 'alarm_add'
}, {
  type: 'material-icons',
  text: 'alarm_off'
}, {
  type: 'material-icons',
  text: 'alarm_on'
}, {
  type: 'material-icons',
  text: 'album'
}, {
  type: 'material-icons',
  text: 'all_inclusive'
}, {
  type: 'material-icons',
  text: 'all_out'
}, {
  type: 'material-icons',
  text: 'android'
}, {
  type: 'material-icons',
  text: 'announcement'
}, {
  type: 'material-icons',
  text: 'apps'
}, {
  type: 'material-icons',
  text: 'archive'
}, {
  type: 'material-icons',
  text: 'arrow_back'
}, {
  type: 'material-icons',
  text: 'arrow_downward'
}, {
  type: 'material-icons',
  text: 'arrow_drop_down'
}, {
  type: 'material-icons',
  text: 'arrow_drop_down_circle'
}, {
  type: 'material-icons',
  text: 'arrow_drop_up'
}, {
  type: 'material-icons',
  text: 'arrow_forward'
}, {
  type: 'material-icons',
  text: 'arrow_upward'
}, {
  type: 'material-icons',
  text: 'art_track'
}, {
  type: 'material-icons',
  text: 'aspect_ratio'
}, {
  type: 'material-icons',
  text: 'assessment'
}, {
  type: 'material-icons',
  text: 'assignment'
}, {
  type: 'material-icons',
  text: 'assignment_ind'
}, {
  type: 'material-icons',
  text: 'assignment_late'
}, {
  type: 'material-icons',
  text: 'assignment_return'
}, {
  type: 'material-icons',
  text: 'assignment_returned'
}, {
  type: 'material-icons',
  text: 'assignment_turned_in'
}, {
  type: 'material-icons',
  text: 'assistant'
}, {
  type: 'material-icons',
  text: 'assistant_photo'
}, {
  type: 'material-icons',
  text: 'attach_file'
}, {
  type: 'material-icons',
  text: 'attach_money'
}, {
  type: 'material-icons',
  text: 'attachment'
}, {
  type: 'material-icons',
  text: 'audiotrack'
}, {
  type: 'material-icons',
  text: 'autorenew'
}, {
  type: 'material-icons',
  text: 'av_timer'
}, {
  type: 'material-icons',
  text: 'backspace'
}, {
  type: 'material-icons',
  text: 'backup'
}, {
  type: 'material-icons',
  text: 'battery_alert'
}, {
  type: 'material-icons',
  text: 'battery_charging_full'
}, {
  type: 'material-icons',
  text: 'battery_full'
}, {
  type: 'material-icons',
  text: 'battery_std'
}, {
  type: 'material-icons',
  text: 'battery_unknown'
}, {
  type: 'material-icons',
  text: 'beach_access'
}, {
  type: 'material-icons',
  text: 'beenhere'
}, {
  type: 'material-icons',
  text: 'block'
}, {
  type: 'material-icons',
  text: 'bluetooth'
}, {
  type: 'material-icons',
  text: 'bluetooth_audio'
}, {
  type: 'material-icons',
  text: 'bluetooth_connected'
}, {
  type: 'material-icons',
  text: 'bluetooth_disabled'
}, {
  type: 'material-icons',
  text: 'bluetooth_searching'
}, {
  type: 'material-icons',
  text: 'blur_circular'
}, {
  type: 'material-icons',
  text: 'blur_linear'
}, {
  type: 'material-icons',
  text: 'blur_off'
}, {
  type: 'material-icons',
  text: 'blur_on'
}, {
  type: 'material-icons',
  text: 'book'
}, {
  type: 'material-icons',
  text: 'bookmark'
}, {
  type: 'material-icons',
  text: 'bookmark_border'
}, {
  type: 'material-icons',
  text: 'border_all'
}, {
  type: 'material-icons',
  text: 'border_bottom'
}, {
  type: 'material-icons',
  text: 'border_clear'
}, {
  type: 'material-icons',
  text: 'border_color'
}, {
  type: 'material-icons',
  text: 'border_horizontal'
}, {
  type: 'material-icons',
  text: 'border_inner'
}, {
  type: 'material-icons',
  text: 'border_left'
}, {
  type: 'material-icons',
  text: 'border_outer'
}, {
  type: 'material-icons',
  text: 'border_right'
}, {
  type: 'material-icons',
  text: 'border_style'
}, {
  type: 'material-icons',
  text: 'border_top'
}, {
  type: 'material-icons',
  text: 'border_vertical'
}, {
  type: 'material-icons',
  text: 'branding_watermark'
}, {
  type: 'material-icons',
  text: 'brightness_1'
}, {
  type: 'material-icons',
  text: 'brightness_2'
}, {
  type: 'material-icons',
  text: 'brightness_3'
}, {
  type: 'material-icons',
  text: 'brightness_4'
}, {
  type: 'material-icons',
  text: 'brightness_5'
}, {
  type: 'material-icons',
  text: 'brightness_6'
}, {
  type: 'material-icons',
  text: 'brightness_7'
}, {
  type: 'material-icons',
  text: 'brightness_auto'
}, {
  type: 'material-icons',
  text: 'brightness_high'
}, {
  type: 'material-icons',
  text: 'brightness_low'
}, {
  type: 'material-icons',
  text: 'brightness_medium'
}, {
  type: 'material-icons',
  text: 'broken_image'
}, {
  type: 'material-icons',
  text: 'brush'
}, {
  type: 'material-icons',
  text: 'bubble_chart'
}, {
  type: 'material-icons',
  text: 'bug_report'
}, {
  type: 'material-icons',
  text: 'build'
}, {
  type: 'material-icons',
  text: 'burst_mode'
}, {
  type: 'material-icons',
  text: 'business'
}, {
  type: 'material-icons',
  text: 'business_center'
}, {
  type: 'material-icons',
  text: 'cached'
}, {
  type: 'material-icons',
  text: 'cake'
}, {
  type: 'material-icons',
  text: 'call'
}, {
  type: 'material-icons',
  text: 'call_end'
}, {
  type: 'material-icons',
  text: 'call_made'
}, {
  type: 'material-icons',
  text: 'call_merge'
}, {
  type: 'material-icons',
  text: 'call_missed'
}, {
  type: 'material-icons',
  text: 'call_missed_outgoing'
}, {
  type: 'material-icons',
  text: 'call_received'
}, {
  type: 'material-icons',
  text: 'call_split'
}, {
  type: 'material-icons',
  text: 'call_to_action'
}, {
  type: 'material-icons',
  text: 'camera'
}, {
  type: 'material-icons',
  text: 'camera_alt'
}, {
  type: 'material-icons',
  text: 'camera_enhance'
}, {
  type: 'material-icons',
  text: 'camera_front'
}, {
  type: 'material-icons',
  text: 'camera_rear'
}, {
  type: 'material-icons',
  text: 'camera_roll'
}, {
  type: 'material-icons',
  text: 'cancel'
}, {
  type: 'material-icons',
  text: 'card_giftcard'
}, {
  type: 'material-icons',
  text: 'card_membership'
}, {
  type: 'material-icons',
  text: 'card_travel'
}, {
  type: 'material-icons',
  text: 'casino'
}, {
  type: 'material-icons',
  text: 'cast'
}, {
  type: 'material-icons',
  text: 'cast_connected'
}, {
  type: 'material-icons',
  text: 'center_focus_strong'
}, {
  type: 'material-icons',
  text: 'center_focus_weak'
}, {
  type: 'material-icons',
  text: 'change_history'
}, {
  type: 'material-icons',
  text: 'chat'
}, {
  type: 'material-icons',
  text: 'chat_bubble'
}, {
  type: 'material-icons',
  text: 'chat_bubble_outline'
}, {
  type: 'material-icons',
  text: 'check'
}, {
  type: 'material-icons',
  text: 'check_box'
}, {
  type: 'material-icons',
  text: 'check_box_outline_blank'
}, {
  type: 'material-icons',
  text: 'check_circle'
}, {
  type: 'material-icons',
  text: 'chevron_left'
}, {
  type: 'material-icons',
  text: 'chevron_right'
}, {
  type: 'material-icons',
  text: 'child_care'
}, {
  type: 'material-icons',
  text: 'child_friendly'
}, {
  type: 'material-icons',
  text: 'chrome_reader_mode'
}, {
  type: 'material-icons',
  text: 'class'
}, {
  type: 'material-icons',
  text: 'clear'
}, {
  type: 'material-icons',
  text: 'clear_all'
}, {
  type: 'material-icons',
  text: 'close'
}, {
  type: 'material-icons',
  text: 'closed_caption'
}, {
  type: 'material-icons',
  text: 'cloud'
}, {
  type: 'material-icons',
  text: 'cloud_circle'
}, {
  type: 'material-icons',
  text: 'cloud_done'
}, {
  type: 'material-icons',
  text: 'cloud_download'
}, {
  type: 'material-icons',
  text: 'cloud_off'
}, {
  type: 'material-icons',
  text: 'cloud_queue'
}, {
  type: 'material-icons',
  text: 'cloud_upload'
}, {
  type: 'material-icons',
  text: 'code'
}, {
  type: 'material-icons',
  text: 'collections'
}, {
  type: 'material-icons',
  text: 'collections_bookmark'
}, {
  type: 'material-icons',
  text: 'color_lens'
}, {
  type: 'material-icons',
  text: 'colorize'
}, {
  type: 'material-icons',
  text: 'comment'
}, {
  type: 'material-icons',
  text: 'compare'
}, {
  type: 'material-icons',
  text: 'compare_arrows'
}, {
  type: 'material-icons',
  text: 'computer'
}, {
  type: 'material-icons',
  text: 'confirmation_number'
}, {
  type: 'material-icons',
  text: 'contact_mail'
}, {
  type: 'material-icons',
  text: 'contact_phone'
}, {
  type: 'material-icons',
  text: 'contacts'
}, {
  type: 'material-icons',
  text: 'content_copy'
}, {
  type: 'material-icons',
  text: 'content_cut'
}, {
  type: 'material-icons',
  text: 'content_paste'
}, {
  type: 'material-icons',
  text: 'control_point'
}, {
  type: 'material-icons',
  text: 'control_point_duplicate'
}, {
  type: 'material-icons',
  text: 'copyright'
}, {
  type: 'material-icons',
  text: 'create'
}, {
  type: 'material-icons',
  text: 'create_new_folder'
}, {
  type: 'material-icons',
  text: 'credit_card'
}, {
  type: 'material-icons',
  text: 'crop'
}, {
  type: 'material-icons',
  text: 'crop_16_9'
}, {
  type: 'material-icons',
  text: 'crop_3_2'
}, {
  type: 'material-icons',
  text: 'crop_5_4'
}, {
  type: 'material-icons',
  text: 'crop_7_5'
}, {
  type: 'material-icons',
  text: 'crop_din'
}, {
  type: 'material-icons',
  text: 'crop_free'
}, {
  type: 'material-icons',
  text: 'crop_landscape'
}, {
  type: 'material-icons',
  text: 'crop_original'
}, {
  type: 'material-icons',
  text: 'crop_portrait'
}, {
  type: 'material-icons',
  text: 'crop_rotate'
}, {
  type: 'material-icons',
  text: 'crop_square'
}, {
  type: 'material-icons',
  text: 'dashboard'
}, {
  type: 'material-icons',
  text: 'data_usage'
}, {
  type: 'material-icons',
  text: 'date_range'
}, {
  type: 'material-icons',
  text: 'dehaze'
}, {
  type: 'material-icons',
  text: 'delete'
}, {
  type: 'material-icons',
  text: 'delete_forever'
}, {
  type: 'material-icons',
  text: 'delete_sweep'
}, {
  type: 'material-icons',
  text: 'description'
}, {
  type: 'material-icons',
  text: 'desktop_mac'
}, {
  type: 'material-icons',
  text: 'desktop_windows'
}, {
  type: 'material-icons',
  text: 'details'
}, {
  type: 'material-icons',
  text: 'developer_board'
}, {
  type: 'material-icons',
  text: 'developer_mode'
}, {
  type: 'material-icons',
  text: 'device_hub'
}, {
  type: 'material-icons',
  text: 'devices'
}, {
  type: 'material-icons',
  text: 'devices_other'
}, {
  type: 'material-icons',
  text: 'dialer_sip'
}, {
  type: 'material-icons',
  text: 'dialpad'
}, {
  type: 'material-icons',
  text: 'directions'
}, {
  type: 'material-icons',
  text: 'directions_bike'
}, {
  type: 'material-icons',
  text: 'directions_boat'
}, {
  type: 'material-icons',
  text: 'directions_bus'
}, {
  type: 'material-icons',
  text: 'directions_car'
}, {
  type: 'material-icons',
  text: 'directions_railway'
}, {
  type: 'material-icons',
  text: 'directions_run'
}, {
  type: 'material-icons',
  text: 'directions_subway'
}, {
  type: 'material-icons',
  text: 'directions_transit'
}, {
  type: 'material-icons',
  text: 'directions_walk'
}, {
  type: 'material-icons',
  text: 'disc_full'
}, {
  type: 'material-icons',
  text: 'dns'
}, {
  type: 'material-icons',
  text: 'do_not_disturb'
}, {
  type: 'material-icons',
  text: 'do_not_disturb_alt'
}, {
  type: 'material-icons',
  text: 'do_not_disturb_off'
}, {
  type: 'material-icons',
  text: 'do_not_disturb_on'
}, {
  type: 'material-icons',
  text: 'dock'
}, {
  type: 'material-icons',
  text: 'domain'
}, {
  type: 'material-icons',
  text: 'done'
}, {
  type: 'material-icons',
  text: 'done_all'
}, {
  type: 'material-icons',
  text: 'donut_large'
}, {
  type: 'material-icons',
  text: 'donut_small'
}, {
  type: 'material-icons',
  text: 'drafts'
}, {
  type: 'material-icons',
  text: 'drag_handle'
}, {
  type: 'material-icons',
  text: 'drive_eta'
}, {
  type: 'material-icons',
  text: 'dvr'
}, {
  type: 'material-icons',
  text: 'edit'
}, {
  type: 'material-icons',
  text: 'edit_location'
}, {
  type: 'material-icons',
  text: 'eject'
}, {
  type: 'material-icons',
  text: 'email'
}, {
  type: 'material-icons',
  text: 'enhanced_encryption'
}, {
  type: 'material-icons',
  text: 'equalizer'
}, {
  type: 'material-icons',
  text: 'error'
}, {
  type: 'material-icons',
  text: 'error_outline'
}, {
  type: 'material-icons',
  text: 'euro_symbol'
}, {
  type: 'material-icons',
  text: 'ev_station'
}, {
  type: 'material-icons',
  text: 'event'
}, {
  type: 'material-icons',
  text: 'event_available'
}, {
  type: 'material-icons',
  text: 'event_busy'
}, {
  type: 'material-icons',
  text: 'event_note'
}, {
  type: 'material-icons',
  text: 'event_seat'
}, {
  type: 'material-icons',
  text: 'exit_to_app'
}, {
  type: 'material-icons',
  text: 'expand_less'
}, {
  type: 'material-icons',
  text: 'expand_more'
}, {
  type: 'material-icons',
  text: 'explicit'
}, {
  type: 'material-icons',
  text: 'explore'
}, {
  type: 'material-icons',
  text: 'exposure'
}, {
  type: 'material-icons',
  text: 'exposure_neg_1'
}, {
  type: 'material-icons',
  text: 'exposure_neg_2'
}, {
  type: 'material-icons',
  text: 'exposure_plus_1'
}, {
  type: 'material-icons',
  text: 'exposure_plus_2'
}, {
  type: 'material-icons',
  text: 'exposure_zero'
}, {
  type: 'material-icons',
  text: 'extension'
}, {
  type: 'material-icons',
  text: 'face'
}, {
  type: 'material-icons',
  text: 'fast_forward'
}, {
  type: 'material-icons',
  text: 'fast_rewind'
}, {
  type: 'material-icons',
  text: 'favorite'
}, {
  type: 'material-icons',
  text: 'favorite_border'
}, {
  type: 'material-icons',
  text: 'featured_play_list'
}, {
  type: 'material-icons',
  text: 'featured_video'
}, {
  type: 'material-icons',
  text: 'feedback'
}, {
  type: 'material-icons',
  text: 'fiber_dvr'
}, {
  type: 'material-icons',
  text: 'fiber_manual_record'
}, {
  type: 'material-icons',
  text: 'fiber_new'
}, {
  type: 'material-icons',
  text: 'fiber_pin'
}, {
  type: 'material-icons',
  text: 'fiber_smart_record'
}, {
  type: 'material-icons',
  text: 'file_download'
}, {
  type: 'material-icons',
  text: 'file_upload'
}, {
  type: 'material-icons',
  text: 'filter'
}, {
  type: 'material-icons',
  text: 'filter_1'
}, {
  type: 'material-icons',
  text: 'filter_2'
}, {
  type: 'material-icons',
  text: 'filter_3'
}, {
  type: 'material-icons',
  text: 'filter_4'
}, {
  type: 'material-icons',
  text: 'filter_5'
}, {
  type: 'material-icons',
  text: 'filter_6'
}, {
  type: 'material-icons',
  text: 'filter_7'
}, {
  type: 'material-icons',
  text: 'filter_8'
}, {
  type: 'material-icons',
  text: 'filter_9'
}, {
  type: 'material-icons',
  text: 'filter_9_plus'
}, {
  type: 'material-icons',
  text: 'filter_b_and_w'
}, {
  type: 'material-icons',
  text: 'filter_center_focus'
}, {
  type: 'material-icons',
  text: 'filter_drama'
}, {
  type: 'material-icons',
  text: 'filter_frames'
}, {
  type: 'material-icons',
  text: 'filter_hdr'
}, {
  type: 'material-icons',
  text: 'filter_list'
}, {
  type: 'material-icons',
  text: 'filter_none'
}, {
  type: 'material-icons',
  text: 'filter_tilt_shift'
}, {
  type: 'material-icons',
  text: 'filter_vintage'
}, {
  type: 'material-icons',
  text: 'find_in_page'
}, {
  type: 'material-icons',
  text: 'find_replace'
}, {
  type: 'material-icons',
  text: 'fingerprint'
}, {
  type: 'material-icons',
  text: 'first_page'
}, {
  type: 'material-icons',
  text: 'fitness_center'
}, {
  type: 'material-icons',
  text: 'flag'
}, {
  type: 'material-icons',
  text: 'flare'
}, {
  type: 'material-icons',
  text: 'flash_auto'
}, {
  type: 'material-icons',
  text: 'flash_off'
}, {
  type: 'material-icons',
  text: 'flash_on'
}, {
  type: 'material-icons',
  text: 'flight'
}, {
  type: 'material-icons',
  text: 'flight_land'
}, {
  type: 'material-icons',
  text: 'flight_takeoff'
}, {
  type: 'material-icons',
  text: 'flip'
}, {
  type: 'material-icons',
  text: 'flip_to_back'
}, {
  type: 'material-icons',
  text: 'flip_to_front'
}, {
  type: 'material-icons',
  text: 'folder'
}, {
  type: 'material-icons',
  text: 'folder_open'
}, {
  type: 'material-icons',
  text: 'folder_shared'
}, {
  type: 'material-icons',
  text: 'folder_special'
}, {
  type: 'material-icons',
  text: 'font_download'
}, {
  type: 'material-icons',
  text: 'format_align_center'
}, {
  type: 'material-icons',
  text: 'format_align_justify'
}, {
  type: 'material-icons',
  text: 'format_align_left'
}, {
  type: 'material-icons',
  text: 'format_align_right'
}, {
  type: 'material-icons',
  text: 'format_bold'
}, {
  type: 'material-icons',
  text: 'format_clear'
}, {
  type: 'material-icons',
  text: 'format_color_fill'
}, {
  type: 'material-icons',
  text: 'format_color_reset'
}, {
  type: 'material-icons',
  text: 'format_color_text'
}, {
  type: 'material-icons',
  text: 'format_indent_decrease'
}, {
  type: 'material-icons',
  text: 'format_indent_increase'
}, {
  type: 'material-icons',
  text: 'format_italic'
}, {
  type: 'material-icons',
  text: 'format_line_spacing'
}, {
  type: 'material-icons',
  text: 'format_list_bulleted'
}, {
  type: 'material-icons',
  text: 'format_list_numbered'
}, {
  type: 'material-icons',
  text: 'format_paint'
}, {
  type: 'material-icons',
  text: 'format_quote'
}, {
  type: 'material-icons',
  text: 'format_shapes'
}, {
  type: 'material-icons',
  text: 'format_size'
}, {
  type: 'material-icons',
  text: 'format_strikethrough'
}, {
  type: 'material-icons',
  text: 'format_textdirection_l_to_r'
}, {
  type: 'material-icons',
  text: 'format_textdirection_r_to_l'
}, {
  type: 'material-icons',
  text: 'format_underlined'
}, {
  type: 'material-icons',
  text: 'forum'
}, {
  type: 'material-icons',
  text: 'forward'
}, {
  type: 'material-icons',
  text: 'forward_10'
}, {
  type: 'material-icons',
  text: 'forward_30'
}, {
  type: 'material-icons',
  text: 'forward_5'
}, {
  type: 'material-icons',
  text: 'free_breakfast'
}, {
  type: 'material-icons',
  text: 'fullscreen'
}, {
  type: 'material-icons',
  text: 'fullscreen_exit'
}, {
  type: 'material-icons',
  text: 'functions'
}, {
  type: 'material-icons',
  text: 'g_translate'
}, {
  type: 'material-icons',
  text: 'gamepad'
}, {
  type: 'material-icons',
  text: 'games'
}, {
  type: 'material-icons',
  text: 'gavel'
}, {
  type: 'material-icons',
  text: 'gesture'
}, {
  type: 'material-icons',
  text: 'get_app'
}, {
  type: 'material-icons',
  text: 'gif'
}, {
  type: 'material-icons',
  text: 'golf_course'
}, {
  type: 'material-icons',
  text: 'gps_fixed'
}, {
  type: 'material-icons',
  text: 'gps_not_fixed'
}, {
  type: 'material-icons',
  text: 'gps_off'
}, {
  type: 'material-icons',
  text: 'grade'
}, {
  type: 'material-icons',
  text: 'gradient'
}, {
  type: 'material-icons',
  text: 'grain'
}, {
  type: 'material-icons',
  text: 'graphic_eq'
}, {
  type: 'material-icons',
  text: 'grid_off'
}, {
  type: 'material-icons',
  text: 'grid_on'
}, {
  type: 'material-icons',
  text: 'group'
}, {
  type: 'material-icons',
  text: 'group_add'
}, {
  type: 'material-icons',
  text: 'group_work'
}, {
  type: 'material-icons',
  text: 'hd'
}, {
  type: 'material-icons',
  text: 'hdr_off'
}, {
  type: 'material-icons',
  text: 'hdr_on'
}, {
  type: 'material-icons',
  text: 'hdr_strong'
}, {
  type: 'material-icons',
  text: 'hdr_weak'
}, {
  type: 'material-icons',
  text: 'headset'
}, {
  type: 'material-icons',
  text: 'headset_mic'
}, {
  type: 'material-icons',
  text: 'healing'
}, {
  type: 'material-icons',
  text: 'hearing'
}, {
  type: 'material-icons',
  text: 'help'
}, {
  type: 'material-icons',
  text: 'help_outline'
}, {
  type: 'material-icons',
  text: 'high_quality'
}, {
  type: 'material-icons',
  text: 'highlight'
}, {
  type: 'material-icons',
  text: 'highlight_off'
}, {
  type: 'material-icons',
  text: 'history'
}, {
  type: 'material-icons',
  text: 'home'
}, {
  type: 'material-icons',
  text: 'hot_tub'
}, {
  type: 'material-icons',
  text: 'hotel'
}, {
  type: 'material-icons',
  text: 'hourglass_empty'
}, {
  type: 'material-icons',
  text: 'hourglass_full'
}, {
  type: 'material-icons',
  text: 'http'
}, {
  type: 'material-icons',
  text: 'https'
}, {
  type: 'material-icons',
  text: 'image'
}, {
  type: 'material-icons',
  text: 'image_aspect_ratio'
}, {
  type: 'material-icons',
  text: 'import_contacts'
}, {
  type: 'material-icons',
  text: 'import_export'
}, {
  type: 'material-icons',
  text: 'important_devices'
}, {
  type: 'material-icons',
  text: 'inbox'
}, {
  type: 'material-icons',
  text: 'indeterminate_check_box'
}, {
  type: 'material-icons',
  text: 'info'
}, {
  type: 'material-icons',
  text: 'info_outline'
}, {
  type: 'material-icons',
  text: 'input'
}, {
  type: 'material-icons',
  text: 'insert_chart'
}, {
  type: 'material-icons',
  text: 'insert_comment'
}, {
  type: 'material-icons',
  text: 'insert_drive_file'
}, {
  type: 'material-icons',
  text: 'insert_emoticon'
}, {
  type: 'material-icons',
  text: 'insert_invitation'
}, {
  type: 'material-icons',
  text: 'insert_link'
}, {
  type: 'material-icons',
  text: 'insert_photo'
}, {
  type: 'material-icons',
  text: 'invert_colors'
}, {
  type: 'material-icons',
  text: 'invert_colors_off'
}, {
  type: 'material-icons',
  text: 'iso'
}, {
  type: 'material-icons',
  text: 'keyboard'
}, {
  type: 'material-icons',
  text: 'keyboard_arrow_down'
}, {
  type: 'material-icons',
  text: 'keyboard_arrow_left'
}, {
  type: 'material-icons',
  text: 'keyboard_arrow_right'
}, {
  type: 'material-icons',
  text: 'keyboard_arrow_up'
}, {
  type: 'material-icons',
  text: 'keyboard_backspace'
}, {
  type: 'material-icons',
  text: 'keyboard_capslock'
}, {
  type: 'material-icons',
  text: 'keyboard_hide'
}, {
  type: 'material-icons',
  text: 'keyboard_return'
}, {
  type: 'material-icons',
  text: 'keyboard_tab'
}, {
  type: 'material-icons',
  text: 'keyboard_voice'
}, {
  type: 'material-icons',
  text: 'kitchen'
}, {
  type: 'material-icons',
  text: 'label'
}, {
  type: 'material-icons',
  text: 'label_outline'
}, {
  type: 'material-icons',
  text: 'landscape'
}, {
  type: 'material-icons',
  text: 'language'
}, {
  type: 'material-icons',
  text: 'laptop'
}, {
  type: 'material-icons',
  text: 'laptop_chromebook'
}, {
  type: 'material-icons',
  text: 'laptop_mac'
}, {
  type: 'material-icons',
  text: 'laptop_windows'
}, {
  type: 'material-icons',
  text: 'last_page'
}, {
  type: 'material-icons',
  text: 'launch'
}, {
  type: 'material-icons',
  text: 'layers'
}, {
  type: 'material-icons',
  text: 'layers_clear'
}, {
  type: 'material-icons',
  text: 'leak_add'
}, {
  type: 'material-icons',
  text: 'leak_remove'
}, {
  type: 'material-icons',
  text: 'lens'
}, {
  type: 'material-icons',
  text: 'library_add'
}, {
  type: 'material-icons',
  text: 'library_books'
}, {
  type: 'material-icons',
  text: 'library_music'
}, {
  type: 'material-icons',
  text: 'lightbulb_outline'
}, {
  type: 'material-icons',
  text: 'line_style'
}, {
  type: 'material-icons',
  text: 'line_weight'
}, {
  type: 'material-icons',
  text: 'linear_scale'
}, {
  type: 'material-icons',
  text: 'link'
}, {
  type: 'material-icons',
  text: 'linked_camera'
}, {
  type: 'material-icons',
  text: 'list'
}, {
  type: 'material-icons',
  text: 'live_help'
}, {
  type: 'material-icons',
  text: 'live_tv'
}, {
  type: 'material-icons',
  text: 'local_activity'
}, {
  type: 'material-icons',
  text: 'local_airport'
}, {
  type: 'material-icons',
  text: 'local_atm'
}, {
  type: 'material-icons',
  text: 'local_bar'
}, {
  type: 'material-icons',
  text: 'local_cafe'
}, {
  type: 'material-icons',
  text: 'local_car_wash'
}, {
  type: 'material-icons',
  text: 'local_convenience_store'
}, {
  type: 'material-icons',
  text: 'local_dining'
}, {
  type: 'material-icons',
  text: 'local_drink'
}, {
  type: 'material-icons',
  text: 'local_florist'
}, {
  type: 'material-icons',
  text: 'local_gas_station'
}, {
  type: 'material-icons',
  text: 'local_grocery_store'
}, {
  type: 'material-icons',
  text: 'local_hospital'
}, {
  type: 'material-icons',
  text: 'local_hotel'
}, {
  type: 'material-icons',
  text: 'local_laundry_service'
}, {
  type: 'material-icons',
  text: 'local_library'
}, {
  type: 'material-icons',
  text: 'local_mall'
}, {
  type: 'material-icons',
  text: 'local_movies'
}, {
  type: 'material-icons',
  text: 'local_offer'
}, {
  type: 'material-icons',
  text: 'local_parking'
}, {
  type: 'material-icons',
  text: 'local_pharmacy'
}, {
  type: 'material-icons',
  text: 'local_phone'
}, {
  type: 'material-icons',
  text: 'local_pizza'
}, {
  type: 'material-icons',
  text: 'local_play'
}, {
  type: 'material-icons',
  text: 'local_post_office'
}, {
  type: 'material-icons',
  text: 'local_printshop'
}, {
  type: 'material-icons',
  text: 'local_see'
}, {
  type: 'material-icons',
  text: 'local_shipping'
}, {
  type: 'material-icons',
  text: 'local_taxi'
}, {
  type: 'material-icons',
  text: 'location_city'
}, {
  type: 'material-icons',
  text: 'location_disabled'
}, {
  type: 'material-icons',
  text: 'location_off'
}, {
  type: 'material-icons',
  text: 'location_on'
}, {
  type: 'material-icons',
  text: 'location_searching'
}, {
  type: 'material-icons',
  text: 'lock'
}, {
  type: 'material-icons',
  text: 'lock_open'
}, {
  type: 'material-icons',
  text: 'lock_outline'
}, {
  type: 'material-icons',
  text: 'looks'
}, {
  type: 'material-icons',
  text: 'looks_3'
}, {
  type: 'material-icons',
  text: 'looks_4'
}, {
  type: 'material-icons',
  text: 'looks_5'
}, {
  type: 'material-icons',
  text: 'looks_6'
}, {
  type: 'material-icons',
  text: 'looks_one'
}, {
  type: 'material-icons',
  text: 'looks_two'
}, {
  type: 'material-icons',
  text: 'loop'
}, {
  type: 'material-icons',
  text: 'loupe'
}, {
  type: 'material-icons',
  text: 'low_priority'
}, {
  type: 'material-icons',
  text: 'loyalty'
}, {
  type: 'material-icons',
  text: 'mail'
}, {
  type: 'material-icons',
  text: 'mail_outline'
}, {
  type: 'material-icons',
  text: 'map'
}, {
  type: 'material-icons',
  text: 'markunread'
}, {
  type: 'material-icons',
  text: 'markunread_mailbox'
}, {
  type: 'material-icons',
  text: 'memory'
}, {
  type: 'material-icons',
  text: 'menu'
}, {
  type: 'material-icons',
  text: 'merge_type'
}, {
  type: 'material-icons',
  text: 'message'
}, {
  type: 'material-icons',
  text: 'mic'
}, {
  type: 'material-icons',
  text: 'mic_none'
}, {
  type: 'material-icons',
  text: 'mic_off'
}, {
  type: 'material-icons',
  text: 'mms'
}, {
  type: 'material-icons',
  text: 'mode_comment'
}, {
  type: 'material-icons',
  text: 'mode_edit'
}, {
  type: 'material-icons',
  text: 'monetization_on'
}, {
  type: 'material-icons',
  text: 'money_off'
}, {
  type: 'material-icons',
  text: 'monochrome_photos'
}, {
  type: 'material-icons',
  text: 'mood'
}, {
  type: 'material-icons',
  text: 'mood_bad'
}, {
  type: 'material-icons',
  text: 'more'
}, {
  type: 'material-icons',
  text: 'more_horiz'
}, {
  type: 'material-icons',
  text: 'more_vert'
}, {
  type: 'material-icons',
  text: 'motorcycle'
}, {
  type: 'material-icons',
  text: 'mouse'
}, {
  type: 'material-icons',
  text: 'move_to_inbox'
}, {
  type: 'material-icons',
  text: 'movie'
}, {
  type: 'material-icons',
  text: 'movie_creation'
}, {
  type: 'material-icons',
  text: 'movie_filter'
}, {
  type: 'material-icons',
  text: 'multiline_chart'
}, {
  type: 'material-icons',
  text: 'music_note'
}, {
  type: 'material-icons',
  text: 'music_video'
}, {
  type: 'material-icons',
  text: 'my_location'
}, {
  type: 'material-icons',
  text: 'nature'
}, {
  type: 'material-icons',
  text: 'nature_people'
}, {
  type: 'material-icons',
  text: 'navigate_before'
}, {
  type: 'material-icons',
  text: 'navigate_next'
}, {
  type: 'material-icons',
  text: 'navigation'
}, {
  type: 'material-icons',
  text: 'near_me'
}, {
  type: 'material-icons',
  text: 'network_cell'
}, {
  type: 'material-icons',
  text: 'network_check'
}, {
  type: 'material-icons',
  text: 'network_locked'
}, {
  type: 'material-icons',
  text: 'network_wifi'
}, {
  type: 'material-icons',
  text: 'new_releases'
}, {
  type: 'material-icons',
  text: 'next_week'
}, {
  type: 'material-icons',
  text: 'nfc'
}, {
  type: 'material-icons',
  text: 'no_encryption'
}, {
  type: 'material-icons',
  text: 'no_sim'
}, {
  type: 'material-icons',
  text: 'not_interested'
}, {
  type: 'material-icons',
  text: 'note'
}, {
  type: 'material-icons',
  text: 'note_add'
}, {
  type: 'material-icons',
  text: 'notifications'
}, {
  type: 'material-icons',
  text: 'notifications_active'
}, {
  type: 'material-icons',
  text: 'notifications_none'
}, {
  type: 'material-icons',
  text: 'notifications_off'
}, {
  type: 'material-icons',
  text: 'notifications_paused'
}, {
  type: 'material-icons',
  text: 'offline_pin'
}, {
  type: 'material-icons',
  text: 'ondemand_video'
}, {
  type: 'material-icons',
  text: 'opacity'
}, {
  type: 'material-icons',
  text: 'open_in_browser'
}, {
  type: 'material-icons',
  text: 'open_in_new'
}, {
  type: 'material-icons',
  text: 'open_with'
}, {
  type: 'material-icons',
  text: 'pages'
}, {
  type: 'material-icons',
  text: 'pageview'
}, {
  type: 'material-icons',
  text: 'palette'
}, {
  type: 'material-icons',
  text: 'pan_tool'
}, {
  type: 'material-icons',
  text: 'panorama'
}, {
  type: 'material-icons',
  text: 'panorama_fish_eye'
}, {
  type: 'material-icons',
  text: 'panorama_horizontal'
}, {
  type: 'material-icons',
  text: 'panorama_vertical'
}, {
  type: 'material-icons',
  text: 'panorama_wide_angle'
}, {
  type: 'material-icons',
  text: 'party_mode'
}, {
  type: 'material-icons',
  text: 'pause'
}, {
  type: 'material-icons',
  text: 'pause_circle_filled'
}, {
  type: 'material-icons',
  text: 'pause_circle_outline'
}, {
  type: 'material-icons',
  text: 'payment'
}, {
  type: 'material-icons',
  text: 'people'
}, {
  type: 'material-icons',
  text: 'people_outline'
}, {
  type: 'material-icons',
  text: 'perm_camera_mic'
}, {
  type: 'material-icons',
  text: 'perm_contact_calendar'
}, {
  type: 'material-icons',
  text: 'perm_data_setting'
}, {
  type: 'material-icons',
  text: 'perm_device_information'
}, {
  type: 'material-icons',
  text: 'perm_identity'
}, {
  type: 'material-icons',
  text: 'perm_media'
}, {
  type: 'material-icons',
  text: 'perm_phone_msg'
}, {
  type: 'material-icons',
  text: 'perm_scan_wifi'
}, {
  type: 'material-icons',
  text: 'person'
}, {
  type: 'material-icons',
  text: 'person_add'
}, {
  type: 'material-icons',
  text: 'person_outline'
}, {
  type: 'material-icons',
  text: 'person_pin'
}, {
  type: 'material-icons',
  text: 'person_pin_circle'
}, {
  type: 'material-icons',
  text: 'personal_video'
}, {
  type: 'material-icons',
  text: 'pets'
}, {
  type: 'material-icons',
  text: 'phone'
}, {
  type: 'material-icons',
  text: 'phone_android'
}, {
  type: 'material-icons',
  text: 'phone_bluetooth_speaker'
}, {
  type: 'material-icons',
  text: 'phone_forwarded'
}, {
  type: 'material-icons',
  text: 'phone_in_talk'
}, {
  type: 'material-icons',
  text: 'phone_iphone'
}, {
  type: 'material-icons',
  text: 'phone_locked'
}, {
  type: 'material-icons',
  text: 'phone_missed'
}, {
  type: 'material-icons',
  text: 'phone_paused'
}, {
  type: 'material-icons',
  text: 'phonelink'
}, {
  type: 'material-icons',
  text: 'phonelink_erase'
}, {
  type: 'material-icons',
  text: 'phonelink_lock'
}, {
  type: 'material-icons',
  text: 'phonelink_off'
}, {
  type: 'material-icons',
  text: 'phonelink_ring'
}, {
  type: 'material-icons',
  text: 'phonelink_setup'
}, {
  type: 'material-icons',
  text: 'photo'
}, {
  type: 'material-icons',
  text: 'photo_album'
}, {
  type: 'material-icons',
  text: 'photo_camera'
}, {
  type: 'material-icons',
  text: 'photo_filter'
}, {
  type: 'material-icons',
  text: 'photo_library'
}, {
  type: 'material-icons',
  text: 'photo_size_select_actual'
}, {
  type: 'material-icons',
  text: 'photo_size_select_large'
}, {
  type: 'material-icons',
  text: 'photo_size_select_small'
}, {
  type: 'material-icons',
  text: 'picture_as_pdf'
}, {
  type: 'material-icons',
  text: 'picture_in_picture'
}, {
  type: 'material-icons',
  text: 'picture_in_picture_alt'
}, {
  type: 'material-icons',
  text: 'pie_chart'
}, {
  type: 'material-icons',
  text: 'pie_chart_outlined'
}, {
  type: 'material-icons',
  text: 'pin_drop'
}, {
  type: 'material-icons',
  text: 'place'
}, {
  type: 'material-icons',
  text: 'play_arrow'
}, {
  type: 'material-icons',
  text: 'play_circle_filled'
}, {
  type: 'material-icons',
  text: 'play_circle_outline'
}, {
  type: 'material-icons',
  text: 'play_for_work'
}, {
  type: 'material-icons',
  text: 'playlist_add'
}, {
  type: 'material-icons',
  text: 'playlist_add_check'
}, {
  type: 'material-icons',
  text: 'playlist_play'
}, {
  type: 'material-icons',
  text: 'plus_one'
}, {
  type: 'material-icons',
  text: 'poll'
}, {
  type: 'material-icons',
  text: 'polymer'
}, {
  type: 'material-icons',
  text: 'pool'
}, {
  type: 'material-icons',
  text: 'portable_wifi_off'
}, {
  type: 'material-icons',
  text: 'portrait'
}, {
  type: 'material-icons',
  text: 'power'
}, {
  type: 'material-icons',
  text: 'power_input'
}, {
  type: 'material-icons',
  text: 'power_settings_new'
}, {
  type: 'material-icons',
  text: 'pregnant_woman'
}, {
  type: 'material-icons',
  text: 'present_to_all'
}, {
  type: 'material-icons',
  text: 'print'
}, {
  type: 'material-icons',
  text: 'priority_high'
}, {
  type: 'material-icons',
  text: 'public'
}, {
  type: 'material-icons',
  text: 'publish'
}, {
  type: 'material-icons',
  text: 'query_builder'
}, {
  type: 'material-icons',
  text: 'question_answer'
}, {
  type: 'material-icons',
  text: 'queue'
}, {
  type: 'material-icons',
  text: 'queue_music'
}, {
  type: 'material-icons',
  text: 'queue_play_next'
}, {
  type: 'material-icons',
  text: 'radio'
}, {
  type: 'material-icons',
  text: 'radio_button_checked'
}, {
  type: 'material-icons',
  text: 'radio_button_unchecked'
}, {
  type: 'material-icons',
  text: 'rate_review'
}, {
  type: 'material-icons',
  text: 'receipt'
}, {
  type: 'material-icons',
  text: 'recent_actors'
}, {
  type: 'material-icons',
  text: 'record_voice_over'
}, {
  type: 'material-icons',
  text: 'redeem'
}, {
  type: 'material-icons',
  text: 'redo'
}, {
  type: 'material-icons',
  text: 'refresh'
}, {
  type: 'material-icons',
  text: 'remove'
}, {
  type: 'material-icons',
  text: 'remove_circle'
}, {
  type: 'material-icons',
  text: 'remove_circle_outline'
}, {
  type: 'material-icons',
  text: 'remove_from_queue'
}, {
  type: 'material-icons',
  text: 'remove_red_eye'
}, {
  type: 'material-icons',
  text: 'remove_shopping_cart'
}, {
  type: 'material-icons',
  text: 'reorder'
}, {
  type: 'material-icons',
  text: 'repeat'
}, {
  type: 'material-icons',
  text: 'repeat_one'
}, {
  type: 'material-icons',
  text: 'replay'
}, {
  type: 'material-icons',
  text: 'replay_10'
}, {
  type: 'material-icons',
  text: 'replay_30'
}, {
  type: 'material-icons',
  text: 'replay_5'
}, {
  type: 'material-icons',
  text: 'reply'
}, {
  type: 'material-icons',
  text: 'reply_all'
}, {
  type: 'material-icons',
  text: 'report'
}, {
  type: 'material-icons',
  text: 'report_problem'
}, {
  type: 'material-icons',
  text: 'restaurant'
}, {
  type: 'material-icons',
  text: 'restaurant_menu'
}, {
  type: 'material-icons',
  text: 'restore'
}, {
  type: 'material-icons',
  text: 'restore_page'
}, {
  type: 'material-icons',
  text: 'ring_volume'
}, {
  type: 'material-icons',
  text: 'room'
}, {
  type: 'material-icons',
  text: 'room_service'
}, {
  type: 'material-icons',
  text: 'rotate_90_degrees_ccw'
}, {
  type: 'material-icons',
  text: 'rotate_left'
}, {
  type: 'material-icons',
  text: 'rotate_right'
}, {
  type: 'material-icons',
  text: 'rounded_corner'
}, {
  type: 'material-icons',
  text: 'router'
}, {
  type: 'material-icons',
  text: 'rowing'
}, {
  type: 'material-icons',
  text: 'rss_feed'
}, {
  type: 'material-icons',
  text: 'rv_hookup'
}, {
  type: 'material-icons',
  text: 'satellite'
}, {
  type: 'material-icons',
  text: 'save'
}, {
  type: 'material-icons',
  text: 'scanner'
}, {
  type: 'material-icons',
  text: 'schedule'
}, {
  type: 'material-icons',
  text: 'school'
}, {
  type: 'material-icons',
  text: 'screen_lock_landscape'
}, {
  type: 'material-icons',
  text: 'screen_lock_portrait'
}, {
  type: 'material-icons',
  text: 'screen_lock_rotation'
}, {
  type: 'material-icons',
  text: 'screen_rotation'
}, {
  type: 'material-icons',
  text: 'screen_share'
}, {
  type: 'material-icons',
  text: 'sd_card'
}, {
  type: 'material-icons',
  text: 'sd_storage'
}, {
  type: 'material-icons',
  text: 'search'
}, {
  type: 'material-icons',
  text: 'security'
}, {
  type: 'material-icons',
  text: 'select_all'
}, {
  type: 'material-icons',
  text: 'send'
}, {
  type: 'material-icons',
  text: 'sentiment_dissatisfied'
}, {
  type: 'material-icons',
  text: 'sentiment_neutral'
}, {
  type: 'material-icons',
  text: 'sentiment_satisfied'
}, {
  type: 'material-icons',
  text: 'sentiment_very_dissatisfied'
}, {
  type: 'material-icons',
  text: 'sentiment_very_satisfied'
}, {
  type: 'material-icons',
  text: 'settings'
}, {
  type: 'material-icons',
  text: 'settings_applications'
}, {
  type: 'material-icons',
  text: 'settings_backup_restore'
}, {
  type: 'material-icons',
  text: 'settings_bluetooth'
}, {
  type: 'material-icons',
  text: 'settings_brightness'
}, {
  type: 'material-icons',
  text: 'settings_cell'
}, {
  type: 'material-icons',
  text: 'settings_ethernet'
}, {
  type: 'material-icons',
  text: 'settings_input_antenna'
}, {
  type: 'material-icons',
  text: 'settings_input_component'
}, {
  type: 'material-icons',
  text: 'settings_input_composite'
}, {
  type: 'material-icons',
  text: 'settings_input_hdmi'
}, {
  type: 'material-icons',
  text: 'settings_input_svideo'
}, {
  type: 'material-icons',
  text: 'settings_overscan'
}, {
  type: 'material-icons',
  text: 'settings_phone'
}, {
  type: 'material-icons',
  text: 'settings_power'
}, {
  type: 'material-icons',
  text: 'settings_remote'
}, {
  type: 'material-icons',
  text: 'settings_system_daydream'
}, {
  type: 'material-icons',
  text: 'settings_voice'
}, {
  type: 'material-icons',
  text: 'share'
}, {
  type: 'material-icons',
  text: 'shop'
}, {
  type: 'material-icons',
  text: 'shop_two'
}, {
  type: 'material-icons',
  text: 'shopping_basket'
}, {
  type: 'material-icons',
  text: 'shopping_cart'
}, {
  type: 'material-icons',
  text: 'short_text'
}, {
  type: 'material-icons',
  text: 'show_chart'
}, {
  type: 'material-icons',
  text: 'shuffle'
}, {
  type: 'material-icons',
  text: 'signal_cellular_4_bar'
}, {
  type: 'material-icons',
  text: 'signal_cellular_connected_no_internet_4_bar'
}, {
  type: 'material-icons',
  text: 'signal_cellular_no_sim'
}, {
  type: 'material-icons',
  text: 'signal_cellular_null'
}, {
  type: 'material-icons',
  text: 'signal_cellular_off'
}, {
  type: 'material-icons',
  text: 'signal_wifi_4_bar'
}, {
  type: 'material-icons',
  text: 'signal_wifi_4_bar_lock'
}, {
  type: 'material-icons',
  text: 'signal_wifi_off'
}, {
  type: 'material-icons',
  text: 'sim_card'
}, {
  type: 'material-icons',
  text: 'sim_card_alert'
}, {
  type: 'material-icons',
  text: 'skip_next'
}, {
  type: 'material-icons',
  text: 'skip_previous'
}, {
  type: 'material-icons',
  text: 'slideshow'
}, {
  type: 'material-icons',
  text: 'slow_motion_video'
}, {
  type: 'material-icons',
  text: 'smartphone'
}, {
  type: 'material-icons',
  text: 'smoke_free'
}, {
  type: 'material-icons',
  text: 'smoking_rooms'
}, {
  type: 'material-icons',
  text: 'sms'
}, {
  type: 'material-icons',
  text: 'sms_failed'
}, {
  type: 'material-icons',
  text: 'snooze'
}, {
  type: 'material-icons',
  text: 'sort'
}, {
  type: 'material-icons',
  text: 'sort_by_alpha'
}, {
  type: 'material-icons',
  text: 'spa'
}, {
  type: 'material-icons',
  text: 'space_bar'
}, {
  type: 'material-icons',
  text: 'speaker'
}, {
  type: 'material-icons',
  text: 'speaker_group'
}, {
  type: 'material-icons',
  text: 'speaker_notes'
}, {
  type: 'material-icons',
  text: 'speaker_notes_off'
}, {
  type: 'material-icons',
  text: 'speaker_phone'
}, {
  type: 'material-icons',
  text: 'spellcheck'
}, {
  type: 'material-icons',
  text: 'star'
}, {
  type: 'material-icons',
  text: 'star_border'
}, {
  type: 'material-icons',
  text: 'star_half'
}, {
  type: 'material-icons',
  text: 'stars'
}, {
  type: 'material-icons',
  text: 'stay_current_landscape'
}, {
  type: 'material-icons',
  text: 'stay_current_portrait'
}, {
  type: 'material-icons',
  text: 'stay_primary_landscape'
}, {
  type: 'material-icons',
  text: 'stay_primary_portrait'
}, {
  type: 'material-icons',
  text: 'stop'
}, {
  type: 'material-icons',
  text: 'stop_screen_share'
}, {
  type: 'material-icons',
  text: 'storage'
}, {
  type: 'material-icons',
  text: 'store'
}, {
  type: 'material-icons',
  text: 'store_mall_directory'
}, {
  type: 'material-icons',
  text: 'straighten'
}, {
  type: 'material-icons',
  text: 'streetview'
}, {
  type: 'material-icons',
  text: 'strikethrough_s'
}, {
  type: 'material-icons',
  text: 'style'
}, {
  type: 'material-icons',
  text: 'subdirectory_arrow_left'
}, {
  type: 'material-icons',
  text: 'subdirectory_arrow_right'
}, {
  type: 'material-icons',
  text: 'subject'
}, {
  type: 'material-icons',
  text: 'subscriptions'
}, {
  type: 'material-icons',
  text: 'subtitles'
}, {
  type: 'material-icons',
  text: 'subway'
}, {
  type: 'material-icons',
  text: 'supervisor_account'
}, {
  type: 'material-icons',
  text: 'surround_sound'
}, {
  type: 'material-icons',
  text: 'swap_calls'
}, {
  type: 'material-icons',
  text: 'swap_horiz'
}, {
  type: 'material-icons',
  text: 'swap_vert'
}, {
  type: 'material-icons',
  text: 'swap_vertical_circle'
}, {
  type: 'material-icons',
  text: 'switch_camera'
}, {
  type: 'material-icons',
  text: 'switch_video'
}, {
  type: 'material-icons',
  text: 'sync'
}, {
  type: 'material-icons',
  text: 'sync_disabled'
}, {
  type: 'material-icons',
  text: 'sync_problem'
}, {
  type: 'material-icons',
  text: 'system_update'
}, {
  type: 'material-icons',
  text: 'system_update_alt'
}, {
  type: 'material-icons',
  text: 'tab'
}, {
  type: 'material-icons',
  text: 'tab_unselected'
}, {
  type: 'material-icons',
  text: 'tablet'
}, {
  type: 'material-icons',
  text: 'tablet_android'
}, {
  type: 'material-icons',
  text: 'tablet_mac'
}, {
  type: 'material-icons',
  text: 'tag_faces'
}, {
  type: 'material-icons',
  text: 'tap_and_play'
}, {
  type: 'material-icons',
  text: 'terrain'
}, {
  type: 'material-icons',
  text: 'text_fields'
}, {
  type: 'material-icons',
  text: 'text_format'
}, {
  type: 'material-icons',
  text: 'textsms'
}, {
  type: 'material-icons',
  text: 'texture'
}, {
  type: 'material-icons',
  text: 'theaters'
}, {
  type: 'material-icons',
  text: 'thumb_down'
}, {
  type: 'material-icons',
  text: 'thumb_up'
}, {
  type: 'material-icons',
  text: 'thumbs_up_down'
}, {
  type: 'material-icons',
  text: 'time_to_leave'
}, {
  type: 'material-icons',
  text: 'timelapse'
}, {
  type: 'material-icons',
  text: 'timeline'
}, {
  type: 'material-icons',
  text: 'timer'
}, {
  type: 'material-icons',
  text: 'timer_10'
}, {
  type: 'material-icons',
  text: 'timer_3'
}, {
  type: 'material-icons',
  text: 'timer_off'
}, {
  type: 'material-icons',
  text: 'title'
}, {
  type: 'material-icons',
  text: 'toc'
}, {
  type: 'material-icons',
  text: 'today'
}, {
  type: 'material-icons',
  text: 'toll'
}, {
  type: 'material-icons',
  text: 'tonality'
}, {
  type: 'material-icons',
  text: 'touch_app'
}, {
  type: 'material-icons',
  text: 'toys'
}, {
  type: 'material-icons',
  text: 'track_changes'
}, {
  type: 'material-icons',
  text: 'traffic'
}, {
  type: 'material-icons',
  text: 'train'
}, {
  type: 'material-icons',
  text: 'tram'
}, {
  type: 'material-icons',
  text: 'transfer_within_a_station'
}, {
  type: 'material-icons',
  text: 'transform'
}, {
  type: 'material-icons',
  text: 'translate'
}, {
  type: 'material-icons',
  text: 'trending_down'
}, {
  type: 'material-icons',
  text: 'trending_flat'
}, {
  type: 'material-icons',
  text: 'trending_up'
}, {
  type: 'material-icons',
  text: 'tune'
}, {
  type: 'material-icons',
  text: 'turned_in'
}, {
  type: 'material-icons',
  text: 'turned_in_not'
}, {
  type: 'material-icons',
  text: 'tv'
}, {
  type: 'material-icons',
  text: 'unarchive'
}, {
  type: 'material-icons',
  text: 'undo'
}, {
  type: 'material-icons',
  text: 'unfold_less'
}, {
  type: 'material-icons',
  text: 'unfold_more'
}, {
  type: 'material-icons',
  text: 'update'
}, {
  type: 'material-icons',
  text: 'usb'
}, {
  type: 'material-icons',
  text: 'verified_user'
}, {
  type: 'material-icons',
  text: 'vertical_align_bottom'
}, {
  type: 'material-icons',
  text: 'vertical_align_center'
}, {
  type: 'material-icons',
  text: 'vertical_align_top'
}, {
  type: 'material-icons',
  text: 'vibration'
}, {
  type: 'material-icons',
  text: 'video_call'
}, {
  type: 'material-icons',
  text: 'video_label'
}, {
  type: 'material-icons',
  text: 'video_library'
}, {
  type: 'material-icons',
  text: 'videocam'
}, {
  type: 'material-icons',
  text: 'videocam_off'
}, {
  type: 'material-icons',
  text: 'videogame_asset'
}, {
  type: 'material-icons',
  text: 'view_agenda'
}, {
  type: 'material-icons',
  text: 'view_array'
}, {
  type: 'material-icons',
  text: 'view_carousel'
}, {
  type: 'material-icons',
  text: 'view_column'
}, {
  type: 'material-icons',
  text: 'view_comfy'
}, {
  type: 'material-icons',
  text: 'view_compact'
}, {
  type: 'material-icons',
  text: 'view_day'
}, {
  type: 'material-icons',
  text: 'view_headline'
}, {
  type: 'material-icons',
  text: 'view_list'
}, {
  type: 'material-icons',
  text: 'view_module'
}, {
  type: 'material-icons',
  text: 'view_quilt'
}, {
  type: 'material-icons',
  text: 'view_stream'
}, {
  type: 'material-icons',
  text: 'view_week'
}, {
  type: 'material-icons',
  text: 'vignette'
}, {
  type: 'material-icons',
  text: 'visibility'
}, {
  type: 'material-icons',
  text: 'visibility_off'
}, {
  type: 'material-icons',
  text: 'voice_chat'
}, {
  type: 'material-icons',
  text: 'voicemail'
}, {
  type: 'material-icons',
  text: 'volume_down'
}, {
  type: 'material-icons',
  text: 'volume_mute'
}, {
  type: 'material-icons',
  text: 'volume_off'
}, {
  type: 'material-icons',
  text: 'volume_up'
}, {
  type: 'material-icons',
  text: 'vpn_key'
}, {
  type: 'material-icons',
  text: 'vpn_lock'
}, {
  type: 'material-icons',
  text: 'wallpaper'
}, {
  type: 'material-icons',
  text: 'warning'
}, {
  type: 'material-icons',
  text: 'watch'
}, {
  type: 'material-icons',
  text: 'watch_later'
}, {
  type: 'material-icons',
  text: 'wb_auto'
}, {
  type: 'material-icons',
  text: 'wb_cloudy'
}, {
  type: 'material-icons',
  text: 'wb_incandescent'
}, {
  type: 'material-icons',
  text: 'wb_iridescent'
}, {
  type: 'material-icons',
  text: 'wb_sunny'
}, {
  type: 'material-icons',
  text: 'wc'
}, {
  type: 'material-icons',
  text: 'web'
}, {
  type: 'material-icons',
  text: 'web_asset'
}, {
  type: 'material-icons',
  text: 'weekend'
}, {
  type: 'material-icons',
  text: 'whatshot'
}, {
  type: 'material-icons',
  text: 'widgets'
}, {
  type: 'material-icons',
  text: 'wifi'
}, {
  type: 'material-icons',
  text: 'wifi_lock'
}, {
  type: 'material-icons',
  text: 'wifi_tethering'
}, {
  type: 'material-icons',
  text: 'work'
}, {
  type: 'material-icons',
  text: 'wrap_text'
}, {
  type: 'material-icons',
  text: 'youtube_searched_for'
}, {
  type: 'material-icons',
  text: 'zoom_in'
}, {
  type: 'material-icons',
  text: 'zoom_out'
}, {
  type: 'material-icons',
  text: 'zoom_out_map'
}, // Font Awesome
{
  type: 'font-awesome',
  text: 'fas fa-ad'
}, {
  type: 'font-awesome',
  text: 'fas fa-address-book'
}, {
  type: 'font-awesome',
  text: 'fas fa-address-card'
}, {
  type: 'font-awesome',
  text: 'fas fa-adjust'
}, {
  type: 'font-awesome',
  text: 'fas fa-air-freshener'
}, {
  type: 'font-awesome',
  text: 'fas fa-align-center'
}, {
  type: 'font-awesome',
  text: 'fas fa-align-justify'
}, {
  type: 'font-awesome',
  text: 'fas fa-align-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-align-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-allergies'
}, {
  type: 'font-awesome',
  text: 'fas fa-ambulance'
}, {
  type: 'font-awesome',
  text: 'fas fa-american-sign-language-interpreting'
}, {
  type: 'font-awesome',
  text: 'fas fa-anchor'
}, {
  type: 'font-awesome',
  text: 'fas fa-angle-double-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-angle-double-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-angle-double-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-angle-double-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-angle-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-angle-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-angle-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-angle-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-angry'
}, {
  type: 'font-awesome',
  text: 'fas fa-ankh'
}, {
  type: 'font-awesome',
  text: 'fas fa-apple-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-archive'
}, {
  type: 'font-awesome',
  text: 'fas fa-archway'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-alt-circle-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-alt-circle-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-alt-circle-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-alt-circle-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-circle-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-circle-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-circle-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-circle-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrow-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrows-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrows-alt-h'
}, {
  type: 'font-awesome',
  text: 'fas fa-arrows-alt-v'
}, {
  type: 'font-awesome',
  text: 'fas fa-assistive-listening-systems'
}, {
  type: 'font-awesome',
  text: 'fas fa-asterisk'
}, {
  type: 'font-awesome',
  text: 'fas fa-at'
}, {
  type: 'font-awesome',
  text: 'fas fa-atlas'
}, {
  type: 'font-awesome',
  text: 'fas fa-atom'
}, {
  type: 'font-awesome',
  text: 'fas fa-audio-description'
}, {
  type: 'font-awesome',
  text: 'fas fa-award'
}, {
  type: 'font-awesome',
  text: 'fas fa-baby'
}, {
  type: 'font-awesome',
  text: 'fas fa-baby-carriage'
}, {
  type: 'font-awesome',
  text: 'fas fa-backspace'
}, {
  type: 'font-awesome',
  text: 'fas fa-backward'
}, {
  type: 'font-awesome',
  text: 'fas fa-bacon'
}, {
  type: 'font-awesome',
  text: 'fas fa-balance-scale'
}, {
  type: 'font-awesome',
  text: 'fas fa-ban'
}, {
  type: 'font-awesome',
  text: 'fas fa-band-aid'
}, {
  type: 'font-awesome',
  text: 'fas fa-barcode'
}, {
  type: 'font-awesome',
  text: 'fas fa-bars'
}, {
  type: 'font-awesome',
  text: 'fas fa-baseball-ball'
}, {
  type: 'font-awesome',
  text: 'fas fa-basketball-ball'
}, {
  type: 'font-awesome',
  text: 'fas fa-bath'
}, {
  type: 'font-awesome',
  text: 'fas fa-battery-empty'
}, {
  type: 'font-awesome',
  text: 'fas fa-battery-full'
}, {
  type: 'font-awesome',
  text: 'fas fa-battery-half'
}, {
  type: 'font-awesome',
  text: 'fas fa-battery-quarter'
}, {
  type: 'font-awesome',
  text: 'fas fa-battery-three-quarters'
}, {
  type: 'font-awesome',
  text: 'fas fa-bed'
}, {
  type: 'font-awesome',
  text: 'fas fa-beer'
}, {
  type: 'font-awesome',
  text: 'fas fa-bell'
}, {
  type: 'font-awesome',
  text: 'fas fa-bell-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-bezier-curve'
}, {
  type: 'font-awesome',
  text: 'fas fa-bible'
}, {
  type: 'font-awesome',
  text: 'fas fa-bicycle'
}, {
  type: 'font-awesome',
  text: 'fas fa-binoculars'
}, {
  type: 'font-awesome',
  text: 'fas fa-biohazard'
}, {
  type: 'font-awesome',
  text: 'fas fa-birthday-cake'
}, {
  type: 'font-awesome',
  text: 'fas fa-blender'
}, {
  type: 'font-awesome',
  text: 'fas fa-blender-phone'
}, {
  type: 'font-awesome',
  text: 'fas fa-blind'
}, {
  type: 'font-awesome',
  text: 'fas fa-blog'
}, {
  type: 'font-awesome',
  text: 'fas fa-bold'
}, {
  type: 'font-awesome',
  text: 'fas fa-bolt'
}, {
  type: 'font-awesome',
  text: 'fas fa-bomb'
}, {
  type: 'font-awesome',
  text: 'fas fa-bone'
}, {
  type: 'font-awesome',
  text: 'fas fa-bong'
}, {
  type: 'font-awesome',
  text: 'fas fa-book'
}, {
  type: 'font-awesome',
  text: 'fas fa-book-dead'
}, {
  type: 'font-awesome',
  text: 'fas fa-book-medical'
}, {
  type: 'font-awesome',
  text: 'fas fa-book-open'
}, {
  type: 'font-awesome',
  text: 'fas fa-book-reader'
}, {
  type: 'font-awesome',
  text: 'fas fa-bookmark'
}, {
  type: 'font-awesome',
  text: 'fas fa-bowling-ball'
}, {
  type: 'font-awesome',
  text: 'fas fa-box'
}, {
  type: 'font-awesome',
  text: 'fas fa-box-open'
}, {
  type: 'font-awesome',
  text: 'fas fa-boxes'
}, {
  type: 'font-awesome',
  text: 'fas fa-braille'
}, {
  type: 'font-awesome',
  text: 'fas fa-brain'
}, {
  type: 'font-awesome',
  text: 'fas fa-bread-slice'
}, {
  type: 'font-awesome',
  text: 'fas fa-briefcase'
}, {
  type: 'font-awesome',
  text: 'fas fa-briefcase-medical'
}, {
  type: 'font-awesome',
  text: 'fas fa-broadcast-tower'
}, {
  type: 'font-awesome',
  text: 'fas fa-broom'
}, {
  type: 'font-awesome',
  text: 'fas fa-brush'
}, {
  type: 'font-awesome',
  text: 'fas fa-bug'
}, {
  type: 'font-awesome',
  text: 'fas fa-building'
}, {
  type: 'font-awesome',
  text: 'fas fa-bullhorn'
}, {
  type: 'font-awesome',
  text: 'fas fa-bullseye'
}, {
  type: 'font-awesome',
  text: 'fas fa-burn'
}, {
  type: 'font-awesome',
  text: 'fas fa-bus'
}, {
  type: 'font-awesome',
  text: 'fas fa-bus-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-business-time'
}, {
  type: 'font-awesome',
  text: 'fas fa-calculator'
}, {
  type: 'font-awesome',
  text: 'fas fa-calendar'
}, {
  type: 'font-awesome',
  text: 'fas fa-calendar-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-calendar-check'
}, {
  type: 'font-awesome',
  text: 'fas fa-calendar-day'
}, {
  type: 'font-awesome',
  text: 'fas fa-calendar-minus'
}, {
  type: 'font-awesome',
  text: 'fas fa-calendar-plus'
}, {
  type: 'font-awesome',
  text: 'fas fa-calendar-times'
}, {
  type: 'font-awesome',
  text: 'fas fa-calendar-week'
}, {
  type: 'font-awesome',
  text: 'fas fa-camera'
}, {
  type: 'font-awesome',
  text: 'fas fa-camera-retro'
}, {
  type: 'font-awesome',
  text: 'fas fa-campground'
}, {
  type: 'font-awesome',
  text: 'fas fa-candy-cane'
}, {
  type: 'font-awesome',
  text: 'fas fa-cannabis'
}, {
  type: 'font-awesome',
  text: 'fas fa-capsules'
}, {
  type: 'font-awesome',
  text: 'fas fa-car'
}, {
  type: 'font-awesome',
  text: 'fas fa-car-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-car-battery'
}, {
  type: 'font-awesome',
  text: 'fas fa-car-crash'
}, {
  type: 'font-awesome',
  text: 'fas fa-car-side'
}, {
  type: 'font-awesome',
  text: 'fas fa-caret-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-caret-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-caret-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-caret-square-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-caret-square-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-caret-square-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-caret-square-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-caret-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-carrot'
}, {
  type: 'font-awesome',
  text: 'fas fa-cart-arrow-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-cart-plus'
}, {
  type: 'font-awesome',
  text: 'fas fa-cash-register'
}, {
  type: 'font-awesome',
  text: 'fas fa-cat'
}, {
  type: 'font-awesome',
  text: 'fas fa-certificate'
}, {
  type: 'font-awesome',
  text: 'fas fa-chair'
}, {
  type: 'font-awesome',
  text: 'fas fa-chalkboard'
}, {
  type: 'font-awesome',
  text: 'fas fa-chalkboard-teacher'
}, {
  type: 'font-awesome',
  text: 'fas fa-charging-station'
}, {
  type: 'font-awesome',
  text: 'fas fa-chart-area'
}, {
  type: 'font-awesome',
  text: 'fas fa-chart-bar'
}, {
  type: 'font-awesome',
  text: 'fas fa-chart-line'
}, {
  type: 'font-awesome',
  text: 'fas fa-chart-pie'
}, {
  type: 'font-awesome',
  text: 'fas fa-check'
}, {
  type: 'font-awesome',
  text: 'fas fa-check-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-check-double'
}, {
  type: 'font-awesome',
  text: 'fas fa-check-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-cheese'
}, {
  type: 'font-awesome',
  text: 'fas fa-chess'
}, {
  type: 'font-awesome',
  text: 'fas fa-chess-bishop'
}, {
  type: 'font-awesome',
  text: 'fas fa-chess-board'
}, {
  type: 'font-awesome',
  text: 'fas fa-chess-king'
}, {
  type: 'font-awesome',
  text: 'fas fa-chess-knight'
}, {
  type: 'font-awesome',
  text: 'fas fa-chess-pawn'
}, {
  type: 'font-awesome',
  text: 'fas fa-chess-queen'
}, {
  type: 'font-awesome',
  text: 'fas fa-chess-rook'
}, {
  type: 'font-awesome',
  text: 'fas fa-chevron-circle-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-chevron-circle-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-chevron-circle-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-chevron-circle-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-chevron-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-chevron-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-chevron-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-chevron-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-child'
}, {
  type: 'font-awesome',
  text: 'fas fa-church'
}, {
  type: 'font-awesome',
  text: 'fas fa-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-circle-notch'
}, {
  type: 'font-awesome',
  text: 'fas fa-city'
}, {
  type: 'font-awesome',
  text: 'fas fa-clinic-medical'
}, {
  type: 'font-awesome',
  text: 'fas fa-clipboard'
}, {
  type: 'font-awesome',
  text: 'fas fa-clipboard-check'
}, {
  type: 'font-awesome',
  text: 'fas fa-clipboard-list'
}, {
  type: 'font-awesome',
  text: 'fas fa-clock'
}, {
  type: 'font-awesome',
  text: 'fas fa-clone'
}, {
  type: 'font-awesome',
  text: 'fas fa-closed-captioning'
}, {
  type: 'font-awesome',
  text: 'fas fa-cloud'
}, {
  type: 'font-awesome',
  text: 'fas fa-cloud-download-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-cloud-meatball'
}, {
  type: 'font-awesome',
  text: 'fas fa-cloud-moon'
}, {
  type: 'font-awesome',
  text: 'fas fa-cloud-moon-rain'
}, {
  type: 'font-awesome',
  text: 'fas fa-cloud-rain'
}, {
  type: 'font-awesome',
  text: 'fas fa-cloud-showers-heavy'
}, {
  type: 'font-awesome',
  text: 'fas fa-cloud-sun'
}, {
  type: 'font-awesome',
  text: 'fas fa-cloud-sun-rain'
}, {
  type: 'font-awesome',
  text: 'fas fa-cloud-upload-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-cocktail'
}, {
  type: 'font-awesome',
  text: 'fas fa-code'
}, {
  type: 'font-awesome',
  text: 'fas fa-code-branch'
}, {
  type: 'font-awesome',
  text: 'fas fa-coffee'
}, {
  type: 'font-awesome',
  text: 'fas fa-cog'
}, {
  type: 'font-awesome',
  text: 'fas fa-cogs'
}, {
  type: 'font-awesome',
  text: 'fas fa-coins'
}, {
  type: 'font-awesome',
  text: 'fas fa-columns'
}, {
  type: 'font-awesome',
  text: 'fas fa-comment'
}, {
  type: 'font-awesome',
  text: 'fas fa-comment-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-comment-dollar'
}, {
  type: 'font-awesome',
  text: 'fas fa-comment-dots'
}, {
  type: 'font-awesome',
  text: 'fas fa-comment-medical'
}, {
  type: 'font-awesome',
  text: 'fas fa-comment-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-comments'
}, {
  type: 'font-awesome',
  text: 'fas fa-comments-dollar'
}, {
  type: 'font-awesome',
  text: 'fas fa-compact-disc'
}, {
  type: 'font-awesome',
  text: 'fas fa-compass'
}, {
  type: 'font-awesome',
  text: 'fas fa-compress'
}, {
  type: 'font-awesome',
  text: 'fas fa-compress-arrows-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-concierge-bell'
}, {
  type: 'font-awesome',
  text: 'fas fa-cookie'
}, {
  type: 'font-awesome',
  text: 'fas fa-cookie-bite'
}, {
  type: 'font-awesome',
  text: 'fas fa-copy'
}, {
  type: 'font-awesome',
  text: 'fas fa-copyright'
}, {
  type: 'font-awesome',
  text: 'fas fa-couch'
}, {
  type: 'font-awesome',
  text: 'fas fa-credit-card'
}, {
  type: 'font-awesome',
  text: 'fas fa-crop'
}, {
  type: 'font-awesome',
  text: 'fas fa-crop-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-cross'
}, {
  type: 'font-awesome',
  text: 'fas fa-crosshairs'
}, {
  type: 'font-awesome',
  text: 'fas fa-crow'
}, {
  type: 'font-awesome',
  text: 'fas fa-crown'
}, {
  type: 'font-awesome',
  text: 'fas fa-crutch'
}, {
  type: 'font-awesome',
  text: 'fas fa-cube'
}, {
  type: 'font-awesome',
  text: 'fas fa-cubes'
}, {
  type: 'font-awesome',
  text: 'fas fa-cut'
}, {
  type: 'font-awesome',
  text: 'fas fa-database'
}, {
  type: 'font-awesome',
  text: 'fas fa-deaf'
}, {
  type: 'font-awesome',
  text: 'fas fa-democrat'
}, {
  type: 'font-awesome',
  text: 'fas fa-desktop'
}, {
  type: 'font-awesome',
  text: 'fas fa-dharmachakra'
}, {
  type: 'font-awesome',
  text: 'fas fa-diagnoses'
}, {
  type: 'font-awesome',
  text: 'fas fa-dice'
}, {
  type: 'font-awesome',
  text: 'fas fa-dice-d20'
}, {
  type: 'font-awesome',
  text: 'fas fa-dice-d6'
}, {
  type: 'font-awesome',
  text: 'fas fa-dice-five'
}, {
  type: 'font-awesome',
  text: 'fas fa-dice-four'
}, {
  type: 'font-awesome',
  text: 'fas fa-dice-one'
}, {
  type: 'font-awesome',
  text: 'fas fa-dice-six'
}, {
  type: 'font-awesome',
  text: 'fas fa-dice-three'
}, {
  type: 'font-awesome',
  text: 'fas fa-dice-two'
}, {
  type: 'font-awesome',
  text: 'fas fa-digital-tachograph'
}, {
  type: 'font-awesome',
  text: 'fas fa-directions'
}, {
  type: 'font-awesome',
  text: 'fas fa-divide'
}, {
  type: 'font-awesome',
  text: 'fas fa-dizzy'
}, {
  type: 'font-awesome',
  text: 'fas fa-dna'
}, {
  type: 'font-awesome',
  text: 'fas fa-dog'
}, {
  type: 'font-awesome',
  text: 'fas fa-dollar-sign'
}, {
  type: 'font-awesome',
  text: 'fas fa-dolly'
}, {
  type: 'font-awesome',
  text: 'fas fa-dolly-flatbed'
}, {
  type: 'font-awesome',
  text: 'fas fa-donate'
}, {
  type: 'font-awesome',
  text: 'fas fa-door-closed'
}, {
  type: 'font-awesome',
  text: 'fas fa-door-open'
}, {
  type: 'font-awesome',
  text: 'fas fa-dot-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-dove'
}, {
  type: 'font-awesome',
  text: 'fas fa-download'
}, {
  type: 'font-awesome',
  text: 'fas fa-drafting-compass'
}, {
  type: 'font-awesome',
  text: 'fas fa-dragon'
}, {
  type: 'font-awesome',
  text: 'fas fa-draw-polygon'
}, {
  type: 'font-awesome',
  text: 'fas fa-drum'
}, {
  type: 'font-awesome',
  text: 'fas fa-drum-steelpan'
}, {
  type: 'font-awesome',
  text: 'fas fa-drumstick-bite'
}, {
  type: 'font-awesome',
  text: 'fas fa-dumbbell'
}, {
  type: 'font-awesome',
  text: 'fas fa-dumpster'
}, {
  type: 'font-awesome',
  text: 'fas fa-dumpster-fire'
}, {
  type: 'font-awesome',
  text: 'fas fa-dungeon'
}, {
  type: 'font-awesome',
  text: 'fas fa-edit'
}, {
  type: 'font-awesome',
  text: 'fas fa-egg'
}, {
  type: 'font-awesome',
  text: 'fas fa-eject'
}, {
  type: 'font-awesome',
  text: 'fas fa-ellipsis-h'
}, {
  type: 'font-awesome',
  text: 'fas fa-ellipsis-v'
}, {
  type: 'font-awesome',
  text: 'fas fa-envelope'
}, {
  type: 'font-awesome',
  text: 'fas fa-envelope-open'
}, {
  type: 'font-awesome',
  text: 'fas fa-envelope-open-text'
}, {
  type: 'font-awesome',
  text: 'fas fa-envelope-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-equals'
}, {
  type: 'font-awesome',
  text: 'fas fa-eraser'
}, {
  type: 'font-awesome',
  text: 'fas fa-ethernet'
}, {
  type: 'font-awesome',
  text: 'fas fa-euro-sign'
}, {
  type: 'font-awesome',
  text: 'fas fa-exchange-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-exclamation'
}, {
  type: 'font-awesome',
  text: 'fas fa-exclamation-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-exclamation-triangle'
}, {
  type: 'font-awesome',
  text: 'fas fa-expand'
}, {
  type: 'font-awesome',
  text: 'fas fa-expand-arrows-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-external-link-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-external-link-square-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-eye'
}, {
  type: 'font-awesome',
  text: 'fas fa-eye-dropper'
}, {
  type: 'font-awesome',
  text: 'fas fa-eye-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-fast-backward'
}, {
  type: 'font-awesome',
  text: 'fas fa-fast-forward'
}, {
  type: 'font-awesome',
  text: 'fas fa-fax'
}, {
  type: 'font-awesome',
  text: 'fas fa-feather'
}, {
  type: 'font-awesome',
  text: 'fas fa-feather-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-female'
}, {
  type: 'font-awesome',
  text: 'fas fa-fighter-jet'
}, {
  type: 'font-awesome',
  text: 'fas fa-file'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-archive'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-audio'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-code'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-contract'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-csv'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-download'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-excel'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-export'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-image'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-import'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-invoice'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-invoice-dollar'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-medical'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-medical-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-pdf'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-powerpoint'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-prescription'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-signature'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-upload'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-video'
}, {
  type: 'font-awesome',
  text: 'fas fa-file-word'
}, {
  type: 'font-awesome',
  text: 'fas fa-fill'
}, {
  type: 'font-awesome',
  text: 'fas fa-fill-drip'
}, {
  type: 'font-awesome',
  text: 'fas fa-film'
}, {
  type: 'font-awesome',
  text: 'fas fa-filter'
}, {
  type: 'font-awesome',
  text: 'fas fa-fingerprint'
}, {
  type: 'font-awesome',
  text: 'fas fa-fire'
}, {
  type: 'font-awesome',
  text: 'fas fa-fire-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-fire-extinguisher'
}, {
  type: 'font-awesome',
  text: 'fas fa-first-aid'
}, {
  type: 'font-awesome',
  text: 'fas fa-fish'
}, {
  type: 'font-awesome',
  text: 'fas fa-fist-raised'
}, {
  type: 'font-awesome',
  text: 'fas fa-flag'
}, {
  type: 'font-awesome',
  text: 'fas fa-flag-checkered'
}, {
  type: 'font-awesome',
  text: 'fas fa-flag-usa'
}, {
  type: 'font-awesome',
  text: 'fas fa-flask'
}, {
  type: 'font-awesome',
  text: 'fas fa-flushed'
}, {
  type: 'font-awesome',
  text: 'fas fa-folder'
}, {
  type: 'font-awesome',
  text: 'fas fa-folder-minus'
}, {
  type: 'font-awesome',
  text: 'fas fa-folder-open'
}, {
  type: 'font-awesome',
  text: 'fas fa-folder-plus'
}, {
  type: 'font-awesome',
  text: 'fas fa-font'
}, {
  type: 'font-awesome',
  text: 'fas fa-football-ball'
}, {
  type: 'font-awesome',
  text: 'fas fa-forward'
}, {
  type: 'font-awesome',
  text: 'fas fa-frog'
}, {
  type: 'font-awesome',
  text: 'fas fa-frown'
}, {
  type: 'font-awesome',
  text: 'fas fa-frown-open'
}, {
  type: 'font-awesome',
  text: 'fas fa-funnel-dollar'
}, {
  type: 'font-awesome',
  text: 'fas fa-futbol'
}, {
  type: 'font-awesome',
  text: 'fas fa-gamepad'
}, {
  type: 'font-awesome',
  text: 'fas fa-gas-pump'
}, {
  type: 'font-awesome',
  text: 'fas fa-gavel'
}, {
  type: 'font-awesome',
  text: 'fas fa-gem'
}, {
  type: 'font-awesome',
  text: 'fas fa-genderless'
}, {
  type: 'font-awesome',
  text: 'fas fa-ghost'
}, {
  type: 'font-awesome',
  text: 'fas fa-gift'
}, {
  type: 'font-awesome',
  text: 'fas fa-gifts'
}, {
  type: 'font-awesome',
  text: 'fas fa-glass-cheers'
}, {
  type: 'font-awesome',
  text: 'fas fa-glass-martini'
}, {
  type: 'font-awesome',
  text: 'fas fa-glass-martini-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-glass-whiskey'
}, {
  type: 'font-awesome',
  text: 'fas fa-glasses'
}, {
  type: 'font-awesome',
  text: 'fas fa-globe'
}, {
  type: 'font-awesome',
  text: 'fas fa-globe-africa'
}, {
  type: 'font-awesome',
  text: 'fas fa-globe-americas'
}, {
  type: 'font-awesome',
  text: 'fas fa-globe-asia'
}, {
  type: 'font-awesome',
  text: 'fas fa-globe-europe'
}, {
  type: 'font-awesome',
  text: 'fas fa-golf-ball'
}, {
  type: 'font-awesome',
  text: 'fas fa-gopuram'
}, {
  type: 'font-awesome',
  text: 'fas fa-graduation-cap'
}, {
  type: 'font-awesome',
  text: 'fas fa-greater-than'
}, {
  type: 'font-awesome',
  text: 'fas fa-greater-than-equal'
}, {
  type: 'font-awesome',
  text: 'fas fa-grimace'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-beam'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-beam-sweat'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-hearts'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-squint'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-squint-tears'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-stars'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-tears'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-tongue'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-tongue-squint'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-tongue-wink'
}, {
  type: 'font-awesome',
  text: 'fas fa-grin-wink'
}, {
  type: 'font-awesome',
  text: 'fas fa-grip-horizontal'
}, {
  type: 'font-awesome',
  text: 'fas fa-grip-lines'
}, {
  type: 'font-awesome',
  text: 'fas fa-grip-lines-vertical'
}, {
  type: 'font-awesome',
  text: 'fas fa-grip-vertical'
}, {
  type: 'font-awesome',
  text: 'fas fa-guitar'
}, {
  type: 'font-awesome',
  text: 'fas fa-h-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-hamburger'
}, {
  type: 'font-awesome',
  text: 'fas fa-hammer'
}, {
  type: 'font-awesome',
  text: 'fas fa-hamsa'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-holding'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-holding-heart'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-holding-usd'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-lizard'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-middle-finger'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-paper'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-peace'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-point-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-point-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-point-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-point-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-pointer'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-rock'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-scissors'
}, {
  type: 'font-awesome',
  text: 'fas fa-hand-spock'
}, {
  type: 'font-awesome',
  text: 'fas fa-hands'
}, {
  type: 'font-awesome',
  text: 'fas fa-hands-helping'
}, {
  type: 'font-awesome',
  text: 'fas fa-handshake'
}, {
  type: 'font-awesome',
  text: 'fas fa-hanukiah'
}, {
  type: 'font-awesome',
  text: 'fas fa-hard-hat'
}, {
  type: 'font-awesome',
  text: 'fas fa-hashtag'
}, {
  type: 'font-awesome',
  text: 'fas fa-hat-wizard'
}, {
  type: 'font-awesome',
  text: 'fas fa-haykal'
}, {
  type: 'font-awesome',
  text: 'fas fa-hdd'
}, {
  type: 'font-awesome',
  text: 'fas fa-heading'
}, {
  type: 'font-awesome',
  text: 'fas fa-headphones'
}, {
  type: 'font-awesome',
  text: 'fas fa-headphones-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-headset'
}, {
  type: 'font-awesome',
  text: 'fas fa-heart'
}, {
  type: 'font-awesome',
  text: 'fas fa-heart-broken'
}, {
  type: 'font-awesome',
  text: 'fas fa-heartbeat'
}, {
  type: 'font-awesome',
  text: 'fas fa-helicopter'
}, {
  type: 'font-awesome',
  text: 'fas fa-highlighter'
}, {
  type: 'font-awesome',
  text: 'fas fa-hiking'
}, {
  type: 'font-awesome',
  text: 'fas fa-hippo'
}, {
  type: 'font-awesome',
  text: 'fas fa-history'
}, {
  type: 'font-awesome',
  text: 'fas fa-hockey-puck'
}, {
  type: 'font-awesome',
  text: 'fas fa-holly-berry'
}, {
  type: 'font-awesome',
  text: 'fas fa-home'
}, {
  type: 'font-awesome',
  text: 'fas fa-horse'
}, {
  type: 'font-awesome',
  text: 'fas fa-horse-head'
}, {
  type: 'font-awesome',
  text: 'fas fa-hospital'
}, {
  type: 'font-awesome',
  text: 'fas fa-hospital-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-hospital-symbol'
}, {
  type: 'font-awesome',
  text: 'fas fa-hot-tub'
}, {
  type: 'font-awesome',
  text: 'fas fa-hotdog'
}, {
  type: 'font-awesome',
  text: 'fas fa-hotel'
}, {
  type: 'font-awesome',
  text: 'fas fa-hourglass'
}, {
  type: 'font-awesome',
  text: 'fas fa-hourglass-end'
}, {
  type: 'font-awesome',
  text: 'fas fa-hourglass-half'
}, {
  type: 'font-awesome',
  text: 'fas fa-hourglass-start'
}, {
  type: 'font-awesome',
  text: 'fas fa-house-damage'
}, {
  type: 'font-awesome',
  text: 'fas fa-hryvnia'
}, {
  type: 'font-awesome',
  text: 'fas fa-i-cursor'
}, {
  type: 'font-awesome',
  text: 'fas fa-ice-cream'
}, {
  type: 'font-awesome',
  text: 'fas fa-icicles'
}, {
  type: 'font-awesome',
  text: 'fas fa-id-badge'
}, {
  type: 'font-awesome',
  text: 'fas fa-id-card'
}, {
  type: 'font-awesome',
  text: 'fas fa-id-card-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-igloo'
}, {
  type: 'font-awesome',
  text: 'fas fa-image'
}, {
  type: 'font-awesome',
  text: 'fas fa-images'
}, {
  type: 'font-awesome',
  text: 'fas fa-inbox'
}, {
  type: 'font-awesome',
  text: 'fas fa-indent'
}, {
  type: 'font-awesome',
  text: 'fas fa-industry'
}, {
  type: 'font-awesome',
  text: 'fas fa-infinity'
}, {
  type: 'font-awesome',
  text: 'fas fa-info'
}, {
  type: 'font-awesome',
  text: 'fas fa-info-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-italic'
}, {
  type: 'font-awesome',
  text: 'fas fa-jedi'
}, {
  type: 'font-awesome',
  text: 'fas fa-joint'
}, {
  type: 'font-awesome',
  text: 'fas fa-journal-whills'
}, {
  type: 'font-awesome',
  text: 'fas fa-kaaba'
}, {
  type: 'font-awesome',
  text: 'fas fa-key'
}, {
  type: 'font-awesome',
  text: 'fas fa-keyboard'
}, {
  type: 'font-awesome',
  text: 'fas fa-khanda'
}, {
  type: 'font-awesome',
  text: 'fas fa-kiss'
}, {
  type: 'font-awesome',
  text: 'fas fa-kiss-beam'
}, {
  type: 'font-awesome',
  text: 'fas fa-kiss-wink-heart'
}, {
  type: 'font-awesome',
  text: 'fas fa-kiwi-bird'
}, {
  type: 'font-awesome',
  text: 'fas fa-landmark'
}, {
  type: 'font-awesome',
  text: 'fas fa-language'
}, {
  type: 'font-awesome',
  text: 'fas fa-laptop'
}, {
  type: 'font-awesome',
  text: 'fas fa-laptop-code'
}, {
  type: 'font-awesome',
  text: 'fas fa-laptop-medical'
}, {
  type: 'font-awesome',
  text: 'fas fa-laugh'
}, {
  type: 'font-awesome',
  text: 'fas fa-laugh-beam'
}, {
  type: 'font-awesome',
  text: 'fas fa-laugh-squint'
}, {
  type: 'font-awesome',
  text: 'fas fa-laugh-wink'
}, {
  type: 'font-awesome',
  text: 'fas fa-layer-group'
}, {
  type: 'font-awesome',
  text: 'fas fa-leaf'
}, {
  type: 'font-awesome',
  text: 'fas fa-lemon'
}, {
  type: 'font-awesome',
  text: 'fas fa-less-than'
}, {
  type: 'font-awesome',
  text: 'fas fa-less-than-equal'
}, {
  type: 'font-awesome',
  text: 'fas fa-level-down-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-level-up-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-life-ring'
}, {
  type: 'font-awesome',
  text: 'fas fa-lightbulb'
}, {
  type: 'font-awesome',
  text: 'fas fa-link'
}, {
  type: 'font-awesome',
  text: 'fas fa-lira-sign'
}, {
  type: 'font-awesome',
  text: 'fas fa-list'
}, {
  type: 'font-awesome',
  text: 'fas fa-list-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-list-ol'
}, {
  type: 'font-awesome',
  text: 'fas fa-list-ul'
}, {
  type: 'font-awesome',
  text: 'fas fa-location-arrow'
}, {
  type: 'font-awesome',
  text: 'fas fa-lock'
}, {
  type: 'font-awesome',
  text: 'fas fa-lock-open'
}, {
  type: 'font-awesome',
  text: 'fas fa-long-arrow-alt-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-long-arrow-alt-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-long-arrow-alt-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-long-arrow-alt-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-low-vision'
}, {
  type: 'font-awesome',
  text: 'fas fa-luggage-cart'
}, {
  type: 'font-awesome',
  text: 'fas fa-magic'
}, {
  type: 'font-awesome',
  text: 'fas fa-magnet'
}, {
  type: 'font-awesome',
  text: 'fas fa-mail-bulk'
}, {
  type: 'font-awesome',
  text: 'fas fa-male'
}, {
  type: 'font-awesome',
  text: 'fas fa-map'
}, {
  type: 'font-awesome',
  text: 'fas fa-map-marked'
}, {
  type: 'font-awesome',
  text: 'fas fa-map-marked-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-map-marker'
}, {
  type: 'font-awesome',
  text: 'fas fa-map-marker-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-map-pin'
}, {
  type: 'font-awesome',
  text: 'fas fa-map-signs'
}, {
  type: 'font-awesome',
  text: 'fas fa-marker'
}, {
  type: 'font-awesome',
  text: 'fas fa-mars'
}, {
  type: 'font-awesome',
  text: 'fas fa-mars-double'
}, {
  type: 'font-awesome',
  text: 'fas fa-mars-stroke'
}, {
  type: 'font-awesome',
  text: 'fas fa-mars-stroke-h'
}, {
  type: 'font-awesome',
  text: 'fas fa-mars-stroke-v'
}, {
  type: 'font-awesome',
  text: 'fas fa-mask'
}, {
  type: 'font-awesome',
  text: 'fas fa-medal'
}, {
  type: 'font-awesome',
  text: 'fas fa-medkit'
}, {
  type: 'font-awesome',
  text: 'fas fa-meh'
}, {
  type: 'font-awesome',
  text: 'fas fa-meh-blank'
}, {
  type: 'font-awesome',
  text: 'fas fa-meh-rolling-eyes'
}, {
  type: 'font-awesome',
  text: 'fas fa-memory'
}, {
  type: 'font-awesome',
  text: 'fas fa-menorah'
}, {
  type: 'font-awesome',
  text: 'fas fa-mercury'
}, {
  type: 'font-awesome',
  text: 'fas fa-meteor'
}, {
  type: 'font-awesome',
  text: 'fas fa-microchip'
}, {
  type: 'font-awesome',
  text: 'fas fa-microphone'
}, {
  type: 'font-awesome',
  text: 'fas fa-microphone-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-microphone-alt-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-microphone-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-microscope'
}, {
  type: 'font-awesome',
  text: 'fas fa-minus'
}, {
  type: 'font-awesome',
  text: 'fas fa-minus-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-minus-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-mitten'
}, {
  type: 'font-awesome',
  text: 'fas fa-mobile'
}, {
  type: 'font-awesome',
  text: 'fas fa-mobile-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-money-bill'
}, {
  type: 'font-awesome',
  text: 'fas fa-money-bill-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-money-bill-wave'
}, {
  type: 'font-awesome',
  text: 'fas fa-money-bill-wave-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-money-check'
}, {
  type: 'font-awesome',
  text: 'fas fa-money-check-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-monument'
}, {
  type: 'font-awesome',
  text: 'fas fa-moon'
}, {
  type: 'font-awesome',
  text: 'fas fa-mortar-pestle'
}, {
  type: 'font-awesome',
  text: 'fas fa-mosque'
}, {
  type: 'font-awesome',
  text: 'fas fa-motorcycle'
}, {
  type: 'font-awesome',
  text: 'fas fa-mountain'
}, {
  type: 'font-awesome',
  text: 'fas fa-mouse-pointer'
}, {
  type: 'font-awesome',
  text: 'fas fa-mug-hot'
}, {
  type: 'font-awesome',
  text: 'fas fa-music'
}, {
  type: 'font-awesome',
  text: 'fas fa-network-wired'
}, {
  type: 'font-awesome',
  text: 'fas fa-neuter'
}, {
  type: 'font-awesome',
  text: 'fas fa-newspaper'
}, {
  type: 'font-awesome',
  text: 'fas fa-not-equal'
}, {
  type: 'font-awesome',
  text: 'fas fa-notes-medical'
}, {
  type: 'font-awesome',
  text: 'fas fa-object-group'
}, {
  type: 'font-awesome',
  text: 'fas fa-object-ungroup'
}, {
  type: 'font-awesome',
  text: 'fas fa-oil-can'
}, {
  type: 'font-awesome',
  text: 'fas fa-om'
}, {
  type: 'font-awesome',
  text: 'fas fa-otter'
}, {
  type: 'font-awesome',
  text: 'fas fa-outdent'
}, {
  type: 'font-awesome',
  text: 'fas fa-pager'
}, {
  type: 'font-awesome',
  text: 'fas fa-paint-brush'
}, {
  type: 'font-awesome',
  text: 'fas fa-paint-roller'
}, {
  type: 'font-awesome',
  text: 'fas fa-palette'
}, {
  type: 'font-awesome',
  text: 'fas fa-pallet'
}, {
  type: 'font-awesome',
  text: 'fas fa-paper-plane'
}, {
  type: 'font-awesome',
  text: 'fas fa-paperclip'
}, {
  type: 'font-awesome',
  text: 'fas fa-parachute-box'
}, {
  type: 'font-awesome',
  text: 'fas fa-paragraph'
}, {
  type: 'font-awesome',
  text: 'fas fa-parking'
}, {
  type: 'font-awesome',
  text: 'fas fa-passport'
}, {
  type: 'font-awesome',
  text: 'fas fa-pastafarianism'
}, {
  type: 'font-awesome',
  text: 'fas fa-paste'
}, {
  type: 'font-awesome',
  text: 'fas fa-pause'
}, {
  type: 'font-awesome',
  text: 'fas fa-pause-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-paw'
}, {
  type: 'font-awesome',
  text: 'fas fa-peace'
}, {
  type: 'font-awesome',
  text: 'fas fa-pen'
}, {
  type: 'font-awesome',
  text: 'fas fa-pen-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-pen-fancy'
}, {
  type: 'font-awesome',
  text: 'fas fa-pen-nib'
}, {
  type: 'font-awesome',
  text: 'fas fa-pen-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-pencil-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-pencil-ruler'
}, {
  type: 'font-awesome',
  text: 'fas fa-people-carry'
}, {
  type: 'font-awesome',
  text: 'fas fa-pepper-hot'
}, {
  type: 'font-awesome',
  text: 'fas fa-percent'
}, {
  type: 'font-awesome',
  text: 'fas fa-percentage'
}, {
  type: 'font-awesome',
  text: 'fas fa-person-booth'
}, {
  type: 'font-awesome',
  text: 'fas fa-phone'
}, {
  type: 'font-awesome',
  text: 'fas fa-phone-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-phone-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-phone-volume'
}, {
  type: 'font-awesome',
  text: 'fas fa-piggy-bank'
}, {
  type: 'font-awesome',
  text: 'fas fa-pills'
}, {
  type: 'font-awesome',
  text: 'fas fa-pizza-slice'
}, {
  type: 'font-awesome',
  text: 'fas fa-place-of-worship'
}, {
  type: 'font-awesome',
  text: 'fas fa-plane'
}, {
  type: 'font-awesome',
  text: 'fas fa-plane-arrival'
}, {
  type: 'font-awesome',
  text: 'fas fa-plane-departure'
}, {
  type: 'font-awesome',
  text: 'fas fa-play'
}, {
  type: 'font-awesome',
  text: 'fas fa-play-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-plug'
}, {
  type: 'font-awesome',
  text: 'fas fa-plus'
}, {
  type: 'font-awesome',
  text: 'fas fa-plus-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-plus-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-podcast'
}, {
  type: 'font-awesome',
  text: 'fas fa-poll'
}, {
  type: 'font-awesome',
  text: 'fas fa-poll-h'
}, {
  type: 'font-awesome',
  text: 'fas fa-poo'
}, {
  type: 'font-awesome',
  text: 'fas fa-poo-storm'
}, {
  type: 'font-awesome',
  text: 'fas fa-poop'
}, {
  type: 'font-awesome',
  text: 'fas fa-portrait'
}, {
  type: 'font-awesome',
  text: 'fas fa-pound-sign'
}, {
  type: 'font-awesome',
  text: 'fas fa-power-off'
}, {
  type: 'font-awesome',
  text: 'fas fa-pray'
}, {
  type: 'font-awesome',
  text: 'fas fa-praying-hands'
}, {
  type: 'font-awesome',
  text: 'fas fa-prescription'
}, {
  type: 'font-awesome',
  text: 'fas fa-prescription-bottle'
}, {
  type: 'font-awesome',
  text: 'fas fa-prescription-bottle-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-print'
}, {
  type: 'font-awesome',
  text: 'fas fa-procedures'
}, {
  type: 'font-awesome',
  text: 'fas fa-project-diagram'
}, {
  type: 'font-awesome',
  text: 'fas fa-puzzle-piece'
}, {
  type: 'font-awesome',
  text: 'fas fa-qrcode'
}, {
  type: 'font-awesome',
  text: 'fas fa-question'
}, {
  type: 'font-awesome',
  text: 'fas fa-question-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-quidditch'
}, {
  type: 'font-awesome',
  text: 'fas fa-quote-left'
}, {
  type: 'font-awesome',
  text: 'fas fa-quote-right'
}, {
  type: 'font-awesome',
  text: 'fas fa-quran'
}, {
  type: 'font-awesome',
  text: 'fas fa-radiation'
}, {
  type: 'font-awesome',
  text: 'fas fa-radiation-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-rainbow'
}, {
  type: 'font-awesome',
  text: 'fas fa-random'
}, {
  type: 'font-awesome',
  text: 'fas fa-receipt'
}, {
  type: 'font-awesome',
  text: 'fas fa-recycle'
}, {
  type: 'font-awesome',
  text: 'fas fa-redo'
}, {
  type: 'font-awesome',
  text: 'fas fa-redo-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-registered'
}, {
  type: 'font-awesome',
  text: 'fas fa-reply'
}, {
  type: 'font-awesome',
  text: 'fas fa-reply-all'
}, {
  type: 'font-awesome',
  text: 'fas fa-republican'
}, {
  type: 'font-awesome',
  text: 'fas fa-restroom'
}, {
  type: 'font-awesome',
  text: 'fas fa-retweet'
}, {
  type: 'font-awesome',
  text: 'fas fa-ribbon'
}, {
  type: 'font-awesome',
  text: 'fas fa-ring'
}, {
  type: 'font-awesome',
  text: 'fas fa-road'
}, {
  type: 'font-awesome',
  text: 'fas fa-robot'
}, {
  type: 'font-awesome',
  text: 'fas fa-rocket'
}, {
  type: 'font-awesome',
  text: 'fas fa-route'
}, {
  type: 'font-awesome',
  text: 'fas fa-rss'
}, {
  type: 'font-awesome',
  text: 'fas fa-rss-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-ruble-sign'
}, {
  type: 'font-awesome',
  text: 'fas fa-ruler'
}, {
  type: 'font-awesome',
  text: 'fas fa-ruler-combined'
}, {
  type: 'font-awesome',
  text: 'fas fa-ruler-horizontal'
}, {
  type: 'font-awesome',
  text: 'fas fa-ruler-vertical'
}, {
  type: 'font-awesome',
  text: 'fas fa-running'
}, {
  type: 'font-awesome',
  text: 'fas fa-rupee-sign'
}, {
  type: 'font-awesome',
  text: 'fas fa-sad-cry'
}, {
  type: 'font-awesome',
  text: 'fas fa-sad-tear'
}, {
  type: 'font-awesome',
  text: 'fas fa-satellite'
}, {
  type: 'font-awesome',
  text: 'fas fa-satellite-dish'
}, {
  type: 'font-awesome',
  text: 'fas fa-save'
}, {
  type: 'font-awesome',
  text: 'fas fa-school'
}, {
  type: 'font-awesome',
  text: 'fas fa-screwdriver'
}, {
  type: 'font-awesome',
  text: 'fas fa-scroll'
}, {
  type: 'font-awesome',
  text: 'fas fa-sd-card'
}, {
  type: 'font-awesome',
  text: 'fas fa-search'
}, {
  type: 'font-awesome',
  text: 'fas fa-search-dollar'
}, {
  type: 'font-awesome',
  text: 'fas fa-search-location'
}, {
  type: 'font-awesome',
  text: 'fas fa-search-minus'
}, {
  type: 'font-awesome',
  text: 'fas fa-search-plus'
}, {
  type: 'font-awesome',
  text: 'fas fa-seedling'
}, {
  type: 'font-awesome',
  text: 'fas fa-server'
}, {
  type: 'font-awesome',
  text: 'fas fa-shapes'
}, {
  type: 'font-awesome',
  text: 'fas fa-share'
}, {
  type: 'font-awesome',
  text: 'fas fa-share-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-share-alt-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-share-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-shekel-sign'
}, {
  type: 'font-awesome',
  text: 'fas fa-shield-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-ship'
}, {
  type: 'font-awesome',
  text: 'fas fa-shipping-fast'
}, {
  type: 'font-awesome',
  text: 'fas fa-shoe-prints'
}, {
  type: 'font-awesome',
  text: 'fas fa-shopping-bag'
}, {
  type: 'font-awesome',
  text: 'fas fa-shopping-basket'
}, {
  type: 'font-awesome',
  text: 'fas fa-shopping-cart'
}, {
  type: 'font-awesome',
  text: 'fas fa-shower'
}, {
  type: 'font-awesome',
  text: 'fas fa-shuttle-van'
}, {
  type: 'font-awesome',
  text: 'fas fa-sign'
}, {
  type: 'font-awesome',
  text: 'fas fa-sign-in-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-sign-language'
}, {
  type: 'font-awesome',
  text: 'fas fa-sign-out-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-signal'
}, {
  type: 'font-awesome',
  text: 'fas fa-signature'
}, {
  type: 'font-awesome',
  text: 'fas fa-sim-card'
}, {
  type: 'font-awesome',
  text: 'fas fa-sitemap'
}, {
  type: 'font-awesome',
  text: 'fas fa-skating'
}, {
  type: 'font-awesome',
  text: 'fas fa-skiing'
}, {
  type: 'font-awesome',
  text: 'fas fa-skiing-nordic'
}, {
  type: 'font-awesome',
  text: 'fas fa-skull'
}, {
  type: 'font-awesome',
  text: 'fas fa-skull-crossbones'
}, {
  type: 'font-awesome',
  text: 'fas fa-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-sleigh'
}, {
  type: 'font-awesome',
  text: 'fas fa-sliders-h'
}, {
  type: 'font-awesome',
  text: 'fas fa-smile'
}, {
  type: 'font-awesome',
  text: 'fas fa-smile-beam'
}, {
  type: 'font-awesome',
  text: 'fas fa-smile-wink'
}, {
  type: 'font-awesome',
  text: 'fas fa-smog'
}, {
  type: 'font-awesome',
  text: 'fas fa-smoking'
}, {
  type: 'font-awesome',
  text: 'fas fa-smoking-ban'
}, {
  type: 'font-awesome',
  text: 'fas fa-sms'
}, {
  type: 'font-awesome',
  text: 'fas fa-snowboarding'
}, {
  type: 'font-awesome',
  text: 'fas fa-snowflake'
}, {
  type: 'font-awesome',
  text: 'fas fa-snowman'
}, {
  type: 'font-awesome',
  text: 'fas fa-snowplow'
}, {
  type: 'font-awesome',
  text: 'fas fa-socks'
}, {
  type: 'font-awesome',
  text: 'fas fa-solar-panel'
}, {
  type: 'font-awesome',
  text: 'fas fa-sort'
}, {
  type: 'font-awesome',
  text: 'fas fa-sort-alpha-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-sort-alpha-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-sort-amount-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-sort-amount-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-sort-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-sort-numeric-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-sort-numeric-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-sort-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-spa'
}, {
  type: 'font-awesome',
  text: 'fas fa-space-shuttle'
}, {
  type: 'font-awesome',
  text: 'fas fa-spider'
}, {
  type: 'font-awesome',
  text: 'fas fa-spinner'
}, {
  type: 'font-awesome',
  text: 'fas fa-splotch'
}, {
  type: 'font-awesome',
  text: 'fas fa-spray-can'
}, {
  type: 'font-awesome',
  text: 'fas fa-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-square-full'
}, {
  type: 'font-awesome',
  text: 'fas fa-square-root-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-stamp'
}, {
  type: 'font-awesome',
  text: 'fas fa-star'
}, {
  type: 'font-awesome',
  text: 'fas fa-star-and-crescent'
}, {
  type: 'font-awesome',
  text: 'fas fa-star-half'
}, {
  type: 'font-awesome',
  text: 'fas fa-star-half-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-star-of-david'
}, {
  type: 'font-awesome',
  text: 'fas fa-star-of-life'
}, {
  type: 'font-awesome',
  text: 'fas fa-step-backward'
}, {
  type: 'font-awesome',
  text: 'fas fa-step-forward'
}, {
  type: 'font-awesome',
  text: 'fas fa-stethoscope'
}, {
  type: 'font-awesome',
  text: 'fas fa-sticky-note'
}, {
  type: 'font-awesome',
  text: 'fas fa-stop'
}, {
  type: 'font-awesome',
  text: 'fas fa-stop-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-stopwatch'
}, {
  type: 'font-awesome',
  text: 'fas fa-store'
}, {
  type: 'font-awesome',
  text: 'fas fa-store-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-stream'
}, {
  type: 'font-awesome',
  text: 'fas fa-street-view'
}, {
  type: 'font-awesome',
  text: 'fas fa-strikethrough'
}, {
  type: 'font-awesome',
  text: 'fas fa-stroopwafel'
}, {
  type: 'font-awesome',
  text: 'fas fa-subscript'
}, {
  type: 'font-awesome',
  text: 'fas fa-subway'
}, {
  type: 'font-awesome',
  text: 'fas fa-suitcase'
}, {
  type: 'font-awesome',
  text: 'fas fa-suitcase-rolling'
}, {
  type: 'font-awesome',
  text: 'fas fa-sun'
}, {
  type: 'font-awesome',
  text: 'fas fa-superscript'
}, {
  type: 'font-awesome',
  text: 'fas fa-surprise'
}, {
  type: 'font-awesome',
  text: 'fas fa-swatchbook'
}, {
  type: 'font-awesome',
  text: 'fas fa-swimmer'
}, {
  type: 'font-awesome',
  text: 'fas fa-swimming-pool'
}, {
  type: 'font-awesome',
  text: 'fas fa-synagogue'
}, {
  type: 'font-awesome',
  text: 'fas fa-sync'
}, {
  type: 'font-awesome',
  text: 'fas fa-sync-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-syringe'
}, {
  type: 'font-awesome',
  text: 'fas fa-table'
}, {
  type: 'font-awesome',
  text: 'fas fa-table-tennis'
}, {
  type: 'font-awesome',
  text: 'fas fa-tablet'
}, {
  type: 'font-awesome',
  text: 'fas fa-tablet-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-tablets'
}, {
  type: 'font-awesome',
  text: 'fas fa-tachometer-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-tag'
}, {
  type: 'font-awesome',
  text: 'fas fa-tags'
}, {
  type: 'font-awesome',
  text: 'fas fa-tape'
}, {
  type: 'font-awesome',
  text: 'fas fa-tasks'
}, {
  type: 'font-awesome',
  text: 'fas fa-taxi'
}, {
  type: 'font-awesome',
  text: 'fas fa-teeth'
}, {
  type: 'font-awesome',
  text: 'fas fa-teeth-open'
}, {
  type: 'font-awesome',
  text: 'fas fa-temperature-high'
}, {
  type: 'font-awesome',
  text: 'fas fa-temperature-low'
}, {
  type: 'font-awesome',
  text: 'fas fa-tenge'
}, {
  type: 'font-awesome',
  text: 'fas fa-terminal'
}, {
  type: 'font-awesome',
  text: 'fas fa-text-hefas fa-ight'
}, {
  type: 'font-awesome',
  text: 'fas fa-text-wifas fa-dth'
}, {
  type: 'font-awesome',
  text: 'fas fa-th'
}, {
  type: 'font-awesome',
  text: 'fas fa-th-large'
}, {
  type: 'font-awesome',
  text: 'fas fa-th-list'
}, {
  type: 'font-awesome',
  text: 'fas fa-theater-masks'
}, {
  type: 'font-awesome',
  text: 'fas fa-thermometer'
}, {
  type: 'font-awesome',
  text: 'fas fa-thermometer-empty'
}, {
  type: 'font-awesome',
  text: 'fas fa-thermometer-full'
}, {
  type: 'font-awesome',
  text: 'fas fa-thermometer-half'
}, {
  type: 'font-awesome',
  text: 'fas fa-thermometer-quarter'
}, {
  type: 'font-awesome',
  text: 'fas fa-thermometer-three-quarters'
}, {
  type: 'font-awesome',
  text: 'fas fa-thumbs-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-thumbs-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-thumbtack'
}, {
  type: 'font-awesome',
  text: 'fas fa-ticket-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-times'
}, {
  type: 'font-awesome',
  text: 'fas fa-times-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-tint'
}, {
  type: 'font-awesome',
  text: 'fas fa-tint-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-tired'
}, {
  type: 'font-awesome',
  text: 'fas fa-toggle-off'
}, {
  type: 'font-awesome',
  text: 'fas fa-toggle-on'
}, {
  type: 'font-awesome',
  text: 'fas fa-toilet'
}, {
  type: 'font-awesome',
  text: 'fas fa-toilet-paper'
}, {
  type: 'font-awesome',
  text: 'fas fa-toolbox'
}, {
  type: 'font-awesome',
  text: 'fas fa-tools'
}, {
  type: 'font-awesome',
  text: 'fas fa-tooth'
}, {
  type: 'font-awesome',
  text: 'fas fa-torah'
}, {
  type: 'font-awesome',
  text: 'fas fa-torii-gate'
}, {
  type: 'font-awesome',
  text: 'fas fa-tractor'
}, {
  type: 'font-awesome',
  text: 'fas fa-trademark'
}, {
  type: 'font-awesome',
  text: 'fas fa-traffic-light'
}, {
  type: 'font-awesome',
  text: 'fas fa-train'
}, {
  type: 'font-awesome',
  text: 'fas fa-tram'
}, {
  type: 'font-awesome',
  text: 'fas fa-transgender'
}, {
  type: 'font-awesome',
  text: 'fas fa-transgender-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-trash'
}, {
  type: 'font-awesome',
  text: 'fas fa-trash-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-trash-restore'
}, {
  type: 'font-awesome',
  text: 'fas fa-trash-restore-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-tree'
}, {
  type: 'font-awesome',
  text: 'fas fa-trophy'
}, {
  type: 'font-awesome',
  text: 'fas fa-truck'
}, {
  type: 'font-awesome',
  text: 'fas fa-truck-loading'
}, {
  type: 'font-awesome',
  text: 'fas fa-truck-monster'
}, {
  type: 'font-awesome',
  text: 'fas fa-truck-moving'
}, {
  type: 'font-awesome',
  text: 'fas fa-truck-pickup'
}, {
  type: 'font-awesome',
  text: 'fas fa-tshirt'
}, {
  type: 'font-awesome',
  text: 'fas fa-tty'
}, {
  type: 'font-awesome',
  text: 'fas fa-tv'
}, {
  type: 'font-awesome',
  text: 'fas fa-umbrella'
}, {
  type: 'font-awesome',
  text: 'fas fa-umbrella-beach'
}, {
  type: 'font-awesome',
  text: 'fas fa-underline'
}, {
  type: 'font-awesome',
  text: 'fas fa-undo'
}, {
  type: 'font-awesome',
  text: 'fas fa-undo-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-universal-access'
}, {
  type: 'font-awesome',
  text: 'fas fa-university'
}, {
  type: 'font-awesome',
  text: 'fas fa-unlink'
}, {
  type: 'font-awesome',
  text: 'fas fa-unlock'
}, {
  type: 'font-awesome',
  text: 'fas fa-unlock-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-upload'
}, {
  type: 'font-awesome',
  text: 'fas fa-user'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-alt-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-astronaut'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-check'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-circle'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-clock'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-cog'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-edit'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-friends'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-graduate'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-injured'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-lock'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-md'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-minus'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-ninja'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-nurse'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-plus'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-secret'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-shield'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-tag'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-tie'
}, {
  type: 'font-awesome',
  text: 'fas fa-user-times'
}, {
  type: 'font-awesome',
  text: 'fas fa-users'
}, {
  type: 'font-awesome',
  text: 'fas fa-users-cog'
}, {
  type: 'font-awesome',
  text: 'fas fa-utensil-spoon'
}, {
  type: 'font-awesome',
  text: 'fas fa-utensils'
}, {
  type: 'font-awesome',
  text: 'fas fa-vector-square'
}, {
  type: 'font-awesome',
  text: 'fas fa-venus'
}, {
  type: 'font-awesome',
  text: 'fas fa-venus-double'
}, {
  type: 'font-awesome',
  text: 'fas fa-venus-mars'
}, {
  type: 'font-awesome',
  text: 'fas fa-vial'
}, {
  type: 'font-awesome',
  text: 'fas fa-vials'
}, {
  type: 'font-awesome',
  text: 'fas fa-video'
}, {
  type: 'font-awesome',
  text: 'fas fa-video-slash'
}, {
  type: 'font-awesome',
  text: 'fas fa-vihara'
}, {
  type: 'font-awesome',
  text: 'fas fa-volleyball-ball'
}, {
  type: 'font-awesome',
  text: 'fas fa-volume-down'
}, {
  type: 'font-awesome',
  text: 'fas fa-volume-mute'
}, {
  type: 'font-awesome',
  text: 'fas fa-volume-off'
}, {
  type: 'font-awesome',
  text: 'fas fa-volume-up'
}, {
  type: 'font-awesome',
  text: 'fas fa-vote-yea'
}, {
  type: 'font-awesome',
  text: 'fas fa-vr-cardboard'
}, {
  type: 'font-awesome',
  text: 'fas fa-walking'
}, {
  type: 'font-awesome',
  text: 'fas fa-wallet'
}, {
  type: 'font-awesome',
  text: 'fas fa-warehouse'
}, {
  type: 'font-awesome',
  text: 'fas fa-water'
}, {
  type: 'font-awesome',
  text: 'fas fa-weight'
}, {
  type: 'font-awesome',
  text: 'fas fa-weight-hanging'
}, {
  type: 'font-awesome',
  text: 'fas fa-wheelchair'
}, {
  type: 'font-awesome',
  text: 'fas fa-wifi'
}, {
  type: 'font-awesome',
  text: 'fas fa-wind'
}, {
  type: 'font-awesome',
  text: 'fas fa-window-close'
}, {
  type: 'font-awesome',
  text: 'fas fa-window-maximize'
}, {
  type: 'font-awesome',
  text: 'fas fa-window-minimize'
}, {
  type: 'font-awesome',
  text: 'fas fa-window-restore'
}, {
  type: 'font-awesome',
  text: 'fas fa-wine-bottle'
}, {
  type: 'font-awesome',
  text: 'fas fa-wine-glass'
}, {
  type: 'font-awesome',
  text: 'fas fa-wine-glass-alt'
}, {
  type: 'font-awesome',
  text: 'fas fa-won-sign'
}, {
  type: 'font-awesome',
  text: 'fas fa-wrench'
}, {
  type: 'font-awesome',
  text: 'fas fa-x-ray'
}, {
  type: 'font-awesome',
  text: 'fas fa-yen-sign'
}, {
  type: 'font-awesome',
  text: 'fas fa-yin-yang'
}, {
  type: 'font-awesome',
  text: 'far fa-address-book'
}, {
  type: 'font-awesome',
  text: 'far fa-address-card'
}, {
  type: 'font-awesome',
  text: 'far fa-angry'
}, {
  type: 'font-awesome',
  text: 'far fa-arrow-alt-circle-down'
}, {
  type: 'font-awesome',
  text: 'far fa-arrow-alt-circle-left'
}, {
  type: 'font-awesome',
  text: 'far fa-arrow-alt-circle-right'
}, {
  type: 'font-awesome',
  text: 'far fa-arrow-alt-circle-up'
}, {
  type: 'font-awesome',
  text: 'far fa-bell'
}, {
  type: 'font-awesome',
  text: 'far fa-bell-slash'
}, {
  type: 'font-awesome',
  text: 'far fa-bookmark'
}, {
  type: 'font-awesome',
  text: 'far fa-building'
}, {
  type: 'font-awesome',
  text: 'far fa-calendar'
}, {
  type: 'font-awesome',
  text: 'far fa-calendar-alt'
}, {
  type: 'font-awesome',
  text: 'far fa-calendar-check'
}, {
  type: 'font-awesome',
  text: 'far fa-calendar-minus'
}, {
  type: 'font-awesome',
  text: 'far fa-calendar-plus'
}, {
  type: 'font-awesome',
  text: 'far fa-calendar-times'
}, {
  type: 'font-awesome',
  text: 'far fa-caret-square-down'
}, {
  type: 'font-awesome',
  text: 'far fa-caret-square-left'
}, {
  type: 'font-awesome',
  text: 'far fa-caret-square-right'
}, {
  type: 'font-awesome',
  text: 'far fa-caret-square-up'
}, {
  type: 'font-awesome',
  text: 'far fa-chart-bar'
}, {
  type: 'font-awesome',
  text: 'far fa-check-circle'
}, {
  type: 'font-awesome',
  text: 'far fa-check-square'
}, {
  type: 'font-awesome',
  text: 'far fa-circle'
}, {
  type: 'font-awesome',
  text: 'far fa-clipboard'
}, {
  type: 'font-awesome',
  text: 'far fa-clock'
}, {
  type: 'font-awesome',
  text: 'far fa-clone'
}, {
  type: 'font-awesome',
  text: 'far fa-closed-captioning'
}, {
  type: 'font-awesome',
  text: 'far fa-comment'
}, {
  type: 'font-awesome',
  text: 'far fa-comment-alt'
}, {
  type: 'font-awesome',
  text: 'far fa-comment-dots'
}, {
  type: 'font-awesome',
  text: 'far fa-comments'
}, {
  type: 'font-awesome',
  text: 'far fa-compass'
}, {
  type: 'font-awesome',
  text: 'far fa-copy'
}, {
  type: 'font-awesome',
  text: 'far fa-copyright'
}, {
  type: 'font-awesome',
  text: 'far fa-credit-card'
}, {
  type: 'font-awesome',
  text: 'far fa-dizzy'
}, {
  type: 'font-awesome',
  text: 'far fa-dot-circle'
}, {
  type: 'font-awesome',
  text: 'far fa-edit'
}, {
  type: 'font-awesome',
  text: 'far fa-envelope'
}, {
  type: 'font-awesome',
  text: 'far fa-envelope-open'
}, {
  type: 'font-awesome',
  text: 'far fa-eye'
}, {
  type: 'font-awesome',
  text: 'far fa-eye-slash'
}, {
  type: 'font-awesome',
  text: 'far fa-file'
}, {
  type: 'font-awesome',
  text: 'far fa-file-alt'
}, {
  type: 'font-awesome',
  text: 'far fa-file-archive'
}, {
  type: 'font-awesome',
  text: 'far fa-file-audio'
}, {
  type: 'font-awesome',
  text: 'far fa-file-code'
}, {
  type: 'font-awesome',
  text: 'far fa-file-excel'
}, {
  type: 'font-awesome',
  text: 'far fa-file-image'
}, {
  type: 'font-awesome',
  text: 'far fa-file-pdf'
}, {
  type: 'font-awesome',
  text: 'far fa-file-powerpoint'
}, {
  type: 'font-awesome',
  text: 'far fa-file-video'
}, {
  type: 'font-awesome',
  text: 'far fa-file-word'
}, {
  type: 'font-awesome',
  text: 'far fa-flag'
}, {
  type: 'font-awesome',
  text: 'far fa-flushed'
}, {
  type: 'font-awesome',
  text: 'far fa-folder'
}, {
  type: 'font-awesome',
  text: 'far fa-folder-open'
}, {
  type: 'font-awesome',
  text: 'far fa-frown'
}, {
  type: 'font-awesome',
  text: 'far fa-frown-open'
}, {
  type: 'font-awesome',
  text: 'far fa-futbol'
}, {
  type: 'font-awesome',
  text: 'far fa-gem'
}, {
  type: 'font-awesome',
  text: 'far fa-grimace'
}, {
  type: 'font-awesome',
  text: 'far fa-grin'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-alt'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-beam'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-beam-sweat'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-hearts'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-squint'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-squint-tears'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-stars'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-tears'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-tongue'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-tongue-squint'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-tongue-wink'
}, {
  type: 'font-awesome',
  text: 'far fa-grin-wink'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-lizard'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-paper'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-peace'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-point-down'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-point-left'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-point-right'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-point-up'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-pointer'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-rock'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-scissors'
}, {
  type: 'font-awesome',
  text: 'far fa-hand-spock'
}, {
  type: 'font-awesome',
  text: 'far fa-handshake'
}, {
  type: 'font-awesome',
  text: 'far fa-hdd'
}, {
  type: 'font-awesome',
  text: 'far fa-heart'
}, {
  type: 'font-awesome',
  text: 'far fa-hospital'
}, {
  type: 'font-awesome',
  text: 'far fa-hourglass'
}, {
  type: 'font-awesome',
  text: 'far fa-id-badge'
}, {
  type: 'font-awesome',
  text: 'far fa-id-card'
}, {
  type: 'font-awesome',
  text: 'far fa-image'
}, {
  type: 'font-awesome',
  text: 'far fa-images'
}, {
  type: 'font-awesome',
  text: 'far fa-keyboard'
}, {
  type: 'font-awesome',
  text: 'far fa-kiss'
}, {
  type: 'font-awesome',
  text: 'far fa-kiss-beam'
}, {
  type: 'font-awesome',
  text: 'far fa-kiss-wink-heart'
}, {
  type: 'font-awesome',
  text: 'far fa-laugh'
}, {
  type: 'font-awesome',
  text: 'far fa-laugh-beam'
}, {
  type: 'font-awesome',
  text: 'far fa-laugh-squint'
}, {
  type: 'font-awesome',
  text: 'far fa-laugh-wink'
}, {
  type: 'font-awesome',
  text: 'far fa-lemon'
}, {
  type: 'font-awesome',
  text: 'far fa-life-ring'
}, {
  type: 'font-awesome',
  text: 'far fa-lightbulb'
}, {
  type: 'font-awesome',
  text: 'far fa-list-alt'
}, {
  type: 'font-awesome',
  text: 'far fa-map'
}, {
  type: 'font-awesome',
  text: 'far fa-meh'
}, {
  type: 'font-awesome',
  text: 'far fa-meh-blank'
}, {
  type: 'font-awesome',
  text: 'far fa-meh-rolling-eyes'
}, {
  type: 'font-awesome',
  text: 'far fa-minus-square'
}, {
  type: 'font-awesome',
  text: 'far fa-money-bill-alt'
}, {
  type: 'font-awesome',
  text: 'far fa-moon'
}, {
  type: 'font-awesome',
  text: 'far fa-newspaper'
}, {
  type: 'font-awesome',
  text: 'far fa-object-group'
}, {
  type: 'font-awesome',
  text: 'far fa-object-ungroup'
}, {
  type: 'font-awesome',
  text: 'far fa-paper-plane'
}, {
  type: 'font-awesome',
  text: 'far fa-pause-circle'
}, {
  type: 'font-awesome',
  text: 'far fa-play-circle'
}, {
  type: 'font-awesome',
  text: 'far fa-plus-square'
}, {
  type: 'font-awesome',
  text: 'far fa-question-circle'
}, {
  type: 'font-awesome',
  text: 'far fa-registered'
}, {
  type: 'font-awesome',
  text: 'far fa-sad-cry'
}, {
  type: 'font-awesome',
  text: 'far fa-sad-tear'
}, {
  type: 'font-awesome',
  text: 'far fa-save'
}, {
  type: 'font-awesome',
  text: 'far fa-share-square'
}, {
  type: 'font-awesome',
  text: 'far fa-smile'
}, {
  type: 'font-awesome',
  text: 'far fa-smile-beam'
}, {
  type: 'font-awesome',
  text: 'far fa-smile-wink'
}, {
  type: 'font-awesome',
  text: 'far fa-snowflake'
}, {
  type: 'font-awesome',
  text: 'far fa-square'
}, {
  type: 'font-awesome',
  text: 'far fa-star'
}, {
  type: 'font-awesome',
  text: 'far fa-star-half'
}, {
  type: 'font-awesome',
  text: 'far fa-sticky-note'
}, {
  type: 'font-awesome',
  text: 'far fa-stop-circle'
}, {
  type: 'font-awesome',
  text: 'far fa-sun'
}, {
  type: 'font-awesome',
  text: 'far fa-surprise'
}, {
  type: 'font-awesome',
  text: 'far fa-thumbs-down'
}, {
  type: 'font-awesome',
  text: 'far fa-thumbs-up'
}, {
  type: 'font-awesome',
  text: 'far fa-times-circle'
}, {
  type: 'font-awesome',
  text: 'far fa-tired'
}, {
  type: 'font-awesome',
  text: 'far fa-trash-alt'
}, {
  type: 'font-awesome',
  text: 'far fa-user'
}, {
  type: 'font-awesome',
  text: 'far fa-user-circle'
}, {
  type: 'font-awesome',
  text: 'far fa-window-close'
}, {
  type: 'font-awesome',
  text: 'far fa-window-maximize'
}, {
  type: 'font-awesome',
  text: 'far fa-window-minimize'
}, {
  type: 'font-awesome',
  text: 'far fa-window-restore'
}, {
  type: 'font-awesome',
  text: 'fab fa-500px'
}, {
  type: 'font-awesome',
  text: 'fab fa-accessible-icon'
}, {
  type: 'font-awesome',
  text: 'fab fa-accusoft'
}, {
  type: 'font-awesome',
  text: 'fab fa-acquisitions-incorporated'
}, {
  type: 'font-awesome',
  text: 'fab fa-adn'
}, {
  type: 'font-awesome',
  text: 'fab fa-adobe'
}, {
  type: 'font-awesome',
  text: 'fab fa-adversal'
}, {
  type: 'font-awesome',
  text: 'fab fa-affiliatetheme'
}, {
  type: 'font-awesome',
  text: 'fab fa-algolia'
}, {
  type: 'font-awesome',
  text: 'fab fa-alipay'
}, {
  type: 'font-awesome',
  text: 'fab fa-amazon'
}, {
  type: 'font-awesome',
  text: 'fab fa-amazon-pay'
}, {
  type: 'font-awesome',
  text: 'fab fa-amilia'
}, {
  type: 'font-awesome',
  text: 'fab fa-android'
}, {
  type: 'font-awesome',
  text: 'fab fa-angellist'
}, {
  type: 'font-awesome',
  text: 'fab fa-angrycreative'
}, {
  type: 'font-awesome',
  text: 'fab fa-angular'
}, {
  type: 'font-awesome',
  text: 'fab fa-app-store'
}, {
  type: 'font-awesome',
  text: 'fab fa-app-store-ios'
}, {
  type: 'font-awesome',
  text: 'fab fa-apper'
}, {
  type: 'font-awesome',
  text: 'fab fa-apple'
}, {
  type: 'font-awesome',
  text: 'fab fa-apple-pay'
}, {
  type: 'font-awesome',
  text: 'fab fa-artstation'
}, {
  type: 'font-awesome',
  text: 'fab fa-asymmetrik'
}, {
  type: 'font-awesome',
  text: 'fab fa-atlassian'
}, {
  type: 'font-awesome',
  text: 'fab fa-audible'
}, {
  type: 'font-awesome',
  text: 'fab fa-autoprefixer'
}, {
  type: 'font-awesome',
  text: 'fab fa-avianex'
}, {
  type: 'font-awesome',
  text: 'fab fa-aviato'
}, {
  type: 'font-awesome',
  text: 'fab fa-aws'
}, {
  type: 'font-awesome',
  text: 'fab fa-bandcamp'
}, {
  type: 'font-awesome',
  text: 'fab fa-behance'
}, {
  type: 'font-awesome',
  text: 'fab fa-behance-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-bimobject'
}, {
  type: 'font-awesome',
  text: 'fab fa-bitbucket'
}, {
  type: 'font-awesome',
  text: 'fab fa-bitcoin'
}, {
  type: 'font-awesome',
  text: 'fab fa-bity'
}, {
  type: 'font-awesome',
  text: 'fab fa-black-tie'
}, {
  type: 'font-awesome',
  text: 'fab fa-blackberry'
}, {
  type: 'font-awesome',
  text: 'fab fa-blogger'
}, {
  type: 'font-awesome',
  text: 'fab fa-blogger-b'
}, {
  type: 'font-awesome',
  text: 'fab fa-bluetooth'
}, {
  type: 'font-awesome',
  text: 'fab fa-bluetooth-b'
}, {
  type: 'font-awesome',
  text: 'fab fa-btc'
}, {
  type: 'font-awesome',
  text: 'fab fa-buromobelexperte'
}, {
  type: 'font-awesome',
  text: 'fab fa-canadian-maple-leaf'
}, {
  type: 'font-awesome',
  text: 'fab fa-cc-amazon-pay'
}, {
  type: 'font-awesome',
  text: 'fab fa-cc-amex'
}, {
  type: 'font-awesome',
  text: 'fab fa-cc-apple-pay'
}, {
  type: 'font-awesome',
  text: 'fab fa-cc-diners-club'
}, {
  type: 'font-awesome',
  text: 'fab fa-cc-discover'
}, {
  type: 'font-awesome',
  text: 'fab fa-cc-jcb'
}, {
  type: 'font-awesome',
  text: 'fab fa-cc-mastercard'
}, {
  type: 'font-awesome',
  text: 'fab fa-cc-paypal'
}, {
  type: 'font-awesome',
  text: 'fab fa-cc-stripe'
}, {
  type: 'font-awesome',
  text: 'fab fa-cc-visa'
}, {
  type: 'font-awesome',
  text: 'fab fa-centercode'
}, {
  type: 'font-awesome',
  text: 'fab fa-centos'
}, {
  type: 'font-awesome',
  text: 'fab fa-chrome'
}, {
  type: 'font-awesome',
  text: 'fab fa-cloudscale'
}, {
  type: 'font-awesome',
  text: 'fab fa-cloudsmith'
}, {
  type: 'font-awesome',
  text: 'fab fa-cloudversify'
}, {
  type: 'font-awesome',
  text: 'fab fa-codepen'
}, {
  type: 'font-awesome',
  text: 'fab fa-codiepie'
}, {
  type: 'font-awesome',
  text: 'fab fa-confluence'
}, {
  type: 'font-awesome',
  text: 'fab fa-connectdevelop'
}, {
  type: 'font-awesome',
  text: 'fab fa-contao'
}, {
  type: 'font-awesome',
  text: 'fab fa-cpanel'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-by'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-nc'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-nc-eu'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-nc-jp'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-nd'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-pd'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-pd-alt'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-remix'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-sa'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-sampling'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-sampling-plus'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-share'
}, {
  type: 'font-awesome',
  text: 'fab fa-creative-commons-zero'
}, {
  type: 'font-awesome',
  text: 'fab fa-critical-role'
}, {
  type: 'font-awesome',
  text: 'fab fa-css3'
}, {
  type: 'font-awesome',
  text: 'fab fa-css3-alt'
}, {
  type: 'font-awesome',
  text: 'fab fa-cuttlefish'
}, {
  type: 'font-awesome',
  text: 'fab fa-d-and-d'
}, {
  type: 'font-awesome',
  text: 'fab fa-d-and-d-beyond'
}, {
  type: 'font-awesome',
  text: 'fab fa-dashcube'
}, {
  type: 'font-awesome',
  text: 'fab fa-delicious'
}, {
  type: 'font-awesome',
  text: 'fab fa-deploydog'
}, {
  type: 'font-awesome',
  text: 'fab fa-deskpro'
}, {
  type: 'font-awesome',
  text: 'fab fa-dev'
}, {
  type: 'font-awesome',
  text: 'fab fa-deviantart'
}, {
  type: 'font-awesome',
  text: 'fab fa-dhl'
}, {
  type: 'font-awesome',
  text: 'fab fa-diaspora'
}, {
  type: 'font-awesome',
  text: 'fab fa-digg'
}, {
  type: 'font-awesome',
  text: 'fab fa-digital-ocean'
}, {
  type: 'font-awesome',
  text: 'fab fa-discord'
}, {
  type: 'font-awesome',
  text: 'fab fa-discourse'
}, {
  type: 'font-awesome',
  text: 'fab fa-dochub'
}, {
  type: 'font-awesome',
  text: 'fab fa-docker'
}, {
  type: 'font-awesome',
  text: 'fab fa-draft2digital'
}, {
  type: 'font-awesome',
  text: 'fab fa-dribbble'
}, {
  type: 'font-awesome',
  text: 'fab fa-dribbble-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-dropbox'
}, {
  type: 'font-awesome',
  text: 'fab fa-drupal'
}, {
  type: 'font-awesome',
  text: 'fab fa-dyalog'
}, {
  type: 'font-awesome',
  text: 'fab fa-earlybirds'
}, {
  type: 'font-awesome',
  text: 'fab fa-ebay'
}, {
  type: 'font-awesome',
  text: 'fab fa-edge'
}, {
  type: 'font-awesome',
  text: 'fab fa-elementor'
}, {
  type: 'font-awesome',
  text: 'fab fa-ello'
}, {
  type: 'font-awesome',
  text: 'fab fa-ember'
}, {
  type: 'font-awesome',
  text: 'fab fa-empire'
}, {
  type: 'font-awesome',
  text: 'fab fa-envira'
}, {
  type: 'font-awesome',
  text: 'fab fa-erlang'
}, {
  type: 'font-awesome',
  text: 'fab fa-ethereum'
}, {
  type: 'font-awesome',
  text: 'fab fa-etsy'
}, {
  type: 'font-awesome',
  text: 'fab fa-expeditedssl'
}, {
  type: 'font-awesome',
  text: 'fab fa-facebook'
}, {
  type: 'font-awesome',
  text: 'fab fa-facebook-f'
}, {
  type: 'font-awesome',
  text: 'fab fa-facebook-messenger'
}, {
  type: 'font-awesome',
  text: 'fab fa-facebook-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-fantasy-flight-games'
}, {
  type: 'font-awesome',
  text: 'fab fa-fedex'
}, {
  type: 'font-awesome',
  text: 'fab fa-fedora'
}, {
  type: 'font-awesome',
  text: 'fab fa-figma'
}, {
  type: 'font-awesome',
  text: 'fab fa-firefox'
}, {
  type: 'font-awesome',
  text: 'fab fa-first-order'
}, {
  type: 'font-awesome',
  text: 'fab fa-first-order-alt'
}, {
  type: 'font-awesome',
  text: 'fab fa-firstdraft'
}, {
  type: 'font-awesome',
  text: 'fab fa-flickr'
}, {
  type: 'font-awesome',
  text: 'fab fa-flipboard'
}, {
  type: 'font-awesome',
  text: 'fab fa-fly'
}, {
  type: 'font-awesome',
  text: 'fab fa-font-awesome'
}, {
  type: 'font-awesome',
  text: 'fab fa-font-awesome-alt'
}, {
  type: 'font-awesome',
  text: 'fab fa-font-awesome-flag'
}, {
  type: 'font-awesome',
  text: 'fab fa-fonticons'
}, {
  type: 'font-awesome',
  text: 'fab fa-fonticons-fi'
}, {
  type: 'font-awesome',
  text: 'fab fa-fort-awesome'
}, {
  type: 'font-awesome',
  text: 'fab fa-fort-awesome-alt'
}, {
  type: 'font-awesome',
  text: 'fab fa-forumbee'
}, {
  type: 'font-awesome',
  text: 'fab fa-foursquare'
}, {
  type: 'font-awesome',
  text: 'fab fa-free-code-camp'
}, {
  type: 'font-awesome',
  text: 'fab fa-freebsd'
}, {
  type: 'font-awesome',
  text: 'fab fa-fulcrum'
}, {
  type: 'font-awesome',
  text: 'fab fa-galactic-republic'
}, {
  type: 'font-awesome',
  text: 'fab fa-galactic-senate'
}, {
  type: 'font-awesome',
  text: 'fab fa-get-pocket'
}, {
  type: 'font-awesome',
  text: 'fab fa-gg'
}, {
  type: 'font-awesome',
  text: 'fab fa-gg-circle'
}, {
  type: 'font-awesome',
  text: 'fab fa-git'
}, {
  type: 'font-awesome',
  text: 'fab fa-git-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-github'
}, {
  type: 'font-awesome',
  text: 'fab fa-github-alt'
}, {
  type: 'font-awesome',
  text: 'fab fa-github-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-gitkraken'
}, {
  type: 'font-awesome',
  text: 'fab fa-gitlab'
}, {
  type: 'font-awesome',
  text: 'fab fa-gitter'
}, {
  type: 'font-awesome',
  text: 'fab fa-glide'
}, {
  type: 'font-awesome',
  text: 'fab fa-glide-g'
}, {
  type: 'font-awesome',
  text: 'fab fa-gofore'
}, {
  type: 'font-awesome',
  text: 'fab fa-goodreads'
}, {
  type: 'font-awesome',
  text: 'fab fa-goodreads-g'
}, {
  type: 'font-awesome',
  text: 'fab fa-google'
}, {
  type: 'font-awesome',
  text: 'fab fa-google-drive'
}, {
  type: 'font-awesome',
  text: 'fab fa-google-play'
}, {
  type: 'font-awesome',
  text: 'fab fa-google-plus'
}, {
  type: 'font-awesome',
  text: 'fab fa-google-plus-g'
}, {
  type: 'font-awesome',
  text: 'fab fa-google-plus-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-google-wallet'
}, {
  type: 'font-awesome',
  text: 'fab fa-gratipay'
}, {
  type: 'font-awesome',
  text: 'fab fa-grav'
}, {
  type: 'font-awesome',
  text: 'fab fa-gripfire'
}, {
  type: 'font-awesome',
  text: 'fab fa-grunt'
}, {
  type: 'font-awesome',
  text: 'fab fa-gulp'
}, {
  type: 'font-awesome',
  text: 'fab fa-hacker-news'
}, {
  type: 'font-awesome',
  text: 'fab fa-hacker-news-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-hackerrank'
}, {
  type: 'font-awesome',
  text: 'fab fa-hips'
}, {
  type: 'font-awesome',
  text: 'fab fa-hire-a-helper'
}, {
  type: 'font-awesome',
  text: 'fab fa-hooli'
}, {
  type: 'font-awesome',
  text: 'fab fa-hornbill'
}, {
  type: 'font-awesome',
  text: 'fab fa-hotjar'
}, {
  type: 'font-awesome',
  text: 'fab fa-houzz'
}, {
  type: 'font-awesome',
  text: 'fab fa-html5'
}, {
  type: 'font-awesome',
  text: 'fab fa-hubspot'
}, {
  type: 'font-awesome',
  text: 'fab fa-imdb'
}, {
  type: 'font-awesome',
  text: 'fab fa-instagram'
}, {
  type: 'font-awesome',
  text: 'fab fa-intercom'
}, {
  type: 'font-awesome',
  text: 'fab fa-internet-explorer'
}, {
  type: 'font-awesome',
  text: 'fab fa-invision'
}, {
  type: 'font-awesome',
  text: 'fab fa-ioxhost'
}, {
  type: 'font-awesome',
  text: 'fab fa-itunes'
}, {
  type: 'font-awesome',
  text: 'fab fa-itunes-note'
}, {
  type: 'font-awesome',
  text: 'fab fa-java'
}, {
  type: 'font-awesome',
  text: 'fab fa-jedi-order'
}, {
  type: 'font-awesome',
  text: 'fab fa-jenkins'
}, {
  type: 'font-awesome',
  text: 'fab fa-jira'
}, {
  type: 'font-awesome',
  text: 'fab fa-joget'
}, {
  type: 'font-awesome',
  text: 'fab fa-joomla'
}, {
  type: 'font-awesome',
  text: 'fab fa-js'
}, {
  type: 'font-awesome',
  text: 'fab fa-js-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-jsfiddle'
}, {
  type: 'font-awesome',
  text: 'fab fa-kaggle'
}, {
  type: 'font-awesome',
  text: 'fab fa-keybase'
}, {
  type: 'font-awesome',
  text: 'fab fa-keycdn'
}, {
  type: 'font-awesome',
  text: 'fab fa-kickstarter'
}, {
  type: 'font-awesome',
  text: 'fab fa-kickstarter-k'
}, {
  type: 'font-awesome',
  text: 'fab fa-korvue'
}, {
  type: 'font-awesome',
  text: 'fab fa-laravel'
}, {
  type: 'font-awesome',
  text: 'fab fa-lastfm'
}, {
  type: 'font-awesome',
  text: 'fab fa-lastfm-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-leanpub'
}, {
  type: 'font-awesome',
  text: 'fab fa-less'
}, {
  type: 'font-awesome',
  text: 'fab fa-line'
}, {
  type: 'font-awesome',
  text: 'fab fa-linkedin'
}, {
  type: 'font-awesome',
  text: 'fab fa-linkedin-in'
}, {
  type: 'font-awesome',
  text: 'fab fa-linode'
}, {
  type: 'font-awesome',
  text: 'fab fa-linux'
}, {
  type: 'font-awesome',
  text: 'fab fa-lyft'
}, {
  type: 'font-awesome',
  text: 'fab fa-magento'
}, {
  type: 'font-awesome',
  text: 'fab fa-mailchimp'
}, {
  type: 'font-awesome',
  text: 'fab fa-mandalorian'
}, {
  type: 'font-awesome',
  text: 'fab fa-markdown'
}, {
  type: 'font-awesome',
  text: 'fab fa-mastodon'
}, {
  type: 'font-awesome',
  text: 'fab fa-maxcdn'
}, {
  type: 'font-awesome',
  text: 'fab fa-medapps'
}, {
  type: 'font-awesome',
  text: 'fab fa-medium'
}, {
  type: 'font-awesome',
  text: 'fab fa-medium-m'
}, {
  type: 'font-awesome',
  text: 'fab fa-medrt'
}, {
  type: 'font-awesome',
  text: 'fab fa-meetup'
}, {
  type: 'font-awesome',
  text: 'fab fa-megaport'
}, {
  type: 'font-awesome',
  text: 'fab fa-mendeley'
}, {
  type: 'font-awesome',
  text: 'fab fa-microsoft'
}, {
  type: 'font-awesome',
  text: 'fab fa-mix'
}, {
  type: 'font-awesome',
  text: 'fab fa-mixcloud'
}, {
  type: 'font-awesome',
  text: 'fab fa-mizuni'
}, {
  type: 'font-awesome',
  text: 'fab fa-modx'
}, {
  type: 'font-awesome',
  text: 'fab fa-monero'
}, {
  type: 'font-awesome',
  text: 'fab fa-napster'
}, {
  type: 'font-awesome',
  text: 'fab fa-neos'
}, {
  type: 'font-awesome',
  text: 'fab fa-nimblr'
}, {
  type: 'font-awesome',
  text: 'fab fa-nintendo-switch'
}, {
  type: 'font-awesome',
  text: 'fab fa-node'
}, {
  type: 'font-awesome',
  text: 'fab fa-node-js'
}, {
  type: 'font-awesome',
  text: 'fab fa-npm'
}, {
  type: 'font-awesome',
  text: 'fab fa-ns8'
}, {
  type: 'font-awesome',
  text: 'fab fa-nutritionix'
}, {
  type: 'font-awesome',
  text: 'fab fa-odnoklassniki'
}, {
  type: 'font-awesome',
  text: 'fab fa-odnoklassniki-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-old-republic'
}, {
  type: 'font-awesome',
  text: 'fab fa-opencart'
}, {
  type: 'font-awesome',
  text: 'fab fa-openid'
}, {
  type: 'font-awesome',
  text: 'fab fa-opera'
}, {
  type: 'font-awesome',
  text: 'fab fa-optin-monster'
}, {
  type: 'font-awesome',
  text: 'fab fa-osi'
}, {
  type: 'font-awesome',
  text: 'fab fa-page4'
}, {
  type: 'font-awesome',
  text: 'fab fa-pagelines'
}, {
  type: 'font-awesome',
  text: 'fab fa-palfed'
}, {
  type: 'font-awesome',
  text: 'fab fa-patreon'
}, {
  type: 'font-awesome',
  text: 'fab fa-paypal'
}, {
  type: 'font-awesome',
  text: 'fab fa-penny-arcade'
}, {
  type: 'font-awesome',
  text: 'fab fa-periscope'
}, {
  type: 'font-awesome',
  text: 'fab fa-phabricator'
}, {
  type: 'font-awesome',
  text: 'fab fa-phoenix-framework'
}, {
  type: 'font-awesome',
  text: 'fab fa-phoenix-squadron'
}, {
  type: 'font-awesome',
  text: 'fab fa-php'
}, {
  type: 'font-awesome',
  text: 'fab fa-pied-piper'
}, {
  type: 'font-awesome',
  text: 'fab fa-pied-piper-alt'
}, {
  type: 'font-awesome',
  text: 'fab fa-pied-piper-hat'
}, {
  type: 'font-awesome',
  text: 'fab fa-pied-piper-pp'
}, {
  type: 'font-awesome',
  text: 'fab fa-pinterest'
}, {
  type: 'font-awesome',
  text: 'fab fa-pinterest-p'
}, {
  type: 'font-awesome',
  text: 'fab fa-pinterest-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-playstation'
}, {
  type: 'font-awesome',
  text: 'fab fa-product-hunt'
}, {
  type: 'font-awesome',
  text: 'fab fa-pushed'
}, {
  type: 'font-awesome',
  text: 'fab fa-python'
}, {
  type: 'font-awesome',
  text: 'fab fa-qq'
}, {
  type: 'font-awesome',
  text: 'fab fa-quinscape'
}, {
  type: 'font-awesome',
  text: 'fab fa-quora'
}, {
  type: 'font-awesome',
  text: 'fab fa-r-project'
}, {
  type: 'font-awesome',
  text: 'fab fa-raspberry-pi'
}, {
  type: 'font-awesome',
  text: 'fab fa-ravelry'
}, {
  type: 'font-awesome',
  text: 'fab fa-react'
}, {
  type: 'font-awesome',
  text: 'fab fa-reacteurope'
}, {
  type: 'font-awesome',
  text: 'fab fa-readme'
}, {
  type: 'font-awesome',
  text: 'fab fa-rebel'
}, {
  type: 'font-awesome',
  text: 'fab fa-red-river'
}, {
  type: 'font-awesome',
  text: 'fab fa-reddit'
}, {
  type: 'font-awesome',
  text: 'fab fa-reddit-alien'
}, {
  type: 'font-awesome',
  text: 'fab fa-reddit-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-redhat'
}, {
  type: 'font-awesome',
  text: 'fab fa-renren'
}, {
  type: 'font-awesome',
  text: 'fab fa-replyd'
}, {
  type: 'font-awesome',
  text: 'fab fa-researchgate'
}, {
  type: 'font-awesome',
  text: 'fab fa-resolving'
}, {
  type: 'font-awesome',
  text: 'fab fa-rev'
}, {
  type: 'font-awesome',
  text: 'fab fa-rocketchat'
}, {
  type: 'font-awesome',
  text: 'fab fa-rockrms'
}, {
  type: 'font-awesome',
  text: 'fab fa-safabi'
}, {
  type: 'font-awesome',
  text: 'fab fa-sass'
}, {
  type: 'font-awesome',
  text: 'fab fa-schlix'
}, {
  type: 'font-awesome',
  text: 'fab fa-scribd'
}, {
  type: 'font-awesome',
  text: 'fab fa-searchengin'
}, {
  type: 'font-awesome',
  text: 'fab fa-sellcast'
}, {
  type: 'font-awesome',
  text: 'fab fa-sellsy'
}, {
  type: 'font-awesome',
  text: 'fab fa-servicestack'
}, {
  type: 'font-awesome',
  text: 'fab fa-shirtsinbulk'
}, {
  type: 'font-awesome',
  text: 'fab fa-shopware'
}, {
  type: 'font-awesome',
  text: 'fab fa-simplybuilt'
}, {
  type: 'font-awesome',
  text: 'fab fa-sistrix'
}, {
  type: 'font-awesome',
  text: 'fab fa-sith'
}, {
  type: 'font-awesome',
  text: 'fab fa-sketch'
}, {
  type: 'font-awesome',
  text: 'fab fa-skyatlas'
}, {
  type: 'font-awesome',
  text: 'fab fa-skype'
}, {
  type: 'font-awesome',
  text: 'fab fa-slack'
}, {
  type: 'font-awesome',
  text: 'fab fa-slack-hash'
}, {
  type: 'font-awesome',
  text: 'fab fa-slideshare'
}, {
  type: 'font-awesome',
  text: 'fab fa-snapchat'
}, {
  type: 'font-awesome',
  text: 'fab fa-snapchat-ghost'
}, {
  type: 'font-awesome',
  text: 'fab fa-snapchat-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-soundcloud'
}, {
  type: 'font-awesome',
  text: 'fab fa-sourcetree'
}, {
  type: 'font-awesome',
  text: 'fab fa-speakap'
}, {
  type: 'font-awesome',
  text: 'fab fa-spotify'
}, {
  type: 'font-awesome',
  text: 'fab fa-squarespace'
}, {
  type: 'font-awesome',
  text: 'fab fa-stack-exchange'
}, {
  type: 'font-awesome',
  text: 'fab fa-stack-overflow'
}, {
  type: 'font-awesome',
  text: 'fab fa-staylinked'
}, {
  type: 'font-awesome',
  text: 'fab fa-steam'
}, {
  type: 'font-awesome',
  text: 'fab fa-steam-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-steam-symbol'
}, {
  type: 'font-awesome',
  text: 'fab fa-sticker-mule'
}, {
  type: 'font-awesome',
  text: 'fab fa-strava'
}, {
  type: 'font-awesome',
  text: 'fab fa-stripe'
}, {
  type: 'font-awesome',
  text: 'fab fa-stripe-s'
}, {
  type: 'font-awesome',
  text: 'fab fa-studiovinari'
}, {
  type: 'font-awesome',
  text: 'fab fa-stumbleupon'
}, {
  type: 'font-awesome',
  text: 'fab fa-stumbleupon-circle'
}, {
  type: 'font-awesome',
  text: 'fab fa-superpowers'
}, {
  type: 'font-awesome',
  text: 'fab fa-supple'
}, {
  type: 'font-awesome',
  text: 'fab fa-suse'
}, {
  type: 'font-awesome',
  text: 'fab fa-teamspeak'
}, {
  type: 'font-awesome',
  text: 'fab fa-telegram'
}, {
  type: 'font-awesome',
  text: 'fab fa-telegram-plane'
}, {
  type: 'font-awesome',
  text: 'fab fa-tencent-weibo'
}, {
  type: 'font-awesome',
  text: 'fab fa-the-red-yeti'
}, {
  type: 'font-awesome',
  text: 'fab fa-themeco'
}, {
  type: 'font-awesome',
  text: 'fab fa-themeisle'
}, {
  type: 'font-awesome',
  text: 'fab fa-think-peaks'
}, {
  type: 'font-awesome',
  text: 'fab fa-trade-federation'
}, {
  type: 'font-awesome',
  text: 'fab fa-trello'
}, {
  type: 'font-awesome',
  text: 'fab fa-tripadvisor'
}, {
  type: 'font-awesome',
  text: 'fab fa-tumblr'
}, {
  type: 'font-awesome',
  text: 'fab fa-tumblr-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-twitch'
}, {
  type: 'font-awesome',
  text: 'fab fa-twitter'
}, {
  type: 'font-awesome',
  text: 'fab fa-twitter-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-typo3'
}, {
  type: 'font-awesome',
  text: 'fab fa-uber'
}, {
  type: 'font-awesome',
  text: 'fab fa-ubuntu'
}, {
  type: 'font-awesome',
  text: 'fab fa-uikit'
}, {
  type: 'font-awesome',
  text: 'fab fa-uniregistry'
}, {
  type: 'font-awesome',
  text: 'fab fa-untappd'
}, {
  type: 'font-awesome',
  text: 'fab fa-ups'
}, {
  type: 'font-awesome',
  text: 'fab fa-usb'
}, {
  type: 'font-awesome',
  text: 'fab fa-usps'
}, {
  type: 'font-awesome',
  text: 'fab fa-ussunnah'
}, {
  type: 'font-awesome',
  text: 'fab fa-vaadin'
}, {
  type: 'font-awesome',
  text: 'fab fa-viacoin'
}, {
  type: 'font-awesome',
  text: 'fab fa-viadeo'
}, {
  type: 'font-awesome',
  text: 'fab fa-viadeo-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-viber'
}, {
  type: 'font-awesome',
  text: 'fab fa-vimeo'
}, {
  type: 'font-awesome',
  text: 'fab fa-vimeo-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-vimeo-v'
}, {
  type: 'font-awesome',
  text: 'fab fa-vine'
}, {
  type: 'font-awesome',
  text: 'fab fa-vk'
}, {
  type: 'font-awesome',
  text: 'fab fa-vnv'
}, {
  type: 'font-awesome',
  text: 'fab fa-vuejs'
}, {
  type: 'font-awesome',
  text: 'fab fa-weebly'
}, {
  type: 'font-awesome',
  text: 'fab fa-weibo'
}, {
  type: 'font-awesome',
  text: 'fab fa-weixin'
}, {
  type: 'font-awesome',
  text: 'fab fa-whatsapp'
}, {
  type: 'font-awesome',
  text: 'fab fa-whatsapp-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-whmcs'
}, {
  type: 'font-awesome',
  text: 'fab fa-wikipedia-w'
}, {
  type: 'font-awesome',
  text: 'fab fa-windows'
}, {
  type: 'font-awesome',
  text: 'fab fa-wix'
}, {
  type: 'font-awesome',
  text: 'fab fa-wizards-of-the-coast'
}, {
  type: 'font-awesome',
  text: 'fab fa-wolf-pack-battalion'
}, {
  type: 'font-awesome',
  text: 'fab fa-wordpress'
}, {
  type: 'font-awesome',
  text: 'fab fa-wordpress-simple'
}, {
  type: 'font-awesome',
  text: 'fab fa-wpbeginner'
}, {
  type: 'font-awesome',
  text: 'fab fa-wpexplorer'
}, {
  type: 'font-awesome',
  text: 'fab fa-wpforms'
}, {
  type: 'font-awesome',
  text: 'fab fa-wpressr'
}, {
  type: 'font-awesome',
  text: 'fab fa-xbox'
}, {
  type: 'font-awesome',
  text: 'fab fa-xing'
}, {
  type: 'font-awesome',
  text: 'fab fa-xing-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-y-combinator'
}, {
  type: 'font-awesome',
  text: 'fab fa-yahoo'
}, {
  type: 'font-awesome',
  text: 'fab fa-yandex'
}, {
  type: 'font-awesome',
  text: 'fab fa-yandex-international'
}, {
  type: 'font-awesome',
  text: 'fab fa-yarn'
}, {
  type: 'font-awesome',
  text: 'fab fa-yelp'
}, {
  type: 'font-awesome',
  text: 'fab fa-yoast'
}, {
  type: 'font-awesome',
  text: 'fab fa-youtube'
}, {
  type: 'font-awesome',
  text: 'fab fa-youtube-square'
}, {
  type: 'font-awesome',
  text: 'fab fa-zhihu'
}];
var _default = icon;
exports["default"] = _default;

/***/ }),

/***/ "./src/createStore.js":
/*!****************************!*\
  !*** ./src/createStore.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ "redux-thunk"));

var _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ "./src/reducers/index.js"));

var _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

var _reduxFirestore = __webpack_require__(/*! redux-firestore */ "redux-firestore");

var _reactReduxFirebase = __webpack_require__(/*! react-redux-firebase */ "react-redux-firebase");

var _fbConfig = _interopRequireDefault(__webpack_require__(/*! ../fbConfig */ "./fbConfig.js"));

var middleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"].withExtraArgument({
  getFirebase: _reactReduxFirebase.getFirebase,
  getFirestore: _reduxFirestore.getFirestore
})));
var store = (0, _redux.createStore)(_reducers["default"], (0, _redux.compose)(middleware, (0, _reduxFirestore.reduxFirestore)(_fbConfig["default"]), (0, _reactReduxFirebase.reactReduxFirebase)(_fbConfig["default"])));

var _default = function _default(initialState) {
  return store;
};

exports["default"] = _default;

/***/ }),

/***/ "./src/helpers/builder.js":
/*!********************************!*\
  !*** ./src/helpers/builder.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderField = exports.addSubFieldGroup = exports.RenderFieldGroup = void 0;

var _jsx2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/jsx */ "@babel/runtime/helpers/jsx"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _fields = __webpack_require__(/*! ../components/fields */ "./src/components/fields/index.js");

var _icon = _interopRequireDefault(__webpack_require__(/*! ../components/fields/icon */ "./src/components/fields/icon.js"));

var _iconLibrary = _interopRequireDefault(__webpack_require__(/*! ../components/fields/iconLibrary */ "./src/components/fields/iconLibrary.js"));

var RenderFieldGroup = function RenderFieldGroup(_ref) {
  var panelType = _ref.panelType,
      title = _ref.title,
      icon = _ref.icon,
      subFieldGroup = _ref.subFieldGroup,
      _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? '' : _ref$fields;
  var fieldsArr = fields.split(',');
  return (0, _jsx2["default"])("div", {
    className: "panel-item",
    "panel-type": panelType
  }, void 0, (0, _jsx2["default"])("div", {
    className: "panel-item-title"
  }, void 0, icon && (0, _jsx2["default"])(_icon["default"], {
    icon: icon,
    size: icon.size
  }), (0, _jsx2["default"])("strong", {}, void 0, title)), (0, _jsx2["default"])("div", {
    className: "panel-item-content"
  }, void 0, subFieldGroup && Array.isArray(subFieldGroup) ? subFieldGroup.map(function (subfield) {
    return addSubFieldGroup({
      subfield: subfield
    });
  }) : fields && fieldsArr.map(function (field) {
    return renderField({
      element: field
    });
  })));
};

exports.RenderFieldGroup = RenderFieldGroup;

var addSubFieldGroup = function addSubFieldGroup(_ref2) {
  var subfield = _ref2.subfield;
  var icon = subfield.icon,
      title = subfield.title,
      fields = subfield.fields;
  var fieldsArr = fields ? fields : false;
  return (0, _jsx2["default"])("div", {
    className: "subfield-group",
    "subfield-type": subfield.type
  }, void 0, (0, _jsx2["default"])("div", {
    className: "subfield-group-title"
  }, void 0, (0, _jsx2["default"])("strong", {}, void 0, title), icon && (0, _jsx2["default"])(_icon["default"], {
    icon: icon,
    size: icon.size
  })), (0, _jsx2["default"])("div", {
    className: "subfield-group-content"
  }, void 0, Array.isArray(fieldsArr) && fieldsArr.length > 0 && fieldsArr.map(function (field) {
    return renderField({
      element: field
    });
  })));
};

exports.addSubFieldGroup = addSubFieldGroup;

var _ref4 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "panel-item field",
  type: "icon-library",
  name: "iconLibrary"
}, void 0, (0, _jsx2["default"])(_iconLibrary["default"], {}));

var _ref5 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "boxes"
}, void 0, (0, _jsx2["default"])("div", {
  className: "box active"
}, void 0, "B"), (0, _jsx2["default"])("div", {
  className: "box"
}, void 0, "I"), (0, _jsx2["default"])("div", {
  className: "box"
}, void 0, "S"));

var _ref6 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "boxes"
}, void 0, (0, _jsx2["default"])("div", {
  className: "box active"
}, void 0, (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "format_align_left")), (0, _jsx2["default"])("div", {
  className: "box"
}, void 0, (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "format_align_right")), (0, _jsx2["default"])("div", {
  className: "box"
}, void 0, (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "format_align_center")), (0, _jsx2["default"])("div", {
  className: "box"
}, void 0, (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "format_align_justify")));

var _ref7 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: "boxes"
}, void 0, (0, _jsx2["default"])("div", {
  className: "box active"
}, void 0, (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "vertical_align_center")), (0, _jsx2["default"])("div", {
  className: "box"
}, void 0, (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "vertical_align_top")), (0, _jsx2["default"])("div", {
  className: "box"
}, void 0, (0, _jsx2["default"])("i", {
  className: "material-icons"
}, void 0, "vertical_align_bottom")));

var _ref8 =
/*#__PURE__*/
(0, _jsx2["default"])("div", {
  className: ""
}, void 0, "not found");

var renderField = function renderField(_ref3) {
  var element = _ref3.element;
  var field = null;

  switch (element.type || element) {
    case 'fontFamily':
      field = (0, _jsx2["default"])("div", {
        className: "panel-item field",
        type: "dropdown",
        name: "fontFamily"
      }, void 0, (0, _jsx2["default"])(_fields.Select, {
        label: element.label || "Font Family",
        additionalClass: "inline",
        value: {
          value: 'roboto',
          label: 'Roboto'
        },
        options: [{
          value: "roboto",
          label: "Roboto"
        }, {
          value: "mono-space",
          label: "Mono-Space"
        }, {
          value: "Helvetica",
          label: "Helvetica"
        }]
      }));
      return field;

    case 'fontSize':
      field = (0, _jsx2["default"])("div", {
        className: "panel-item field",
        type: "dropdown",
        name: "fontSize"
      }, void 0, (0, _jsx2["default"])(_fields.Select, {
        label: element.label || "Font Size",
        additionalClass: "inline",
        options: [{
          value: "8",
          label: "8"
        }, {
          value: "10",
          label: "10"
        }, {
          value: "12",
          label: "12"
        }, {
          value: "14",
          label: "14"
        }, {
          value: "16",
          label: "16"
        }, {
          value: "18",
          label: "18"
        }, {
          value: "20",
          label: "20"
        }, {
          value: "22",
          label: "22"
        }, {
          value: "24",
          label: "24"
        }, {
          value: "26",
          label: "26"
        }, {
          value: "28",
          label: "28"
        }, {
          value: "30",
          label: "30"
        }, {
          value: "32",
          label: "32"
        }, {
          value: "34",
          label: "34"
        }, {
          value: "36",
          label: "36"
        }, {
          value: "38",
          label: "38"
        }, {
          value: "40",
          label: "40"
        }]
      }));
      return field;

    case 'colorPicker':
      field = (0, _jsx2["default"])("div", {
        className: "panel-item field",
        type: "colorpicker",
        name: "colorPicker"
      }, void 0, (0, _jsx2["default"])(_fields.ColorPicker, {
        type: "box",
        additionalClass: element.additionalClass,
        label: element.label,
        position: element.position
      }));
      return field;

    case 'icon-library':
      field = _ref4;
      return field;

    case 'dateField':
      field = (0, _jsx2["default"])("div", {
        className: "panel-item field",
        type: "dropdown",
        name: "date-field"
      }, void 0, (0, _jsx2["default"])(_fields.Select, {
        label: "Date Format",
        additionalClass: "inline",
        options: [{
          value: "YYYY-MM-DD",
          label: "YYYY-MM-DD"
        }, {
          value: "YYYY-MM",
          label: "YYYY-MM"
        }, {
          value: "DD-MM-YYYY",
          label: "DD-MM-YYYY"
        }]
      }));
      return field;

    case 'bold/italic/strikethrough':
      field = (0, _jsx2["default"])("div", {
        className: "panel-item field",
        type: "select",
        name: "bold/italic/strikethrough"
      }, void 0, (0, _jsx2["default"])("span", {}, void 0, element.label), _ref5);
      return field;

    case 'alignment_horizontal':
      field = (0, _jsx2["default"])("div", {
        className: "panel-item field",
        type: "select",
        name: "alignment_horizontal"
      }, void 0, (0, _jsx2["default"])("span", {}, void 0, element.label), _ref6);
      return field;

    case 'alignment_vertical':
      field = (0, _jsx2["default"])("div", {
        className: "panel-item field",
        type: "select",
        name: "alignment_vertical"
      }, void 0, (0, _jsx2["default"])("span", {}, void 0, element.label), _ref7);
      return field;

    default:
      return _ref8;
  }
};

exports.renderField = renderField;

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllAttributes = exports.UpperCase = exports.getParameterByName = exports.uuid = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var uuid = function uuid() {
  return String(Date.now() + Math.round(Math.random() * 10000));
};

exports.uuid = uuid;

var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

exports.getParameterByName = getParameterByName;

var UpperCase = function UpperCase(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return word[0].toUpperCase() + word.substr(1);
  }).join(' ');
};

exports.UpperCase = UpperCase;

var GetAllAttributes = function GetAllAttributes(input) {
  return (0, _toConsumableArray2["default"])(input.attributes).map(function (attr) {
    return attr.nodeName;
  });
};

exports.GetAllAttributes = GetAllAttributes;

/***/ }),

/***/ "./src/reducers/builder.js":
/*!*********************************!*\
  !*** ./src/reducers/builder.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var ActionTypes = _interopRequireWildcard(__webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.js"));

var initialState = {
  activeLayout: '',
  activeSection: '',
  basic_fields: 'open',
  quick_fields: 'open'
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionTypes.SET_ACTIVE_LAYOUT:
    case ActionTypes.ACTIVE_PATH_CHANGE:
    case ActionTypes.SET_ACTIVE_FIELD:
    case ActionTypes.LEFT_PANEL_MENU_HANDLER:
      return action.payload || false;

    default:
      return state;
  }
};

exports["default"] = _default;

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = __webpack_require__(/*! redux */ "redux");

var _userReducer = _interopRequireDefault(__webpack_require__(/*! ./userReducer */ "./src/reducers/userReducer.js"));

var _builder = _interopRequireDefault(__webpack_require__(/*! ./builder */ "./src/reducers/builder.js"));

var _rightPanel = _interopRequireDefault(__webpack_require__(/*! ./rightPanel */ "./src/reducers/rightPanel.js"));

var _template = _interopRequireDefault(__webpack_require__(/*! ./template */ "./src/reducers/template.js"));

var _default = (0, _redux.combineReducers)({
  user: _userReducer["default"],
  builder: _builder["default"],
  rightPanel: _rightPanel["default"],
  template: _template["default"]
});

exports["default"] = _default;

/***/ }),

/***/ "./src/reducers/rightPanel.js":
/*!************************************!*\
  !*** ./src/reducers/rightPanel.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var ActionTypes = _interopRequireWildcard(__webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.js"));

var initialState = {
  activeMenu: 'field-settings'
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionTypes.RIGHT_PANEL_MENU_SWITCH:
      return action.payload || false;

    default:
      return state;
  }
};

exports["default"] = _default;

/***/ }),

/***/ "./src/reducers/template.js":
/*!**********************************!*\
  !*** ./src/reducers/template.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var ActionTypes = _interopRequireWildcard(__webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.js"));

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ActionTypes.INIT_TEMPLATE:
    case ActionTypes.FETCH_TEMPLATE:
    case ActionTypes.FIELD_ITEM_CREATED:
    case ActionTypes.FIELD_ITEM_UPDATE:
    case ActionTypes.ADD_NEW_PAGE:
    case ActionTypes.ADD_NEW_LAYOUT:
      return action.payload || false;

    default:
      return state;
  }
};

exports["default"] = _default;

/***/ }),

/***/ "./src/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/userReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.js");

var initialState = {
  login: false
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _ActionTypes.CHECK_USER_CONNECTION:
    case _ActionTypes.INIT_USER:
    case _ActionTypes.USER_SIGN_IN:
    case _ActionTypes.USER_LOGOUT:
      return action.payload || false;

    default:
      return state;
  }
};

exports["default"] = _default;

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./server/server.js */"./server/server.js");


/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireWildcard":
/*!****************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireWildcard" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),

/***/ "@babel/runtime/helpers/jsx":
/*!*********************************************!*\
  !*** external "@babel/runtime/helpers/jsx" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/jsx");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("puppeteer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-color":
/*!******************************!*\
  !*** external "react-color" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-color");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-redux-firebase":
/*!***************************************!*\
  !*** external "react-redux-firebase" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux-firebase");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-textarea-autosize":
/*!******************************************!*\
  !*** external "react-textarea-autosize" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-textarea-autosize");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-firestore":
/*!**********************************!*\
  !*** external "redux-firestore" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-firestore");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map