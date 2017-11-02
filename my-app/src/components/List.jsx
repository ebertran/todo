import React, {Component} from 'react'

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
                return<li key={todo.id}>todo.name</li>
                })
            }
        </ul> : null
    }
}

export default List


