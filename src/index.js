import { h, Component } from 'preact';

export default class Foobar extends Component {
	constructor(props) {
		super(props);
		this.state = { foo:123 };
	}

	componentDidMount() {
		//
	}

	componentWillReceiveProps(props) {
		//
	}

	shouldComponentUpdate(props, state) {
		const now = this.state;
		//
	}

	componentDidUpdate(props, state) {
		//
	}

	render(props, state) {
		return <div>{ state.foo }</div>
	}
}
