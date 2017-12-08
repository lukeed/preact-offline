'use strict';

var preact = require('preact');
var isOffline = require('is-offline');

var index = function () {
	function Offline() {
		var this$1 = this;

		preact.Component.call(this);
		this.update = function (offline) { return this$1.setState({ offline: offline }); };
	}

	(Offline.prototype = new preact.Component).constructor = Offline;

	Offline.prototype.componentDidMount = function () {
		isOffline.check().then(this.update);
		this.unwatch = isOffline.watch(this.update);
	};

	Offline.prototype.componentWillUnmount = function () {
		this.unwatch();
	};

	Offline.prototype.render = function (props, state) { return state.offline && (
		preact.h('div', Object.assign({}, props), props.children || 'No connection')
	); };

	return Offline;
};

module.exports = index;
