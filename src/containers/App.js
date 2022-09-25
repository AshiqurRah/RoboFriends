import React, {useEffect, useState} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'



function App() {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		robots: [],
	// 		searchfield: ''
	// 	}
	// }

	// include the state, and the function that changes the state
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchField] = useState('');
	const [count, setCount] = useState(0);

	// Anytime we make our own method on a component other than
	// constructor and render (and the other lifecycle methods), 
	// we use arrow function
	const onSearchChange = (event) => {
		console.log(event.target.value);
		setSearchField(event.target.value)
		// anytime we wanna change state, we use the above syntax

		// console.log(event.target.value)
		// prints the value of the input: the actual input
	}

	// componentDidMount() {
	// 	console.log('didmount')
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 		.then(response=> response.json())
	// 		.then(users => this.setState({ robots: users}));
	// }

	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => setRobots(users));
			console.log('in useEffect', count);
	}, [count])  // only run if count changes

	// when you add count in the [], every time i click, useEffect gets run
	// [] is a shortcut for component did mount
	// only use useEffect only when the second parameter changes


	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	console.log('out' , count)
	return !robots.length ?
		<h1>Loading</h1> :
		<div className = 'tc'>
		<h1 className='f1'>RoboFriends</h1>
		<SearchBox searchChange= {onSearchChange}/>
		<Scroll>
			<ErrorBoundry>
				<CardList robots={filteredRobots}/>
			</ErrorBoundry>
		</Scroll>
	</div>
}

export default App;