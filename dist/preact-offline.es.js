import { Component, h } from 'preact';
import { check, watch } from 'is-offline';

var index = function () {
	function Offline() {
		var this$1 = this;

		Component.call(this);
		this.update = function (offline) { return this$1.setState({ offline: offline }); };
	}

	(Offline.prototype = new Component).constructor = Offline;

	Offline.prototype.componentDidMount = function () {
		check().then(this.update);
		this.unwatch = watch(this.update);
	};

	Offline.prototype.componentWillUnmount = function () {
		this.unwatch();
	};

	Offline.prototype.render = function (props, state) { return state.offline && (
		h('div', Object.assign({}, props), props.children || 'No connection')
	); };

	return Offline;
};

export default index;
