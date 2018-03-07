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
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["a"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nodes__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__size__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__empty__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attr__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classed__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__html__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__raise__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lower__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__append__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__insert__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__remove__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__clone__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__datum__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__on__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dispatch__ = __webpack_require__(116);































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["b" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_6__merge__["a" /* default */],
  order: __WEBPACK_IMPORTED_MODULE_7__order__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_8__sort__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_9__call__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_10__nodes__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_11__node__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_12__size__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_13__empty__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_14__each__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_15__attr__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_16__style__["a" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_17__property__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_18__classed__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_19__text__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_20__html__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_21__raise__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_22__lower__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_23__append__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_24__insert__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_25__remove__["a" /* default */],
  clone: __WEBPACK_IMPORTED_MODULE_26__clone__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_27__datum__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_28__on__["b" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_29__dispatch__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["b"] = (selection);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CREATED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STARTING; });
/* unused harmony export STARTED */
/* unused harmony export RUNNING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENDED; });
/* harmony export (immutable) */ __webpack_exports__["g"] = init;
/* harmony export (immutable) */ __webpack_exports__["h"] = set;
/* harmony export (immutable) */ __webpack_exports__["f"] = get;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_timer__ = __webpack_require__(78);



var emptyOn = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["e"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTING) throw new Error("too late; already started");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["c" /* timer */])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_create__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_0__src_create__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_creator__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return __WEBPACK_IMPORTED_MODULE_1__src_creator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_local__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "local", function() { return __WEBPACK_IMPORTED_MODULE_2__src_local__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_matcher__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_3__src_matcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mouse__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return __WEBPACK_IMPORTED_MODULE_4__src_mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_namespace__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return __WEBPACK_IMPORTED_MODULE_5__src_namespace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_namespaces__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return __WEBPACK_IMPORTED_MODULE_6__src_namespaces__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_point__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return __WEBPACK_IMPORTED_MODULE_7__src_point__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_select__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_8__src_select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_selectAll__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_9__src_selectAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_selection_index__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return __WEBPACK_IMPORTED_MODULE_10__src_selection_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_selector__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return __WEBPACK_IMPORTED_MODULE_11__src_selector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_selectorAll__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return __WEBPACK_IMPORTED_MODULE_12__src_selectorAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_selection_style__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return __WEBPACK_IMPORTED_MODULE_13__src_selection_style__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_touch__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return __WEBPACK_IMPORTED_MODULE_14__src_touch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_touches__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return __WEBPACK_IMPORTED_MODULE_15__src_touches__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_window__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return __WEBPACK_IMPORTED_MODULE_16__src_window__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_selection_on__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return __WEBPACK_IMPORTED_MODULE_17__src_selection_on__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return __WEBPACK_IMPORTED_MODULE_17__src_selection_on__["a"]; });




















/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return __WEBPACK_IMPORTED_MODULE_2__src_bisector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cross__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return __WEBPACK_IMPORTED_MODULE_3__src_cross__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_descending__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return __WEBPACK_IMPORTED_MODULE_4__src_descending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deviation__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return __WEBPACK_IMPORTED_MODULE_5__src_deviation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_extent__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return __WEBPACK_IMPORTED_MODULE_6__src_extent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_histogram__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return __WEBPACK_IMPORTED_MODULE_7__src_histogram__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_max__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_11__src_max__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_mean__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return __WEBPACK_IMPORTED_MODULE_12__src_mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_median__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "median", function() { return __WEBPACK_IMPORTED_MODULE_13__src_median__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_merge__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_14__src_merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_min__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_15__src_min__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pairs__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return __WEBPACK_IMPORTED_MODULE_16__src_pairs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_permute__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return __WEBPACK_IMPORTED_MODULE_17__src_permute__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_quantile__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return __WEBPACK_IMPORTED_MODULE_18__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_range__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_19__src_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_scan__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return __WEBPACK_IMPORTED_MODULE_20__src_scan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_21__src_shuffle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sum__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ticks__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_transpose__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_24__src_transpose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_variance__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return __WEBPACK_IMPORTED_MODULE_25__src_variance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_zip__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_26__src_zip__["a"]; });





























/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(62);
/* unused harmony reexport interpolateArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(32);
/* unused harmony reexport interpolateBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(60);
/* unused harmony reexport interpolateBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(63);
/* unused harmony reexport interpolateDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(64);
/* unused harmony reexport interpolateObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__src_string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(153);
/* unused harmony reexport interpolateZoom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["a"]; });
/* unused harmony reexport interpolateRgbBasis */
/* unused harmony reexport interpolateRgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(154);
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(155);
/* unused harmony reexport interpolateLab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(156);
/* unused harmony reexport interpolateHcl */
/* unused harmony reexport interpolateHclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(157);
/* unused harmony reexport interpolateCubehelix */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_quantize__ = __webpack_require__(158);
/* unused harmony reexport quantize */



















/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Transition;
/* harmony export (immutable) */ __webpack_exports__["b"] = transition;
/* harmony export (immutable) */ __webpack_exports__["c"] = newId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attrTween__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delay__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duration__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ease__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__merge__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__on__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remove__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__select__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selectAll__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selection__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__styleTween__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__transition__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tween__ = __webpack_require__(20);



















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: __WEBPACK_IMPORTED_MODULE_10__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_11__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_6__filter__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_7__merge__["a" /* default */],
  selection: __WEBPACK_IMPORTED_MODULE_12__selection__["a" /* default */],
  transition: __WEBPACK_IMPORTED_MODULE_16__transition__["a" /* default */],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: __WEBPACK_IMPORTED_MODULE_8__on__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* default */],
  attrTween: __WEBPACK_IMPORTED_MODULE_2__attrTween__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_13__style__["a" /* default */],
  styleTween: __WEBPACK_IMPORTED_MODULE_14__styleTween__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_15__text__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_9__remove__["a" /* default */],
  tween: __WEBPACK_IMPORTED_MODULE_17__tween__["a" /* default */],
  delay: __WEBPACK_IMPORTED_MODULE_3__delay__["a" /* default */],
  duration: __WEBPACK_IMPORTED_MODULE_4__duration__["a" /* default */],
  ease: __WEBPACK_IMPORTED_MODULE_5__ease__["a" /* default */]
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = linearish;
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__(159);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["a" /* default */])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]);

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hue;
/* harmony export (immutable) */ __webpack_exports__["b"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(61);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
});


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(22);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = deinterpolateLinear;
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
/* harmony export (immutable) */ __webpack_exports__["b"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(66);






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* default */])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolate */],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["e" /* interpolateRound */], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(34);


/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tweenValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(2);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(node, id).value[name];
  };
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(22);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */][prefix], local: name} : name;
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return event; });
/* harmony export (immutable) */ __webpack_exports__["a"] = customEvent;
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["b"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(25);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["c" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(61);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(31);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["b"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_interval__ = __webpack_require__(0);
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_millisecond__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport timeMilliseconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport utcMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_second__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport timeSeconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport utcSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_minute__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["a"]; });
/* unused harmony reexport timeMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hour__ = __webpack_require__(177);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["a"]; });
/* unused harmony reexport timeHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_day__ = __webpack_require__(178);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["a"]; });
/* unused harmony reexport timeDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_week__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* unused harmony reexport timeMondays */
/* unused harmony reexport timeTuesday */
/* unused harmony reexport timeTuesdays */
/* unused harmony reexport timeWednesday */
/* unused harmony reexport timeWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["c"]; });
/* unused harmony reexport timeThursdays */
/* unused harmony reexport timeFriday */
/* unused harmony reexport timeFridays */
/* unused harmony reexport timeSaturday */
/* unused harmony reexport timeSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_month__ = __webpack_require__(180);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["a"]; });
/* unused harmony reexport timeMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_year__ = __webpack_require__(181);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["a"]; });
/* unused harmony reexport timeYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__ = __webpack_require__(182);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["a"]; });
/* unused harmony reexport utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcHour__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["a"]; });
/* unused harmony reexport utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_utcDay__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["a"]; });
/* unused harmony reexport utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__ = __webpack_require__(185);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* unused harmony reexport utcMondays */
/* unused harmony reexport utcTuesday */
/* unused harmony reexport utcTuesdays */
/* unused harmony reexport utcWednesday */
/* unused harmony reexport utcWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["c"]; });
/* unused harmony reexport utcThursdays */
/* unused harmony reexport utcFriday */
/* unused harmony reexport utcFridays */
/* unused harmony reexport utcSaturday */
/* unused harmony reexport utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["a"]; });
/* unused harmony reexport utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_utcYear__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["a"]; });
/* unused harmony reexport utcYears */































/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeFormat; });
/* unused harmony export timeParse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcParse; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(75);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = now;
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;
/* harmony export (immutable) */ __webpack_exports__["c"] = timer;
/* unused harmony export timerFlush */
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (matcher);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["b"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = styleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(24);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bisectLeft; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(46);



var ascendingBisect = Object(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["c"] = (bisectRight);


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = pair;
/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(49);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = Object(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(55);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return implicit; });
/* harmony export (immutable) */ __webpack_exports__["a"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(9);



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["a" /* map */])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export rgbBasis */
/* unused harmony export rgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(13);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["b" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(32);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(29);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(29);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(17);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return +x;
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(160);
/* unused harmony reexport formatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(68);
/* unused harmony reexport formatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__["a"]; });








/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTypes__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatPrefixAuto__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__identity__ = __webpack_require__(165);








var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["a"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["a" /* default */])(locale.grouping, locale.thousands) : __WEBPACK_IMPORTED_MODULE_6__identity__["a" /* default */],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(__WEBPACK_IMPORTED_MODULE_2__formatNumerals__["a" /* default */])(locale.numerals) : __WEBPACK_IMPORTED_MODULE_6__identity__["a" /* default */],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        type = specifier.type;

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_4__formatTypes__["a" /* default */][type],
        maybeSuffix = !type || /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? (type ? 6 : 12)
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_5__formatPrefixAuto__["b" /* prefixExponent */] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatSpecifier;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatTypes__ = __webpack_require__(70);


// [[fill]align][sign][symbol][0][width][,][.precision][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

  var match,
      fill = match[1] || " ",
      align = match[2] || ">",
      sign = match[3] || "-",
      symbol = match[4] || "",
      zero = !!match[5],
      width = match[6] && +match[6],
      comma = !!match[7],
      precision = match[8] && +match[8].slice(1),
      type = match[9] || "";

  // The "n" type is an alias for ",g".
  if (type === "n") comma = true, type = "g";

  // Map invalid types to the default format.
  else if (!__WEBPACK_IMPORTED_MODULE_0__formatTypes__["a" /* default */][type]) type = "";

  // If zero fill is specified, padding goes after sign and before digits.
  if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

  this.fill = fill;
  this.align = align;
  this.sign = sign;
  this.symbol = symbol;
  this.zero = zero;
  this.width = width;
  this.comma = comma;
  this.precision = precision;
  this.type = type;
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + this.type;
};


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDefault__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatRounded__ = __webpack_require__(164);




/* harmony default export */ __webpack_exports__["a"] = ({
  "": __WEBPACK_IMPORTED_MODULE_0__formatDefault__["a" /* default */],
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(__WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__["a" /* default */],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(34);


var prefixExponent;

/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__(72);








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_5__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["a" /* map */].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(__WEBPACK_IMPORTED_MODULE_6__nice__["a" /* default */])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["a" /* copy */])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["k" /* timeYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["f" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["j" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["a" /* timeDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["b" /* timeHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["d" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["g" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["c" /* timeMillisecond */], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["a" /* timeFormat */]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(36);
/* unused harmony reexport timeFormatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* unused harmony reexport timeParse */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* unused harmony reexport utcParse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(75);
/* unused harmony reexport timeFormatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__ = __webpack_require__(76);
/* unused harmony reexport isoFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_isoParse__ = __webpack_require__(188);
/* unused harmony reexport isoParse */






/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(35);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["s" /* utcSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(36);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b" /* utcFormat */])(isoSpecifier);

/* unused harmony default export */ var _unused_webpack_default_export = (formatIso);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_schedule__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["d" /* STARTING */] && schedule.state < __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["b" /* ENDING */];
    schedule.state = __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["a" /* ENDED */];
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_timer__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["c"]; });
/* unused harmony reexport timerFlush */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_timeout__ = __webpack_require__(203);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_timeout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_interval__ = __webpack_require__(204);
/* unused harmony reexport interval */







/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateRgb */]
      : (c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateRgb */])
      : __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["f" /* interpolateString */])(a, b);
});


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_linear__ = __webpack_require__(222);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return __WEBPACK_IMPORTED_MODULE_0__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_quad__ = __webpack_require__(223);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubic__ = __webpack_require__(224);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_poly__ = __webpack_require__(225);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_sin__ = __webpack_require__(226);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exp__ = __webpack_require__(227);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_circle__ = __webpack_require__(228);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_bounce__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_back__ = __webpack_require__(230);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_elastic__ = __webpack_require__(231);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["b"]; });





















/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styles = __webpack_require__(82);

var _styles2 = _interopRequireDefault(_styles);

var _speed_skating_results = __webpack_require__(87);

var _speed_skating_results2 = _interopRequireDefault(_speed_skating_results);

var _d3Selection = __webpack_require__(3);

var _d3Scale = __webpack_require__(122);

var _d3Array = __webpack_require__(4);

var _d3Transition = __webpack_require__(198);

var _d3Axis = __webpack_require__(233);

var _d3Ease = __webpack_require__(80);

var _speed_skater = __webpack_require__(237);

var _speed_skater2 = _interopRequireDefault(_speed_skater);

var _yeti = __webpack_require__(238);

var _yeti2 = _interopRequireDefault(_yeti);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventsToInclude = ['500m Men', '1500m Men', '5000m Men', '10000m Men', '500m Women', '1000m Women', '1500m Women', '3000m Women', '1000m Men', '5000m Women'];
var yearsWith2X500M = [1998, 2002, 2006, 2010, 2014];
var margin = { top: 35, bottom: 52, left: 80, right: 60 };
var radius = 9;
var flagHeight = 15;
var poleHeight = 12;
var flagWidth = 22;
var flagWaviness = 3;
var smallWidth = 600;
var filteredData = _speed_skating_results2.default.filter(function (d) {
  return +d.year >= 1964 && eventsToInclude.indexOf(d.event) !== -1;
});
var highestYear = 2002;

var Graph = function () {
  function Graph() {
    _classCallCheck(this, Graph);

    this.hoveredYear = null;
    this.data = this.nestData();
    this.years = this.getYears();
    this.highestYear = this.years[highestYear];
    this.flagTimeout = null;
    this.yetiTimeout = null;
    this.initControls();
    this.initViz();
    window.onresize = this.initViz.bind(this);
    this.waveFlag = this.waveFlag.bind(this);
    this.drawYeti = this.drawYeti.bind(this);
  }

  _createClass(Graph, [{
    key: 'nestData',
    value: function nestData() {
      var _this = this;

      var dataByEvent = {};
      filteredData.forEach(function (d) {
        d.year = +d.year;
        if (!d.timeFormat) {
          d.time = null;
        } else {
          var parseTime = d.timeFormat.split(':');
          var minutes = parseInt(parseTime[0], 10);
          var seconds = parseFloat(parseTime[1]);
          d.time = minutes * 60 + seconds;
        }
        if (_this.isDoubleYear(d)) {
          d.time /= 2;
        }
        if (!dataByEvent[d.event]) {
          dataByEvent[d.event] = [];
        }
        dataByEvent[d.event].push(d);
      });
      return dataByEvent;
    }
  }, {
    key: 'getYears',
    value: function getYears() {
      return filteredData.reduce(function (a, b) {
        a[b.year] = { location: b.location, altitude: b.altitude, year: b.year };
        return a;
      }, {});
    }
  }, {
    key: 'initControls',
    value: function initControls() {
      var _this2 = this;

      var controls = (0, _d3Selection.select)('.controls').append('select');
      controls.selectAll('option').data(Object.keys(this.data)).enter().append('option').attr('value', function (d) {
        return d;
      }).html(function (d) {
        return d === '500m Men' || d === '500m Women' ? d + '*' : d;
      });
      controls.on('change', function (d, i, node) {
        var currentEventIdx = node[0].selectedIndex;
        _this2.currentEventData = _this2.data[Object.keys(_this2.data)[currentEventIdx]];
        _this2.drawEvent();
      });
    }
  }, {
    key: 'initViz',
    value: function initViz() {
      (0, _d3Selection.select)('.viz').selectAll('*').remove();
      this.width = (0, _d3Selection.select)('.viz').node().getBoundingClientRect().width;
      this.height = this.width < smallWidth ? 180 : 300;
      this.xDomain = Object.keys(this.years);
      this.xRange = [margin.left, this.width - margin.right];
      this.xScale = (0, _d3Scale.scalePoint)().domain(this.xDomain).range(this.xRange).padding(this.width / 10);
      this.viz1 = this.drawSVG('viz-1', 'Time (seconds)');
      this.viz2 = this.drawSVG('viz-2', this.width < smallWidth ? 'Venue Altitude (m)' : 'Olypmic Venue Altitude (meters)');
      this.currentEventData = this.data[Object.keys(this.data)[0]];
      this.drawEvent();
      this.drawAltitudes();
      var g = this.viz2.append('g').classed('flag', true);
      g.append('line');
      g.append('path').classed('flying-flag', true);

      var highestYearApex = this.getApex(this.highestYear.year, this.highestYear.altitude);
      this.viz2.append('clipPath').attr('id', 'yeti-clip').append('path').attr('d', 'M' + highestYearApex.x + ' ' + highestYearApex.y + ' L' + (this.width - margin.right) + ' ' + highestYearApex.y + ' L' + (this.width - margin.right) + ' ' + (this.height - margin.bottom) + ' L' + (highestYearApex.x + this.xScale.step()) + ' ' + (this.height - margin.bottom) + ' Z');
      var yetiSize = this.getYetiSize();
      this.yeti = this.viz2.append('g').classed('yeti', true).attr('clip-path', 'url(#yeti-clip)').append('g').attr('transform', 'translate(' + (this.xScale('2002') - yetiSize) + ', ' + this.height / 2 + ')').attr('opacity', 0);
      this.yeti.append('image').attr('y', -yetiSize).attr('transform', 'rotate(40)').attr('width', yetiSize).attr('height', yetiSize).attr('xlink:href', _yeti2.default);
      if (this.width > smallWidth) {
        this.yeti.append('text').text('Abominable!').attr('transform', 'translate(' + (yetiSize + 5) + ', ' + -yetiSize / 2 + ')').style('letter-spacing', '0.2em');
      }
    }
  }, {
    key: 'drawSVG',
    value: function drawSVG(className, yAxisLabel) {
      var viz = (0, _d3Selection.select)('.viz').append('svg').classed(className, true).attr('width', this.width).attr('height', this.height);
      viz.append('g').classed('yAxis', true);
      viz.append('g').classed('xAxis', true);
      viz.append('g').classed('yAxis-label', true).attr('transform', 'rotate(-90)').append('text').text(yAxisLabel).attr('transform', 'translate(' + -this.height / 2 + ', 26)').attr('text-anchor', 'middle');
      viz.append('g').classed('stat-label', true).attr('transform', 'translate(' + margin.left + ', ' + this.height + ')').append('text').attr('dy', '-0.5em');
      return viz;
    }
  }, {
    key: 'drawEvent',
    value: function drawEvent() {
      var _this3 = this;

      var golds = this.currentEventData.filter(function (d) {
        return d.medal === 'GOLD';
      });
      var scaleExtent = (0, _d3Array.extent)(golds, function (d) {
        return d.time;
      });
      this.yScale = (0, _d3Scale.scaleLinear)().domain(scaleExtent).range([margin.top, this.height - margin.bottom]);
      var circles = this.viz1.selectAll('circle').data(golds, function (d) {
        return d.year;
      });
      var circlesEnter = circles.enter().append('circle').attr('cx', function (d) {
        return _this3.xScale(d.year);
      }).attr('cy', this.height).attr('opacity', 0);
      circles.exit().remove();
      this.viz1.selectAll('circle').transition().attr('cy', this.height).attr('opacity', 0).transition().attr('cx', function (d) {
        return _this3.xScale(d.year);
      }).attr('cy', function (d) {
        return _this3.yScale(d.time);
      }).attr('r', radius).attr('opacity', 1);

      var leftAxis = (0, _d3Axis.axisLeft)().scale(this.yScale).ticks(5).tickSizeOuter(0);
      this.viz1.select('.yAxis').attr('transform', 'translate(' + margin.left + ', 0)').transition().call(leftAxis);
      var bottomAxis = (0, _d3Axis.axisBottom)().scale(this.xScale).tickFormat(function (d) {
        return d;
      }).tickSizeOuter(0).tickSizeInner(12);
      this.viz1.select('.xAxis').attr('transform', 'translate(0, ' + (this.height - margin.bottom) + ')').call(bottomAxis);

      this.updateStatLabels(true);
    }
  }, {
    key: 'drawAltitudes',
    value: function drawAltitudes() {
      var _this4 = this;

      var venues = Object.keys(this.years).map(function (k) {
        return _this4.years[k];
      }).sort(function (a, b) {
        return b.altitude - a.altitude;
      });
      var altitudeDomain = [0, (0, _d3Array.max)(venues, function (d) {
        return +d.altitude;
      })];
      this.yScaleAltitudes = (0, _d3Scale.scaleLinear)().domain(altitudeDomain).range([this.height - margin.bottom, margin.top]);
      this.stepScale = (0, _d3Scale.scaleLinear)().domain(altitudeDomain).range([this.xScale.step() / 5, this.xScale.step()]);
      var altitudeGroups = this.viz2.selectAll('g.altitudes').data(venues).enter().append('g').classed('altitudes', true);

      this.drawMountains(altitudeGroups);

      var leftAxis = (0, _d3Axis.axisLeft)().scale(this.yScaleAltitudes).ticks(5).tickSizeOuter(0);
      this.viz2.select('.yAxis').attr('transform', 'translate(' + margin.left + ', 0)').transition().call(leftAxis);
      var bottomAxis = (0, _d3Axis.axisBottom)().scale(this.xScale).tickFormat(function (d) {
        return d;
      }).tickSizeOuter(0).tickSizeInner(12);
      this.viz2.select('.xAxis').attr('transform', 'translate(0, ' + (this.height - margin.bottom) + ')').call(bottomAxis);

      (0, _d3Selection.select)('.viz').on('mousemove', function () {
        var vizOffset = (0, _d3Selection.select)('.viz').node().getBoundingClientRect().left;
        var graphX = _d3Selection.event.clientX - vizOffset;
        if (graphX > margin.left && graphX < _this4.width - margin.right) {
          var scaledX = graphX - _this4.xScale.step() / 2;
          var hoveredYear = _this4.xDomain[(0, _d3Array.bisect)(_this4.xDomain.map(function (d) {
            return _this4.xScale(d);
          }), scaledX)];
          if (!hoveredYear) {
            _this4.hoveredYear = null;
          } else if (_this4.hoveredYear !== hoveredYear) {
            _this4.hoveredYear = hoveredYear;
            _this4.selectYear();
          }
        } else {
          _this4.hoveredYear = null;
        }
      });
    }
  }, {
    key: 'drawMountains',
    value: function drawMountains(groups) {
      var _this5 = this;

      groups.append('path').attr('d', function (d) {
        return _this5.generateMountain(d);
      }).classed('mountain', true);
      groups.append('path').attr('d', function (d) {
        return _this5.generateSnow(d);
      }).attr('transform', function (d) {
        var translateY = Math.max((_this5.height - margin.bottom - _this5.yScaleAltitudes(d.altitude)) * 0.05, 2);
        return 'translate(0, ' + Math.round(translateY) + ')';
      }).attr('opacity', 0.92).classed('snow', true);
    }
  }, {
    key: 'generateMountain',
    value: function generateMountain(d) {
      var scaleStep = this.stepScale(d.altitude);
      var apex = this.getApex(d.year, d.altitude);
      var baseY = this.yScaleAltitudes(0);
      return 'M' + apex.x + ' ' + apex.y + ' L' + (apex.x + scaleStep) + ' ' + baseY + ' L' + (apex.x - scaleStep) + ' ' + baseY + ' Z';
    }
  }, {
    key: 'generateSnow',
    value: function generateSnow(d) {
      var snowSize = 0.4;
      var snowWaviness = 8;
      var scaleStep = this.stepScale(d.altitude);
      var apex = this.getApex(d.year, d.altitude);
      var baseY = this.yScaleAltitudes(0);
      var snowLineX0 = apex.x + scaleStep * snowSize;
      var snowLineX1 = apex.x - scaleStep * snowSize;
      var snowLineY = this.yScaleAltitudes(d.altitude * (1 - snowSize));
      var cpx0 = (snowLineX0 + apex.x) / 2;
      var cpy0 = snowLineY - (snowLineY - apex.y) / snowWaviness;
      var cpx1 = (snowLineX1 + apex.x) / 2;
      var cpy1 = snowLineY + (snowLineY - apex.y) / snowWaviness;
      return 'M' + apex.x + ' ' + apex.y + ' L' + snowLineX0 + ' ' + snowLineY + ' Q' + cpx0 + ' ' + cpy0 + ', ' + apex.x + ' ' + snowLineY + ' Q ' + cpx1 + ' ' + cpy1 + ', ' + snowLineX1 + ' ' + snowLineY + ' Z';
    }
  }, {
    key: 'selectYear',
    value: function selectYear() {
      clearTimeout(this.flagTimeout);
      clearTimeout(this.yetiTimeout);
      this.drawFlag();
      this.highlightMedal();
      this.highlightMountain();
      this.updateStatLabels();
      if (this.hoveredYear === '2002') {
        this.yetiTimeout = window.setTimeout(this.drawYeti, 7000);
      }
    }
  }, {
    key: 'highlightMedal',
    value: function highlightMedal() {
      var _this6 = this;

      var medalDatum = this.currentEventData.find(function (d) {
        return d.year == _this6.hoveredYear && d.medal === 'GOLD';
      });
      this.viz1.selectAll('circle').attr('r', function (d) {
        return d.year == _this6.hoveredYear ? radius + 2 : radius;
      }).classed('selected', function (d) {
        return d.year == _this6.hoveredYear ? true : false;
      });
    }
  }, {
    key: 'highlightMountain',
    value: function highlightMountain() {
      var _this7 = this;

      this.viz2.selectAll('g.altitudes').classed('selected', function (d) {
        return d.year == _this7.hoveredYear ? true : false;
      });
    }
  }, {
    key: 'updateStatLabels',
    value: function updateStatLabels() {
      var _this8 = this;

      var reset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (reset || this.width < 450) {
        this.viz1.select('.stat-label text').text('');
        this.viz2.select('.stat-label text').text('');
        return;
      }
      var medalDatum = this.currentEventData.find(function (d) {
        return d.year == _this8.hoveredYear && d.medal === 'GOLD';
      });
      var asterix = this.isDoubleYear(medalDatum) ? '*' : '';
      var yearDatum = this.years[this.hoveredYear];
      var text0 = 'Time: ' + medalDatum.timeFormat + asterix + ' | Althlete: ' + medalDatum.athlete;
      var text1 = yearDatum.location + ' | Altitude: ' + yearDatum.altitude + 'm';
      this.viz1.select('.stat-label text').text(text0);
      this.viz2.select('.stat-label text').text(text1);
    }
  }, {
    key: 'drawFlag',
    value: function drawFlag() {
      var _this9 = this;

      var yearData = this.years[this.hoveredYear];
      var apex = this.getApex(yearData.year, yearData.altitude);
      var flagGroup = this.viz2.select('.flag');
      flagGroup.attr('transform', 'translate(' + apex.x + ', ' + apex.y + ')');
      flagGroup.select('line').attr('x1', 0).attr('y1', 3).attr('x2', 0).attr('y2', 0).transition().attr('y2', -poleHeight - flagHeight);
      flagGroup.select('.flying-flag').interrupt().attr('transform', 'translate(0, 0)').attr('d', 'M0 ' + -flagHeight + ' Q0 ' + (-flagHeight - flagWaviness) + ', 0 ' + -flagHeight + ' Q0 ' + (-flagHeight + flagWaviness) + ', 0 ' + -flagHeight + ' L0 0 Q0 0, 0 0 Q0 0, 0 0 Z').transition().attr('transform', 'translate(0, ' + -poleHeight + ')').on('end', function () {
        _this9.waveFlag(flagGroup);
      });
    }
  }, {
    key: 'getApex',
    value: function getApex(year, altitude) {
      return { x: this.xScale(year), y: this.yScaleAltitudes(altitude) };
    }
  }, {
    key: 'generateFlagPath',
    value: function generateFlagPath(cp0, offset, cp1, invert) {
      invert = invert ? -1 : 1;
      return 'M0 ' + -flagHeight + ' Q' + flagWidth * cp0 + ' ' + (-flagHeight - invert * flagWaviness) + ', ' + flagWidth * offset + ' ' + -flagHeight + ' Q' + flagWidth * cp1 + ' ' + (-flagHeight + invert * flagWaviness) + ', ' + flagWidth + ' ' + -flagHeight + ' L' + flagWidth + ' 0 Q' + flagWidth * cp1 + ' ' + invert * flagWaviness + ', ' + flagWidth * offset + ' 0 Q' + flagWidth * cp0 + ' ' + -(invert * flagWaviness) + ', 0 0 Z';
    }
  }, {
    key: 'waveFlag',
    value: function waveFlag(flagGroup) {
      var _this10 = this;

      flagGroup.select('.flying-flag').transition().ease(_d3Ease.easeSinIn).attr('d', this.generateFlagPath(0.25, 0.5, 0.75, false)).transition().ease(_d3Ease.easeLinear).attr('d', this.generateFlagPath(0.9, 0.95, 1, false)).transition().ease(_d3Ease.easeLinear).attr('d', this.generateFlagPath(0.9, 0.95, 1, true)).transition().ease(_d3Ease.easeSinOut).attr('d', this.generateFlagPath(0.25, 0.5, 0.75, true)).on('end', function () {
        _this10.flagTimeout = window.setTimeout(function () {
          return _this10.waveFlag(flagGroup);
        }, 1500);
      });
    }
  }, {
    key: 'getYetiSize',
    value: function getYetiSize() {
      return Math.floor(this.xScale.step() * 2);
    }
  }, {
    key: 'drawYeti',
    value: function drawYeti() {
      this.yeti.transition().duration(1500).attr('transform', 'translate(' + (this.xScale('2002') - this.getYetiSize() / 5) + ', ' + this.height * 0.5 + ')').attr('opacity', 1).transition().delay(1500).attr('transform', 'translate(' + (this.xScale('2002') - this.getYetiSize()) + ', ' + this.height * 0.5 + ')').attr('opacity', 0);
    }
  }, {
    key: 'isDoubleYear',
    value: function isDoubleYear(d) {
      if (d.event === '500m Men' || d.event === '500m Women') {
        if (yearsWith2X500M.indexOf(d.year) !== -1) {
          return true;
        }
      }
      return false;
    }
  }]);

  return Graph;
}();

var skaterImg = document.getElementById('skater');
skaterImg.src = _speed_skater2.default;

new Graph();

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(83);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(85)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!./styles.css", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!./styles.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports
exports.i(__webpack_require__(84), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Quicksand:400,500);", ""]);

// module
exports.push([module.i, "body {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 20px;\n  color: #1f1913;\n  background: #ced6d1;\n}\n\na, a:visited {\n  color: #314142;\n}\n\n.emphasis {\n  font-weight: 500;\n}\n\n.wrapper {\n  width: 90%;\n  margin-left: 5%;\n  margin-bottom: 50px;\n}\n\nheader {\n  padding: 20px;\n  margin: 0px 30px 0 30px;\n}\n\n#skater {\n  display: inline-block;\n  transform: translateY(5px);\n  margin-right: 10px;\n  height: 60px;\n}\n\nh1 {\n  font-size: 26px;\n  text-transform: uppercase;\n  padding-right: 20px;\n  line-height: 140%;\n  letter-spacing: 0.05em;\n  font-weight: 500;\n  display: inline-block;\n}\n\n.header-2 {\n  margin-top: 16px;\n}\n\n.header-2 p {\n  margin-bottom: 16px;\n  font-size: 16px;\n  line-height: 140%;\n}\n\nselect {\n  margin: 0 30px;\n  min-width: 350px;\n  background: #FCFAF4;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 14px;\n}\n\n.yAxis-label text{\n  font-size: 16px;\n  letter-spacing: 0.08em;\n  font-weight: 500;\n}\n\n.viz {\n  margin-bottom: 20px;\n}\n\n.viz-1 circle {\n  fill: #ECE7D8;\n  stroke: #314142;\n}\n.viz-1 circle.selected {\n  fill: #EEBF48;\n}\n\n.altitudes {\n  opacity: 0.92;\n}\n\n.mountain {\n  fill: #314142;\n}\n\n.snow {\n  fill: #F8F4E4;\n}\n\n.xAxis path, .yAxis path, .tick line {\n  stroke: #1f1913;\n}\n.tick text {\n  fill: #1f1913;\n}\n\n.flag line {\n  stroke: #1f1913;\n}\n\n.flag .flying-flag {\n  fill: #EEBF48;\n  stroke: #1f1913;\n}\n\n.notes {\n  font-size: 14px;\n  line-height: 140%;\n}\n\ntext {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.stat-label text{\n  font-size: 14px;\n}\n\n@media only screen and (max-width: 670px) {\n  .xAxis .tick:nth-child(odd) {\n    display: none;\n  }\n  select {\n    min-width: 300px;\n  }\n  .wrapper {\n    width: 96%;\n    margin-left: 2%;\n    margin-bottom: 50px;\n  }\n}\n", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(86);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 86 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = [{"year":1924,"location":"Chamonix, France","event":"500m Men","athlete":"Charles Jewtraw","country":"USA","medal":"GOLD","timeFormat":"00:44.00","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"500m Men","athlete":"Oskar Olsen","country":"NOR","medal":"SILVER","timeFormat":"00:44.20","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"500m Men","athlete":"Roald Larsen","country":"NOR","medal":"BRONZE","timeFormat":"00:44.80","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"500m Men","athlete":"Clas Thunberg","country":"FIN","medal":"BRONZE","timeFormat":"00:44.80","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"1500m Men","athlete":"Clas Thunberg","country":"FIN","medal":"GOLD","timeFormat":"02:20.00","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"1500m Men","athlete":"Roald Larsen","country":"NOR","medal":"SILVER","timeFormat":"02:22.00","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"1500m Men","athlete":"Sigurd Moen","country":"NOR","medal":"BRONZE","timeFormat":"02:25.00","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"5000m Men","athlete":"Clas Thunberg","country":"FIN","medal":"GOLD","timeFormat":"08:39.00","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"5000m Men","athlete":"Julius Skutnabb","country":"FIN","medal":"SILVER","timeFormat":"08:48.00","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"5000m Men","athlete":"Roald Larsen","country":"NOR","medal":"BRONZE","timeFormat":"08:50.00","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"10000m Men","athlete":"Julius Skutnabb","country":"FIN","medal":"GOLD","timeFormat":"18:04.00","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"10000m Men","athlete":"Clas Thunberg","country":"FIN","medal":"SILVER","timeFormat":"18:07.00","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"10000m Men","athlete":"Roald Larsen","country":"NOR","medal":"BRONZE","timeFormat":"18:12.00","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"Four-Race Combined","athlete":"Clas Thunberg","country":"FIN","medal":"GOLD","timeFormat":"00:05.50","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"Four-Race Combined","athlete":"Roald Larsen","country":"NOR","medal":"SILVER","timeFormat":"00:09.50","altitude":1035},{"year":1924,"location":"Chamonix, France","event":"Four-Race Combined","athlete":"Julius Skutnabb","country":"FIN","medal":"BRONZE","timeFormat":"00:11.00","altitude":1035},{"year":1928,"location":"St. Moritz, Switzerland","event":"500m Men","athlete":"Bæla Evensen","country":"NOR","medal":"GOLD","timeFormat":"00:43.40","altitude":1822},{"year":1928,"location":"St. Moritz, Switzerland","event":"500m Men","athlete":"Clas Thunberg","country":"FIN","medal":"GOLD","timeFormat":"00:43.40","altitude":1822},{"year":1928,"location":"St. Moritz, Switzerland","event":"500m Men","athlete":"John Farrell","country":"USA","medal":"BRONZE","timeFormat":"","altitude":1822},{"year":1928,"location":"St. Moritz, Switzerland","event":"500m Men","athlete":"Jaako Friman","country":"FIN","medal":"BRONZE","timeFormat":"","altitude":1822},{"year":1928,"location":"St. Moritz, Switzerland","event":"500m Men","athlete":"Roald Larsen","country":"NOR","medal":"BRONZE","timeFormat":"","altitude":1822},{"year":1928,"location":"St. Moritz, Switzerland","event":"1500m Men","athlete":"Clas Thunberg","country":"FIN","medal":"GOLD","timeFormat":"02:21.00","altitude":1822},{"year":1928,"location":"St. Moritz, Switzerland","event":"1500m Men","athlete":"Bæla Evensen","country":"NOR","medal":"SILVER","timeFormat":"02:21.00","altitude":1822},{"year":1928,"location":"St. Moritz, Switzerland","event":"1500m Men","athlete":"Ivar Ballangrud","country":"NOR","medal":"BRONZE","timeFormat":"02:22.00","altitude":1822},{"year":1928,"location":"St. Moritz, Switzerland","event":"5000m Men","athlete":"Ivar Ballangrud","country":"NOR","medal":"GOLD","timeFormat":"08:50.00","altitude":1822},{"year":1928,"location":"St. Moritz, Switzerland","event":"5000m Men","athlete":"Julius Skutnabb","country":"FIN","medal":"SILVER","timeFormat":"08:59.00","altitude":1822},{"year":1928,"location":"St. Moritz, Switzerland","event":"5000m Men","athlete":"Bæla Evensen","country":"NOR","medal":"BRONZE","timeFormat":"09:01.00","altitude":1822},{"year":1932,"location":"Lake Placid, United States","event":"500m Men","athlete":"Jack Shea","country":"USA","medal":"GOLD","timeFormat":"00:43.40","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"500m Men","athlete":"Bæla Evensen","country":"NOR","medal":"SILVER","timeFormat":"","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"500m Men","athlete":"Alexander Hurd","country":"CAN","medal":"BRONZE","timeFormat":"","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"1500m Men","athlete":"Jack Shea","country":"USA","medal":"GOLD","timeFormat":"02:57.00","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"1500m Men","athlete":"Alexander Hurd","country":"CAN","medal":"SILVER","timeFormat":"","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"1500m Men","athlete":"William Logan","country":"CAN","medal":"BRONZE","timeFormat":"","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"5000m Men","athlete":"Irving Jaffee","country":"USA","medal":"GOLD","timeFormat":"09:40.00","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"5000m Men","athlete":"Edward Murphy","country":"USA","medal":"SILVER","timeFormat":"","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"5000m Men","athlete":"William Logan","country":"CAN","medal":"BRONZE","timeFormat":"","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"10000m Men","athlete":"Irving Jaffee","country":"USA","medal":"GOLD","timeFormat":"19:13.00","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"10000m Men","athlete":"Ivar Ballangrud","country":"NOR","medal":"SILVER","timeFormat":"","altitude":568},{"year":1932,"location":"Lake Placid, United States","event":"10000m Men","athlete":"Frank Stack","country":"CAN","medal":"BRONZE","timeFormat":"","altitude":568},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"500m Men","athlete":"Ivar Ballangrud","country":"NOR","medal":"GOLD","timeFormat":"00:43.40","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"500m Men","athlete":"Georg Krog","country":"NOR","medal":"SILVER","timeFormat":"00:43.50","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"500m Men","athlete":"Leo Freisinger","country":"USA","medal":"BRONZE","timeFormat":"00:44.00","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"1500m Men","athlete":"Charles Mathiesen","country":"NOR","medal":"GOLD","timeFormat":"02:19.00","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"1500m Men","athlete":"Ivar Ballangrud","country":"NOR","medal":"SILVER","timeFormat":"02:20.00","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"1500m Men","athlete":"Birger Wasenius","country":"FIN","medal":"BRONZE","timeFormat":"02:20.00","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"5000m Men","athlete":"Ivar Ballangrud","country":"NOR","medal":"GOLD","timeFormat":"08:19.00","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"5000m Men","athlete":"Birger Wasenius","country":"FIN","medal":"SILVER","timeFormat":"08:23.00","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"5000m Men","athlete":"Antero Ojala","country":"FIN","medal":"BRONZE","timeFormat":"08:30.00","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"10000m Men","athlete":"Ivar Ballangrud","country":"NOR","medal":"GOLD","timeFormat":"17:24.00","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"10000m Men","athlete":"Birger Wasenius","country":"FIN","medal":"SILVER","timeFormat":"17:28.00","altitude":708},{"year":1936,"location":"Garmisch-Partenkirchen, Germany","event":"10000m Men","athlete":"Max Stiepl","country":"AUT","medal":"BRONZE","timeFormat":"17:30.00","altitude":708},{"year":1948,"location":"St. Moritz, Switzerland","event":"500m Men","athlete":"Finn Helgesen","country":"NOR","medal":"GOLD","timeFormat":"00:43.10","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"500m Men","athlete":"Ken Bartholomew","country":"USA","medal":"SILVER","timeFormat":"00:43.20","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"500m Men","athlete":"Thomas Byberg","country":"NOR","medal":"SILVER","timeFormat":"00:43.20","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"500m Men","athlete":"Robert Fitzgerald","country":"USA","medal":"SILVER","timeFormat":"00:43.20","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"1500m Men","athlete":"Sverre Farstad","country":"NOR","medal":"GOLD","timeFormat":"02:17.00","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"1500m Men","athlete":"Åke Seyffarth","country":"SWE","medal":"SILVER","timeFormat":"02:18.00","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"1500m Men","athlete":"Odd Lundberg","country":"NOR","medal":"BRONZE","timeFormat":"02:18.00","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"5000m Men","athlete":"Reidar Liaklev","country":"NOR","medal":"GOLD","timeFormat":"08:29.00","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"5000m Men","athlete":"Odd Lundberg","country":"NOR","medal":"SILVER","timeFormat":"08:32.00","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"5000m Men","athlete":"Göthe Hedlund","country":"SWE","medal":"BRONZE","timeFormat":"08:34.00","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"10000m Men","athlete":"Åke Seyffarth","country":"SWE","medal":"GOLD","timeFormat":"17:26.00","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"10000m Men","athlete":"Lassi Parkkinen","country":"FIN","medal":"SILVER","timeFormat":"17:36.00","altitude":1822},{"year":1948,"location":"St. Moritz, Switzerland","event":"10000m Men","athlete":"Pentti Lammio","country":"FIN","medal":"BRONZE","timeFormat":"17:42.00","altitude":1822},{"year":1952,"location":"Oslo, Norway","event":"500m Men","athlete":"Ken Henry","country":"USA","medal":"GOLD","timeFormat":"00:43.20","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"500m Men","athlete":"Donald McDermott","country":"USA","medal":"SILVER","timeFormat":"00:43.90","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"500m Men","athlete":"Arne Johansen","country":"NOR","medal":"BRONZE","timeFormat":"00:44.00","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"500m Men","athlete":"Gordon Audley","country":"CAN","medal":"BRONZE","timeFormat":"00:44.00","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"1500m Men","athlete":"Hjallis Andersen","country":"NOR","medal":"GOLD","timeFormat":"02:20.00","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"1500m Men","athlete":"Wim van der Voort","country":"NED","medal":"SILVER","timeFormat":"02:20.00","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"1500m Men","athlete":"Roald Aas","country":"NOR","medal":"BRONZE","timeFormat":"02:21.00","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"5000m Men","athlete":"Hjallis Andersen","country":"NOR","medal":"GOLD","timeFormat":"08:10.00","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"5000m Men","athlete":"Kees Broekman","country":"NED","medal":"SILVER","timeFormat":"08:21.00","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"5000m Men","athlete":"Sverre Haugli","country":"NOR","medal":"BRONZE","timeFormat":"08:22.00","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"10000m Men","athlete":"Hjallis Andersen","country":"NOR","medal":"GOLD","timeFormat":"16:45.00","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"10000m Men","athlete":"Kees Broekman","country":"NED","medal":"SILVER","timeFormat":"17:10.00","altitude":204},{"year":1952,"location":"Oslo, Norway","event":"10000m Men","athlete":"Carl-Erik Asplund","country":"SWE","medal":"BRONZE","timeFormat":"17:16.00","altitude":204},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"500m Men","athlete":"Yevgeny Grishin","country":"URS","medal":"GOLD","timeFormat":"00:40.20","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"500m Men","athlete":"Rafael Grach","country":"URS","medal":"SILVER","timeFormat":"00:40.80","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"500m Men","athlete":"Alv Gjestvang","country":"NOR","medal":"BRONZE","timeFormat":"00:41.00","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"1500m Men","athlete":"Yevgeny Grishin","country":"URS","medal":"GOLD","timeFormat":"02:08.00","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"1500m Men","athlete":"Yury Mikhaylov","country":"URS","medal":"GOLD","timeFormat":"02:08.00","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"1500m Men","athlete":"Toivo Salonen","country":"FIN","medal":"BRONZE","timeFormat":"02:09.00","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"5000m Men","athlete":"Boris Shilkov","country":"URS","medal":"GOLD","timeFormat":"07:48.00","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"5000m Men","athlete":"Sigge Ericsson","country":"SWE","medal":"SILVER","timeFormat":"07:56.00","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"5000m Men","athlete":"Oleg Goncharenko","country":"URS","medal":"BRONZE","timeFormat":"07:57.00","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"10000m Men","athlete":"Sigge Ericsson","country":"SWE","medal":"GOLD","timeFormat":"16:35.00","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"10000m Men","athlete":"Knut Johannesen","country":"NOR","medal":"SILVER","timeFormat":"16:36.00","altitude":1210},{"year":1956,"location":"Cortina d'Ampezzo, Italy","event":"10000m Men","athlete":"Oleg Goncharenko","country":"URS","medal":"BRONZE","timeFormat":"16:42.00","altitude":1210},{"year":1960,"location":"Squaw Valley, United States","event":"500m Men","athlete":"Yevgeny Grishin","country":"URS","medal":"GOLD","timeFormat":"00:40.20","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"500m Men","athlete":"William Disney","country":"USA","medal":"SILVER","timeFormat":"00:40.30","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"500m Men","athlete":"Rafael Grach","country":"URS","medal":"BRONZE","timeFormat":"00:40.40","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"1500m Men","athlete":"Yevgeny Grishin","country":"URS","medal":"GOLD","timeFormat":"02:10.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"1500m Men","athlete":"Roald Aas","country":"NOR","medal":"GOLD","timeFormat":"02:10.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"1500m Men","athlete":"Boris Stenin","country":"URS","medal":"BRONZE","timeFormat":"02:11.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"5000m Men","athlete":"Viktor Kosichkin","country":"URS","medal":"GOLD","timeFormat":"07:51.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"5000m Men","athlete":"Knut Johannesen","country":"NOR","medal":"SILVER","timeFormat":"08:00.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"5000m Men","athlete":"Jan Pesman","country":"NED","medal":"BRONZE","timeFormat":"08:05.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"10000m Men","athlete":"Knut Johannesen","country":"NOR","medal":"GOLD","timeFormat":"15:46.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"10000m Men","athlete":"Viktor Kosichkin","country":"URS","medal":"SILVER","timeFormat":"15:49.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"10000m Men","athlete":"Kjell Båckman","country":"SWE","medal":"BRONZE","timeFormat":"16:14.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"500m Women","athlete":"Helga Haase","country":"GER","medal":"GOLD","timeFormat":"00:45.90","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"500m Women","athlete":"Natalya Donchenko","country":"URS","medal":"SILVER","timeFormat":"00:46.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"500m Women","athlete":"Jeanne Ashworth","country":"USA","medal":"BRONZE","timeFormat":"00:46.10","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"1000m Women","athlete":"Klara Guseva","country":"URS","medal":"GOLD","timeFormat":"01:34.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"1000m Women","athlete":"Helga Haase","country":"GER","medal":"SILVER","timeFormat":"01:34.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"1000m Women","athlete":"Tamara Rylova","country":"URS","medal":"BRONZE","timeFormat":"01:34.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"1500m Women","athlete":"Lidiya Skoblikova","country":"URS","medal":"GOLD","timeFormat":"02:25.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"1500m Women","athlete":"Elvira Seroczynska","country":"POL","medal":"SILVER","timeFormat":"02:25.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"1500m Women","athlete":"Helena Pilejczykowa","country":"POL","medal":"BRONZE","timeFormat":"02:27.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"3000m Women","athlete":"Lidiya Skoblikova","country":"URS","medal":"GOLD","timeFormat":"05:14.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"3000m Women","athlete":"Valentina Stenina","country":"URS","medal":"SILVER","timeFormat":"05:16.00","altitude":1880},{"year":1960,"location":"Squaw Valley, United States","event":"3000m Women","athlete":"Eevi Huttunen","country":"FIN","medal":"BRONZE","timeFormat":"05:21.00","altitude":1880},{"year":1964,"location":"Innsbruck, Austria","event":"500m Men","athlete":"Terry McDermott","country":"USA","medal":"GOLD","timeFormat":"00:40.10","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"500m Men","athlete":"Vladimir Orlov","country":"URS","medal":"SILVER","timeFormat":"00:40.60","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"500m Men","athlete":"Alv Gjestvang","country":"NOR","medal":"SILVER","timeFormat":"00:40.60","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"500m Men","athlete":"Yevgeny Grishin","country":"URS","medal":"SILVER","timeFormat":"00:40.60","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"1500m Men","athlete":"Ants Antson","country":"URS","medal":"GOLD","timeFormat":"02:10.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"1500m Men","athlete":"Kees Verkerk","country":"NED","medal":"SILVER","timeFormat":"02:10.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"1500m Men","athlete":"Villy Haugen","country":"NOR","medal":"BRONZE","timeFormat":"02:11.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"5000m Men","athlete":"Knut Johannesen","country":"NOR","medal":"GOLD","timeFormat":"07:38.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"5000m Men","athlete":"Per Ivar Moe","country":"NOR","medal":"SILVER","timeFormat":"07:38.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"5000m Men","athlete":"Fred Anton Maier","country":"NOR","medal":"BRONZE","timeFormat":"07:42.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"10000m Men","athlete":"Jonny Nilsson","country":"SWE","medal":"GOLD","timeFormat":"15:50.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"10000m Men","athlete":"Fred Anton Maier","country":"NOR","medal":"SILVER","timeFormat":"16:06.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"10000m Men","athlete":"Knut Johannesen","country":"NOR","medal":"BRONZE","timeFormat":"16:06.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"500m Women","athlete":"Lidiya Skoblikova","country":"URS","medal":"GOLD","timeFormat":"00:45.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"500m Women","athlete":"Irina Yegorova","country":"URS","medal":"SILVER","timeFormat":"00:45.40","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"500m Women","athlete":"Tatyana Sidorova","country":"URS","medal":"BRONZE","timeFormat":"00:45.50","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"1000m Women","athlete":"Lidiya Skoblikova","country":"URS","medal":"GOLD","timeFormat":"01:33.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"1000m Women","athlete":"Irina Yegorova","country":"URS","medal":"SILVER","timeFormat":"01:34.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"1000m Women","athlete":"Kaija Mustonen","country":"FIN","medal":"BRONZE","timeFormat":"01:34.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"1500m Women","athlete":"Lidiya Skoblikova","country":"URS","medal":"GOLD","timeFormat":"02:22.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"1500m Women","athlete":"Kaija Mustonen","country":"FIN","medal":"SILVER","timeFormat":"02:25.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"1500m Women","athlete":"Berta Kolokoltseva","country":"URS","medal":"BRONZE","timeFormat":"02:27.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"3000m Women","athlete":"Lidiya Skoblikova","country":"URS","medal":"GOLD","timeFormat":"05:14.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"3000m Women","athlete":"Valentina Stenina","country":"URS","medal":"SILVER","timeFormat":"05:18.00","altitude":574},{"year":1964,"location":"Innsbruck, Austria","event":"3000m Women","athlete":"Pil-Hwa Han","country":"PRK","medal":"SILVER","timeFormat":"05:18.00","altitude":574},{"year":1968,"location":"Grenoble, France","event":"500m Men","athlete":"Erhard Keller","country":"FRG","medal":"GOLD","timeFormat":"00:40.30","altitude":213},{"year":1968,"location":"Grenoble, France","event":"500m Men","athlete":"Terry McDermott","country":"USA","medal":"SILVER","timeFormat":"00:40.50","altitude":213},{"year":1968,"location":"Grenoble, France","event":"500m Men","athlete":"Magne Thomassen","country":"NOR","medal":"SILVER","timeFormat":"00:40.50","altitude":213},{"year":1968,"location":"Grenoble, France","event":"1500m Men","athlete":"Kees Verkerk","country":"NED","medal":"GOLD","timeFormat":"02:03.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"1500m Men","athlete":"Ard Schenk","country":"NED","medal":"SILVER","timeFormat":"02:05.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"1500m Men","athlete":"Ivar Eriksen","country":"NOR","medal":"SILVER","timeFormat":"02:05.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"5000m Men","athlete":"Fred Anton Maier","country":"NOR","medal":"GOLD","timeFormat":"07:22.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"5000m Men","athlete":"Kees Verkerk","country":"NED","medal":"SILVER","timeFormat":"07:23.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"5000m Men","athlete":"Peter Nottet","country":"NED","medal":"BRONZE","timeFormat":"07:25.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"10000m Men","athlete":"Johnny Höglin","country":"SWE","medal":"GOLD","timeFormat":"15:23.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"10000m Men","athlete":"Fred Anton Maier","country":"NOR","medal":"SILVER","timeFormat":"15:23.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"10000m Men","athlete":"Örjan Sandler","country":"SWE","medal":"BRONZE","timeFormat":"15:31.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"500m Women","athlete":"Lyudmila Titova","country":"URS","medal":"GOLD","timeFormat":"00:46.10","altitude":213},{"year":1968,"location":"Grenoble, France","event":"500m Women","athlete":"Mary Meyers","country":"USA","medal":"SILVER","timeFormat":"00:46.30","altitude":213},{"year":1968,"location":"Grenoble, France","event":"500m Women","athlete":"Dianne Holum","country":"USA","medal":"SILVER","timeFormat":"00:46.30","altitude":213},{"year":1968,"location":"Grenoble, France","event":"500m Women","athlete":"Jennifer Fish","country":"USA","medal":"SILVER","timeFormat":"00:46.30","altitude":213},{"year":1968,"location":"Grenoble, France","event":"1000m Women","athlete":"Carry Geijssen","country":"NED","medal":"GOLD","timeFormat":"01:32.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"1000m Women","athlete":"Lyudmila Titova","country":"URS","medal":"SILVER","timeFormat":"01:32.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"1000m Women","athlete":"Dianne Holum","country":"USA","medal":"BRONZE","timeFormat":"01:33.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"1500m Women","athlete":"Kaija Mustonen","country":"FIN","medal":"GOLD","timeFormat":"02:22.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"1500m Women","athlete":"Carry Geijssen","country":"NED","medal":"SILVER","timeFormat":"02:22.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"1500m Women","athlete":"Stien Baas-Kaiser","country":"NED","medal":"BRONZE","timeFormat":"02:24.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"3000m Women","athlete":"Ans Schut","country":"NED","medal":"GOLD","timeFormat":"04:56.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"3000m Women","athlete":"Kaija Mustonen","country":"FIN","medal":"SILVER","timeFormat":"05:01.00","altitude":213},{"year":1968,"location":"Grenoble, France","event":"3000m Women","athlete":"Stien Baas-Kaiser","country":"NED","medal":"BRONZE","timeFormat":"05:01.00","altitude":213},{"year":1972,"location":"Sapporo, Japan","event":"500m Men","athlete":"Erhard Keller","country":"FRG","medal":"GOLD","timeFormat":"00:39.44","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"500m Men","athlete":"Hasse Börjes","country":"SWE","medal":"SILVER","timeFormat":"00:39.69","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"500m Men","athlete":"Valery Muratov","country":"URS","medal":"BRONZE","timeFormat":"00:39.80","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"1500m Men","athlete":"Ard Schenk","country":"NED","medal":"GOLD","timeFormat":"02:02.96","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"1500m Men","athlete":"Roar Grønvold","country":"NOR","medal":"SILVER","timeFormat":"02:04.26","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"1500m Men","athlete":"Göran Clæsson","country":"SWE","medal":"BRONZE","timeFormat":"02:05.89","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"5000m Men","athlete":"Ard Schenk","country":"NED","medal":"GOLD","timeFormat":"07:23.61","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"5000m Men","athlete":"Roar Grønvold","country":"NOR","medal":"SILVER","timeFormat":"07:28.18","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"5000m Men","athlete":"Sten Stensen","country":"NOR","medal":"BRONZE","timeFormat":"07:33.39","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"10000m Men","athlete":"Ard Schenk","country":"NED","medal":"GOLD","timeFormat":"15:01.35","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"10000m Men","athlete":"Kees Verkerk","country":"NED","medal":"SILVER","timeFormat":"15:04.70","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"10000m Men","athlete":"Sten Stensen","country":"NOR","medal":"BRONZE","timeFormat":"15:07.08","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"500m Women","athlete":"Anne Henning","country":"USA","medal":"GOLD","timeFormat":"00:43.33","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"500m Women","athlete":"Vera Krasnova","country":"URS","medal":"SILVER","timeFormat":"00:44.01","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"500m Women","athlete":"Lyudmila Titova","country":"URS","medal":"BRONZE","timeFormat":"00:44.45","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"1000m Women","athlete":"Monika Pflug","country":"FRG","medal":"GOLD","timeFormat":"01:31.40","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"1000m Women","athlete":"Atje Keulen-Deelstra","country":"NED","medal":"SILVER","timeFormat":"01:31.61","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"1000m Women","athlete":"Anne Henning","country":"USA","medal":"BRONZE","timeFormat":"01:31.62","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"1500m Women","athlete":"Dianne Holum","country":"USA","medal":"GOLD","timeFormat":"02:20.85","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"1500m Women","athlete":"Stien Baas-Kaiser","country":"NED","medal":"SILVER","timeFormat":"02:21.05","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"1500m Women","athlete":"Atje Keulen-Deelstra","country":"NED","medal":"BRONZE","timeFormat":"02:22.05","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"3000m Women","athlete":"Stien Baas-Kaiser","country":"NED","medal":"GOLD","timeFormat":"04:52.14","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"3000m Women","athlete":"Dianne Holum","country":"USA","medal":"SILVER","timeFormat":"04:58.67","altitude":23},{"year":1972,"location":"Sapporo, Japan","event":"3000m Women","athlete":"Atje Keulen-Deelstra","country":"NED","medal":"BRONZE","timeFormat":"04:59.91","altitude":23},{"year":1976,"location":"Innsbruck, Austria","event":"500m Men","athlete":"Yevgeny Kulikov","country":"URS","medal":"GOLD","timeFormat":"00:39.17","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"500m Men","athlete":"Valery Muratov","country":"URS","medal":"SILVER","timeFormat":"00:39.25","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"500m Men","athlete":"Daniel Immerfall","country":"USA","medal":"BRONZE","timeFormat":"00:39.54","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1000m Men","athlete":"Peter Mueller","country":"USA","medal":"GOLD","timeFormat":"01:19.32","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1000m Men","athlete":"Jørn Didriksen","country":"NOR","medal":"SILVER","timeFormat":"01:20.45","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1000m Men","athlete":"Valery Muratov","country":"URS","medal":"BRONZE","timeFormat":"01:20.57","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1500m Men","athlete":"Jan Egil Storholt","country":"NOR","medal":"GOLD","timeFormat":"01:59.38","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1500m Men","athlete":"Yuri Kondakov","country":"URS","medal":"SILVER","timeFormat":"01:59.97","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1500m Men","athlete":"Hans van Helden","country":"NED","medal":"BRONZE","timeFormat":"02:00.87","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"5000m Men","athlete":"Sten Stensen","country":"NOR","medal":"GOLD","timeFormat":"07:24.48","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"5000m Men","athlete":"Piet Kleine","country":"NED","medal":"SILVER","timeFormat":"07:26.47","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"5000m Men","athlete":"Hans van Helden","country":"NED","medal":"BRONZE","timeFormat":"07:26.54","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"10000m Men","athlete":"Piet Kleine","country":"NED","medal":"GOLD","timeFormat":"14:50.59","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"10000m Men","athlete":"Sten Stensen","country":"NOR","medal":"SILVER","timeFormat":"14:53.30","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"10000m Men","athlete":"Hans van Helden","country":"NED","medal":"BRONZE","timeFormat":"15:02.02","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"500m Women","athlete":"Sheila Young","country":"USA","medal":"GOLD","timeFormat":"00:42.76","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"500m Women","athlete":"Cathy Priestner","country":"CAN","medal":"SILVER","timeFormat":"00:43.12","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"500m Women","athlete":"Tatyana Averina","country":"URS","medal":"BRONZE","timeFormat":"00:43.17","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1000m Women","athlete":"Tatyana Averina","country":"URS","medal":"GOLD","timeFormat":"01:28.43","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1000m Women","athlete":"Leah Poulos-Mueller","country":"USA","medal":"SILVER","timeFormat":"01:28.57","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1000m Women","athlete":"Sheila Young","country":"USA","medal":"BRONZE","timeFormat":"01:29.14","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1500m Women","athlete":"Galina Stepanskaya","country":"URS","medal":"GOLD","timeFormat":"02:16.58","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1500m Women","athlete":"Sheila Young","country":"USA","medal":"SILVER","timeFormat":"02:17.06","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"1500m Women","athlete":"Tatyana Averina","country":"URS","medal":"BRONZE","timeFormat":"02:17.96","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"3000m Women","athlete":"Tatyana Averina","country":"URS","medal":"GOLD","timeFormat":"04:45.19","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"3000m Women","athlete":"Andrea Schöne","country":"GDR","medal":"SILVER","timeFormat":"04:45.23","altitude":574},{"year":1976,"location":"Innsbruck, Austria","event":"3000m Women","athlete":"Lisbeth Korsmo-Berg","country":"NOR","medal":"BRONZE","timeFormat":"04:45.24","altitude":574},{"year":1980,"location":"Lake Placid, United States","event":"500m Men","athlete":"Eric Heiden","country":"USA","medal":"GOLD","timeFormat":"00:38.03","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"500m Men","athlete":"Yevgeny Kulikov","country":"URS","medal":"SILVER","timeFormat":"00:38.37","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"500m Men","athlete":"Lieuwe de Boer","country":"NED","medal":"BRONZE","timeFormat":"00:38.48","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1000m Men","athlete":"Eric Heiden","country":"USA","medal":"GOLD","timeFormat":"01:15.18","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1000m Men","athlete":"Gaétan Boucher","country":"CAN","medal":"SILVER","timeFormat":"01:16.68","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1000m Men","athlete":"Vladimir Lobanov","country":"URS","medal":"BRONZE","timeFormat":"01:16.91","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1000m Men","athlete":"Frode Rønning","country":"NOR","medal":"BRONZE","timeFormat":"01:16.91","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1500m Men","athlete":"Eric Heiden","country":"USA","medal":"GOLD","timeFormat":"01:55.44","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1500m Men","athlete":"Kay Arne Stenshjemmet","country":"NOR","medal":"SILVER","timeFormat":"01:56.81","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1500m Men","athlete":"Terje Andersen","country":"NOR","medal":"BRONZE","timeFormat":"01:56.92","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"5000m Men","athlete":"Eric Heiden","country":"USA","medal":"GOLD","timeFormat":"07:02.29","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"5000m Men","athlete":"Kay Arne Stenshjemmet","country":"NOR","medal":"SILVER","timeFormat":"07:03.28","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"5000m Men","athlete":"Tom Erik Oxholm","country":"NOR","medal":"BRONZE","timeFormat":"07:05.59","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"10000m Men","athlete":"Eric Heiden","country":"USA","medal":"GOLD","timeFormat":"14:28.13","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"10000m Men","athlete":"Piet Kleine","country":"NED","medal":"SILVER","timeFormat":"14:36.03","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"10000m Men","athlete":"Tom Erik Oxholm","country":"NOR","medal":"BRONZE","timeFormat":"14:36.60","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"500m Women","athlete":"Karin Enke","country":"GDR","medal":"GOLD","timeFormat":"00:41.78","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"500m Women","athlete":"Leah Poulos-Mueller","country":"USA","medal":"SILVER","timeFormat":"00:42.26","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"500m Women","athlete":"Natalya Petruseva","country":"URS","medal":"BRONZE","timeFormat":"00:42.42","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1000m Women","athlete":"Natalya Petruseva","country":"URS","medal":"GOLD","timeFormat":"01:24.10","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1000m Women","athlete":"Leah Poulos-Mueller","country":"USA","medal":"SILVER","timeFormat":"01:25.41","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1000m Women","athlete":"Silvia Albrecht","country":"GDR","medal":"BRONZE","timeFormat":"01:26.46","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1500m Women","athlete":"Annie Borckink","country":"NED","medal":"GOLD","timeFormat":"02:10.95","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1500m Women","athlete":"Ria Visser","country":"NED","medal":"SILVER","timeFormat":"02:12.35","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"1500m Women","athlete":"Sabine Becker","country":"GDR","medal":"BRONZE","timeFormat":"02:12.38","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"3000m Women","athlete":"Bjørg Eva Jensen","country":"NOR","medal":"GOLD","timeFormat":"04:32.13","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"3000m Women","athlete":"Sabine Becker","country":"GDR","medal":"SILVER","timeFormat":"04:32.79","altitude":568},{"year":1980,"location":"Lake Placid, United States","event":"3000m Women","athlete":"Beth Heiden","country":"USA","medal":"BRONZE","timeFormat":"04:33.77","altitude":568},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"500m Men","athlete":"Sergey Fokichev","country":"URS","medal":"GOLD","timeFormat":"00:38.19","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"500m Men","athlete":"Yoshihiro Kitazawa","country":"JPN","medal":"SILVER","timeFormat":"00:38.30","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"500m Men","athlete":"Gaétan Boucher","country":"CAN","medal":"BRONZE","timeFormat":"00:38.90","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1000m Men","athlete":"Gaétan Boucher","country":"CAN","medal":"GOLD","timeFormat":"01:15.80","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1000m Men","athlete":"Sergey Khlebnikov","country":"URS","medal":"SILVER","timeFormat":"01:16.63","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1000m Men","athlete":"Kai Arne Engelstad","country":"NOR","medal":"BRONZE","timeFormat":"01:16.75","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1500m Men","athlete":"Gaétan Boucher","country":"CAN","medal":"GOLD","timeFormat":"01:58.36","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1500m Men","athlete":"Sergey Khlebnikov","country":"URS","medal":"SILVER","timeFormat":"01:58.83","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1500m Men","athlete":"Oleg Bozhyev","country":"URS","medal":"BRONZE","timeFormat":"01:58.89","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"5000m Men","athlete":"Tomas Gustafsson","country":"SWE","medal":"GOLD","timeFormat":"07:12.28","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"5000m Men","athlete":"Igor Malkov","country":"URS","medal":"SILVER","timeFormat":"07:12.30","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"5000m Men","athlete":"René Schöfisch","country":"GDR","medal":"BRONZE","timeFormat":"07:17.49","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"10000m Men","athlete":"Igor Malkov","country":"URS","medal":"GOLD","timeFormat":"14:39.90","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"10000m Men","athlete":"Tomas Gustafsson","country":"SWE","medal":"SILVER","timeFormat":"14:39.95","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"10000m Men","athlete":"René Schöfisch","country":"GDR","medal":"BRONZE","timeFormat":"14:46.91","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"500m Women","athlete":"Christa Rothenburger","country":"GDR","medal":"GOLD","timeFormat":"00:41.02","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"500m Women","athlete":"Karin Enke","country":"GDR","medal":"SILVER","timeFormat":"00:41.28","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"500m Women","athlete":"Natalya Shive","country":"URS","medal":"BRONZE","timeFormat":"00:41.50","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1000m Women","athlete":"Karin Enke","country":"GDR","medal":"GOLD","timeFormat":"01:21.61","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1000m Women","athlete":"Andrea Schöne","country":"GDR","medal":"SILVER","timeFormat":"01:22.83","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1000m Women","athlete":"Natalya Petruseva","country":"URS","medal":"BRONZE","timeFormat":"01:23.21","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1500m Women","athlete":"Karin Enke","country":"GDR","medal":"GOLD","timeFormat":"02:03.42","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1500m Women","athlete":"Andrea Schöne","country":"GDR","medal":"SILVER","timeFormat":"02:05.29","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"1500m Women","athlete":"Natalya Petruseva","country":"URS","medal":"BRONZE","timeFormat":"02:05.78","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"3000m Women","athlete":"Andrea Schöne","country":"GDR","medal":"GOLD","timeFormat":"04:24.79","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"3000m Women","athlete":"Karin Enke","country":"GDR","medal":"SILVER","timeFormat":"04:26.33","altitude":500},{"year":1984,"location":"Sarajevo, Yugoslavia","event":"3000m Women","athlete":"Gabi Zange-Schönbrunn","country":"GDR","medal":"BRONZE","timeFormat":"04:33.13","altitude":500},{"year":1988,"location":"Calgary, Canada","event":"500m Men","athlete":"Uwe-Jens Mey","country":"GDR","medal":"GOLD","timeFormat":"00:36.45","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"500m Men","athlete":"Jan Ykema","country":"NED","medal":"SILVER","timeFormat":"00:36.76","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"500m Men","athlete":"Akira Kuroiwa","country":"JPN","medal":"BRONZE","timeFormat":"00:36.77","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1000m Men","athlete":"Nikolay Gulyaev","country":"URS","medal":"GOLD","timeFormat":"01:13.03","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1000m Men","athlete":"Uwe-Jens Mey","country":"GDR","medal":"SILVER","timeFormat":"01:13.11","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1000m Men","athlete":"Igor Zhelezovsky","country":"URS","medal":"BRONZE","timeFormat":"01:13.19","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1500m Men","athlete":"André Hoffmann","country":"GDR","medal":"GOLD","timeFormat":"01:52.06","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1500m Men","athlete":"Eric Flaim","country":"USA","medal":"SILVER","timeFormat":"01:52.12","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1500m Men","athlete":"Michael Hadschieff","country":"AUT","medal":"BRONZE","timeFormat":"01:52.31","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"5000m Men","athlete":"Tomas Gustafsson","country":"SWE","medal":"GOLD","timeFormat":"06:44.63","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"5000m Men","athlete":"Leo Visser","country":"NED","medal":"SILVER","timeFormat":"06:44.98","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"5000m Men","athlete":"Gerard Kemkers","country":"NED","medal":"BRONZE","timeFormat":"06:45.92","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"10000m Men","athlete":"Tomas Gustafsson","country":"SWE","medal":"GOLD","timeFormat":"13:48.20","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"10000m Men","athlete":"Michael Hadschieff","country":"AUT","medal":"SILVER","timeFormat":"13:56.11","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"10000m Men","athlete":"Leo Visser","country":"NED","medal":"BRONZE","timeFormat":"14:00.55","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"500m Women","athlete":"Bonnie Blair","country":"USA","medal":"GOLD","timeFormat":"00:39.10","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"500m Women","athlete":"Christa Rothenburger","country":"GDR","medal":"SILVER","timeFormat":"00:39.12","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"500m Women","athlete":"Karin Enke","country":"GDR","medal":"BRONZE","timeFormat":"00:39.24","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1000m Women","athlete":"Christa Rothenburger","country":"GDR","medal":"GOLD","timeFormat":"01:17.65","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1000m Women","athlete":"Karin Enke","country":"GDR","medal":"SILVER","timeFormat":"01:17.70","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1000m Women","athlete":"Bonnie Blair","country":"USA","medal":"BRONZE","timeFormat":"01:18.31","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1500m Women","athlete":"Yvonne van Gennip","country":"NED","medal":"GOLD","timeFormat":"02:00.68","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1500m Women","athlete":"Karin Enke","country":"GDR","medal":"SILVER","timeFormat":"02:00.82","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"1500m Women","athlete":"Andrea Schöne","country":"GDR","medal":"BRONZE","timeFormat":"02:01.49","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"3000m Women","athlete":"Yvonne van Gennip","country":"NED","medal":"GOLD","timeFormat":"04:11.94","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"3000m Women","athlete":"Andrea Schöne","country":"GDR","medal":"SILVER","timeFormat":"04:12.09","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"3000m Women","athlete":"Gabi Zange-Schönbrunn","country":"GDR","medal":"BRONZE","timeFormat":"04:16.92","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"5000m Women","athlete":"Yvonne van Gennip","country":"NED","medal":"GOLD","timeFormat":"07:14.13","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"5000m Women","athlete":"Andrea Schöne","country":"GDR","medal":"SILVER","timeFormat":"07:17.12","altitude":1105},{"year":1988,"location":"Calgary, Canada","event":"5000m Women","athlete":"Gabi Zange-Schönbrunn","country":"GDR","medal":"BRONZE","timeFormat":"07:21.61","altitude":1105},{"year":1992,"location":"Albertville, France","event":"500m Men","athlete":"Uwe-Jens Mey","country":"GER","medal":"GOLD","timeFormat":"00:37.14","altitude":352},{"year":1992,"location":"Albertville, France","event":"500m Men","athlete":"Toshiyuki Kuroiwa","country":"JPN","medal":"SILVER","timeFormat":"00:37.18","altitude":352},{"year":1992,"location":"Albertville, France","event":"500m Men","athlete":"Junichi Inoue","country":"JPN","medal":"BRONZE","timeFormat":"00:37.26","altitude":352},{"year":1992,"location":"Albertville, France","event":"1000m Men","athlete":"Olaf Zinke","country":"GER","medal":"GOLD","timeFormat":"01:14.85","altitude":352},{"year":1992,"location":"Albertville, France","event":"1000m Men","athlete":"Yoon-Man Kim","country":"KOR","medal":"SILVER","timeFormat":"01:14.86","altitude":352},{"year":1992,"location":"Albertville, France","event":"1000m Men","athlete":"Yukinori Miyabe","country":"JPN","medal":"BRONZE","timeFormat":"01:14.92","altitude":352},{"year":1992,"location":"Albertville, France","event":"1500m Men","athlete":"Johann Koss","country":"NOR","medal":"GOLD","timeFormat":"01:54.81","altitude":352},{"year":1992,"location":"Albertville, France","event":"1500m Men","athlete":"Ådne Søndrål","country":"NOR","medal":"SILVER","timeFormat":"01:54.85","altitude":352},{"year":1992,"location":"Albertville, France","event":"1500m Men","athlete":"Leo Visser","country":"NED","medal":"BRONZE","timeFormat":"01:54.90","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Men","athlete":"Geir Karlstad","country":"NOR","medal":"GOLD","timeFormat":"06:59.97","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Men","athlete":"Falko Zandstra","country":"NED","medal":"SILVER","timeFormat":"07:02.28","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Men","athlete":"Leo Visser","country":"NED","medal":"BRONZE","timeFormat":"07:04.96","altitude":352},{"year":1992,"location":"Albertville, France","event":"10000m Men","athlete":"Bart Veldkamp","country":"NED","medal":"GOLD","timeFormat":"14:12.12","altitude":352},{"year":1992,"location":"Albertville, France","event":"10000m Men","athlete":"Johann Koss","country":"NOR","medal":"SILVER","timeFormat":"14:14.58","altitude":352},{"year":1992,"location":"Albertville, France","event":"10000m Men","athlete":"Geir Karlstad","country":"NOR","medal":"BRONZE","timeFormat":"14:18.13","altitude":352},{"year":1992,"location":"Albertville, France","event":"500m Women","athlete":"Bonnie Blair","country":"USA","medal":"GOLD","timeFormat":"00:40.33","altitude":352},{"year":1992,"location":"Albertville, France","event":"500m Women","athlete":"Qiaobo Ye","country":"CHN","medal":"SILVER","timeFormat":"00:40.51","altitude":352},{"year":1992,"location":"Albertville, France","event":"500m Women","athlete":"Christa Rothenburger","country":"GER","medal":"BRONZE","timeFormat":"00:40.57","altitude":352},{"year":1992,"location":"Albertville, France","event":"1000m Women","athlete":"Bonnie Blair","country":"USA","medal":"GOLD","timeFormat":"01:21.90","altitude":352},{"year":1992,"location":"Albertville, France","event":"1000m Women","athlete":"Qiaobo Ye","country":"CHN","medal":"SILVER","timeFormat":"01:21.92","altitude":352},{"year":1992,"location":"Albertville, France","event":"1000m Women","athlete":"Monique Garbrecht","country":"GER","medal":"BRONZE","timeFormat":"01:22.10","altitude":352},{"year":1992,"location":"Albertville, France","event":"1500m Women","athlete":"Jacqueline Börner","country":"GER","medal":"GOLD","timeFormat":"02:05.87","altitude":352},{"year":1992,"location":"Albertville, France","event":"1500m Women","athlete":"Gunda Niemann","country":"GER","medal":"SILVER","timeFormat":"02:05.92","altitude":352},{"year":1992,"location":"Albertville, France","event":"1500m Women","athlete":"Seiko Hashimoto","country":"JPN","medal":"BRONZE","timeFormat":"02:06.88","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Women","athlete":"Gunda Niemann","country":"GER","medal":"GOLD","timeFormat":"04:19.90","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Women","athlete":"Heike Warnicke","country":"GER","medal":"SILVER","timeFormat":"04:22.88","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Women","athlete":"Emese Hunyady","country":"AUT","medal":"BRONZE","timeFormat":"04:24.64","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Women","athlete":"Gunda Niemann","country":"GER","medal":"GOLD","timeFormat":"07:31.57","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Women","athlete":"Heike Warnicke","country":"GER","medal":"SILVER","timeFormat":"07:37.59","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Women","athlete":"Claudia Pechstein","country":"GER","medal":"BRONZE","timeFormat":"07:39.80","altitude":352},{"year":1992,"location":"Albertville, France","event":"1000m Short Track Men","athlete":"Ki-Hoon Kim","country":"KOR","medal":"GOLD","timeFormat":"01:30.76","altitude":352},{"year":1992,"location":"Albertville, France","event":"1000m Short Track Men","athlete":"Frédéric Blackburn","country":"CAN","medal":"SILVER","timeFormat":"01:31.11","altitude":352},{"year":1992,"location":"Albertville, France","event":"1000m Short Track Men","athlete":"Joon-Ho Lee","country":"KOR","medal":"BRONZE","timeFormat":"01:31.16","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Joon-Ho Lee","country":"KOR","medal":"GOLD","timeFormat":"07:14.02","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Ji-Su Mo","country":"KOR","medal":"GOLD","timeFormat":"07:14.02","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Ki-Hoon Kim","country":"KOR","medal":"GOLD","timeFormat":"07:14.02","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Jae-Kun Song","country":"KOR","medal":"GOLD","timeFormat":"07:14.02","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Sylvain Gagnon","country":"CAN","medal":"SILVER","timeFormat":"07:14.06","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Marck Lackie","country":"CAN","medal":"SILVER","timeFormat":"07:14.06","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Frédéric Blackburn","country":"CAN","medal":"SILVER","timeFormat":"07:14.06","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Michel Daignault","country":"CAN","medal":"SILVER","timeFormat":"07:14.06","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Yuichi Akasaka","country":"JPN","medal":"BRONZE","timeFormat":"07:18.18","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Tatsuyoshi Ishihara","country":"JPN","medal":"BRONZE","timeFormat":"07:18.18","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Toshinobu Kawai","country":"JPN","medal":"BRONZE","timeFormat":"07:18.18","altitude":352},{"year":1992,"location":"Albertville, France","event":"5000m Short Track Relay Men","athlete":"Tsutomu Kawasaki","country":"JPN","medal":"BRONZE","timeFormat":"07:18.18","altitude":352},{"year":1992,"location":"Albertville, France","event":"500m Short Track Women","athlete":"Cathy Turner","country":"USA","medal":"GOLD","timeFormat":"00:47.04","altitude":352},{"year":1992,"location":"Albertville, France","event":"500m Short Track Women","athlete":"Yan Li","country":"CHN","medal":"SILVER","timeFormat":"00:47.08","altitude":352},{"year":1992,"location":"Albertville, France","event":"500m Short Track Women","athlete":"Ok-Sil Hwang","country":"PRK","medal":"BRONZE","timeFormat":"00:47.23","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Angela Cutrone","country":"CAN","medal":"GOLD","timeFormat":"04:36.62","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Sylvie Daigle","country":"CAN","medal":"GOLD","timeFormat":"04:36.62","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Nathalie Lambert","country":"CAN","medal":"GOLD","timeFormat":"04:36.62","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Annie Perreault","country":"CAN","medal":"GOLD","timeFormat":"04:36.62","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Amy Peterson","country":"USA","medal":"SILVER","timeFormat":"04:37.85","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Cathy Turner","country":"USA","medal":"SILVER","timeFormat":"04:37.85","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Nikki Ziegelmeyer","country":"USA","medal":"SILVER","timeFormat":"04:37.85","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Darcie Dohnal","country":"USA","medal":"SILVER","timeFormat":"04:37.85","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Natalya Isakova","country":"URS","medal":"BRONZE","timeFormat":"04:42.69","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Yuliya Allagulova","country":"URS","medal":"BRONZE","timeFormat":"04:42.69","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Viktoriya Taranina","country":"URS","medal":"BRONZE","timeFormat":"04:42.69","altitude":352},{"year":1992,"location":"Albertville, France","event":"3000m Short Track Relay Women","athlete":"Yuliya Vlasova","country":"URS","medal":"BRONZE","timeFormat":"04:42.69","altitude":352},{"year":1994,"location":"Lillehammer, Norway","event":"500m Men","athlete":"Aleksandr Golubev","country":"RUS","medal":"GOLD","timeFormat":"00:36.33","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Men","athlete":"Sergey Klevchenya","country":"RUS","medal":"SILVER","timeFormat":"00:36.39","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Men","athlete":"Manabu Horii","country":"JPN","medal":"BRONZE","timeFormat":"00:36.53","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Men","athlete":"Dan Jansen","country":"USA","medal":"GOLD","timeFormat":"01:12.43","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Men","athlete":"Igor Zhelezovsky","country":"BLR","medal":"SILVER","timeFormat":"01:12.72","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Men","athlete":"Sergey Klevchenya","country":"RUS","medal":"BRONZE","timeFormat":"01:12.85","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1500m Men","athlete":"Johann Koss","country":"NOR","medal":"GOLD","timeFormat":"01:51.29","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1500m Men","athlete":"Rintje Ritsma","country":"NED","medal":"SILVER","timeFormat":"01:51.99","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1500m Men","athlete":"Falko Zandstra","country":"NED","medal":"BRONZE","timeFormat":"01:52.38","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Men","athlete":"Johann Koss","country":"NOR","medal":"GOLD","timeFormat":"06:34.96","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Men","athlete":"Kjell Storelid","country":"NOR","medal":"SILVER","timeFormat":"06:42.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Men","athlete":"Rintje Ritsma","country":"NED","medal":"BRONZE","timeFormat":"06:43.94","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"10000m Men","athlete":"Johann Koss","country":"NOR","medal":"GOLD","timeFormat":"13:30.55","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"10000m Men","athlete":"Kjell Storelid","country":"NOR","medal":"SILVER","timeFormat":"13:49.25","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"10000m Men","athlete":"Bart Veldkamp","country":"NED","medal":"BRONZE","timeFormat":"13:56.73","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Women","athlete":"Bonnie Blair","country":"USA","medal":"GOLD","timeFormat":"00:39.25","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Women","athlete":"Susan Auch","country":"CAN","medal":"SILVER","timeFormat":"00:39.61","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Women","athlete":"Franziska Schenk","country":"GER","medal":"BRONZE","timeFormat":"00:39.70","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Women","athlete":"Bonnie Blair","country":"USA","medal":"GOLD","timeFormat":"01:18.74","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Women","athlete":"Anke Baier-Loef","country":"GER","medal":"SILVER","timeFormat":"01:20.12","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Women","athlete":"Qiaobo Ye","country":"CHN","medal":"BRONZE","timeFormat":"01:20.22","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1500m Women","athlete":"Emese Hunyady","country":"AUT","medal":"GOLD","timeFormat":"02:02.19","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1500m Women","athlete":"Svetlana Fedotkina","country":"RUS","medal":"SILVER","timeFormat":"02:02.69","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1500m Women","athlete":"Gunda Niemann","country":"GER","medal":"BRONZE","timeFormat":"02:03.41","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Women","athlete":"Svetlana Bashanova","country":"RUS","medal":"GOLD","timeFormat":"04:17.43","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Women","athlete":"Emese Hunyady","country":"AUT","medal":"SILVER","timeFormat":"04:18.14","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Women","athlete":"Claudia Pechstein","country":"GER","medal":"BRONZE","timeFormat":"04:18.34","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Women","athlete":"Claudia Pechstein","country":"GER","medal":"GOLD","timeFormat":"07:14.37","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Women","athlete":"Gunda Niemann","country":"GER","medal":"SILVER","timeFormat":"07:14.88","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Women","athlete":"Hiromi Yamamoto","country":"JPN","medal":"BRONZE","timeFormat":"07:19.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Short Track Men","athlete":"Ji-Hoon Chae","country":"KOR","medal":"GOLD","timeFormat":"00:43.45","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Short Track Men","athlete":"Mirko Vuillermin","country":"ITA","medal":"SILVER","timeFormat":"00:43.47","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Short Track Men","athlete":"Nicholas Gooch","country":"GBR","medal":"BRONZE","timeFormat":"00:43.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Short Track Men","athlete":"Ki-Hoon Kim","country":"KOR","medal":"GOLD","timeFormat":"01:34.57","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Short Track Men","athlete":"Ji-Hoon Chae","country":"KOR","medal":"SILVER","timeFormat":"01:34.92","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Short Track Men","athlete":"Marc Gagnon","country":"CAN","medal":"BRONZE","timeFormat":"01:33.03","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Orazio Fagone","country":"ITA","medal":"GOLD","timeFormat":"07:11.74","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Hugo Herrnhof","country":"ITA","medal":"GOLD","timeFormat":"07:11.74","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Maurizio Carnino","country":"ITA","medal":"GOLD","timeFormat":"07:11.74","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Mirko Vuillermin","country":"ITA","medal":"GOLD","timeFormat":"07:11.74","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Randall Bartz","country":"USA","medal":"SILVER","timeFormat":"07:13.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Eric Flaim","country":"USA","medal":"SILVER","timeFormat":"07:13.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Andrew Gabel","country":"USA","medal":"SILVER","timeFormat":"07:13.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"John Coyle","country":"USA","medal":"SILVER","timeFormat":"07:13.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Steven Bradbury","country":"AUS","medal":"BRONZE","timeFormat":"07:13.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Andrew Murtha","country":"AUS","medal":"BRONZE","timeFormat":"07:13.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Kieran Hansen","country":"AUS","medal":"BRONZE","timeFormat":"07:13.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"5000m Short Track Relay Men","athlete":"Richard Nizielski","country":"AUS","medal":"BRONZE","timeFormat":"07:13.68","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Short Track Women","athlete":"Cathy Turner","country":"USA","medal":"GOLD","timeFormat":"00:45.98","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Short Track Women","athlete":"Yanmei Zhang","country":"CHN","medal":"SILVER","timeFormat":"00:46.44","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"500m Short Track Women","athlete":"Amy Peterson","country":"USA","medal":"BRONZE","timeFormat":"00:46.76","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Short Track Women","athlete":"Lee-Kyung Chun","country":"KOR","medal":"GOLD","timeFormat":"01:36.87","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Short Track Women","athlete":"Nathalie Lambert","country":"CAN","medal":"SILVER","timeFormat":"01:36.97","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"1000m Short Track Women","athlete":"So-Hee Kim","country":"KOR","medal":"BRONZE","timeFormat":"01:37.09","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"So-Hee Kim","country":"KOR","medal":"GOLD","timeFormat":"04:26.64","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Yoon-Mi Kim","country":"KOR","medal":"GOLD","timeFormat":"04:26.64","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Lee-Kyung Chun","country":"KOR","medal":"GOLD","timeFormat":"04:26.64","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Hye-Kyung Won","country":"KOR","medal":"GOLD","timeFormat":"04:26.64","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Isabelle Charest","country":"CAN","medal":"SILVER","timeFormat":"04:32.04","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Sylvie Daigle","country":"CAN","medal":"SILVER","timeFormat":"04:32.04","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Christine Boudrias","country":"CAN","medal":"SILVER","timeFormat":"04:32.04","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Nathalie Lambert","country":"CAN","medal":"SILVER","timeFormat":"04:32.04","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Karen Cashman","country":"USA","medal":"BRONZE","timeFormat":"04:39.34","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Cathy Turner","country":"USA","medal":"BRONZE","timeFormat":"04:39.34","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Amy Peterson","country":"USA","medal":"BRONZE","timeFormat":"04:39.34","altitude":125},{"year":1994,"location":"Lillehammer, Norway","event":"3000m Short Track Relay Women","athlete":"Nikki Ziegelmeyer","country":"USA","medal":"BRONZE","timeFormat":"04:39.34","altitude":125},{"year":1998,"location":"Nagano, Japan","event":"500m Men","athlete":"Hiroyasu Shimizu","country":"JPN","medal":"GOLD","timeFormat":"01:11.35","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Men","athlete":"Jeremy Wotherspoon","country":"CAN","medal":"SILVER","timeFormat":"01:11.84","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Men","athlete":"Kevin Overland","country":"CAN","medal":"BRONZE","timeFormat":"01:11.86","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Men","athlete":"Ids Postma","country":"NED","medal":"GOLD","timeFormat":"01:10.64","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Men","athlete":"Jan Bos","country":"NED","medal":"SILVER","timeFormat":"01:10.71","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Men","athlete":"Hiroyasu Shimizu","country":"JPN","medal":"BRONZE","timeFormat":"01:11.00","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1500m Men","athlete":"Ådne Søndrål","country":"NOR","medal":"GOLD","timeFormat":"01:47.87","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1500m Men","athlete":"Ids Postma","country":"NED","medal":"SILVER","timeFormat":"01:48.13","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1500m Men","athlete":"Rintje Ritsma","country":"NED","medal":"BRONZE","timeFormat":"01:48.52","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Men","athlete":"Gianni Romme","country":"NED","medal":"GOLD","timeFormat":"06:22.20","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Men","athlete":"Rintje Ritsma","country":"NED","medal":"SILVER","timeFormat":"06:28.24","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Men","athlete":"Bart Veldkamp","country":"BEL","medal":"BRONZE","timeFormat":"06:28.31","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"10000m Men","athlete":"Gianni Romme","country":"NED","medal":"GOLD","timeFormat":"13:15.33","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"10000m Men","athlete":"Bob de Jong","country":"NED","medal":"SILVER","timeFormat":"13:25.76","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"10000m Men","athlete":"Rintje Ritsma","country":"NED","medal":"BRONZE","timeFormat":"13:28.19","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Women","athlete":"Catriona Lemay-Doan","country":"CAN","medal":"GOLD","timeFormat":"01:16.60","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Women","athlete":"Susan Auch","country":"CAN","medal":"SILVER","timeFormat":"01:16.93","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Women","athlete":"Tomomi Okazaki","country":"JPN","medal":"BRONZE","timeFormat":"01:17.10","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Women","athlete":"Marianne Timmer","country":"NED","medal":"GOLD","timeFormat":"01:16.51","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Women","athlete":"Christine Witty","country":"USA","medal":"SILVER","timeFormat":"01:16.79","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Women","athlete":"Catriona Lemay-Doan","country":"CAN","medal":"BRONZE","timeFormat":"01:17.37","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1500m Women","athlete":"Marianne Timmer","country":"NED","medal":"GOLD","timeFormat":"01:57.58","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1500m Women","athlete":"Gunda Niemann","country":"GER","medal":"SILVER","timeFormat":"01:58.66","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1500m Women","athlete":"Christine Witty","country":"USA","medal":"BRONZE","timeFormat":"01:58.97","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Women","athlete":"Gunda Niemann","country":"GER","medal":"GOLD","timeFormat":"04:07.29","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Women","athlete":"Claudia Pechstein","country":"GER","medal":"SILVER","timeFormat":"04:08.47","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Women","athlete":"Anna Friesinger","country":"GER","medal":"BRONZE","timeFormat":"04:09.44","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Women","athlete":"Claudia Pechstein","country":"GER","medal":"GOLD","timeFormat":"06:59.61","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Women","athlete":"Gunda Niemann","country":"GER","medal":"SILVER","timeFormat":"06:59.65","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Women","athlete":"Lyudmila Prokasheva","country":"KAZ","medal":"BRONZE","timeFormat":"07:11.14","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Short Track Men","athlete":"Takafumi Nishitani","country":"JPN","medal":"GOLD","timeFormat":"00:42.862","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Short Track Men","athlete":"Yulong An","country":"CHN","medal":"SILVER","timeFormat":"00:43.022","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Short Track Men","athlete":"Hitoshi Uematsu","country":"JPN","medal":"BRONZE","timeFormat":"00:43.713","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Short Track Men","athlete":"Dong-Sung Kim","country":"KOR","medal":"GOLD","timeFormat":"01:32.375","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Short Track Men","athlete":"Jiajun Li","country":"CHN","medal":"SILVER","timeFormat":"01:32.428","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Short Track Men","athlete":"Éric Bédard","country":"CAN","medal":"BRONZE","timeFormat":"01:32.661","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Éric Bédard","country":"CAN","medal":"GOLD","timeFormat":"07:06.075","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Derrick Campbell","country":"CAN","medal":"GOLD","timeFormat":"07:06.075","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Marc Gagnon","country":"CAN","medal":"GOLD","timeFormat":"07:06.075","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Francois Drolet","country":"CAN","medal":"GOLD","timeFormat":"07:06.075","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Dong-Sung Kim","country":"KOR","medal":"SILVER","timeFormat":"07:06.776","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Ji-Hoon Chae","country":"KOR","medal":"SILVER","timeFormat":"07:06.776","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Ho-Eung Lee","country":"KOR","medal":"SILVER","timeFormat":"07:06.776","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Jun-Hwan Lee","country":"KOR","medal":"SILVER","timeFormat":"07:06.776","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Jiajun Li","country":"CHN","medal":"BRONZE","timeFormat":"07:11.559","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Yulong An","country":"CHN","medal":"BRONZE","timeFormat":"07:11.559","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Kai Feng","country":"CHN","medal":"BRONZE","timeFormat":"07:11.559","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"5000m Short Track Relay Men","athlete":"Ye Yuan","country":"CHN","medal":"BRONZE","timeFormat":"07:11.559","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Short Track Women","athlete":"Annie Perreault","country":"CAN","medal":"GOLD","timeFormat":"00:46.568","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Short Track Women","athlete":"Yang (S) Yang","country":"CHN","medal":"SILVER","timeFormat":"00:46.627","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"500m Short Track Women","athlete":"Lee-Kyung Chun","country":"KOR","medal":"BRONZE","timeFormat":"00:46.335","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Short Track Women","athlete":"Lee-Kyung Chun","country":"KOR","medal":"GOLD","timeFormat":"01:42.776","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Short Track Women","athlete":"Yang (S) Yang","country":"CHN","medal":"SILVER","timeFormat":"01:43.343","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"1000m Short Track Women","athlete":"Hye-Kyung Won","country":"KOR","medal":"BRONZE","timeFormat":"01:43.361","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Hye-Kyung Won","country":"KOR","medal":"GOLD","timeFormat":"04:16.260","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Lee-Kyung Chun","country":"KOR","medal":"GOLD","timeFormat":"04:16.260","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Yoon-Mi Kim","country":"KOR","medal":"GOLD","timeFormat":"04:16.260","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Sang-Me An","country":"KOR","medal":"GOLD","timeFormat":"04:16.260","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Dandan Sun","country":"CHN","medal":"SILVER","timeFormat":"04:16.383","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Yang (S) Yang","country":"CHN","medal":"SILVER","timeFormat":"04:16.383","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Yang (A) Yang","country":"CHN","medal":"SILVER","timeFormat":"04:16.383","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Chunlu Wang","country":"CHN","medal":"SILVER","timeFormat":"04:16.383","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Tania Vicent","country":"CAN","medal":"BRONZE","timeFormat":"04:21.205","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Annie Perreault","country":"CAN","medal":"BRONZE","timeFormat":"04:21.205","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Isabelle Charest","country":"CAN","medal":"BRONZE","timeFormat":"04:21.205","altitude":346},{"year":1998,"location":"Nagano, Japan","event":"3000m Short Track Relay Women","athlete":"Christine Boudrias","country":"CAN","medal":"BRONZE","timeFormat":"04:21.205","altitude":346},{"year":2002,"location":"Salt Lake City, United States","event":"500m Men","athlete":"Casey FitzRandolph","country":"USA","medal":"GOLD","timeFormat":"00:69.23","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Men","athlete":"Hiroyasu Shimizu","country":"JPN","medal":"SILVER","timeFormat":"00:69.26","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Men","athlete":"Kip Carpenter","country":"USA","medal":"BRONZE","timeFormat":"00:69.47","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Men","athlete":"Gerard van Velde","country":"NED","medal":"GOLD","timeFormat":"01:07.18","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Men","athlete":"Jan Bos","country":"NED","medal":"SILVER","timeFormat":"01:07.53","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Men","athlete":"Joey Cheek","country":"USA","medal":"BRONZE","timeFormat":"01:07.61","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Men","athlete":"Derek Parra","country":"USA","medal":"GOLD","timeFormat":"01:43.95","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Men","athlete":"Jochem Uytdehaage","country":"NED","medal":"SILVER","timeFormat":"01:44.57","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Men","athlete":"Ådne Søndrål","country":"NOR","medal":"BRONZE","timeFormat":"01:45.26","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Men","athlete":"Jochem Uytdehaage","country":"NED","medal":"GOLD","timeFormat":"06:14.66","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Men","athlete":"Derek Parra","country":"USA","medal":"SILVER","timeFormat":"06:17.98","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Men","athlete":"Jens Boden","country":"GER","medal":"BRONZE","timeFormat":"06:21.73","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"10000m Men","athlete":"Jochem Uytdehaage","country":"NED","medal":"GOLD","timeFormat":"12:58.92","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"10000m Men","athlete":"Gianni Romme","country":"NED","medal":"SILVER","timeFormat":"13:10.03","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"10000m Men","athlete":"Lasse Sätre","country":"NOR","medal":"BRONZE","timeFormat":"13:16.92","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Women","athlete":"Catriona Lemay-Doan","country":"CAN","medal":"GOLD","timeFormat":"01:14.75","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Women","athlete":"Monique Garbrecht","country":"GER","medal":"SILVER","timeFormat":"01:14.94","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Women","athlete":"Sabine Völker","country":"GER","medal":"BRONZE","timeFormat":"01:15.19","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Women","athlete":"Christine Witty","country":"USA","medal":"GOLD","timeFormat":"01:13.83","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Women","athlete":"Sabine Völker","country":"GER","medal":"SILVER","timeFormat":"01:13.96","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Women","athlete":"Jennifer Rodriguez","country":"USA","medal":"BRONZE","timeFormat":"01:14.24","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Women","athlete":"Anna Friesinger","country":"GER","medal":"GOLD","timeFormat":"01:54.02","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Women","athlete":"Sabine Völker","country":"GER","medal":"SILVER","timeFormat":"01:54.97","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Women","athlete":"Jennifer Rodriguez","country":"USA","medal":"BRONZE","timeFormat":"01:55.32","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Women","athlete":"Claudia Pechstein","country":"GER","medal":"GOLD","timeFormat":"03:57.70","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Women","athlete":"Renate Groenevold","country":"NED","medal":"SILVER","timeFormat":"03:58.94","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Women","athlete":"Cindy Klassen","country":"CAN","medal":"BRONZE","timeFormat":"03:58.97","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Women","athlete":"Claudia Pechstein","country":"GER","medal":"GOLD","timeFormat":"06:46.91","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Women","athlete":"Greta Smit","country":"NED","medal":"SILVER","timeFormat":"06:49.22","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Women","athlete":"Clara Hughes","country":"CAN","medal":"BRONZE","timeFormat":"06:53.53","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Short Track Men","athlete":"Marc Gagnon","country":"CAN","medal":"GOLD","timeFormat":"00:41.802","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Short Track Men","athlete":"Jonathan Guilmette","country":"CAN","medal":"SILVER","timeFormat":"00:41.994","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Short Track Men","athlete":"Rusty Smith","country":"USA","medal":"BRONZE","timeFormat":"00:42.027","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Short Track Men","athlete":"Steven Bradbury","country":"AUS","medal":"GOLD","timeFormat":"01:29.109","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Short Track Men","athlete":"Apolo Anton Ohno","country":"USA","medal":"SILVER","timeFormat":"01:30.160","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Short Track Men","athlete":"Mathieu Turcotte","country":"CAN","medal":"BRONZE","timeFormat":"01:30.563","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Mathieu Turcotte","country":"CAN","medal":"GOLD","timeFormat":"06:51.579","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Francois-Louis Tremblay","country":"CAN","medal":"GOLD","timeFormat":"06:51.579","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Jonathan Guilmette","country":"CAN","medal":"GOLD","timeFormat":"06:51.579","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Marc Gagnon","country":"CAN","medal":"GOLD","timeFormat":"06:51.579","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Nicola Franceschina","country":"ITA","medal":"SILVER","timeFormat":"06:56.327","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Maurizio Carnino","country":"ITA","medal":"SILVER","timeFormat":"06:56.327","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Fabio Carta","country":"ITA","medal":"SILVER","timeFormat":"06:56.327","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Nicola Rodigari","country":"ITA","medal":"SILVER","timeFormat":"06:56.327","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Kai Feng","country":"CHN","medal":"BRONZE","timeFormat":"06:59.633","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Wei Guo","country":"CHN","medal":"BRONZE","timeFormat":"06:59.633","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Ye Li","country":"CHN","medal":"BRONZE","timeFormat":"06:59.633","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"5000m Short Track Relay Men","athlete":"Jiajun Li","country":"CHN","medal":"BRONZE","timeFormat":"06:59.633","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Short Track Men","athlete":"Apolo Anton Ohno","country":"USA","medal":"GOLD","timeFormat":"02:18.541","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Short Track Men","athlete":"Jiajun Li","country":"CHN","medal":"SILVER","timeFormat":"02:18.731","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Short Track Men","athlete":"Marc Gagnon","country":"CAN","medal":"BRONZE","timeFormat":"02:18.806","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Short Track Women","athlete":"Yang (A) Yang","country":"CHN","medal":"GOLD","timeFormat":"00:44.187","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Short Track Women","athlete":"Evgenia Radanova","country":"BUL","medal":"SILVER","timeFormat":"00:44.252","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"500m Short Track Women","athlete":"Chunlu Wang","country":"CHN","medal":"BRONZE","timeFormat":"00:44.272","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Short Track Women","athlete":"Yang (A) Yang","country":"CHN","medal":"GOLD","timeFormat":"01:36.391","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Short Track Women","athlete":"Gi-Hyun Ko","country":"KOR","medal":"SILVER","timeFormat":"01:36.427","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1000m Short Track Women","athlete":"Yang (S) Yang","country":"CHN","medal":"BRONZE","timeFormat":"01:37.008","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Hye-Won Park","country":"KOR","medal":"GOLD","timeFormat":"04:12.793","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Min-Jin Joo","country":"KOR","medal":"GOLD","timeFormat":"04:12.793","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Eun-Kyung Choi","country":"KOR","medal":"GOLD","timeFormat":"04:12.793","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Min-Kyung Choi","country":"KOR","medal":"GOLD","timeFormat":"04:12.793","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Yang (S) Yang","country":"CHN","medal":"SILVER","timeFormat":"04:13.236","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Chunlu Wang","country":"CHN","medal":"SILVER","timeFormat":"04:13.236","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Yang (A) Yang","country":"CHN","medal":"SILVER","timeFormat":"04:13.236","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Dandan Sun","country":"CHN","medal":"SILVER","timeFormat":"04:13.236","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Marie-Eve Drolet","country":"CAN","medal":"BRONZE","timeFormat":"04:15.738","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Isabelle Charest","country":"CAN","medal":"BRONZE","timeFormat":"04:15.738","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Amelie Goulet-Nadon","country":"CAN","medal":"BRONZE","timeFormat":"04:15.738","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"3000m Short Track Relay Women","athlete":"Alanna Kraus","country":"CAN","medal":"BRONZE","timeFormat":"04:15.738","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Short Track Women","athlete":"Gi-Hyun Ko","country":"KOR","medal":"GOLD","timeFormat":"02:31.581","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Short Track Women","athlete":"Eun-Kyung Choi","country":"KOR","medal":"SILVER","timeFormat":"02:31.610","altitude":1423},{"year":2002,"location":"Salt Lake City, United States","event":"1500m Short Track Women","athlete":"Evgenia Radanova","country":"BUL","medal":"BRONZE","timeFormat":"02:31.723","altitude":1423},{"year":2006,"location":"Turin, Italy","event":"500m Men","athlete":"Apolo Anton Ohno","country":"USA","medal":"GOLD","timeFormat":"00:69.76","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Men","athlete":"Francois-Louis Tremblay","country":"RUS","medal":"SILVER","timeFormat":"00:70.41","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Men","athlete":"Ahn Hyun-Soo","country":"KOR","medal":"BRONZE","timeFormat":"00:70.43","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Men","athlete":"Shani Davis","country":"USA","medal":"GOLD","timeFormat":"01:08.9","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Men","athlete":"Joey Cheek","country":"USA","medal":"SILVER","timeFormat":"01:09.2","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Men","athlete":"Erben Wennemars","country":"NED","medal":"BRONZE","timeFormat":"01:09.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Men","athlete":"Enrico Fabris","country":"ITA","medal":"GOLD","timeFormat":"01:46.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Men","athlete":"Shani Davis","country":"USA","medal":"SILVER","timeFormat":"01:46.1","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Men","athlete":"Chad Hedrick","country":"USA","medal":"BRONZE","timeFormat":"01:46.2","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Men","athlete":"Chad Hedrick","country":"USA","medal":"GOLD","timeFormat":"06:14.7","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Men","athlete":"Sven Kramer","country":"NED","medal":"SILVER","timeFormat":"06:16.4","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Men","athlete":"Enrico Fabris","country":"ITA","medal":"BRONZE","timeFormat":"06:18.2","altitude":233},{"year":2006,"location":"Turin, Italy","event":"10000m Men","athlete":"Bob de Jong","country":"NED","medal":"GOLD","timeFormat":"13:01.6","altitude":233},{"year":2006,"location":"Turin, Italy","event":"10000m Men","athlete":"Chad Hedrick","country":"USA","medal":"SILVER","timeFormat":"13:05.4","altitude":233},{"year":2006,"location":"Turin, Italy","event":"10000m Men","athlete":"Carl Verheijen","country":"NED","medal":"BRONZE","timeFormat":"13:08.8","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Ippolito Sanfratello","country":"ITA","medal":"GOLD","timeFormat":"03:44.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Stefano Donagrandi","country":"ITA","medal":"GOLD","timeFormat":"03:44.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Enrico Fabris","country":"ITA","medal":"GOLD","timeFormat":"03:44.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Matteo Anesi","country":"ITA","medal":"GOLD","timeFormat":"03:44.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Steven Elm","country":"CAN","medal":"SILVER","timeFormat":"03:47.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Arne Dankers","country":"CAN","medal":"SILVER","timeFormat":"03:47.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Jason Parker","country":"CAN","medal":"SILVER","timeFormat":"03:47.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Denny Morrison","country":"CAN","medal":"SILVER","timeFormat":"03:47.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Justin Warsylewicz","country":"CAN","medal":"SILVER","timeFormat":"03:47.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Erben Wennemars","country":"NED","medal":"BRONZE","timeFormat":"03:44.5","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Rintje Ritsma","country":"NED","medal":"BRONZE","timeFormat":"03:44.5","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Carl Verheijen","country":"NED","medal":"BRONZE","timeFormat":"03:44.5","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Mark Tuitert","country":"NED","medal":"BRONZE","timeFormat":"03:44.5","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Men","athlete":"Sven Kramer","country":"NED","medal":"BRONZE","timeFormat":"03:44.5","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Women","athlete":"Svetlana Zhurova","country":"RUS","medal":"GOLD","timeFormat":"00:76.57","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Women","athlete":"Wang Manli","country":"CHN","medal":"SILVER","timeFormat":"00:76.78","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Women","athlete":"Ren Hui","country":"CHN","medal":"BRONZE","timeFormat":"00:76.87","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Women","athlete":"Marianne Timmer","country":"NED","medal":"GOLD","timeFormat":"01:16.1","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Women","athlete":"Cindy Klassen","country":"CAN","medal":"SILVER","timeFormat":"01:16.1","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Women","athlete":"Anna Friesinger","country":"GER","medal":"BRONZE","timeFormat":"01:16.1","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Women","athlete":"Cindy Klassen","country":"CAN","medal":"GOLD","timeFormat":"01:55.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Women","athlete":"Kristina Groves","country":"CAN","medal":"SILVER","timeFormat":"01:56.7","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Women","athlete":"Ireen Wüst","country":"NED","medal":"BRONZE","timeFormat":"01:56.9","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Women","athlete":"Ireen Wüst","country":"NED","medal":"GOLD","timeFormat":"04:02.4","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Women","athlete":"Renate Groenevold","country":"NED","medal":"SILVER","timeFormat":"04:03.5","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Women","athlete":"Cindy Klassen","country":"CAN","medal":"BRONZE","timeFormat":"04:04.4","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Women","athlete":"Clara Hughes","country":"CAN","medal":"GOLD","timeFormat":"06:59.1","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Women","athlete":"Claudia Pechstein","country":"GER","medal":"SILVER","timeFormat":"07:00.1","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Women","athlete":"Cindy Klassen","country":"CAN","medal":"BRONZE","timeFormat":"07:00.6","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Claudia Pechstein","country":"GER","medal":"GOLD","timeFormat":"03:01.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Anna Friesinger","country":"GER","medal":"GOLD","timeFormat":"03:01.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Daniela Anschütz-Thoms","country":"GER","medal":"GOLD","timeFormat":"03:01.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Sabine Völker","country":"GER","medal":"GOLD","timeFormat":"03:01.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Lucille Opitz","country":"GER","medal":"GOLD","timeFormat":"03:01.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Shannon Rempel","country":"CAN","medal":"SILVER","timeFormat":"03:02.9","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Kristina Groves","country":"CAN","medal":"SILVER","timeFormat":"03:02.9","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Clara Hughes","country":"CAN","medal":"SILVER","timeFormat":"03:02.9","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Christine Nesbitt","country":"CAN","medal":"SILVER","timeFormat":"03:02.9","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Cindy Klassen","country":"CAN","medal":"SILVER","timeFormat":"03:02.9","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Galina Likhachova","country":"RUS","medal":"BRONZE","timeFormat":"","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Yekaterina Lobysheva","country":"RUS","medal":"BRONZE","timeFormat":"","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Yekaterina Abramova","country":"RUS","medal":"BRONZE","timeFormat":"","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Varvara Barysheva","country":"RUS","medal":"BRONZE","timeFormat":"","altitude":233},{"year":2006,"location":"Turin, Italy","event":"Team Pursuit Women","athlete":"Svetlana Vysokova","country":"RUS","medal":"BRONZE","timeFormat":"","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Short Track Men","athlete":"Apolo Anton Ohno","country":"USA","medal":"GOLD","timeFormat":"00:41.935","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Short Track Men","athlete":"Francois-Louis Tremblay","country":"CAN","medal":"SILVER","timeFormat":"00:42.002","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Short Track Men","athlete":"Ahn Hyun-Soo","country":"KOR","medal":"BRONZE","timeFormat":"00:42.089","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Short Track Men","athlete":"Ahn Hyun-Soo","country":"KOR","medal":"GOLD","timeFormat":"01:26.7","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Short Track Men","athlete":"Lee Ho-Suk","country":"KOR","medal":"SILVER","timeFormat":"01:26.8","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Short Track Men","athlete":"Apolo Anton Ohno","country":"USA","medal":"BRONZE","timeFormat":"01:26.9","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Ahn Hyun-Soo","country":"KOR","medal":"GOLD","timeFormat":"06:43.4","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Seo Ho-Jin","country":"KOR","medal":"GOLD","timeFormat":"06:43.4","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Lee Ho-Suk","country":"KOR","medal":"GOLD","timeFormat":"06:43.4","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Song Suk-Woo","country":"KOR","medal":"GOLD","timeFormat":"06:43.4","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Francois-Louis Tremblay","country":"CAN","medal":"SILVER","timeFormat":"06:43.7","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Mathieu Turcotte","country":"CAN","medal":"SILVER","timeFormat":"06:43.7","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Charles Hamelin","country":"CAN","medal":"SILVER","timeFormat":"06:43.7","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Éric Bédard","country":"CAN","medal":"SILVER","timeFormat":"06:43.7","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Alex Izykowski","country":"USA","medal":"BRONZE","timeFormat":"06:48.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"J.P. Kepka","country":"USA","medal":"BRONZE","timeFormat":"06:48.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Apolo Anton Ohno","country":"USA","medal":"BRONZE","timeFormat":"06:48.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"5000m Short Track Relay Men","athlete":"Rusty Smith","country":"USA","medal":"BRONZE","timeFormat":"06:48.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Short Track Men","athlete":"Ahn Hyun-Soo","country":"KOR","medal":"GOLD","timeFormat":"02:25.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Short Track Men","athlete":"Lee Ho-Suk","country":"KOR","medal":"SILVER","timeFormat":"02:25.6","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Short Track Men","athlete":"Jiajun Li","country":"CHN","medal":"BRONZE","timeFormat":"02:26.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Short Track Women","athlete":"Wang Meng","country":"CHN","medal":"GOLD","timeFormat":"00:44.345","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Short Track Women","athlete":"Evgenia Radanova","country":"BUL","medal":"SILVER","timeFormat":"00:44.374","altitude":233},{"year":2006,"location":"Turin, Italy","event":"500m Short Track Women","athlete":"Anouk Leblanc-Boucher","country":"CAN","medal":"BRONZE","timeFormat":"00:44.759","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Short Track Women","athlete":"Jin Sun-Yu","country":"KOR","medal":"GOLD","timeFormat":"01:32.9","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Short Track Women","athlete":"Wang Meng","country":"CHN","medal":"SILVER","timeFormat":"01:33.1","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1000m Short Track Women","athlete":"Yang (A) Yang","country":"CHN","medal":"BRONZE","timeFormat":"01:33.9","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Jin Sun-Yu","country":"KOR","medal":"GOLD","timeFormat":"04:17.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Eun-Kyung Choi","country":"KOR","medal":"GOLD","timeFormat":"04:17.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Byun Chun-Sa","country":"KOR","medal":"GOLD","timeFormat":"04:17.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Jeon Da-Hye","country":"KOR","medal":"GOLD","timeFormat":"04:17.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Alanna Kraus","country":"CAN","medal":"SILVER","timeFormat":"04:17.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Anouk Leblanc-Boucher","country":"CAN","medal":"SILVER","timeFormat":"04:17.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Kalyna Roberge","country":"CAN","medal":"SILVER","timeFormat":"04:17.3","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Katia Zini","country":"ITA","medal":"BRONZE","timeFormat":"04:20.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Mara Zini","country":"ITA","medal":"BRONZE","timeFormat":"04:20.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Marta Capurso","country":"ITA","medal":"BRONZE","timeFormat":"04:20.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"3000m Short Track Relay Women","athlete":"Arianna Fontana","country":"ITA","medal":"BRONZE","timeFormat":"04:20.0","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Short Track Women","athlete":"Jin Sun-Yu","country":"KOR","medal":"GOLD","timeFormat":"02:23.5","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Short Track Women","athlete":"Eun-Kyung Choi","country":"KOR","medal":"SILVER","timeFormat":"02:24.1","altitude":233},{"year":2006,"location":"Turin, Italy","event":"1500m Short Track Women","athlete":"Wang Meng","country":"CHN","medal":"BRONZE","timeFormat":"02:24.5","altitude":233},{"year":2010,"location":"Vancouver, Canada","event":"500m Men","athlete":"Mo Tae-Bum","country":"KOR","medal":"GOLD","timeFormat":"00:69.82","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Men","athlete":"Keiichiro Nagashima","country":"JPN","medal":"SILVER","timeFormat":"00:69.98","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Men","athlete":"Joji Kato","country":"JPN","medal":"BRONZE","timeFormat":"00:70.01","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Men","athlete":"Shani Davis","country":"USA","medal":"GOLD","timeFormat":"01:08.94","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Men","athlete":"Mo Tae-Bum","country":"KOR","medal":"SILVER","timeFormat":"01:09.12","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Men","athlete":"Chad Hedrick","country":"USA","medal":"BRONZE","timeFormat":"01:09.32","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Men","athlete":"Mark Tuitert","country":"NED","medal":"GOLD","timeFormat":"01:45.57","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Men","athlete":"Shani Davis","country":"USA","medal":"SILVER","timeFormat":"01:46.10","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Men","athlete":"Håvard Bøkko","country":"NOR","medal":"BRONZE","timeFormat":"01:46.13","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Men","athlete":"Sven Kramer","country":"NED","medal":"GOLD","timeFormat":"06:14.60","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Men","athlete":"Lee Seung-Hoon","country":"KOR","medal":"SILVER","timeFormat":"06:16.95","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Men","athlete":"Ivan Skobrev","country":"RUS","medal":"BRONZE","timeFormat":"06:18.05","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"10000m Men","athlete":"Lee Seung-Hoon","country":"KOR","medal":"GOLD","timeFormat":"12:58.55","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"10000m Men","athlete":"Ivan Skobrev","country":"RUS","medal":"SILVER","timeFormat":"13:02.07","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"10000m Men","athlete":"Bob de Jong","country":"NED","medal":"BRONZE","timeFormat":"13:06.73","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Mathieu Giroux","country":"CAN","medal":"GOLD","timeFormat":"03:41.37","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Lucas Makowsky","country":"CAN","medal":"GOLD","timeFormat":"03:41.37","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Denny Morrison","country":"CAN","medal":"GOLD","timeFormat":"03:41.37","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Brian Hansen","country":"USA","medal":"SILVER","timeFormat":"03:41.58","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Chad Hedrick","country":"USA","medal":"SILVER","timeFormat":"03:41.58","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Jonathan Kuck","country":"USA","medal":"SILVER","timeFormat":"03:41.58","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Trevor Marsicano","country":"USA","medal":"SILVER","timeFormat":"03:41.58","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Jan Blokhuijsen","country":"NED","medal":"BRONZE","timeFormat":"03:39.95","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Sven Kramer","country":"NED","medal":"BRONZE","timeFormat":"03:39.95","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Simon Kuipers","country":"NED","medal":"BRONZE","timeFormat":"03:39.95","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Men","athlete":"Mark Tuitert","country":"NED","medal":"BRONZE","timeFormat":"03:39.95","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Women","athlete":"Lee Sang-Hwa","country":"KOR","medal":"GOLD","timeFormat":"00:76.09","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Women","athlete":"Jenny Wolf","country":"GER","medal":"SILVER","timeFormat":"00:76.14","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Women","athlete":"Wang Beixing","country":"CHN","medal":"BRONZE","timeFormat":"00:76.63","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Women","athlete":"Christine Nesbitt","country":"CAN","medal":"GOLD","timeFormat":"01:16.56","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Women","athlete":"Annette Gerritsen","country":"NED","medal":"SILVER","timeFormat":"01:16.58","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Women","athlete":"Laurine van Riessen","country":"NED","medal":"BRONZE","timeFormat":"01:16.72","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Women","athlete":"Ireen Wüst","country":"NED","medal":"GOLD","timeFormat":"01:56.89","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Women","athlete":"Kristina Groves","country":"CAN","medal":"SILVER","timeFormat":"01:57.14","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Women","athlete":"Martina Sáblíková","country":"CZE","medal":"BRONZE","timeFormat":"01:57.96","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Women","athlete":"Martina Sáblíková","country":"CZE","medal":"GOLD","timeFormat":"04:02.53","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Women","athlete":"Stephanie Beckert","country":"GER","medal":"SILVER","timeFormat":"04:04.62","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Women","athlete":"Kristina Groves","country":"CAN","medal":"BRONZE","timeFormat":"04:04.84","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Women","athlete":"Martina Sáblíková","country":"CZE","medal":"GOLD","timeFormat":"06:50.92","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Women","athlete":"Stephanie Beckert","country":"GER","medal":"SILVER","timeFormat":"06:51.39","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Women","athlete":"Clara Hughes","country":"GER","medal":"BRONZE","timeFormat":"06:55.73","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Women","athlete":"Daniela Anschütz-Thoms","country":"GER","medal":"GOLD","timeFormat":"03:02.82","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Women","athlete":"Stephanie Beckert","country":"GER","medal":"GOLD","timeFormat":"03:02.82","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Women","athlete":"Anni Friesinger-Postma","country":"GER","medal":"GOLD","timeFormat":"03:02.82","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Women","athlete":"Katrin Mattscherodt","country":"GER","medal":"GOLD","timeFormat":"03:02.82","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Women","athlete":"Masako Hozumi","country":"JPN","medal":"SILVER","timeFormat":"03:02.84","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Women","athlete":"Nao Kodaira","country":"JPN","medal":"SILVER","timeFormat":"03:02.84","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Women","athlete":"Maki Tabata","country":"JPN","medal":"SILVER","timeFormat":"03:02.84","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Women","athlete":"Katarzyna Bachleda-Curuś","country":"POL","medal":"BRONZE","timeFormat":"03:03.73","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Women","athlete":"Katarzyna Woźniak","country":"POL","medal":"BRONZE","timeFormat":"03:03.73","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"Team Pursuit Women","athlete":"Luiza Złotkowska","country":"POL","medal":"BRONZE","timeFormat":"03:03.73","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Short Track Men","athlete":"Charles Hamelin","country":"CAN","medal":"GOLD","timeFormat":"00:40.981","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Short Track Men","athlete":"Sung Si-Bak","country":"KOR","medal":"SILVER","timeFormat":"00:41.340","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Short Track Men","athlete":"François-Louis Tremblay","country":"CAN","medal":"BRONZE","timeFormat":"00:46.366","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Short Track Men","athlete":"Lee Jung-Su","country":"KOR","medal":"GOLD","timeFormat":"01:23.747","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Short Track Men","athlete":"Lee Ho-Suk","country":"KOR","medal":"SILVER","timeFormat":"01:23.801","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Short Track Men","athlete":"Apolo Anton Ohno","country":"USA","medal":"BRONZE","timeFormat":"01:24.128","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Short Track Men","athlete":"Lee Jung-Su","country":"KOR","medal":"GOLD","timeFormat":"02:17.611","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Short Track Men","athlete":"Apolo Anton Ohno","country":"USA","medal":"SILVER","timeFormat":"02:17.976","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Short Track Men","athlete":"J. R. Celski","country":"USA","medal":"BRONZE","timeFormat":"02:18.053","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"Charles Hamelin","country":"CAN","medal":"GOLD","timeFormat":"06:44.224","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"François Hamelin","country":"CAN","medal":"GOLD","timeFormat":"06:44.224","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"Olivier Jean","country":"CAN","medal":"GOLD","timeFormat":"06:44.224","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"François-Louis Tremblay","country":"CAN","medal":"GOLD","timeFormat":"06:44.224","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"Kwak Yoon-Gy","country":"KOR","medal":"SILVER","timeFormat":"06:44.446","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"Lee Ho-Suk","country":"KOR","medal":"SILVER","timeFormat":"06:44.446","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"Lee Jung-Su","country":"KOR","medal":"SILVER","timeFormat":"06:44.446","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"Sung Si-Bak","country":"KOR","medal":"SILVER","timeFormat":"06:44.446","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"J.R. Celski","country":"USA","medal":"BRONZE","timeFormat":"06:44.498","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"Travis Jayner","country":"USA","medal":"BRONZE","timeFormat":"06:44.498","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"Jordan Malone","country":"USA","medal":"BRONZE","timeFormat":"06:44.498","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"5000m Short Track Relay Men","athlete":"Apolo Anton Ohno","country":"USA","medal":"BRONZE","timeFormat":"06:44.498","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Short Track Women","athlete":"Wang Meng","country":"CHN","medal":"GOLD","timeFormat":"00:43.048","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Short Track Women","athlete":"Marianne St-Gelais","country":"CAN","medal":"SILVER","timeFormat":"00:43.707","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"500m Short Track Women","athlete":"Arianna Fontana","country":"ITA","medal":"BRONZE","timeFormat":"00:43.804","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Short Track Women","athlete":"Wang Meng","country":"CHN","medal":"GOLD","timeFormat":"01:29.213","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Short Track Women","athlete":"Katherine Reutter","country":"USA","medal":"SILVER","timeFormat":"01:29.324","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1000m Short Track Women","athlete":"Park Seung-Hi","country":"KOR","medal":"BRONZE","timeFormat":"01:29.379","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Short Track Women","athlete":"Zhou Yang","country":"CHN","medal":"GOLD","timeFormat":"02:16.993","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Short Track Women","athlete":"Lee Eun-Byul","country":"KOR","medal":"SILVER","timeFormat":"02:17.849","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"1500m Short Track Women","athlete":"Park Seung-Hi","country":"KOR","medal":"BRONZE","timeFormat":"02:17.927","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Sun Linlin","country":"CHN","medal":"GOLD","timeFormat":"04:06.610","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Wang Meng","country":"CHN","medal":"GOLD","timeFormat":"04:06.610","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Zhang Hui","country":"CHN","medal":"GOLD","timeFormat":"04:06.610","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Zhou Yang","country":"CHN","medal":"GOLD","timeFormat":"04:06.610","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Jessica Gregg","country":"CAN","medal":"SILVER","timeFormat":"04:09.137","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Kalyna Roberge","country":"CAN","medal":"SILVER","timeFormat":"04:09.137","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Marianne St-Gelais","country":"CAN","medal":"SILVER","timeFormat":"04:09.137","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Tania Vicent","country":"CAN","medal":"SILVER","timeFormat":"04:09.137","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Allison Baver","country":"USA","medal":"BRONZE","timeFormat":"04:14.081","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Alyson Dudek","country":"USA","medal":"BRONZE","timeFormat":"04:14.081","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Lana Gehring","country":"USA","medal":"BRONZE","timeFormat":"04:14.081","altitude":4},{"year":2010,"location":"Vancouver, Canada","event":"3000m Short Track Relay Women","athlete":"Katherine Reutter","country":"USA","medal":"BRONZE","timeFormat":"04:14.081","altitude":4},{"year":2014,"location":"Sochi, Russia","event":"500m Men","athlete":"Michel Mulder","country":"NED","medal":"GOLD","timeFormat":"00:69.312","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Men","athlete":"Jan Smeekens","country":"NED","medal":"SILVER","timeFormat":"00:69.324","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Men","athlete":"Ronald Mulder","country":"NED","medal":"BRONZE","timeFormat":"00:69.46","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Men","athlete":"Stefan Groothuis","country":"NED","medal":"GOLD","timeFormat":"01:08.39","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Men","athlete":"Denny Morrison","country":"CAN","medal":"SILVER","timeFormat":"01:08.43","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Men","athlete":"Michel Mulder","country":"NED","medal":"BRONZE","timeFormat":"01:08.74","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Men","athlete":"Zbigniew Bródka","country":"POL","medal":"GOLD","timeFormat":"01:45.006","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Men","athlete":"Koen Verweij","country":"NED","medal":"SILVER","timeFormat":"01:45.009","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Men","athlete":"Denny Morrison","country":"CAN","medal":"BRONZE","timeFormat":"01:45.22","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Men","athlete":"Sven Kramer","country":"NED","medal":"GOLD","timeFormat":"06:10.76","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Men","athlete":"Jan Blokhuijsen","country":"NED","medal":"SILVER","timeFormat":"06:15.71","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Men","athlete":"Jorrit Bergsma","country":"NED","medal":"BRONZE","timeFormat":"06:16.66","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"10000m Men","athlete":"Jorrit Bergsma","country":"NED","medal":"GOLD","timeFormat":"12:44.45","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"10000m Men","athlete":"Sven Kramer","country":"NED","medal":"SILVER","timeFormat":"12:49.02","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"10000m Men","athlete":"Bob de Jong","country":"NED","medal":"BRONZE","timeFormat":"13:07.19","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Men","athlete":"Jan Blokhuijsen","country":"NED","medal":"GOLD","timeFormat":"03:37.71","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Men","athlete":"Sven Kramer","country":"NED","medal":"GOLD","timeFormat":"03:37.71","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Men","athlete":"Koen Verweij","country":"NED","medal":"GOLD","timeFormat":"03:37.71","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Men","athlete":"Joo Hyong-jun","country":"KOR","medal":"SILVER","timeFormat":"03:40.85","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Men","athlete":"Kim Cheol-min","country":"KOR","medal":"SILVER","timeFormat":"03:40.85","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Men","athlete":"Lee Seung-hoon","country":"POL","medal":"SILVER","timeFormat":"03:40.85","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Men","athlete":"Zbigniew Bródka","country":"POL","medal":"BRONZE","timeFormat":"03:41.94","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Men","athlete":"Konrad Niedźwiedzki","country":"POL","medal":"BRONZE","timeFormat":"03:41.94","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Men","athlete":"Jan Szymański","country":"POL","medal":"BRONZE","timeFormat":"03:41.94","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Women","athlete":"Lee Sang-Hwa","country":"KOR","medal":"GOLD","timeFormat":"00:74.7","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Women","athlete":"Olga Fatkulina","country":"RUS","medal":"SILVER","timeFormat":"00:75.06","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Women","athlete":"Margot Boer","country":"NED","medal":"BRONZE","timeFormat":"00:75.48","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Women","athlete":"Zhang Hong","country":"CHN","medal":"GOLD","timeFormat":"01:14.02","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Women","athlete":"Ireen Wüst","country":"NED","medal":"SILVER","timeFormat":"01:14.69","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Women","athlete":"Margot Boer","country":"NED","medal":"BRONZE","timeFormat":"01:14.90","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Women","athlete":"Jorien ter Mors","country":"NED","medal":"GOLD","timeFormat":"01:53.51","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Women","athlete":"Ireen Wüst","country":"NED","medal":"SILVER","timeFormat":"01:54.09","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Women","athlete":"Lotte van Beek","country":"NED","medal":"BRONZE","timeFormat":"01:54.54","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Women","athlete":"Ireen Wüst","country":"NED","medal":"GOLD","timeFormat":"04:00.34","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Women","athlete":"Martina Sáblíková","country":"CZE","medal":"SILVER","timeFormat":"04:01.95","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Women","athlete":"Olga Graf","country":"RUS","medal":"BRONZE","timeFormat":"04:03.47","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Women","athlete":"Martina Sáblíková","country":"CZE","medal":"GOLD","timeFormat":"06:51.54","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Women","athlete":"Ireen Wüst","country":"NED","medal":"SILVER","timeFormat":"06:54.28","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Women","athlete":"Carien Kleibeuker","country":"NED","medal":"BRONZE","timeFormat":"06:55.66","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Lotte van Beek","country":"NED","medal":"GOLD","timeFormat":"02:58.05","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Marrit Leenstra","country":"NED","medal":"GOLD","timeFormat":"02:58.05","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Jorien ter Mors","country":"NED","medal":"GOLD","timeFormat":"02:58.05","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Ireen Wüst","country":"NED","medal":"GOLD","timeFormat":"02:58.05","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Katarzyna Bachleda-Curuś","country":"POL","medal":"SILVER","timeFormat":"03:05.55","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Natalia Czerwonka","country":"POL","medal":"SILVER","timeFormat":"03:05.55","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Luiza Złotkowska","country":"POL","medal":"SILVER","timeFormat":"03:05.55","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Katarzyna Woźniak","country":"POL","medal":"SILVER","timeFormat":"03:05.55","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Olga Graf","country":"RUS","medal":"BRONZE","timeFormat":"02:59.73","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Yekaterina Lobysheva","country":"RUS","medal":"BRONZE","timeFormat":"02:59.73","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Yuliya Skokova","country":"RUS","medal":"BRONZE","timeFormat":"02:59.73","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"Team Pursuit Women","athlete":"Yekaterina Shikhova","country":"RUS","medal":"BRONZE","timeFormat":"02:59.73","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Short Track Men","athlete":"Viktor An","country":"RUS","medal":"GOLD","timeFormat":"00:41.063","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Short Track Men","athlete":"Wu Dajing","country":"CHN","medal":"SILVER","timeFormat":"00:40.846","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Short Track Men","athlete":"Charle Cournoyer","country":"CAN","medal":"BRONZE","timeFormat":"00:40.945","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Short Track Men","athlete":"Viktor An","country":"RUS","medal":"GOLD","timeFormat":"01:24.102","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Short Track Men","athlete":"Vladimir Grigoryev","country":"RUS","medal":"SILVER","timeFormat":"01:24.868","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Short Track Men","athlete":"Sjinkie Knegt","country":"NED","medal":"BRONZE","timeFormat":"01:25.611","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Short Track Men","athlete":"Charles Hamelin","country":"CAN","medal":"GOLD","timeFormat":"02:14.480","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Short Track Men","athlete":"Han Tianyu","country":"CHN","medal":"SILVER","timeFormat":"02:15.055","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Short Track Men","athlete":"Viktor An","country":"RUS","medal":"BRONZE","timeFormat":"02:15.062","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Viktor Ahn","country":"RUS","medal":"GOLD","timeFormat":"06:42.100","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Semion Elistratov","country":"RUS","medal":"GOLD","timeFormat":"06:42.100","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Vladimir Grigorev","country":"RUS","medal":"GOLD","timeFormat":"06:42.100","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Ruslan Zakharov","country":"RUS","medal":"GOLD","timeFormat":"06:42.100","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Eddy Alvarez","country":"USA","medal":"SILVER","timeFormat":"06:42.371","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"J. R. Celski","country":"USA","medal":"SILVER","timeFormat":"06:42.371","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Christopher Creveling","country":"USA","medal":"SILVER","timeFormat":"06:42.371","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Jordan Malone","country":"USA","medal":"SILVER","timeFormat":"06:42.371","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Chen Dequan","country":"CHN","medal":"BRONZE","timeFormat":"06:42.341","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Han Tianyu","country":"CHN","medal":"BRONZE","timeFormat":"06:42.341","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Shi Jingnan","country":"CHN","medal":"BRONZE","timeFormat":"06:42.341","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"5000m Short Track Relay Men","athlete":"Wu Dajing","country":"CHN","medal":"BRONZE","timeFormat":"06:42.341","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Short Track Women","athlete":"Li Jianrou","country":"CHN","medal":"GOLD","timeFormat":"00:43.486","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Short Track Women","athlete":"Arianna Fontana","country":"ITA","medal":"SILVER","timeFormat":"00:43.405","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"500m Short Track Women","athlete":"Park Seung-Hui","country":"KOR","medal":"BRONZE","timeFormat":"00:43.392","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Short Track Women","athlete":"Park Seung-Hui","country":"KOR","medal":"GOLD","timeFormat":"01:30.182","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Short Track Women","athlete":"Fan Kexin","country":"CHN","medal":"SILVER","timeFormat":"01:29.380","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1000m Short Track Women","athlete":"Shim Seok-Hui","country":"KOR","medal":"BRONZE","timeFormat":"01:29.356","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Short Track Women","athlete":"Zhou Yang","country":"CHN","medal":"GOLD","timeFormat":"02:18.825","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Short Track Women","athlete":"Shim Seok-Hui","country":"KOR","medal":"SILVER","timeFormat":"02:18.966","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"1500m Short Track Women","athlete":"Arianna Fontana","country":"ITA","medal":"BRONZE","timeFormat":"02:19.336","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Shim Suk-hee","country":"KOR","medal":"GOLD","timeFormat":"04:09.498","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Park Seung-hi","country":"KOR","medal":"GOLD","timeFormat":"04:09.498","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Cho Ha-ri","country":"KOR","medal":"GOLD","timeFormat":"04:09.498","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Kim A-lang","country":"KOR","medal":"GOLD","timeFormat":"04:09.498","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Kong Sang-jeong","country":"KOR","medal":"GOLD","timeFormat":"04:09.498","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Marie-Ève Drolet","country":"CAN","medal":"SILVER","timeFormat":"04:10.641","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Jessica Hewitt","country":"CAN","medal":"SILVER","timeFormat":"04:10.641","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Valérie Maltais","country":"CAN","medal":"SILVER","timeFormat":"04:10.641","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Marianne St-Gelais","country":"CAN","medal":"SILVER","timeFormat":"04:10.641","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Arianna Fontana","country":"ITA","medal":"BRONZE","timeFormat":"04:14.014","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Lucia Peretti","country":"ITA","medal":"BRONZE","timeFormat":"04:14.014","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Martina Valcepina","country":"ITA","medal":"BRONZE","timeFormat":"04:14.014","altitude":27},{"year":2014,"location":"Sochi, Russia","event":"3000m Short Track Relay Women","athlete":"Elena Viviani","country":"ITA","medal":"BRONZE","timeFormat":"04:14.014","altitude":27},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Men","athlete":"Håvard Holmefjord Lorentzen","country":"NOR","medal":"GOLD","timeFormat":"00:34.41","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Men","athlete":"Cha Min-kyu","country":"KOR","medal":"SILVER","timeFormat":"00:34.42","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Men","athlete":"Gao Tingyu","country":"CHN","medal":"BRONZE","timeFormat":"00:34.65","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Men","athlete":"Kjeld Nuis","country":"NED","medal":"GOLD","timeFormat":"01:07.95","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Men","athlete":"Håvard Holmefjord Lorentzen","country":"NOR","medal":"SILVER","timeFormat":"01:07.99","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Men","athlete":"Kim Tae-yun","country":"KOR","medal":"BRONZE","timeFormat":"01:08.22","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Men","athlete":"Kjeld Nuis","country":"NED","medal":"GOLD","timeFormat":"01:44.01","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Men","athlete":"Patrick Roest","country":"NED","medal":"SILVER","timeFormat":"01:44.86","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Men","athlete":"Kim Min-seok","country":"KOR","medal":"BRONZE","timeFormat":"01:44.93","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Men","athlete":"Sven Kramer","country":"NED","medal":"GOLD","timeFormat":"06:09.76","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Men","athlete":"Ted-Jan Bloemen","country":"CAN","medal":"SILVER","timeFormat":"06:11.616","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Men","athlete":"Sverre Lunde Pedersen","country":"NOR","medal":"BRONZE","timeFormat":"06:11.618","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"10000m Men","athlete":"Ted-Jan Bloemen","country":"CAN","medal":"GOLD","timeFormat":"12:39.77","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"10000m Men","athlete":"Jorrit Bergsma","country":"NED","medal":"SILVER","timeFormat":"12:41.98","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"10000m Men","athlete":"Nicola Tumolero","country":"ITA","medal":"BRONZE","timeFormat":"12:54.32","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Håvard Bøkko","country":"NOR","medal":"GOLD","timeFormat":"03:37.32","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Simen Spieler Nilsen","country":"NOR","medal":"GOLD","timeFormat":"03:37.32","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Sverre Lunde Pedersen","country":"NOR","medal":"GOLD","timeFormat":"03:37.32","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Sindre Henriksen","country":"NOR","medal":"GOLD","timeFormat":"03:37.32","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Lee Seung-hoon","country":"KOR","medal":"SILVER","timeFormat":"03:38.52","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Chung Jae-won","country":"KOR","medal":"SILVER","timeFormat":"03:38.52","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Kim Min-seok","country":"KOR","medal":"SILVER","timeFormat":"03:38.52","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Patrick Roest","country":"NED","medal":"BRONZE","timeFormat":"03:38.40","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Jan Blokhuijsen","country":"NED","medal":"BRONZE","timeFormat":"03:38.40","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Sven Kramer","country":"NED","medal":"BRONZE","timeFormat":"03:38.40","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Men","athlete":"Koen Verweij","country":"NED","medal":"BRONZE","timeFormat":"03:38.40","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Women","athlete":"Nao Kodaira","country":"JPN","medal":"GOLD","timeFormat":"00:36.94","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Women","athlete":"Lee Sang-hwa","country":"KOR","medal":"SILVER","timeFormat":"00:37.33","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Women","athlete":"Karolína Erbanová","country":"CZE","medal":"BRONZE","timeFormat":"00:37.34","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Women","athlete":"Jorien ter Mors","country":"NED","medal":"GOLD","timeFormat":"01:13.56","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Women","athlete":"Nao Kodaira","country":"JPN","medal":"SILVER","timeFormat":"01:13.82","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Women","athlete":"Miho Takagi","country":"JPN","medal":"BRONZE","timeFormat":"01:13.98","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Women","athlete":"Ireen Wüst","country":"NED","medal":"GOLD","timeFormat":"01:54.35","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Women","athlete":"Miho Takagi","country":"JPN","medal":"SILVER","timeFormat":"01:54.55","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Women","athlete":"Marrit Leenstra","country":"NED","medal":"BRONZE","timeFormat":"01:55.26","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Women","athlete":"Carlijn Achtereekte","country":"NED","medal":"GOLD","timeFormat":"03:59.21","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Women","athlete":"Ireen Wüst","country":"NED","medal":"SILVER","timeFormat":"03:59.29","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Women","athlete":"Antoinette de Jong","country":"NED","medal":"BRONZE","timeFormat":"04:00.02","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Women","athlete":"Esmee Visser","country":"NED","medal":"GOLD","timeFormat":"06:50.23","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Women","athlete":"Martina Sáblíková","country":"CZE","medal":"SILVER","timeFormat":"06:51.85","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Women","athlete":"Natalya Voronina","country":"OAR","medal":"BRONZE","timeFormat":"06:53.98","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Miho Takagi","country":"JPN","medal":"GOLD","timeFormat":"02:53.89","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Ayano Sato","country":"JPN","medal":"GOLD","timeFormat":"02:53.89","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Nana Takagi","country":"JPN","medal":"GOLD","timeFormat":"02:53.89","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Ayaka Kikuchi","country":"JPN","medal":"GOLD","timeFormat":"02:53.89","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Marrit Leenstra","country":"NED","medal":"SILVER","timeFormat":"02:55.48","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Ireen Wüst","country":"NED","medal":"SILVER","timeFormat":"02:55.48","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Antoinette de Jong","country":"NED","medal":"SILVER","timeFormat":"02:55.48","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Lotte van Beek","country":"NED","medal":"SILVER","timeFormat":"02:55.48","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Heather Bergsma","country":"USA","medal":"BRONZE","timeFormat":"02:59.27","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Brittany Bowe","country":"USA","medal":"BRONZE","timeFormat":"02:59.27","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Mia Manganello","country":"USA","medal":"BRONZE","timeFormat":"02:59.27","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"Team Pursuit Women","athlete":"Carlijn Schoutens","country":"USA","medal":"BRONZE","timeFormat":"02:59.27","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Short Track Men","athlete":"Wu Dajing","country":"CHN","medal":"GOLD","timeFormat":"00:39.584","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Short Track Men","athlete":"Hwang Dae-heon","country":"KOR","medal":"SILVER","timeFormat":"00:39.854","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Short Track Men","athlete":"Lim Hyo-jun","country":"KOR","medal":"BRONZE","timeFormat":"00:39.919","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Short Track Men","athlete":"Samuel Girard","country":"CAN","medal":"GOLD","timeFormat":"01:24.650","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Short Track Men","athlete":"John-Henry Krueger","country":"USA","medal":"SILVER","timeFormat":"01:24.864","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Short Track Men","athlete":"Seo Yi-ra","country":"KOR","medal":"BRONZE","timeFormat":"01:31.619","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Short Track Men","athlete":"Lim Hyo-jun","country":"KOR","medal":"GOLD","timeFormat":"02:10.485","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Short Track Men","athlete":"Sjinkie Knegt","country":"NED","medal":"SILVER","timeFormat":"02:10.555","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Short Track Men","athlete":"Semion Elistratov","country":"OAR","medal":"BRONZE","timeFormat":"02:10.687","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Shaoang Liu","country":"HUN","medal":"GOLD","timeFormat":"06:31.971","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Sándor Liu Shaolin","country":"HUN","medal":"GOLD","timeFormat":"06:31.971","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Viktor Knoch","country":"HUN","medal":"GOLD","timeFormat":"06:31.971","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Csaba Burján","country":"HUN","medal":"GOLD","timeFormat":"06:31.971","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Wu Dajing","country":"CHN","medal":"SILVER","timeFormat":"06:32.035","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Han Tianyu","country":"CHN","medal":"SILVER","timeFormat":"06:32.035","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Chen Dequan","country":"CHN","medal":"SILVER","timeFormat":"06:32.035","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Xu Hongzhi","country":"CHN","medal":"SILVER","timeFormat":"06:32.035","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Ren Ziwei","country":"CHN","medal":"SILVER","timeFormat":"06:32.035","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Samuel Girard","country":"CAN","medal":"BRONZE","timeFormat":"06:32.282","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Charles Hamelin","country":"CAN","medal":"BRONZE","timeFormat":"06:32.282","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Charle Cournoyer","country":"CAN","medal":"BRONZE","timeFormat":"06:32.282","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"5000m Short Track Relay Men","athlete":"Pascal Dion","country":"CAN","medal":"BRONZE","timeFormat":"06:32.282","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Short Track Women","athlete":"Arianna Fontana","country":"ITA","medal":"GOLD","timeFormat":"00:42.569","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Short Track Women","athlete":"Yara van Kerkhof","country":"NED","medal":"SILVER","timeFormat":"00:43.256","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"500m Short Track Women","athlete":"Kim Boutin","country":"CAN","medal":"BRONZE","timeFormat":"00:43.881","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Short Track Women","athlete":"Suzanne Schulting","country":"NED","medal":"GOLD","timeFormat":"01:29.778","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Short Track Women","athlete":"Kim Boutin","country":"CAN","medal":"SILVER","timeFormat":"01:29.956","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1000m Short Track Women","athlete":"Arianna Fontana","country":"ITA","medal":"BRONZE","timeFormat":"01:30.656","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Short Track Women","athlete":"Choi Min-jeong","country":"KOR","medal":"GOLD","timeFormat":"02:24.948","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Short Track Women","athlete":"Choi Min-jeong","country":"KOR","medal":"SILVER","timeFormat":"02:24.948","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"1500m Short Track Women","athlete":"Kim Boutin","country":"CAN","medal":"BRONZE","timeFormat":"02:25.834","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Shim Suk-hee","country":"KOR","medal":"GOLD","timeFormat":"04:07.361","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Choi Min-jeong","country":"KOR","medal":"GOLD","timeFormat":"04:07.361","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Kim Ye-jin","country":"KOR","medal":"GOLD","timeFormat":"04:07.361","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Kim A-lang","country":"KOR","medal":"GOLD","timeFormat":"04:07.361","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Lee Yu-bin","country":"KOR","medal":"GOLD","timeFormat":"04:07.361","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Arianna Fontana","country":"ITA","medal":"SILVER","timeFormat":"04:15.901","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Lucia Peretti","country":"ITA","medal":"SILVER","timeFormat":"04:15.901","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Cecilia Maffei","country":"ITA","medal":"SILVER","timeFormat":"04:15.901","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Martina Valcepina","country":"ITA","medal":"SILVER","timeFormat":"04:15.901","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Suzanne Schulting","country":"NED","medal":"BRONZE","timeFormat":"04:05.977","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Yara van Kerkhof","country":"NED","medal":"BRONZE","timeFormat":"04:05.977","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Lara van Ruijven","country":"NED","medal":"BRONZE","timeFormat":"04:05.977","altitude":26},{"year":2018,"location":"Pyeongchang, South Korea","event":"3000m Short Track Relay Women","athlete":"Jorien ter Mors","country":"NED","medal":"BRONZE","timeFormat":"04:05.977","altitude":26}]

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(39);



/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__select__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name).call(document.documentElement));
});


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(23);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(40);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, parents);
});


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(41);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_1__matcher__["a" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(93);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](merges, this._parents);
});


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return !this.node();
});


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(21);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(23);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(remove);
});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

/* harmony default export */ __webpack_exports__["a"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(24);


function dispatchEvent(node, type, params) {
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = local;
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(16);



/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  var event = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
});


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(16);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touch);
    }
  }

  return null;
});


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(16);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches) {
  if (touches == null) touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_band__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_identity__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return __WEBPACK_IMPORTED_MODULE_1__src_identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_linear__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return __WEBPACK_IMPORTED_MODULE_2__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_log__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return __WEBPACK_IMPORTED_MODULE_3__src_log__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ordinal__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pow__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_quantile__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return __WEBPACK_IMPORTED_MODULE_6__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_quantize__ = __webpack_require__(172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return __WEBPACK_IMPORTED_MODULE_7__src_quantize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_time__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return __WEBPACK_IMPORTED_MODULE_9__src_time__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcTime__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcTime__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_category10__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_11__src_category10__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_category20b__ = __webpack_require__(191);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20b", function() { return __WEBPACK_IMPORTED_MODULE_12__src_category20b__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_category20c__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20c", function() { return __WEBPACK_IMPORTED_MODULE_13__src_category20c__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_category20__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20", function() { return __WEBPACK_IMPORTED_MODULE_14__src_category20__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(194);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_rainbow__ = __webpack_require__(195);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_viridis__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_sequential__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential__["a"]; });







































/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = band;
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal__ = __webpack_require__(57);



function band() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_1__ordinal__["a" /* default */])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(47);


/* harmony default export */ __webpack_exports__["a"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["b" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(54);









/* harmony default export */ __webpack_exports__["a"] = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(__WEBPACK_IMPORTED_MODULE_6__ticks__["c" /* tickStep */])(x0, x1, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(__WEBPACK_IMPORTED_MODULE_1__bisect__["c" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(27);





/* harmony default export */ __webpack_exports__["a"] = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(48);


/* harmony default export */ __webpack_exports__["a"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(27);




/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(56);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest__ = __webpack_require__(141);
/* unused harmony reexport nest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set__ = __webpack_require__(142);
/* unused harmony reexport set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys__ = __webpack_require__(143);
/* unused harmony reexport keys */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values__ = __webpack_require__(144);
/* unused harmony reexport values */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries__ = __webpack_require__(145);
/* unused harmony reexport entries */








/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(28);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(28);


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["b" /* prefix */] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* unused harmony default export */ var _unused_webpack_default_export = (set);


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = identity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(66);




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(58);




var Kn = 18,
    Xn = 0.950470, // D65 standard referent
    Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(58);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return interpolateTransformSvg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(151);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(152);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* unused harmony default export */ var _unused_webpack_default_export = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(13);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(13);



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(13);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(13);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(67);



/* harmony default export */ __webpack_exports__["a"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["c" /* formatSpecifier */])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["e" /* precisionPrefix */])(step, value))) specifier.precision = precision;
      return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["b" /* formatPrefix */])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* precisionRound */])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["d" /* precisionFixed */])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrefix; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(68);


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  x = x.toPrecision(p);

  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (x[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      case "e": break out;
      default: if (i0 > 0) i0 = 0; break;
    }
  }

  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(34);


/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(19);


/* harmony default export */ __webpack_exports__["a"] = (function(step) {
  return Math.max(0, -Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(19);


/* harmony default export */ __webpack_exports__["a"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3 - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(19);


/* harmony default export */ __webpack_exports__["a"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(max) - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(step)) + 1;
});


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nice__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continuous__ = __webpack_require__(18);






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["b" /* default */])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(__WEBPACK_IMPORTED_MODULE_3__nice__["a" /* default */])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["a" /* copy */])(scale, log().base(base));
  };

  return scale;
}


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pow;
/* harmony export (immutable) */ __webpack_exports__["b"] = sqrt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(18);




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, pow().exponent(exponent));
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(9);



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__(12);




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_2__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = threshold;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(9);



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);


var millisecond = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(6);



var second = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["a"] = (second);
var seconds = second.range;


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(6);



var minute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (minute);
var minutes = minute.range;


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(6);



var hour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  var offset = date.getTimezoneOffset() * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */] % __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  if (offset < 0) offset += __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  date.setTime(Math.floor((+date - offset) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */] + offset);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["a"] = (hour);
var hours = hour.range;


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export days */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(6);



var day = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (day);
var days = day.range;


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return thursday; });
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(6);



function weekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export months */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);


var month = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (month);
var months = month.range;


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export years */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);


var year = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (year);
var years = year.range;


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(6);



var utcMinute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(6);



var utcHour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["a"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(6);



var utcDay = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcThursday; });
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(6);



function utcWeekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);


var utcMonth = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(0);


var utcYear = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale__ = __webpack_require__(36);



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_1__defaultLocale__["c" /* utcParse */])(__WEBPACK_IMPORTED_MODULE_0__isoFormat__["a" /* isoSpecifier */]);

/* unused harmony default export */ var _unused_webpack_default_export = (parseIso);


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(35);




/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__time__["a" /* calendar */])(__WEBPACK_IMPORTED_MODULE_2_d3_time__["v" /* utcYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["q" /* utcMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["u" /* utcWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["l" /* utcDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["m" /* utcHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["o" /* utcMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["r" /* utcSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["n" /* utcMillisecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["b" /* utcFormat */]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(14);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(14);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"));


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(14);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"));


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(14);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"));


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(300, 0.5, 0.0), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-240, 0.5, 1.0)));


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(7);



var warm = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-100, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var cool = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(260, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var rainbow = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])();

/* harmony default export */ __webpack_exports__["b"] = (function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
});


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return magma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inferno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return plasma; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(14);


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sequential;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(12);


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_selection_index__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_transition_index__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return __WEBPACK_IMPORTED_MODULE_1__src_transition_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_active__ = __webpack_require__(232);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "active", function() { return __WEBPACK_IMPORTED_MODULE_2__src_active__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_interrupt__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return __WEBPACK_IMPORTED_MODULE_3__src_interrupt__["a"]; });






/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interrupt__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transition__ = __webpack_require__(205);




__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.interrupt = __WEBPACK_IMPORTED_MODULE_1__interrupt__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.transition = __WEBPACK_IMPORTED_MODULE_2__transition__["a" /* default */];


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interrupt__ = __webpack_require__(77);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  return this.each(function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__interrupt__["a" /* default */])(this, name);
  });
});


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dispatch__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dispatch__["a"]; });



/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["a"] = (dispatch);


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(37);


/* harmony default export */ __webpack_exports__["a"] = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(37);


/* unused harmony default export */ var _unused_webpack_default_export = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(__WEBPACK_IMPORTED_MODULE_0__timer__["b" /* now */])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ease__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_timer__ = __webpack_require__(78);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: __WEBPACK_IMPORTED_MODULE_2_d3_ease__["easeCubicInOut"]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["a" /* now */])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var id,
      timing;

  if (name instanceof __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */]) {
    id = name._id, name = name._name;
  } else {
    id = Object(__WEBPACK_IMPORTED_MODULE_0__transition_index__["c" /* newId */])(), (timing = defaultTiming).time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["a" /* now */])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(__WEBPACK_IMPORTED_MODULE_1__transition_schedule__["e" /* default */])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */](groups, this._parents, name, id);
});


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(79);





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["namespace"])(name), i = fullname === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["h" /* interpolateTransformSvg */] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["a" /* default */];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(__WEBPACK_IMPORTED_MODULE_2__tween__["b" /* tweenValue */])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value + ""));
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["namespace"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(2);


function delayFunction(id, value) {
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).delay;
});


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(2);


function durationFunction(id, value) {
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).duration;
});


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(2);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).ease;
});


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["matcher"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, this._parents, this._name, this._id);
});


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Transition */](merges, this._parents, this._name, this._id);
});


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(2);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? __WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */] : __WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selector"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["e" /* default */])(subgroup[i], name, id, i, subgroup, Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["f" /* get */])(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, this._parents, name, id);
});


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selectorAll"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["f" /* get */])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["e" /* default */])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, parents, name, id);
});


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


var Selection = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.constructor;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(79);





function styleRemove(name, interpolate) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name),
        value1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name),
        value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["g" /* interpolateTransformCss */] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["a" /* default */];
  return value == null ? this
          .styleTween(name, styleRemove(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction(name, i, Object(__WEBPACK_IMPORTED_MODULE_2__tween__["b" /* tweenValue */])(this, "style." + name, value))
          : styleConstant(name, i, value + ""), priority);
});


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tween__ = __webpack_require__(20);


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(Object(__WEBPACK_IMPORTED_MODULE_0__tween__["b" /* tweenValue */])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = Object(__WEBPACK_IMPORTED_MODULE_0__index__["c" /* newId */])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["f" /* get */])(node, id0);
        Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["e" /* default */])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Transition */](groups, this._parents, name, id1);
});


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
function linear(t) {
  return +t;
}


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quadIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = quadOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = quadInOut;
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = cubicOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sinIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = sinOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = expOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = expInOut;
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circleIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = circleOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = circleInOut;
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bounceIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = bounceOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(2);



var root = [null];

/* harmony default export */ __webpack_exports__["a"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > __WEBPACK_IMPORTED_MODULE_1__transition_schedule__["c" /* SCHEDULED */] && schedule.name === name) {
        return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_axis__ = __webpack_require__(234);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return __WEBPACK_IMPORTED_MODULE_0__src_axis__["b"]; });



/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = axisTop;
/* harmony export (immutable) */ __webpack_exports__["c"] = axisRight;
/* harmony export (immutable) */ __webpack_exports__["a"] = axisBottom;
/* harmony export (immutable) */ __webpack_exports__["b"] = axisLeft;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(236);



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return function(d) {
    return +scale(d);
  };
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "#000"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "#000")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "#000")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
            : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY0IDY0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiMxZjE5MTMiIGQ9Ik00NC4xNiwyNC41NzZjMC0yLjc1MiwyLjI0LTQuOTkyLDQuOTkyLTQuOTkyczQuOTkyLDIuMjQsNC45OTIsNC45OTJzLTIuMjQsNC45OTItNC45OTIsNC45OTINCglTNDQuMTYsMjcuMzI4LDQ0LjE2LDI0LjU3NnogTTI5LjMxMiw1Ny41MzZ2LTEuMzQ1SDE3LjZ2MS4zNDVIMjkuMzEyeiBNMzYuNDgsMjcuMzI4YzAuOTU5LDAuOTYsMi41NiwwLjk2LDMuNTIsMHMwLjk2LTIuNTYsMC0zLjUyDQoJTDIzLjQyNCw3LjE2OGMtMC45Ni0wLjk2LTIuNTYtMC45Ni0zLjUyLDBzLTAuOTYsMi41NiwwLDMuNTJMMzYuNDgsMjcuMzI4eiBNNTAuMzY4LDQwLjE5MWgxMS4xMzZjMS40MDgsMCwyLjQ5Ni0xLjE1MSwyLjQ5Ni0yLjQ5Ng0KCWMwLTEuMzQ0LTEuMTUyLTIuNDk1LTIuNDk2LTIuNDk1SDUxLjM5M2wtMi40MzMtMi40MzNoLTcuMTA0bDYuNzg1LDYuNzIxQzQ5LjA4OCwzOS45MzYsNDkuNjY0LDQwLjE5MSw1MC4zNjgsNDAuMTkxeiBNMjguOCwzOS4xMDQNCglsLTcuMjk2LDEyLjYwOGMtMC43MDQsMS4yMTYtMC4yNTYsMi43NTIsMC44OTYsMy40NTZjMS4yMTYsMC43MDQsMi43NTIsMC4yNTYsMy40NTYtMC44OTZsOC4yNTUtMTQuMzM2DQoJYzAuNTc2LTEuMDIzLDAuMzg1LTIuMzA0LTAuNDQ3LTMuMDcybC05LjYtOS42NjNjLTAuOTYtMC45Ni0yLjU2LTAuOTYtMy41Miwwcy0wLjk2LDIuNTYsMCwzLjUyTDI4LjgsMzkuMTA0eiBNNS44MjQsNDkuNjY0DQoJbDEuMTUyLTAuNjQxTDEuMTUyLDM4LjkxMkwwLDM5LjU1Mkw1LjgyNCw0OS42NjR6IE02Ljk3Niw0MC4wNjRjLTEuNDA4LDAtMi40OTYsMS4xNTEtMi40OTYsMi40OTZjMCwxLjQwNywxLjE1MiwyLjQ5NiwyLjQ5NiwyLjQ5Ng0KCWgxNS4yMzJjMS40MDgsMCwyLjQ5Ni0xLjE1MiwyLjQ5Ni0yLjQ5NnYtNS42MzNsLTQuOTkyLTQuOTkydjguMTI4bDAsMCIvPg0KPC9zdmc+DQo="

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/src/yeti.svg";

/***/ })
/******/ ]);