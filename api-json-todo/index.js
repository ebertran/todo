require('dotenv').config()

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json())

//const todoService = new(require('./services/TodoService'))

const router = express.Router()

let todoItems = []

app.get('/list-todos', (req, res) => {

   res.json({
        status: 'OK',
        data: todoItems
    })
})

app.post('/create-todos', (req, res) => {
	const { todo, state } = req.body
	const item = {
		id: new Date().getTime(),
		name: todo,
		done: state || false
	}

	todoItems.push(item)

	res.json({
        status: 'OK',
        message:'Todo created successfully',
        data: item
    })

    //res.redirect('/')
})

app.put('/change-todos/:id', (req, res) => {
	const id = req.params.id
	const { todo, done } = req.body

	todoItems = todoItems.map(function(element) {
		if (element.id == id) {
			console.log('entra')
			element.name = todo
			element.done = done || true
		}

		return element
	})
	
	console.log(todoItems)

	res.json({
        status: 'OK',
        message:'Todo updated successfully',
        id
    })

	//res.redirect('/')
})

app.delete('/delete/:id', (req, res) => {
	for (let i = 0; i < todoItems.length; i++) {
		if (todoItems[i].id == req.params.id) {
			todoItems.splice(i, 1)

			break
		}
	}

	res.json({
        status: 'OK',
        message:'Todo deleted successfully',
    })

	//res.redirect('/')
})

console.log(`starting Web on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Web is up!!!!!!!!!!!!!'))

process.on('SIGINT', () => {
	console.log('\nstopping Web...')

	process.exit()
})