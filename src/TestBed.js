import React from "react";

import { TransitionGroup } from "react-transition-group";


class Test extends React.Component {

	componentWillEnter() {
		console.log('componentWillEnter')
	}
	componentDidEnter() {
		console.log('componentDidEnter')
	}
	componentWillAppear(cb) {
		console.log("componentWillAppear");
	}

	render() {
		return <div> test </div>;
	}
}

class TestBed extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			test: false
		}

		this.update = this.update.bind(this)
	}
	
	update() {

		this.setState({
			test: !this.state.test
		})
	}


	render() {

		console.log(this.state)
		
		return (
			<div>
				<TransitionGroup component="div">
					{this.state.test && <Test key={"test"}/>}
				</TransitionGroup>

				<button onClick={this.update}>next</button>
			</div>
		);
	}
}

export default TestBed;
