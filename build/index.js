'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Boot = require('states/Boot');

var _Boot2 = _interopRequireDefault(_Boot);

var _Preloader = require('states/Preloader');

var _Preloader2 = _interopRequireDefault(_Preloader);

var _MainMenu = require('states/MainMenu');

var _MainMenu2 = _interopRequireDefault(_MainMenu);

var _Game = require('states/Game');

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Playground = function (_Phaser$Game) {
    _inherits(Playground, _Phaser$Game);

    function Playground(language) {
        _classCallCheck(this, Playground);

        var _this = _possibleConstructorReturn(this, (Playground.__proto__ || Object.getPrototypeOf(Playground)).call(this, window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO));

        _this.language = language;

        _this.state.add('Boot', _Boot2.default, false);
        _this.state.add('Preloader', _Preloader2.default, false);
        _this.state.add('MainMenu', _MainMenu2.default, false);
        _this.state.add('Game', _Game2.default, false);

        _this.state.start('Boot');
        return _this;
    }

    _createClass(Playground, [{
        key: 'getTranslation',
        value: function getTranslation(key, data) {
            if (this.translations[key]) {
                data = data ? data : {};
                var translations = this.translations;
                return this.translations[key].replace(/{\w+}/g, function (placeholder) {
                    if (data[placeholder]) {
                        return data[placeholder];
                    } else {
                        console.warn(placeholder + ' not passed for ' + translations[key]);
                        return placeholder;
                    }
                    return data[placeholder] || placeholder;
                });
            } else {
                console.error("Translation for key " + key + " doesn't exists");
                return key;
            }
        }
    }]);

    return Playground;
}(Phaser.Game);

new Playground('pl');
