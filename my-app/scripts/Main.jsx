const {Components} = React

const {

	Link

	} = ReactRouterDOM

class List extends Component {
	constructor(){
		super()

		this.state = {
			todos: []
		}
	}

	listTodos() {

		todoApi.listTodos()
			.then(todos => {
				console.log(todos)
				this.setSate({todos})
			})
				.catch(function (err) {
				console.error(err)

			})
	}

	render() {

		return this.state.todos.length ? <ul>
			{
				this.state.todos.map(function (todo){
				return<li key={todo.id}>
					<Link to={`/change-todos/${todo.id}`}>{todo.name}</Link>
					</li>
				})
			}
		</ul> : null
	}
}

export default Main


