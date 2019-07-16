'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimelineItem = function TimelineItem(_ref) {
    var data = _ref.data;

    return _react2.default.createElement(
        'div',
        { className: 'timeline-item' },
        _react2.default.createElement(
            'div',
            { className: 'timeline-item-content' },
            _react2.default.createElement(
                'span',
                { className: 'tag', style: { background: data.category.color } },
                data.category.tag
            ),
            _react2.default.createElement(
                'time',
                null,
                data.date
            ),
            _react2.default.createElement(
                'p',
                null,
                data.text
            ),
            _react2.default.createElement(
                'label',
                { className: 'label-info' },
                data.author
            ),
            _react2.default.createElement('span', { className: 'circle' })
        )
    );
};

var SimpleTimeLine = function SimpleTimeLine(props) {
    var timelineData = props.timelineData;

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        timelineData.length > 0 && _react2.default.createElement(
            'div',
            { className: 'timeline-container' },
            timelineData.map(function (data, idx) {
                return _react2.default.createElement(TimelineItem, { data: data, key: idx });
            })
        )
    );
};

SimpleTimeLine.propTypes = {
    timelineData: _propTypes2.default.array.isRequired
};

exports.default = SimpleTimeLine;