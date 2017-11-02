import React, {Component} from 'react'
import todoApi from './todoAPI'

class Create extends Component {
	constructor () {
		super()
		this.state = {
			value: ''
		}
	}

    handleChange = (e) => {
    	console.log('escrivitn', e.target.value)
		this.setState({
			value: e.target.value
		})
    }

    handleSubmit = (e) => {
    	e.preventDefault()
    	console.log('enviat', this.state.value)
		todoApi.createTodos(this.state.value)
    }
	
	 render() {
        return <div className="todolist not-done">
            <h1>Todos</h1>
            <form onSubmit={this.handleSubmit}>
            	<input onChange={this.handleChange} type="text" className="form-control add-todo" placeholder="Add todo" />
            </form>
            <hr />
            <div className="todo-footer">
            </div>
        </div>
    }
}

export default Create