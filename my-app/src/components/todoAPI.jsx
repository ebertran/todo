import axios from 'axios'

const todoApi = {
	baseUrl: 'http://localhost:3001',

	listTodos: function() {
		return axios.get(this.baseUrl + '/list-todos')
		.then(function({data}){
			return data.data
		})
	},

	createTodos: function(todo) {
		return axios.post(this.baseUrl + '/create-todos', { todo })
		.then(function({data}){
			return data.data
		})
	},

	changeTodos: function(id, todo, state) {
		return axios.put(this.baseUrl + '/change-todos/' + id)
		.then(function({data}){
			return data.data
		})
	},

	deleteTodos: function(id) {
		return axios.delete(this.baseUrl + '/delete-todos' + id)
		.then(function({data}){
			return data.data
		})
	}

}

export default todoApi

