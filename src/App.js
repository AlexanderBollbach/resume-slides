import React, { Component } from "react";

import { TransitionGroup, Transition } from "react-transition-group";

class Test extends Component {
	componentWillAppear(cb) {
		console.log("componentWillAppear");
		cb();
	}

	render() {
		return <div> test </div>;
	}
}

class App extends Component {
	constructor() {
		super();

		this.update = this.update.bind(this);

		this.state = {
			on: false
		};
	}

	update() {
		this.setState({
			on: !this.state.on
		});
	}

	render() {
		return (
			<div>
				<TransitionGroup>{this.state.on && <Test />}</TransitionGroup>
				<button onClick={this.update}>tap</button>
			</div>
		);
	}
}

export default App;
