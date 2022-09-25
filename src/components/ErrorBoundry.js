import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	// new lifecycle method
	// like a try and catch block
	componentDidCatch(error, info) {
		this.setState({hasError: true});
	} 

	render() {
		if(this.state.hasError) {
			return <h1>Oooops. That is not good</h1>
		}
		return this.props.children;
	}
}


export default ErrorBoundry