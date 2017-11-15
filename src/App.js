import React, { Component } from "react";
import "./App.css";
import { TransitionGroup, Transition } from "react-transition-group";

var uidCounter = 1;

class Element extends Component {
	
	componentDidMount() {
		console.log(this.props.name);
		console.log("componentDidMount");
	}

	componentWillUnmount() {
		console.log(this.props.name);
		console.log("componentWillUnmount");
	}

	render() {
		return (
			<Transition unmountOnExit={true} in={this.props.in} timeout={0}>
				{state => {
					console.log(this.props.name);
					console.log(state);
					return (
						<div className={`Test ${state}`}>{this.props.name}</div>
					);
				}}
			</Transition>
		);
	}
}

class App extends Component {
	constructor() {
		super();

		this.add = this.add.bind(this);
		this.delete = this.delete.bind(this);

		this.state = { elements: [] };
	}

	add() {
		this.setState({
			elements: this.state.elements.concat([{ name: uidCounter }])
		});

		uidCounter += 1;
	}

	delete() {
		this.state.elements.pop();

		this.setState({
			elements: this.state.elements
		});
	}

	renderElements() {
		return;
	}

	render() {
		console.log(this.state.elements);

		return (
			<div>
				<TransitionGroup>
					{this.state.elements.map(element => (
						<Element
							
							key={element.name}
							name={element.name}
						/>
					))}
				</TransitionGroup>

				<button onClick={this.add}>tap</button>
				<button onClick={this.delete}>delete</button>
			</div>
		);
	}
}

export default App;
