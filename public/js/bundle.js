(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var App = (function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			//Padding to stop content from hiding behind the static header
			var padding = {
				padding: '135px'
			};

			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(_Navbar2['default'], null),
				_react2['default'].createElement(
					'div',
					{ style: padding },
					_react2['default'].createElement(_reactRouter.RouteHandler, null)
				)
			);
		}
	}]);

	return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"./Navbar":5,"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Movie = require('./Movie');

var _Movie2 = _interopRequireDefault(_Movie);

var Home = (function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home() {
		_classCallCheck(this, Home);

		_get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container' },
				_react2['default'].createElement(_Movie2['default'], null)
			);
		}
	}]);

	return Home;
})(_react2['default'].Component);

exports['default'] = Home;
module.exports = exports['default'];

},{"./Movie":4,"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _storesMovieStore = require('../stores/MovieStore');

var _storesMovieStore2 = _interopRequireDefault(_storesMovieStore);

//import NavbarActions from '../actions/NavbarActions'

var Movies = (function (_React$Component) {
	_inherits(Movies, _React$Component);

	function Movies(props) {
		_classCallCheck(this, Movies);

		_get(Object.getPrototypeOf(Movies.prototype), 'constructor', this).call(this, props);
		this.state = _storesMovieStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(Movies, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesMovieStore2['default'].listen(this.onChange);
			//NavbarActions.navigate();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_storesMovieStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'render',
		value: function render() {
			var whiteBackground = {
				backgroundColor: 'white'
			};
			var movies = this.state.movies.map(function (movie) {
				return _react2['default'].createElement(
					'div',
					{ className: 'jumbotron' },
					_react2['default'].createElement(
						'div',
						{ className: 'row' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-lg-2' },
							_react2['default'].createElement('img', { src: movie.ImageLink })
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-lg-8' },
							_react2['default'].createElement(
								'h3',
								null,
								movie.Name
							),
							_react2['default'].createElement(
								'div',
								null,
								movie.Description
							),
							_react2['default'].createElement(
								'div',
								null,
								_react2['default'].createElement(
									'div',
									{ className: 'bs-component' },
									_react2['default'].createElement(
										'button',
										{ type: 'button', className: 'btn-small', 'data-toggle': 'tooltip', 'data-placement': 'bottom', title: '', 'data-original-title': 'Karthik' },
										'Like (1)'
									),
									_react2['default'].createElement(
										'button',
										{ type: 'button', className: 'btn-small', 'data-toggle': 'tooltip', 'data-placement': 'bottom', title: '', 'data-original-title': 'Danny, Mohan and 2 more' },
										'Dislike (4)'
									),
									_react2['default'].createElement(
										'button',
										{ type: 'button', className: 'btn-small', 'data-toggle': 'tooltip', 'data-placement': 'bottom', title: '', 'data-original-title': '' },
										'Recommended (0)'
									)
								)
							)
						)
					)
				);
			});
			return _react2['default'].createElement(
				'div',
				null,
				movies
			);
		}
	}]);

	return Movies;
})(_react2['default'].Component);

exports['default'] = Movies;
module.exports = exports['default'];

},{"../stores/MovieStore":9,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

//import NavbarStore from '../stores/NavbarStore'
//import NavbarActions from '../actions/NavbarActions'

var Navbar = (function (_React$Component) {
	_inherits(Navbar, _React$Component);

	function Navbar() {
		_classCallCheck(this, Navbar);

		_get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Navbar, [{
		key: 'render',

		/*constructor(props){
  	super(props);
  	this.state = NavbarStore.getState();
  	this.onChange = this.onChange.bind(this);
  }
  	componentDidMount(){
  	NavbarStore.listen(this.onChange);
  	//NavbarActions.navigate();
  }
  	componentWillUnmount(){
  	NavbarStore.unlisten(this.onChange);
  }
  	onChange(state){
  	this.setState(state);
  }*/

		value: function render() {
			var whiteBackground = {
				backgroundColor: 'white'
			};
			return _react2['default'].createElement(
				'div',
				{ className: 'navbar navbar-default navbar-fixed-top' },
				_react2['default'].createElement(
					'div',
					{ className: 'container' },
					_react2['default'].createElement(
						'div',
						null,
						_react2['default'].createElement(
							'a',
							{ href: '#', className: 'navbar-brand' },
							'MovieNet'
						),
						_react2['default'].createElement(
							'button',
							{ className: 'navbar-toggle', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbar-main' },
							_react2['default'].createElement('span', { className: 'icon-bar' }),
							_react2['default'].createElement('span', { className: 'icon-bar' }),
							_react2['default'].createElement('span', { className: 'icon-bar' })
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ style: whiteBackground },
					_react2['default'].createElement(
						'div',
						{ className: 'container' },
						_react2['default'].createElement(
							'div',
							{ className: 'bs-component' },
							_react2['default'].createElement(
								'div',
								{ className: 'row' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-lg-12' },
									_react2['default'].createElement(
										'ul',
										{ className: 'nav nav-pills navbar-left col-lg-2' },
										_react2['default'].createElement(
											'li',
											{ className: 'dropdown' },
											_react2['default'].createElement(
												'a',
												{ className: 'dropdown-toggle', 'data-toggle': 'dropdown', href: '#' },
												'Home ',
												_react2['default'].createElement('span', { className: 'caret' })
											),
											_react2['default'].createElement(
												'ul',
												{ className: 'dropdown-menu' },
												_react2['default'].createElement(
													'li',
													null,
													_react2['default'].createElement(
														'a',
														{ href: '#' },
														'Settings'
													)
												),
												_react2['default'].createElement(
													'li',
													null,
													_react2['default'].createElement(
														'a',
														{ href: '/People' },
														'People'
													)
												),
												_react2['default'].createElement('li', { className: 'divider' }),
												_react2['default'].createElement(
													'li',
													null,
													_react2['default'].createElement(
														'a',
														{ href: '#' },
														'Separated link'
													)
												)
											)
										)
									),
									_react2['default'].createElement(
										'form',
										{ className: 'navbar-left col-lg-9' },
										_react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: 'Search Movies' })
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Navbar;
})(_react2['default'].Component);

exports['default'] = Navbar;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var People = (function (_React$Component) {
	_inherits(People, _React$Component);

	function People() {
		_classCallCheck(this, People);

		_get(Object.getPrototypeOf(People.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(People, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				' TODO '
			);
		}
	}]);

	return People;
})(_react2['default'].Component);

exports['default'] = People;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
	_react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":8,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsPeople = require('./components/People');

var _componentsPeople2 = _interopRequireDefault(_componentsPeople);

exports['default'] = _react2['default'].createElement(
	_reactRouter.Route,
	{ handler: _componentsApp2['default'] },
	_react2['default'].createElement(_reactRouter.Route, { path: '/Home', handler: _componentsHome2['default'] }),
	_react2['default'].createElement(_reactRouter.Route, { path: '/People', handler: _componentsPeople2['default'] })
);
module.exports = exports['default'];

},{"./components/App":2,"./components/Home":3,"./components/People":6,"react":"react","react-router":"react-router"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

//import MovieActions from '../actions/MovieActions';

var MovieStore = function MovieStore() {
  _classCallCheck(this, MovieStore);

  //this.bindActions(MovieActions);
  this.movies = [{
    'Name': 'Mission: Impossible - Rogue Nation (2015)',
    'Description': 'Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.',
    'ImageLink': 'img/mi5.jpg'
  }, {
    'Name': 'Stonewall (2015)',
    'Description': 'A young man\'s political awakening and coming of age during the days and weeks leading up to the Stonewall Riots.',
    'ImageLink': 'img/stonewall.jpg'
  }];
};

exports['default'] = _alt2['default'].createStore(MovieStore);
module.exports = exports['default'];

},{"../alt":1}]},{},[7]);
