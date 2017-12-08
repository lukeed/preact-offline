import { h, Component } from 'preact';
import { check, watch } from 'is-offline';

export default function () {
	function Offline() {
		Component.call(this);
		this.update = offline => this.setState({ offline });
	}

	(Offline.prototype = new Component).constructor = Offline;

	Offline.prototype.componentDidMount = function () {
		check().then(this.update);
		this.unwatch = watch(this.update);
	}

	Offline.prototype.componentWillUnmount = function () {
		this.unwatch();
	}

	Offline.prototype.render = (props, state) => state.offline && (
		h('div', Object.assign({}, props), props.children || 'No connection')
	);

	return Offline;
}
