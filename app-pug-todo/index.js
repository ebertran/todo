require('dotenv').config()

const express = require('express')

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'))

const todoItems = []

app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.render('index', { todoItems })
})

app.post('/', (req, res) => {
	const { todo } = req.body
	const item = {
		id: new Date().getTime(),
		name: todo,
		done: false
	}
	todoItems.push(item)
	
	res.redirect('/')
})

app.get('/change/:id', (req, res) => {
	const id = req.params.id
	todoItems.forEach(function(element) {
		if (element.id == id) {
			element.done = true
		}
		console.log(todoItems)
	})

	res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
	for (let i = 0; i < todoItems.length; i++) {
		if (todoItems[i].id == req.params.id) {
			todoItems.splice(i, 1)

			break
		}
	}

	res.redirect('/')
})

console.log(`starting Web on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Web is up'))

process.on('SIGINT', () => {
	console.log('\nstopping Web...')

	process.exit()
})