import React from 'react'



import Transition from 'react-transition-group/Transition';

// const duration = 300;

// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
// }

// const transitionStyles = {
//   entering: { opacity: 0 },
//   entered:  { opacity: 1 },
// };

// const Slide = ({ in: inProp }) => (
//   <Transition in={inProp} timeout={duration}>
//     {(state) => (
//       <div style={{
//         ...defaultStyle,
//         ...transitionStyles[state]
//       }}>
//         I'm A slide
//       </div>
//     )}
//   </Transition>
// );







class Slide extends React.Component {
	
	componentWillAppear(callback) {
		console.log("componentWillAppear");
	}

	render() {
		const { title } = this.props;

		return <div style={{ backgroundColor: "red" }}>{title}</div>;
	}
}

export default Slide