'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var GalleryPicker = function GalleryPicker(props) {
    var _React$useState = _react2.default.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        images = _React$useState2[0],
        setImages = _React$useState2[1];

    var imagesRecived = props.imagesRecived,
        returnImages = props.returnImages;


    _react2.default.useEffect(function () {
        var imageList = [];
        imagesRecived.forEach(function (el, i) {
            imageList.push({ id: i, src: el.url, selected: false, title: el.name });
        });
        setImages(imageList);
    }, []);

    _react2.default.useEffect(function () {
        returnImages(images);
    }, [images]);

    var onImageClick = function onImageClick(id) {
        var imageList = [].concat(_toConsumableArray(images));
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = imageList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var img = _step.value;

                if (img.id === id) {
                    img.selected = !img.selected;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        setImages(imageList);
    };

    return _react2.default.createElement(
        'div',
        { className: 'container' },
        images.map(function (img, i) {
            return _react2.default.createElement('img', { 'data-tip': img.title, 'data-for': "images", src: img.src, alt: img.title, key: i, className: img.selected ? "selected" : "imgPicker", onClick: function onClick() {
                    return onImageClick(img.id);
                } });
        })
    );
};
GalleryPicker.propTypes = {
    imagesRecived: _propTypes2.default.array.isRequired,
    returnImages: _propTypes2.default.func.isRequired
};

exports.default = GalleryPicker;