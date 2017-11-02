import React, { Component } from 'react'

//	import List from './components/List.jsx'
import Create from './components/Create.jsx'

class App extends Component {

	constructor () {
		super()
		this.state = {
			todos: [],
			value: '',
			done: undefined
		}
	}

	render() {
		return ( 
			<div className = "App">
				<Create />
			</div>
		);
	}
}

export default App